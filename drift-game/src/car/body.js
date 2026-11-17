/* Carroceria procedural: superfície contínua por seções, recorte das caixas de roda,
   cabine com vidros e colunas, e textura de vincos das portas e do capô. */
import * as THREE from 'three';

const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const smooth = (a, b, x) => { x = clamp((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x); };

/* interpolação cúbica monotônica (sem ondulações entre os pontos) */
export function mono(keys) {
  const n = keys.length, xs = keys.map(k => k[0]), ys = keys.map(k => k[1]), d = [], m = [];
  for (let i = 0; i < n - 1; i++) d[i] = (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]);
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) { m[i] = m[i + 1] = 0; continue; }
    const a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b;
    if (s > 9) { const tau = 3 / Math.sqrt(s); m[i] = tau * a * d[i]; m[i + 1] = tau * b * d[i]; }
  }
  return t => {
    if (t <= xs[0]) return ys[0];
    if (t >= xs[n - 1]) return ys[n - 1];
    let i = 0; while (t > xs[i + 1]) i++;
    const h = xs[i + 1] - xs[i], u = (t - xs[i]) / h, u2 = u * u, u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * ys[i] + (u3 - 2 * u2 + u) * h * m[i] + (-2 * u3 + 3 * u2) * ys[i + 1] + (u3 - u2) * h * m[i + 1];
  };
}

function catmull(pts, per) {
  const out = [], n = pts.length, P = i => pts[clamp(i, 0, n - 1)];
  for (let i = 0; i < n - 1; i++) {
    const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
    for (let k = 0; k < per; k++) {
      const u = k / per, u2 = u * u, u3 = u2 * u, f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u2 + (-a + 3 * b - 3 * c + d) * u3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  out.push(pts[n - 1].slice());
  return out;
}

/* Funções de forma do carro, com o kit aplicado */
export function shapeOf(spec, kit) {
  const L = spec.L, hl = L / 2, zF = hl - spec.fo, zR = zF - spec.wb;
  const wide = kit === 'wide' ? 0.05 : kit === 'widepro' ? 0.085 : 0;
  const deck = mono(spec.deck), bottom0 = mono(spec.bottom);
  const lower = kit === 'stock' ? 0 : 0.025;
  const bottom = t => bottom0(t) - lower * (1 - smooth(0.85, 1, Math.abs(t)) * 0.4);
  const Ra = spec.R + 0.045 + wide * 0.35;
  const bump = (z, zc, w) => Math.exp(-((z - zc) * (z - zc)) / (w * w));
  const hwRaw = z => spec.hw + (spec.flareF + wide) * bump(z, zF, 0.62) + (spec.flareR + wide * 1.1) * bump(z, zR, 0.66);
  const hwPlan = z => {
    let h = hwRaw(z);
    const nf = spec.noseR, nr = spec.tailR;
    if (z > hl - nf) { const u = (z - (hl - nf)) / nf; h -= nf * (1 - Math.sqrt(Math.max(0, 1 - u * u))); }
    if (z < -hl + nr) { const u = ((-hl + nr) - z) / nr; h -= nr * (1 - Math.sqrt(Math.max(0, 1 - u * u))); }
    return h;
  };
  const tOf = z => z / hl;
  const deckZ = z => {
    let y = deck(tOf(z));
    const rf = spec.rvF, rr = spec.rvR;
    if (z > hl - rf * 1.2) { const u = clamp((z - (hl - rf * 1.2)) / (rf * 1.2), 0, 1); y -= rf * (1 - Math.sqrt(1 - u * u)) * 0.9; }
    if (z < -hl + rr * 1.2) { const u = clamp(((-hl + rr * 1.2) - z) / (rr * 1.2), 0, 1); y -= rr * (1 - Math.sqrt(1 - u * u)) * 0.9; }
    return y;
  };
  const bottomZ = z => {
    let y = bottom(tOf(z));
    if (z > hl - 0.06) y += (z - (hl - 0.06)) * 0.9;
    if (z < -hl + 0.06) y += ((-hl + 0.06) - z) * 0.9;
    return y;
  };
  const c = spec.cab, zA = c.tA * hl, zRf = c.tRf * hl, zRr = c.tRr * hl, zC = c.tC * hl;
  const dA = deckZ(zA), dC = deckZ(zC), zm = (zRf + zRr) / 2, half = (zRf - zRr) / 2;
  const roofZ = z => {
    if (z >= zA || z <= zC) return null;
    if (z > zRf) { const p = (zA - z) / (zA - zRf); return dA + (c.roof - dA - c.arch) * Math.pow(Math.sin(p * Math.PI / 2), c.ws); }
    if (z < zRr) { const p = (z - zC) / (zRr - zC); return dC + (c.roof - dC - c.arch) * Math.pow(Math.sin(p * Math.PI / 2), c.bk); }
    const u = (z - zm) / half;
    return c.roof - c.arch * u * u;
  };
  return { L, hl, zF, zR, Ra, wide, hwPlan, deckZ, bottomZ, roofZ, zA, zRf, zRr, zC, tOf };
}

/* ---------- textura de vincos (portas, capô, tampa) ---------- */
function panelTexture(spec, S, vOf) {
  const W = 2048, H = 512, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, W, H);
  const X = z => (z + S.hl) / S.L * W, Y = v => v * H;
  // oclusão de ambiente falsa: parte de baixo e volta das caixas de roda mais escuras
  const lg = g.createLinearGradient(0, Y(0.1), 0, Y(0.36));
  lg.addColorStop(0, 'rgba(0,0,0,.5)'); lg.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = lg; g.fillRect(0, 0, W, Y(0.36));
  for (const zc of [S.zF, S.zR]) {
    g.save(); g.translate(X(zc), Y(0.2)); g.scale(S.Ra / S.L * W, 0.2 * H);
    const rg = g.createRadialGradient(0, 0, 0.9, 0, 0, 1.45);
    rg.addColorStop(0, 'rgba(0,0,0,.45)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = rg; g.beginPath(); g.arc(0, 0, 1.5, 0, Math.PI * 2); g.fill(); g.restore();
  }
  g.strokeStyle = 'rgba(20,20,22,.85)'; g.lineWidth = 3; g.lineCap = 'round';
  const line = (z0, v0, z1, v1) => { g.beginPath(); g.moveTo(X(z0), Y(v0)); g.lineTo(X(z1), Y(v1)); g.stroke(); };
  const vSideLo = vOf.side0, vSideHi = vOf.shoulder, vHood = vOf.hood;
  for (const [tf, tr] of spec.doors) {
    const zf = tf * S.hl, zr = tr * S.hl;
    line(zf, vSideLo + 0.02, zf + 0.04, vSideHi + 0.02);
    line(zr, vSideLo + 0.02, zr, vSideHi + 0.02);
    line(zf, vSideLo + 0.02, zr, vSideLo + 0.02);
    g.fillStyle = 'rgba(25,25,28,.9)';
    g.fillRect(X(zr + 0.07) - 26, Y(vSideHi - 0.07), 30, 9);
  }
  // capô
  const zH0 = S.zA + 0.04, zH1 = S.hl - (spec.popup ? 0.2 : 0.12);
  line(zH0, vHood, zH1, vHood + 0.01); line(zH0, vHood, zH0, 1);
  line(zH1, vHood + 0.01, zH1 + 0.04, 1);
  // tampa traseira
  if (!spec.cab.hatch) {
    const zT0 = S.zC - 0.03, zT1 = -S.hl + 0.1;
    line(zT0, vHood + 0.02, zT1, vHood + 0.03); line(zT0, vHood + 0.02, zT0, 1); line(zT1, vHood + 0.03, zT1 - 0.02, 0.86);
  }
  // emenda dos para-choques
  const zbF = S.zF + S.Ra + 0.08, zbR = S.zR - S.Ra - 0.08;
  line(zbF, vSideLo, zbF + 0.03, vOf.bumper); line(zbR, vSideLo, zbR - 0.03, vOf.bumper);
  // tampas dos faróis escamoteáveis
  if (spec.popup) {
    const zc = S.hl - 0.16, w = spec.head.d;
    g.strokeRect(X(zc - w / 2), Y(vOf.popIn), X(zc + w / 2) - X(zc - w / 2), Y(vOf.popOut) - Y(vOf.popIn));
  }
  // bocal do tanque
  g.strokeRect(X(S.zR + S.Ra + 0.16), Y(vSideHi - 0.12), 26, 22);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

/* Monta a geometria a partir de posições, faces e grupos. Normais suaves dentro de cada grupo;
   faces de 'well' (caixa de roda) não influenciam as normais da lataria. */
function buildGroups(pos, uv, faces, groupsWanted) {
  const nV = pos.length / 3, normals = new Float32Array(nV * 3);
  const accum = (fs) => {
    for (const f of fs) {
      const [a, b, c] = f.v;
      const ax = pos[a * 3], ay = pos[a * 3 + 1], az = pos[a * 3 + 2];
      const e1x = pos[b * 3] - ax, e1y = pos[b * 3 + 1] - ay, e1z = pos[b * 3 + 2] - az;
      const e2x = pos[c * 3] - ax, e2y = pos[c * 3 + 1] - ay, e2z = pos[c * 3 + 2] - az;
      const nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
      for (const v of f.v) { normals[v * 3] += nx; normals[v * 3 + 1] += ny; normals[v * 3 + 2] += nz; }
    }
  };
  accum(faces.filter(f => f.g !== 'well'));
  const out = {};
  for (const g of groupsWanted) {
    const fs = faces.filter(f => f.g === g);
    if (!fs.length) continue;
    const map = new Map(), P = [], N = [], U = [], I = [];
    let own = null;
    if (g === 'well') { own = new Float32Array(nV * 3); }
    for (const f of fs) {
      for (const v of f.v) {
        if (!map.has(v)) { map.set(v, P.length / 3); P.push(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]); U.push(uv[v * 2], uv[v * 2 + 1]); }
        I.push(map.get(v));
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
    geo.setIndex(I);
    if (own) geo.computeVertexNormals();
    else {
      for (const [v, i] of map) {
        let x = normals[v * 3], y = normals[v * 3 + 1], z = normals[v * 3 + 2], l = Math.hypot(x, y, z);
        if (l < 1e-9) { x = Math.sign(pos[v * 3]) || 1; y = 0; z = 0; l = 1; }
        N[i * 3] = x / l; N[i * 3 + 1] = y / l; N[i * 3 + 2] = z / l;
      }
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
    }
    const nAttr = geo.attributes.normal.array;
    for (let i = 0; i < nAttr.length; i++) if (!isFinite(nAttr[i])) nAttr[i] = 0;
    out[g] = geo;
  }
  return out;
}

/* ---------- carroceria inferior ---------- */
export function buildLowerBody(spec, S, opts) {
  const per = 6, hood = opts.carbonHood;
  const half = (z) => {
    const hw = S.hwPlan(z), b = S.bottomZ(z), d = S.deckZ(z), t = S.tOf(z), hgt = Math.max(0.02, d - b);
    const tuck = spec.tuck, sh = spec.sh, bul = spec.bulge;
    const crownT = spec.crown + (t > S.zA / S.hl ? spec.hoodCrown * smooth(S.zA / S.hl, S.zA / S.hl + 0.2, t) : 0);
    const ctrl = [
      [0, b], [hw * (1 - tuck - 0.12), b], [hw * (1 - tuck * 0.4), b + hgt * 0.07], [hw, b + hgt * bul],
      [hw * (1 - sh * 0.12), b + hgt * 0.86], [hw * (1 - sh * 0.55), b + hgt * 0.975], [hw * (1 - sh * 1.3) - 0.04, d],
      [hw * 0.45, d + crownT * 0.7], [0, d + crownT]
    ];
    return catmull(ctrl, per);
  };
  const nHalf = 8 * per + 1;
  const vOfIdx = j => j / (nHalf - 1);
  const vOf = { side0: vOfIdx(per * 1.5), shoulder: vOfIdx(per * 5), hood: vOfIdx(per * 6), bumper: vOfIdx(per * 4.4), popIn: vOfIdx(per * 6.3), popOut: vOfIdx(per * 7.6) };

  // estações ao longo do comprimento
  const zs = [];
  for (let z = -S.hl; z <= S.hl + 1e-6; z += 0.022) zs.push(z);
  for (let z = S.hl - 0.3; z < S.hl; z += 0.012) zs.push(z);
  for (let z = -S.hl; z < -S.hl + 0.3; z += 0.012) zs.push(z);
  for (const zc of [S.zF, S.zR]) for (let z = zc - S.Ra - 0.06; z <= zc + S.Ra + 0.06; z += 0.008) zs.push(z);
  zs.push(S.hl);
  zs.sort((a, b) => a - b);
  const Z = zs.filter((z, i) => i === 0 || z - zs[i - 1] > 0.004);

  const ring = 2 * nHalf - 2, pos = [], uv = [], side = [];
  for (const z of Z) {
    const h = half(z);
    const ringPts = h.concat(h.slice(1, nHalf - 1).reverse().map(p => [-p[0], p[1]]));
    ringPts.forEach((p, k) => {
      const j = k < nHalf ? k : ring - k;
      pos.push(p[0], p[1], z); uv.push((z + S.hl) / S.L, vOfIdx(j));
      side.push(j);
    });
  }
  // recorte das caixas de roda: cada triângulo que cruza o arco é cortado exatamente sobre o círculo
  const yc = spec.R, Ra = S.Ra, axles = [S.zF, S.zR];
  const fOut = (z, y) => { let m = 1e9; for (const zc of axles) { const dz = z - zc, dy = y - yc; m = Math.min(m, (dy >= 0 ? Math.hypot(dz, dy) : Math.abs(dz)) - Ra); } return m; };
  const P = i => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
  const fv = i => fOut(pos[i * 3 + 2], pos[i * 3 + 1]);
  const cut = (i0, i1) => {
    let a = 0, b = 1; const p0 = P(i0), p1 = P(i1), f0 = fv(i0);
    for (let k = 0; k < 14; k++) { const m = (a + b) / 2, z = p0[2] + (p1[2] - p0[2]) * m, y = p0[1] + (p1[1] - p0[1]) * m; if ((fOut(z, y) >= 0) === (f0 >= 0)) a = m; else b = m; }
    const t = (a + b) / 2, id = pos.length / 3;
    for (let k = 0; k < 3; k++) pos.push(p0[k] + (p1[k] - p0[k]) * t);
    uv.push(uv[i0 * 2] + (uv[i1 * 2] - uv[i0 * 2]) * t, uv[i0 * 2 + 1] + (uv[i1 * 2 + 1] - uv[i0 * 2 + 1]) * t);
    side.push(side[i0]);
    return id;
  };
  const faces = [], nS = Z.length;
  const tri = (v, g) => {
    if (Math.min(side[v[0]], side[v[1]], side[v[2]]) > per * 5) { faces.push({ v, g }); return; }
    const f = v.map(fv);
    if (f[0] >= 0 && f[1] >= 0 && f[2] >= 0) { faces.push({ v, g }); return; }
    if (f[0] < 0 && f[1] < 0 && f[2] < 0) return;
    const poly = [];
    for (let k = 0; k < 3; k++) {
      const a = v[k], b = v[(k + 1) % 3], fa = f[k], fb = f[(k + 1) % 3];
      if (fa >= 0) poly.push(a);
      if ((fa >= 0) !== (fb >= 0)) poly.push(cut(a, b));
    }
    for (let k = 1; k < poly.length - 1; k++) faces.push({ v: [poly[0], poly[k], poly[k + 1]], g });
  };
  const tA = S.zA, tC = S.zC;
  for (let s = 0; s < nS - 1; s++) for (let k = 0; k < ring; k++) {
    const a = s * ring + k, b = s * ring + (k + 1) % ring, c = (s + 1) * ring + (k + 1) % ring, d = (s + 1) * ring + k;
    const j = Math.min(side[a], side[b]), zmid = (Z[s] + Z[s + 1]) / 2;
    let g = 'paint';
    if (j < 2) g = 'under';
    else if (j >= per * 6 && zmid > tC + 0.02 && zmid < tA - 0.02) g = 'interior';
    else if (hood && j >= per * 6 && zmid > tA + 0.04 && zmid < S.hl - (spec.popup ? 0.2 : 0.12)) g = 'hood';
    tri([a, b, d], g); tri([b, c, d], g);
  }
  // tampas da frente e de trás
  const capF = pos.length / 3, last = (nS - 1) * ring;
  const ringCenter = (s) => { let y = 0; for (let k = 0; k < ring; k++) y += pos[(s * ring + k) * 3 + 1]; return y / ring; };
  pos.push(0, ringCenter(nS - 1), S.hl + 0.004); uv.push(1, 0.5);
  const capR = pos.length / 3;
  pos.push(0, ringCenter(0), -S.hl - 0.004); uv.push(0, 0.5);
  for (let k = 0; k < ring; k++) {
    faces.push({ v: [capF, last + k, last + (k + 1) % ring], g: 'paint' });
    faces.push({ v: [capR, (k + 1) % ring, k], g: 'paint' });
  }
  const geos = buildGroups(pos, uv, faces, ['paint', 'hood', 'well', 'under', 'interior']);
  const surfX = (z, y) => { const h = half(z); for (let i = 1; i < 4 * per + 1; i++) { const a = h[i - 1], c = h[i]; if ((y - a[1]) * (y - c[1]) <= 0) { const f = (y - a[1]) / ((c[1] - a[1]) || 1e-6); return a[0] + (c[0] - a[0]) * f; } } return S.hwPlan(z); };
  return { geos, panel: panelTexture(spec, S, vOf), surfX };
}

/* ---------- cabine: para-brisa, teto, vidros e colunas ---------- */
export function buildCabin(spec, S, opts) {
  const c = spec.cab, zs = [];
  for (let z = S.zC; z <= S.zA; z += 0.03) zs.push(z);
  const winR = c.winR * S.hl, winF = S.zA - 0.07;
  const pillars = c.pillars.map(t => t * S.hl);
  for (const z of [winR, winF, S.zRf, S.zRr, S.zA, ...pillars.flatMap(p => [p - 0.035, p + 0.035])]) if (z > S.zC && z <= S.zA) zs.push(z);
  zs.sort((a, b) => a - b);
  const Z = zs.filter((z, i) => i === 0 || z - zs[i - 1] > 0.006);
  if (Z[Z.length - 1] < S.zA - 1e-4) Z.push(S.zA);
  const pos = [], uv = [], nk = 7;
  for (const z of Z) {
    const hw = S.hwPlan(z), hb = hw * (1 - spec.sh * 0.9) - 0.035, hr = hb - c.tumble;
    const yb = S.deckZ(z) - 0.012;
    let yt = S.roofZ(z); if (yt == null) yt = yb + 0.001;
    const hgt = Math.max(0, yt - yb), k = clamp(hgt / 0.3, 0, 1), cr = c.crown * k;
    const hr2 = hb + (hr - hb) * k;
    const pts = [[hb, yb], [hb + (hr2 - hb) * 0.42, yb + hgt * 0.45], [hr2 + 0.012 * k, yt - 0.035 * k], [hr2, yt], [hr2 - 0.07 * k, yt + cr * 0.35], [hr2 * 0.45, yt + cr * 0.9], [0, yt + cr]];
    const ringPts = pts.concat(pts.slice(0, nk - 1).reverse().map(p => [-p[0], p[1]]));
    for (const p of ringPts) { pos.push(p[0], p[1], z); uv.push((z + S.hl) / S.L, 0); }
  }
  const ring = nk * 2 - 1, faces = [];
  const inWin = z => z > winR && z < winF && !pillars.some(p => Math.abs(z - p) < 0.035);
  for (let s = 0; s < Z.length - 1; s++) {
    const zm = (Z[s] + Z[s + 1]) / 2, zone = zm > S.zRf ? 'ws' : zm < S.zRr ? 'back' : 'roof';
    for (let k = 0; k < ring - 1; k++) {
      const band = k < nk - 1 ? k : ring - 2 - k;
      let g;
      if (band <= 1) g = inWin(zm) ? 'glass' : (zone === 'back' && c.sail) || (zm < winR && zone !== 'ws') ? 'paint' : 'trim';
      else if (band === 2) g = inWin(zm) ? 'trim' : zone === 'roof' ? 'trim' : c.sail && zone === 'back' ? 'paint' : 'trim';
      else if (band === 3) g = zone === 'roof' ? 'roof' : zone === 'ws' ? 'trim' : c.sail ? 'paint' : 'trim';
      else g = zone === 'roof' ? 'roof' : 'glass';
      const a = s * ring + k, b = s * ring + k + 1, cc = (s + 1) * ring + k + 1, d = (s + 1) * ring + k;
      faces.push({ v: [a, b, d], g }, { v: [b, cc, d], g });
    }
  }
  return buildGroups(pos, uv, faces, ['glass', 'trim', 'roof', 'paint']);
}
