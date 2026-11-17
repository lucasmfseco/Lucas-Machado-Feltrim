/* Cidade: ruas fechadas com calçadas, prédios com fachadas, letreiros, postes, fios e viaduto. */
import * as THREE from 'three';
import { distanceField } from './track.js';
import { roadTextures, facadeTextures, signTexture, concreteTextures, rng, makeNoise, glowTexture, skidTexture } from './tex.js';
import { strip, roadMesh, sideSweep, instanced, colored, M4, treeKit, addTrees, heightGrid, smooth, tick } from './common.js';

function pavingTexture(night) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d'), R = rng(77);
  g.fillStyle = night ? '#5c5c60' : '#9c9a94'; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { const v = 0.85 + R() * 0.2; g.fillStyle = `rgba(${150 * v | 0},${148 * v | 0},${142 * v | 0},.55)`; g.fillRect(x * 32 + 1, y * 32 + 1, 30, 30); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

/* caixa com UV em metros (fachada repete por andar) */
function boxInto(arr, cx, cy, cz, w, h, d, ry, uScale, vScale, u0) {
  const c = Math.cos(ry), s = Math.sin(ry);
  const T = (x, y, z) => [cx + x * c + z * s, cy + y, cz - x * s + z * c];
  const faces = [
    [[-w / 2, 0, d / 2], [w / 2, 0, d / 2], [w / 2, h, d / 2], [-w / 2, h, d / 2], [0, 0, 1], w],
    [[w / 2, 0, -d / 2], [-w / 2, 0, -d / 2], [-w / 2, h, -d / 2], [w / 2, h, -d / 2], [0, 0, -1], w],
    [[w / 2, 0, d / 2], [w / 2, 0, -d / 2], [w / 2, h, -d / 2], [w / 2, h, d / 2], [1, 0, 0], d],
    [[-w / 2, 0, -d / 2], [-w / 2, 0, d / 2], [-w / 2, h, d / 2], [-w / 2, h, -d / 2], [-1, 0, 0], d]
  ];
  for (const [a, b, cc, dd, n, len] of faces) {
    const pts = [a, b, cc, dd].map(p => T(...p)), nn = [n[0] * c + n[2] * s, 0, -n[0] * s + n[2] * c];
    const uv = [[u0, 0], [u0 + len / uScale, 0], [u0 + len / uScale, h / vScale], [u0, h / vScale]];
    for (const i of [0, 1, 2, 0, 2, 3]) { arr.p.push(...pts[i]); arr.n.push(...nn); arr.u.push(...uv[i]); }
  }
  const top = [[-w / 2, h, d / 2], [w / 2, h, d / 2], [w / 2, h, -d / 2], [-w / 2, h, -d / 2]].map(p => T(...p));
  for (const i of [0, 1, 2, 0, 2, 3]) { arr.rp.push(...top[i]); arr.rn.push(0, 1, 0); arr.ru.push(0, 0); }
}
function geoOf(p, n, u) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(n, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(u, 2)); return g; }

export async function buildCity(ctx) {
  const { scene, trk, map, q, progress, world } = ctx, N = trk.N, P = trk.pts, lim = trk.limit, hw = trk.halfW;
  const night = !!map.sky.night, neon = map.theme === 'neon', R = rng(map.id.length * 77 + 3), NZ = makeNoise(9);
  progress(0.12, 'Traçando as quadras');
  await tick();
  const DF = distanceField(trk, 2, 260);
  const G = heightGrid(trk, DF, {
    cell: 3, margin: 220, relax: 14,
    raw: (x, z, qq) => { if (qq.i < 0) return { h: 0 }; const p = P[qq.i]; if (qq.d < lim) return { h: p.y - 0.1, lock: true }; return { h: p.y + 0.18, lock: qq.d < lim + 5 }; }
  });
  world.heightAt = (x, z) => G.at(x, z);
  {
    const { nx, nz, cell, x0, z0, H } = G, pos = new Float32Array(nx * nz * 3), uv = new Float32Array(nx * nz * 2);
    for (let gz = 0; gz < nz; gz++) for (let gx = 0; gx < nx; gx++) { const k = gz * nx + gx; pos[k * 3] = x0 + gx * cell; pos[k * 3 + 1] = H[k]; pos[k * 3 + 2] = z0 + gz * cell; uv[k * 2] = (x0 + gx * cell) / 8; uv[k * 2 + 1] = (z0 + gz * cell) / 8; }
    const idx = []; for (let gz = 0; gz < nz - 1; gz++) for (let gx = 0; gx < nx - 1; gx++) { const a = gz * nx + gx; idx.push(a, a + nx, a + 1, a + 1, a + nx, a + nx + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: pavingTexture(night), roughness: night ? 0.45 : 0.9, envMapIntensity: night ? 0.8 : 0.4 })); m.receiveShadow = true; scene.add(m);
  }

  progress(0.25, 'Asfaltando as ruas');
  await tick();
  const rt = roadTextures({ seed: 5, color: night ? '#36373c' : '#56575c', wet: night, edge: (lim - hw) / (2 * lim) + 0.004, center: 'dash' });
  const road = new THREE.Mesh(roadMesh(trk, [[-lim, 0], [-hw, 0.02], [0, 0.06], [hw, 0.02], [lim, 0]], 14, o => (o + lim) / (2 * lim)),
    new THREE.MeshStandardMaterial({ map: rt.map, normalMap: rt.normal, roughnessMap: rt.rough, roughness: 1, metalness: night ? 0.05 : 0, envMapIntensity: night ? 1.2 : 0.8 }));
  if (night) road.material.normalScale.set(0.4, 0.4);
  road.receiveShadow = true; scene.add(road);
  const curbTex = concreteTextures(4, '#b2b0aa');
  const curbM = new THREE.MeshStandardMaterial({ map: curbTex, roughness: 0.85, side: THREE.DoubleSide });
  for (const side of [1, -1]) scene.add(new THREE.Mesh(sideSweep(trk, side, lim, [[0, -0.1], [0, 0.16], [0.04, 0.2], [0.35, 0.2]], 0, N, 2), curbM));
  // faixas de pedestres perto das esquinas
  const white = new THREE.MeshStandardMaterial({ color: 0xe8e6de, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -1 });
  const tightAt = i => Math.abs(P[(i + N) % N].k) > 1 / 40;
  for (let i = 0; i < N; i++) {
    if (!tightAt(i + 14) || tightAt(i + 13) || tightAt(i)) continue;
    for (let o = -hw + 0.6; o < hw - 0.6; o += 0.9) scene.add(new THREE.Mesh(strip(trk, o, o + 0.45, 0.075, 0.075, 4, i, i + 4), white));
  }
  {
    const skid = new THREE.MeshBasicMaterial({ map: skidTexture(), transparent: true, depthWrite: false, opacity: 0.5 });
    let i = 0;
    while (i < N) {
      if (!tightAt(i)) { i++; continue; }
      let j = i; while (j < N && tightAt(j)) j++;
      for (let r = 0; r < 2; r++) { const off = (R() - 0.5) * hw, m = new THREE.Mesh(strip(trk, off - 0.95, off + 0.95, 0.08, 0.08, 6, Math.max(0, i - 15), Math.min(N, j + 12)), skid); m.renderOrder = 2; scene.add(m); }
      i = j + 1;
    }
  }

  progress(0.35, 'Erguendo os prédios');
  await tick();
  // grade de ocupação
  const occ = new Set(), oc = 2, key = (x, z) => ((x / oc) | 0) * 100003 + ((z / oc) | 0);
  const footprint = (cx, cz, w, d, ry, fn) => { const c = Math.cos(ry), s = Math.sin(ry); for (let a = -w / 2; a <= w / 2; a += 1.5) for (let b = -d / 2; b <= d / 2; b += 1.5) fn(cx + a * c + b * s, cz - a * s + b * c); };
  // viaduto
  const deck = [];
  if (neon) {
    let best = -1;
    for (let i = 0; i < N; i++) { let ok = true; for (let k = -12; k <= 12; k++) if (tightAt(i + k)) { ok = false; break; } if (ok && P[i].z > 40) { best = i; break; } }
    if (best >= 0) {
      const p = P[best], ry = Math.atan2(p.tx, p.tz) + Math.PI / 2, L = 520, y = p.y + 9.5;
      deck.push({ p, ry, L, y });
      footprint(p.x, p.z, 22, L, ry, (x, z) => occ.add(key(x, z)));
    }
  }
  const styles = neon ? ['office', 'glass', 'apt', 'office'] : ['house', 'house', 'apt', 'house'];
  const facades = styles.map((s, i) => facadeTextures(s, 100 + i, night));
  const buckets = facades.map(() => ({ p: [], n: [], u: [], rp: [], rn: [], ru: [] }));
  const shops = [], vsigns = [], hsigns = [], fronts = [];
  const sidewalk = neon ? 3.6 : 1.8;
  for (const side of [1, -1]) {
    let i = 0;
    while (i < N) {
      const p = P[i], w = neon ? 9 + R() * 14 : 7 + R() * 7, d = neon ? 10 + R() * 12 : 6 + R() * 5;
      let h = neon ? 12 + Math.pow(R(), 1.6) * 55 : 5.5 + R() * 4.5;
      if (!neon && R() < 0.2) h = 9 + R() * 7;
      const ry = Math.atan2(p.nx * side, p.nz * side), o = lim + sidewalk + d / 2;
      const cx = p.x + p.nx * side * o, cz = p.z + p.nz * side * o;
      let ok = true;
      footprint(cx, cz, w, d, ry, (x, z) => { if (!ok) return; if (DF.at(x, z).d < lim + sidewalk - 0.6 || occ.has(key(x, z))) ok = false; });
      if (ok) {
        footprint(cx, cz, w, d, ry, (x, z) => occ.add(key(x, z)));
        const st = (R() * styles.length) | 0, by = G.at(cx, cz) - 0.6;
        boxInto(buckets[st], cx, by, cz, w, h + 0.6, d, ry, 2.6 * facades[st].cols, 3.2 * facades[st].rows, R() * 4);
        fronts.push({ cx, cz, w, d, h, ry, side, p, by });
        i += Math.max(3, Math.round((w + (neon ? 0.3 : 1.5)) / trk.step));
      } else i += 2;
    }
  }
  // preenche o miolo das quadras e os arredores com mais prédios
  {
    const B = trk.bounds, pad = 150;
    for (let x = B.x0 - pad; x < B.x1 + pad; x += neon ? 15 : 11) for (let z = B.z0 - pad; z < B.z1 + pad; z += neon ? 15 : 11) {
      const cx = x + (R() - 0.5) * 4, cz = z + (R() - 0.5) * 4, qd = DF.at(cx, cz);
      if (qd.d < lim + sidewalk + 4) continue;
      const p = qd.i >= 0 ? P[qd.i] : null, ry = p ? Math.atan2(p.nx, p.nz) : 0;
      const w = neon ? 10 + R() * 10 : 7 + R() * 6, d = neon ? 10 + R() * 10 : 7 + R() * 6;
      let h = neon ? 14 + Math.pow(R(), 1.5) * 70 : 5.5 + R() * 5; if (!neon && R() < 0.15) h = 10 + R() * 9;
      let ok = true;
      footprint(cx, cz, w, d, ry, (xx, zz) => { if (!ok) return; if (occ.has(key(xx, zz)) || DF.at(xx, zz).d < lim + sidewalk) ok = false; });
      if (!ok) continue;
      footprint(cx, cz, w, d, ry, (xx, zz) => occ.add(key(xx, zz)));
      const st = (R() * styles.length) | 0;
      boxInto(buckets[st], cx, G.at(cx, cz) - 0.6, cz, w, h + 0.6, d, ry, 2.6 * facades[st].cols, 3.2 * facades[st].rows, R() * 4);
    }
  }
  const roofM = new THREE.MeshStandardMaterial({ color: night ? 0x1a1b20 : 0x8d8c88, roughness: 0.9 });
  buckets.forEach((b, i) => {
    if (!b.p.length) return;
    const f = facades[i], m = new THREE.MeshStandardMaterial({ map: f.map, roughness: 0.7, metalness: 0.05, emissiveMap: f.emissive, emissive: f.emissive ? 0xffffff : 0x000000, emissiveIntensity: f.emissive ? 0.55 : 0 });
    const mesh = new THREE.Mesh(geoOf(b.p, b.n, b.u), m); mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh);
    const roof = new THREE.Mesh(geoOf(b.rp, b.rn, b.ru), roofM); scene.add(roof);
  });

  progress(0.5, neon ? 'Acendendo os letreiros' : 'Pendurando os fios');
  await tick();
  // lojas no térreo e letreiros
  const signTex = []; for (let i = 0; i < 10; i++) signTex.push(signTexture(300 + i, i % 2 === 0));
  const signMats = signTex.map(t => new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: night ? 1.1 : 0.25, roughness: 0.5, side: THREE.DoubleSide }));
  const signBuckets = signMats.map(() => []);
  const shopTex = (() => { const c = document.createElement('canvas'); c.width = 256; c.height = 128; const g = c.getContext('2d'); g.fillStyle = night ? '#fff4dc' : '#d8dfe6'; g.fillRect(0, 0, 256, 128); g.fillStyle = night ? '#e8d6b0' : '#9aa6b2'; for (let x = 8; x < 256; x += 40) g.fillRect(x, 20, 30, 70); g.fillStyle = '#2a2e35'; for (let x = 0; x < 256; x += 64) g.fillRect(x, 0, 4, 128); g.fillRect(0, 0, 256, 10); g.fillRect(0, 118, 256, 10); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t; })();
  const shopM = new THREE.MeshStandardMaterial({ map: shopTex, emissiveMap: shopTex, emissive: 0xffffff, emissiveIntensity: night ? 0.7 : 0.05, roughness: 0.2, metalness: 0.2 });
  const awning = new THREE.MeshStandardMaterial({ color: 0x2b2e34, roughness: 0.6 });
  const shopG = [], awnG = [];
  for (const f of fronts) {
    const c = Math.cos(f.ry), s = Math.sin(f.ry), fx = f.cx - s * (f.d / 2) * -1, fz = f.cz - c * (f.d / 2) * -1;
    // frente do prédio fica voltada para a rua (lado -z local)
    const ox = f.cx - s * f.d / 2, oz = f.cz - c * f.d / 2;
    if (neon || R() < 0.35) {
      const g = new THREE.PlaneGeometry(f.w - 0.8, 3.2); g.rotateY(f.ry + Math.PI); g.translate(ox - s * 0.06, f.by + 0.6 + 1.6, oz - c * 0.06); shopG.push(g);
      const a = new THREE.BoxGeometry(f.w - 0.4, 0.35, 1.2); a.rotateY(f.ry); a.translate(ox - s * 0.6, f.by + 0.6 + 3.5, oz - c * 0.6); awnG.push(a);
      const hs = new THREE.PlaneGeometry(Math.min(f.w - 1, 7), 1.2); hs.rotateY(f.ry + Math.PI); hs.translate(ox - s * 1.22, f.by + 0.6 + 3.95, oz - c * 1.22);
      signBuckets[1 + 2 * ((R() * 4) | 0)].push(hs);
    }
    if ((neon && f.h > 14 && R() < 0.75) || (!neon && R() < 0.12)) {
      const vh = neon ? 5 + R() * 8 : 2.5, vs = new THREE.PlaneGeometry(1.3, vh); vs.rotateY(f.ry + Math.PI / 2);
      const lat = (R() < 0.5 ? -1 : 1) * (f.w / 2 - 0.9), along = { x: c, z: -s };
      vs.translate(ox - s * 0.8 + along.x * lat, f.by + 5 + vh / 2 + R() * 4, oz - c * 0.8 + along.z * lat);
      signBuckets[2 * ((R() * 5) | 0)].push(vs);
    }
  }
  const { mergeGeometries } = await import('three/addons/utils/BufferGeometryUtils.js');
  if (shopG.length) scene.add(new THREE.Mesh(mergeGeometries(shopG), shopM));
  if (awnG.length) { const m = new THREE.Mesh(mergeGeometries(awnG), awning); m.castShadow = true; scene.add(m); }
  signBuckets.forEach((b, i) => { if (b.length) scene.add(new THREE.Mesh(mergeGeometries(b), signMats[i])); });

  // grade de pedestres, postes, máquinas de bebida
  const railM = new THREE.MeshStandardMaterial({ color: 0xe6e6e2, metalness: 0.4, roughness: 0.4, side: THREE.DoubleSide });
  const ped = [[0, 0.75], [0.03, 0.8], [0, 0.85]];
  for (const side of [1, -1]) scene.add(new THREE.Mesh(sideSweep(trk, side, lim + 0.45, ped, 0, N, 2), railM));
  const posts = [];
  for (let i = 0; i < N; i += 2) for (const side of [1, -1]) { const p = P[i], o = lim + 0.45; posts.push({ x: p.x + p.nx * side * o, y: p.y + 0.6, z: p.z + p.nz * side * o }); }
  scene.add(instanced(new THREE.CylinderGeometry(0.03, 0.03, 0.85, 6), railM, posts));
  const lamps = [], glows = [], pools = [], vend = [], poles = [], wires = [];
  for (let i = 0, k = 0; i < N; i += neon ? 26 : 34, k++) {
    const p = P[i], side = k % 2 ? 1 : -1, o = lim + 1.1;
    const x = p.x + p.nx * side * o, z = p.z + p.nz * side * o;
    if (neon) {
      lamps.push({ x, y: p.y, z, ry: Math.atan2(-p.nx * side, -p.nz * side) });
      const lx = p.x + p.nx * side * (lim - 1.6), lz = p.z + p.nz * side * (lim - 1.6);
      glows.push(lx, p.y + 8.3, lz); pools.push({ x: lx, y: p.y + 0.09, z: lz });
    }
  }
  // postes de energia com fios (muito típicos do Japão)
  let prev = null;
  for (let i = 0; i < N; i += 30) {
    const p = P[i], side = neon ? -1 : 1, o = lim + 0.9, x = p.x + p.nx * side * o, z = p.z + p.nz * side * o, y = p.y + 0.18;
    poles.push({ x, y, z, ry: Math.atan2(p.tx, p.tz) });
    const top = new THREE.Vector3(x, y + 9.6, z);
    if (prev && prev.distanceTo(top) < 50) for (let w = 0; w < 4; w++) { const dd = (w - 1.5) * 0.45; wires.push(prev.x + p.tz * dd, prev.y - (w % 2) * 0.5, prev.z - p.tx * dd, top.x + p.tz * dd, top.y - (w % 2) * 0.5, top.z - p.tx * dd); }
    prev = top;
    if (!neon && R() < 0.5) {
      const p2 = P[(i + 15) % N], s2 = -side, ox = lim + 1.2;
      const tx2 = p2.x + p2.nx * s2 * ox, tz2 = p2.z + p2.nz * s2 * ox;
      wires.push(top.x, top.y - 0.2, top.z, tx2, p2.y + 6.5, tz2);
    }
    if (R() < 0.35) { const s3 = -side; vend.push({ x: p.x + p.nx * s3 * (lim + 1.2), y: p.y + 0.18, z: p.z + p.nz * s3 * (lim + 1.2), ry: Math.atan2(-p.nx * s3, -p.nz * s3) }); }
  }
  const pg = colored([{ geo: new THREE.CylinderGeometry(0.14, 0.18, 10, 8), color: '#8f8b84', m: M4(0, 5, 0) }, { geo: new THREE.BoxGeometry(1.6, 0.1, 0.1), color: '#4a4740', m: M4(0, 9.6, 0) }, { geo: new THREE.BoxGeometry(1.2, 0.1, 0.1), color: '#4a4740', m: M4(0, 9.1, 0) }, { geo: new THREE.CylinderGeometry(0.24, 0.24, 0.7, 8), color: '#6a6862', m: M4(0.4, 8.2, 0) }]);
  scene.add(instanced(pg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }), poles, true));
  const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wires, 3));
  scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x0c0d10 })));
  if (lamps.length) {
    const lg = colored([{ geo: new THREE.CylinderGeometry(0.1, 0.14, 8.4, 8), color: '#5a5d63', m: M4(0, 4.2, 0) }, { geo: new THREE.BoxGeometry(0.16, 0.16, 2.7), color: '#5a5d63', m: M4(0, 8.35, 1.3) }]);
    scene.add(instanced(lg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.5 }), lamps, true));
    const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(glows, 3));
    scene.add(new THREE.Points(gg, new THREE.PointsMaterial({ map: glowTexture(), size: 4.5, color: 0xffe2b8, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
    const pl = new THREE.PlaneGeometry(1, 1); pl.rotateX(-Math.PI / 2);
    scene.add(instanced(pl, new THREE.MeshBasicMaterial({ map: glowTexture(), color: 0xffcf96, transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending }), pools.map(p => ({ ...p, sx: 16, sz: 16 }))));
  }
  if (vend.length) {
    const vt = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 128; const g = c.getContext('2d'); g.fillStyle = '#f4f4f2'; g.fillRect(0, 0, 64, 128); const cols = ['#d33', '#36c', '#3a3', '#fa0', '#fff', '#c3c']; for (let y = 0; y < 4; y++) for (let x = 0; x < 6; x++) { g.fillStyle = cols[(x + y * 2) % 6]; g.fillRect(4 + x * 10, 10 + y * 18, 7, 13); } g.fillStyle = '#222'; g.fillRect(4, 90, 56, 30); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
    const vm = new THREE.MeshStandardMaterial({ map: vt, emissiveMap: vt, emissive: 0xffffff, emissiveIntensity: night ? 1.2 : 0.15, roughness: 0.3 });
    const body = new THREE.MeshStandardMaterial({ color: [0xc8202a, 0x1c4fa8, 0xe8e8e8][(R() * 3) | 0], roughness: 0.4 });
    const vg = new THREE.BoxGeometry(1.0, 1.85, 0.75); vg.translate(0, 0.92, 0);
    scene.add(instanced(vg, [body, body, body, body, vm, body], vend, true));
  }
  // viaduto
  for (const dk of deck) {
    const concrete = new THREE.MeshStandardMaterial({ map: concreteTextures(8, '#9c9b96'), roughness: 0.9 });
    const g = new THREE.Group(); g.position.set(dk.p.x, 0, dk.p.z); g.rotation.y = dk.ry;
    const slab = new THREE.Mesh(new THREE.BoxGeometry(18, 1.4, dk.L), concrete); slab.position.y = dk.y; slab.castShadow = true; g.add(slab);
    for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.2, dk.L), concrete); w.position.set(s * 8.75, dk.y + 1.3, 0); g.add(w); }
    for (let z = -dk.L / 2 + 15; z < dk.L / 2; z += 32) {
      const wx = dk.p.x + Math.sin(dk.ry) * z, wz = dk.p.z + Math.cos(dk.ry) * z;
      if (DF.at(wx, wz).d < lim + 2.5) continue;
      const pil = new THREE.Mesh(new THREE.BoxGeometry(3, dk.y, 3.4), concrete); pil.position.set(0, dk.y / 2 - 0.5, z); pil.castShadow = true; g.add(pil);
    }
    const lights = [];
    for (let z = -dk.L / 2; z < dk.L / 2; z += 20) lights.push(-7.5, dk.y + 5, z, 7.5, dk.y + 5, z + 10);
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lights, 3));
    g.add(new THREE.Points(lg, new THREE.PointsMaterial({ map: glowTexture(), size: 5, color: 0xffd9a0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
    scene.add(g);
  }

  progress(0.65, 'Desenhando o horizonte');
  await tick();
  // horizonte: prédios distantes
  const B = trk.bounds, cx = (B.x0 + B.x1) / 2, cz = (B.z0 + B.z1) / 2, rad = Math.max(B.x1 - B.x0, B.z1 - B.z0) / 2;
  const far = [];
  for (let i = 0; i < (neon ? 260 : 140); i++) {
    const a = R() * Math.PI * 2, d = rad + 120 + Math.pow(R(), 0.7) * (neon ? 900 : 600);
    const h = neon ? 25 + Math.pow(R(), 2) * 160 : 8 + R() * 20, w = 18 + R() * 30;
    far.push({ x: cx + Math.cos(a) * d, y: h / 2 - 1, z: cz + Math.sin(a) * d, sx: w, sy: h, sz: w * (0.6 + R() * 0.8), ry: R() * 3 });
  }
  const ff = facadeTextures(neon ? 'office' : 'apt', 900, night); ff.map.repeat.set(3, 6); if (ff.emissive) ff.emissive.repeat.set(3, 6);
  scene.add(instanced(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ map: ff.map, emissiveMap: ff.emissive, emissive: ff.emissive ? 0xffffff : 0, emissiveIntensity: 0.8, roughness: 0.8 }), far));
  // torre de treliça vermelha e branca ao longe
  {
    const parts = [], H = 330;
    for (let i = 0; i < 22; i++) { const y = i * H / 22, w = 40 * (1 - i / 24) + 3, col = i % 4 < 2 ? '#d8471f' : '#f0f0ec'; for (const [dx, dz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) parts.push({ geo: new THREE.CylinderGeometry(0.8, 0.8, H / 22 + 0.5, 5), color: col, m: M4(dx * w / 2, y + H / 44, dz * w / 2) }); parts.push({ geo: new THREE.BoxGeometry(w, 1.2, w), color: col, m: M4(0, y, 0) }); }
    parts.push({ geo: new THREE.BoxGeometry(18, 10, 18), color: '#f0f0ec', m: M4(0, 150, 0) }, { geo: new THREE.CylinderGeometry(0.6, 1.2, 60, 6), color: '#d8471f', m: M4(0, H + 30, 0) });
    const tower = new THREE.Mesh(colored(parts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, emissive: night ? 0x441100 : 0, emissiveIntensity: 1 }));
    tower.position.set(cx + rad + 700, 0, cz - rad - 600); scene.add(tower);
    if (night) { const gl = []; for (let i = 0; i < 12; i++) gl.push(cx + rad + 700, i * 28, cz - rad - 600); const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(gl, 3)); scene.add(new THREE.Points(gg, new THREE.PointsMaterial({ map: glowTexture(), size: 40, color: 0xff6a2a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))); }
  }
  // árvores de rua (bairro)
  if (!neon) {
    const kit = treeKit('broad', 21), list = [];
    for (let i = 0; i < 260; i++) { const p = P[(R() * N) | 0], side = R() < 0.5 ? 1 : -1, o = lim + 6 + R() * 20, x = p.x + p.nx * side * o, z = p.z + p.nz * side * o; if (DF.at(x, z).d < lim + 4 || occ.has(key(x, z))) continue; list.push({ x, y: G.at(x, z), z, s: 0.7 + R() * 0.5, ry: R() * 6 }); }
    addTrees(scene, kit, list);
  }
  world.envGround = night ? '#101014' : '#3a3632';
}
