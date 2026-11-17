/* Traçado da pista: polígono com cantos arredondados (raio por curva), elevação suave,
   amostragem uniforme e consultas de posição. Sem dependência de Three.js. */

const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

export function buildPath(points, opt = {}) {
  const n = points.length, P = points.map(p => ({ x: p[0], z: p[1], r: p[2] || 12, y: p[3] }));
  const dense = [];
  // arcos de cada canto
  const arcs = P.map((p, i) => {
    const a = P[(i - 1 + n) % n], b = P[(i + 1) % n];
    let d0x = p.x - a.x, d0z = p.z - a.z, l0 = Math.hypot(d0x, d0z); d0x /= l0; d0z /= l0;
    let d1x = b.x - p.x, d1z = b.z - p.z, l1 = Math.hypot(d1x, d1z); d1x /= l1; d1z /= l1;
    const dot = clamp(d0x * d1x + d0z * d1z, -1, 1), th = Math.acos(dot), cr = d0x * d1z - d0z * d1x;
    if (th < 1e-3) return { a: { x: p.x, z: p.z }, b: { x: p.x, z: p.z }, straight: true, y: p.y };
    let tl = p.r * Math.tan(th / 2);
    tl = Math.min(tl, 0.49 * l0, 0.49 * l1);
    const r = tl / Math.tan(th / 2), s = Math.sign(cr);
    const A = { x: p.x - d0x * tl, z: p.z - d0z * tl }, Bp = { x: p.x + d1x * tl, z: p.z + d1z * tl };
    const C = { x: A.x - d0z * r * s, z: A.z + d0x * r * s };
    return { a: A, b: Bp, c: C, r, s, th, y: p.y };
  });
  for (let i = 0; i < n; i++) {
    const arc = arcs[i], next = arcs[(i + 1) % n];
    if (!arc.straight) {
      const a0 = Math.atan2(arc.a.z - arc.c.z, arc.a.x - arc.c.x), steps = Math.max(2, Math.ceil(arc.r * arc.th / 0.5));
      for (let k = 0; k <= steps; k++) {
        const ang = a0 + arc.s * arc.th * k / steps;
        dense.push({ x: arc.c.x + Math.cos(ang) * arc.r, z: arc.c.z + Math.sin(ang) * arc.r, apex: k === (steps >> 1) ? i : -1 });
      }
    } else dense.push({ x: arc.a.x, z: arc.a.z, apex: i });
    const L = Math.hypot(next.a.x - arc.b.x, next.a.z - arc.b.z), st = Math.max(1, Math.ceil(L / 0.5));
    for (let k = 1; k < st; k++) dense.push({ x: arc.b.x + (next.a.x - arc.b.x) * k / st, z: arc.b.z + (next.a.z - arc.b.z) * k / st, apex: -1 });
  }
  const m = dense.length, acc = [0];
  for (let i = 1; i <= m; i++) { const p = dense[i % m], q = dense[i - 1]; acc.push(acc[i - 1] + Math.hypot(p.x - q.x, p.z - q.z)); }
  const len = acc[m], step = opt.step || 1.0, N = Math.round(len / step), pts = [];
  const apexS = [];
  dense.forEach((d, i) => { if (d.apex >= 0 && P[d.apex].y != null) apexS.push({ s: acc[i], y: P[d.apex].y }); });
  let j = 0;
  for (let i = 0; i < N; i++) {
    const d = i / N * len;
    while (acc[j + 1] < d) j++;
    const f = (d - acc[j]) / (acc[j + 1] - acc[j] || 1), p = dense[j], q = dense[(j + 1) % m];
    pts.push({ x: p.x + (q.x - p.x) * f, z: p.z + (q.z - p.z) * f, s: d, y: 0 });
  }
  // elevação: interpolação linear entre os ápices e suavização
  if (apexS.length) {
    apexS.sort((a, b) => a.s - b.s);
    const K = apexS.length;
    for (const p of pts) {
      let k = 0; while (k < K && apexS[k].s <= p.s) k++;
      const A = apexS[(k - 1 + K) % K], B = apexS[k % K];
      let sa = A.s, sb = B.s; if (sb <= sa) sb += len; let s = p.s; if (s < sa) s += len;
      p.y = A.y + (B.y - A.y) * clamp((s - sa) / (sb - sa || 1), 0, 1);
    }
    const win = Math.round((opt.smooth || 30) / step);
    for (let pass = 0; pass < 3; pass++) {
      const ys = pts.map(p => p.y), out = [];
      for (let i = 0; i < N; i++) { let sum = 0; for (let k = -win; k <= win; k++) sum += ys[((i + k) % N + N) % N]; out.push(sum / (2 * win + 1)); }
      pts.forEach((p, i) => p.y = out[i]);
    }
  }
  // limita a inclinação máxima comprimindo a elevação
  const maxG = opt.maxGrade || 0.09;
  for (let it = 0; it < 30; it++) {
    let g = 0; for (let i = 0; i < N; i++) g = Math.max(g, Math.abs(pts[(i + 1) % N].y - pts[i].y) / step);
    if (g <= maxG) break;
    const ym = pts.reduce((a, p) => a + p.y, 0) / N; for (const p of pts) p.y = ym + (p.y - ym) * 0.9;
  }
  const ymin = Math.min(...pts.map(p => p.y)); for (const p of pts) p.y -= ymin;
  let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
  for (let i = 0; i < N; i++) {
    const a = pts[(i - 1 + N) % N], b = pts[(i + 1) % N], p = pts[i];
    const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
    p.tx = dx / l; p.tz = dz / l; p.nx = p.tz; p.nz = -p.tx;
    p.grade = (b.y - a.y) / l;
    // curvatura assinada
    const c = pts[(i + 3) % N], o = pts[(i - 3 + N) % N];
    const h1 = Math.atan2(c.x - p.x, c.z - p.z), h0 = Math.atan2(p.x - o.x, p.z - o.z);
    let dh = h1 - h0; while (dh > Math.PI) dh -= Math.PI * 2; while (dh < -Math.PI) dh += Math.PI * 2;
    p.k = dh / (6 * step);
    x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); z0 = Math.min(z0, p.z); z1 = Math.max(z1, p.z);
  }
  const w = opt.width || 10, s0 = pts[0];
  return {
    pts, len, N, step, halfW: w / 2, shoulder: opt.shoulder ?? 1.2, limit: w / 2 + (opt.shoulder ?? 1.2),
    start: { x: s0.x, z: s0.z, y: s0.y, h: Math.atan2(s0.tx, s0.tz) }, bounds: { x0, x1, z0, z1 }
  };
}

export function arenaTrack(hx, hz) {
  return { arena: { hx, hz }, pts: [], len: 0, N: 0, halfW: 0, limit: 0, start: { x: 0, z: -hz * 0.55, y: 0, h: Math.PI / 2 }, bounds: { x0: -hx, x1: hx, z0: -hz, z1: hz } };
}

/* ponto mais próximo da pista, com deslocamento lateral e altura interpolada */
export function locate(trk, x, z, hint) {
  if (trk.arena) return { i: -1, lat: 0, y: 0, p: null, grade: 0 };
  const pts = trk.pts, N = trk.N;
  let best = -1, bd = 1e18;
  if (hint >= 0) for (let k = -30; k <= 30; k++) {
    const i = ((hint + k) % N + N) % N, p = pts[i], d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z);
    if (d < bd) { bd = d; best = i; }
  }
  if (best < 0 || bd > 400) for (let i = 0; i < N; i++) {
    const p = pts[i], d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z);
    if (d < bd) { bd = d; best = i; }
  }
  const p = pts[best], along = (x - p.x) * p.tx + (z - p.z) * p.tz;
  const q = along >= 0 ? pts[(best + 1) % N] : pts[(best - 1 + N) % N], f = Math.min(1, Math.abs(along) / trk.step);
  return { i: best, lat: (x - p.x) * p.nx + (z - p.z) * p.nz, y: p.y + (q.y - p.y) * f, p, grade: p.grade };
}

/* campo de distância até a pista numa grade (para terreno e cenário) */
export function distanceField(trk, cell, margin) {
  const B = trk.bounds, x0 = B.x0 - margin, z0 = B.z0 - margin;
  const nx = Math.ceil((B.x1 - B.x0 + 2 * margin) / cell) + 1, nz = Math.ceil((B.z1 - B.z0 + 2 * margin) / cell) + 1;
  const dist = new Float32Array(nx * nz).fill(1e9), idx = new Int32Array(nx * nz).fill(-1), side = new Int8Array(nx * nz);
  const P = trk.pts, R = Math.ceil(Math.min(margin, 24) / cell);
  // exato perto da pista
  for (let i = 0; i < trk.N; i++) {
    const p = P[i], cx = Math.round((p.x - x0) / cell), cz = Math.round((p.z - z0) / cell);
    for (let dz = -R; dz <= R; dz++) for (let dx = -R; dx <= R; dx++) {
      const gx = cx + dx, gz = cz + dz; if (gx < 0 || gz < 0 || gx >= nx || gz >= nz) continue;
      const wx = x0 + gx * cell, wz = z0 + gz * cell, d = (wx - p.x) * (wx - p.x) + (wz - p.z) * (wz - p.z), k = gz * nx + gx;
      if (d < dist[k]) { dist[k] = d; idx[k] = i; }
    }
  }
  // propagação do ponto mais próximo para o resto da grade (duas passadas)
  const tryN = (k, gx, gz, kn) => {
    const i = idx[kn]; if (i < 0) return;
    const p = P[i], wx = x0 + gx * cell, wz = z0 + gz * cell, d = (wx - p.x) * (wx - p.x) + (wz - p.z) * (wz - p.z);
    if (d < dist[k]) { dist[k] = d; idx[k] = i; }
  };
  for (let pass = 0; pass < 2; pass++) {
    for (let gz = 0; gz < nz; gz++) for (let gx = 0; gx < nx; gx++) {
      const k = gz * nx + gx;
      if (gx > 0) tryN(k, gx, gz, k - 1); if (gz > 0) { tryN(k, gx, gz, k - nx); if (gx > 0) tryN(k, gx, gz, k - nx - 1); if (gx < nx - 1) tryN(k, gx, gz, k - nx + 1); }
    }
    for (let gz = nz - 1; gz >= 0; gz--) for (let gx = nx - 1; gx >= 0; gx--) {
      const k = gz * nx + gx;
      if (gx < nx - 1) tryN(k, gx, gz, k + 1); if (gz < nz - 1) { tryN(k, gx, gz, k + nx); if (gx < nx - 1) tryN(k, gx, gz, k + nx + 1); if (gx > 0) tryN(k, gx, gz, k + nx - 1); }
    }
  }
  for (let k = 0; k < nx * nz; k++) {
    const i = idx[k]; if (i < 0) continue;
    dist[k] = Math.sqrt(dist[k]);
    const p = P[i], gx = k % nx, gz = (k / nx) | 0;
    side[k] = ((x0 + gx * cell - p.x) * p.nx + (z0 + gz * cell - p.z) * p.nz) >= 0 ? 1 : -1;
  }
  const at = (x, z) => {
    const gx = clamp(Math.round((x - x0) / cell), 0, nx - 1), gz = clamp(Math.round((z - z0) / cell), 0, nz - 1), k = gz * nx + gx;
    return { d: dist[k], i: idx[k], side: side[k] };
  };
  return { x0, z0, nx, nz, cell, dist, idx, side, at };
}

/* sinal: +1 dentro do laço, -1 fora (regra do número de voltas) */
export function insideLoop(trk, x, z) {
  let wn = 0; const P = trk.pts, N = trk.N;
  for (let i = 0; i < N; i += 2) {
    const a = P[i], b = P[(i + 2) % N];
    if (a.z <= z) { if (b.z > z && (b.x - a.x) * (z - a.z) - (x - a.x) * (b.z - a.z) > 0) wn++; }
    else if (b.z <= z && (b.x - a.x) * (z - a.z) - (x - a.x) * (b.z - a.z) < 0) wn--;
  }
  return wn !== 0;
}
