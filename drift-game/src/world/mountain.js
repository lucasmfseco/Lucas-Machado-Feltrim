/* Serra (touge) e circuito na encosta: terreno com cortes e aterros, guard-rails, muros, árvores e sinalização. */
import * as THREE from 'three';
import { distanceField, insideLoop } from './track.js';
import { roadTextures, rockTextures, latticeTextures, concreteTextures, makeNoise, rng, skidTexture } from './tex.js';
import { tex } from '../car/parts.js';
import { strip, roadMesh, sideSweep, instanced, colored, M4, treeKit, addTrees, terrainMaterial, heightGrid, terrainMesh, farMountains, smooth, tick } from './common.js';

const THEMES = {
  sunset: { tint: '#8c9668', dirt: '#6b5a45', trees: ['cedar', 'cedar', 'broad'], rock: '#7b7262', rail: '#e9e8e2', far: ['#2d3a3a', '#3a3f4a', '#2b3530'], center: 'yellow', roadCol: '#56575c' },
  autumn: { tint: '#a59a6e', dirt: '#6d5038', trees: ['maple', 'maple', 'cedar', 'broad'], rock: '#857a69', rail: '#e9e8e2', far: ['#6a4a35', '#7a5a3a', '#4a5040', '#8a6040'], center: 'yellow', roadCol: '#58585c' },
  snow: { tint: '#ffffff', dirt: '#9aa3ad', trees: ['snowcedar'], rock: '#8a8e94', rail: '#e9e8e2', far: ['#e8eef4', '#cfd8e2', '#f2f5f8'], center: 'dash', roadCol: '#50545a', snow: true },
  day: { tint: '#9cad78', dirt: '#7a6a52', trees: ['broad', 'cedar'], rock: '#8a8274', rail: '#e9e8e2', far: ['#3f5a46', '#4f6a58', '#5a7068'], center: null, roadCol: '#5c5d62', circuit: true }
};

export async function buildMountain(ctx) {
  const { scene, trk, map, q, progress, world } = ctx, th = THEMES[map.theme], N = trk.N, P = trk.pts, lim = trk.limit;
  const R = rng(map.id.length * 131 + 7), NZ = makeNoise(map.id.charCodeAt(0) * 17);
  const circuit = !!th.circuit;

  progress(0.12, 'Calculando o relevo');
  await tick();
  const DF = distanceField(trk, 2, 380);
  // lado da subida: o lado de dentro do laço é a montanha
  const sUp = new Int8Array(N);
  for (let i = 0; i < N; i++) { const p = P[i]; sUp[i] = insideLoop(trk, p.x + p.nx * 8, p.z + p.nz * 8) ? 1 : -1; }
  const ym = P.reduce((a, p) => a + p.y, 0) / N;
  const farH = (x, z) => ym + 25 + (NZ.fbm(x / 520 + 3, z / 520, 5) - 0.42) * 300;
  const G = heightGrid(trk, DF, {
    cell: q.terrainCell, margin: 360, relax: 16,
    raw: (x, z, qq) => {
      if (qq.i < 0) return { h: farH(x, z) };
      const p = P[qq.i], e = qq.d - (lim + (circuit ? 5 : 0.8));
      if (qq.d < lim + 0.5) return { h: p.y - 0.3, lock: true };
      if (e < 0) return { h: p.y - (circuit ? 0.08 : 0.3), lock: circuit };
      const up = qq.side === sUp[qq.i];
      let h = circuit ? p.y + (up ? e * 0.35 : -e * 0.25) : up ? p.y + 0.4 + Math.min(e * 1.2, 13) + Math.max(0, e - 11) * 0.55 : p.y - 0.4 - Math.min(e * 0.85, 20) - Math.max(0, e - 23) * 0.4;
      const w = smooth(130, 330, qq.d);
      return { h: h * (1 - w) + farH(x, z) * w };
    },
    detail: (x, z, d) => (NZ.fbm(x / 48, z / 48, 4) - 0.5) * (circuit ? 6 : 12) * smooth(lim + 6, lim + 45, d) + (NZ.n(x / 5, z / 5) - 0.5) * 0.7 * smooth(lim + 2, lim + 10, d)
  });
  world.ground = G;

  progress(0.3, 'Esculpindo a serra');
  await tick();
  const tx = { grass: tex('grass.jpg', 1), grassN: tex('grass_n.jpg', 1, false), rock: rockTextures(11, th.rock).map, lattice: latticeTextures().map };
  const tmat = terrainMaterial(tx, { tint: th.tint, dirt: th.dirt, snow: th.snow });
  const terr = terrainMesh(G, (k, ny) => {
    const slope = 1 - ny, D = G.D[k], i = G.I[k];
    const rock = smooth(0.32, 0.55, slope) * (circuit ? 0.6 : 1);
    let lat = 0;
    if (!circuit && i >= 0 && D < lim + 16 && slope > 0.4 && G.H[k] > P[i].y + 1.2 && G.S[k] === sUp[i]) lat = smooth(0.4, 0.55, slope) * (1 - smooth(lim + 10, lim + 16, D));
    const dirt = i >= 0 ? (1 - smooth(lim + 0.6, lim + 3.5, D)) * (circuit ? 0.2 : 0.9) : 0;
    return [rock, lat, dirt];
  }, tmat);
  scene.add(terr);
  farMountains(scene, (trk.bounds.x0 + trk.bounds.x1) / 2, (trk.bounds.z0 + trk.bounds.z1) / 2, 1500, th.far, 5, 260, 620, 22);
  if (map.theme === 'sunset' || map.theme === 'autumn') {
    const lake = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshPhysicalMaterial({ color: 0x1d3540, roughness: 0.06, metalness: 0.1, normalMap: tex('water_n.jpg', 60, false), normalScale: new THREE.Vector2(0.3, 0.3) }));
    lake.rotation.x = -Math.PI / 2; lake.position.y = Math.min(...P.map(p => p.y)) - 34; scene.add(lake);
  }

  progress(0.42, 'Asfaltando');
  await tick();
  const hw = trk.halfW;
  const rt = roadTextures({ seed: 3, color: th.roadCol, edge: (lim - hw) / (2 * lim) + 0.004, center: th.center, curb: false });
  const roadMat = new THREE.MeshStandardMaterial({ map: rt.map, normalMap: rt.normal, roughnessMap: rt.rough, roughness: 1, metalness: 0, envMapIntensity: 1.0 });
  if (th.snow) { roadMat.color.set(0xd8dde3); }
  const road = new THREE.Mesh(roadMesh(trk, [[-lim, 0.0], [-hw, 0.02], [-hw * 0.5, 0.05], [0, 0.07], [hw * 0.5, 0.05], [hw, 0.02], [lim, 0.0]], 14, o => (o + lim) / (2 * lim)), roadMat);
  road.receiveShadow = true; scene.add(road);
  if (th.snow) {
    const sn = new THREE.Mesh(strip(trk, -lim - 0.2, -hw + 0.6, 0.03, 0.06, 10), new THREE.MeshStandardMaterial({ color: 0xf4f7fa, roughness: 0.9 })); sn.receiveShadow = true; scene.add(sn);
    const sn2 = new THREE.Mesh(strip(trk, hw - 0.6, lim + 0.2, 0.06, 0.03, 10), sn.material); sn2.receiveShadow = true; scene.add(sn2);
  }
  // zebras e marcas de pneu nas curvas
  const bendSide = i => { const p = P[i], qn = P[(i + 6) % N]; return ((qn.x - p.x) * p.nx + (qn.z - p.z) * p.nz) > 0 ? 1 : -1; };
  const tight = i => Math.abs(P[i].k) > 1 / 70;
  if (circuit) {
    const curbTex = (() => { const c = document.createElement('canvas'); c.width = 16; c.height = 64; const g = c.getContext('2d'); g.fillStyle = '#d02a2a'; g.fillRect(0, 0, 16, 32); g.fillStyle = '#f2f2f0'; g.fillRect(0, 32, 16, 32); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t; })();
    const cm = new THREE.MeshStandardMaterial({ map: curbTex, roughness: 0.6 });
    let i = 0;
    while (i < N) {
      if (!tight(i)) { i++; continue; }
      let j = i; while (j < N && tight(j)) j++;
      const s = bendSide((i + j) >> 1);
      for (const side of [s, -s]) {
        const o1 = side * (hw - 0.2), o2 = side * (hw + 1.0);
        const g = strip(trk, Math.min(o1, o2), Math.max(o1, o2), 0.09, 0.09, 2, Math.max(0, i - 4), Math.min(N, j + 4));
        scene.add(new THREE.Mesh(g, cm));
      }
      i = j + 1;
    }
  }
  {
    const skid = new THREE.MeshBasicMaterial({ map: skidTexture(), transparent: true, depthWrite: false, opacity: th.snow ? 0.35 : 0.55, polygonOffset: true, polygonOffsetFactor: -2 });
    let i = 0;
    while (i < N) {
      if (Math.abs(P[i].k) < 1 / 45) { i++; continue; }
      let j = i; while (j < N && Math.abs(P[j].k) >= 1 / 45) j++;
      const s = bendSide((i + j) >> 1);
      for (let r = 0; r < 3; r++) {
        const off = -s * (0.5 + r * 1.3 + R() * 0.6), w = 1.9;
        const a = Math.max(0, i - 25), b = Math.min(N, j + 20);
        const g = strip(trk, off - w / 2, off + w / 2, 0.085, 0.085, 6, a, b);
        const m = new THREE.Mesh(g, skid); m.renderOrder = 2; scene.add(m);
      }
      i = j + 1;
    }
  }

  progress(0.55, 'Instalando guard-rails');
  await tick();
  const railMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(th.rail), metalness: 0.55, roughness: 0.38, side: THREE.DoubleSide });
  const wallTex = concreteTextures(21, th.snow ? '#b9bcc0' : '#a8a69f'); wallTex.repeat.set(1, 1);
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.95, side: THREE.DoubleSide });
  const posts = [], refl = [];
  const rails = [[0.0, 0.42], [0.07, 0.48], [0.02, 0.57], [0.07, 0.66], [0.0, 0.74]];
  const wallP = circuit ? [[0, 0], [0, 1.0], [0.25, 1.05], [0.25, 0]] : [[0, -0.3], [0, 0.35], [0.12, 0.4], [0.3, 0.45], [0.75, 2.8]];
  for (const side of [1, -1]) {
    const type = new Int8Array(N);
    for (let i = 0; i < N; i++) type[i] = circuit ? (tight(i) ? 2 : 1) : (sUp[i] === side ? 0 : 1);
    // filtra trechos curtos
    for (let i = 0; i < N; i++) { let c = 0; for (let k = -12; k <= 12; k++) c += type[((i + k) % N + N) % N] === 1 ? 1 : 0; if (!circuit) type[i] = c > 12 ? 1 : 0; }
    let i = 0;
    while (i < N) {
      const t = type[i]; let j = i; while (j < N && type[j] === t) j++;
      const a = i, b = Math.min(N, j);
      if (t === 1) {
        scene.add(new THREE.Mesh(sideSweep(trk, side, lim + 0.12, rails, a, b, 4), railMat));
        if (circuit) scene.add(new THREE.Mesh(sideSweep(trk, side, lim + 0.35, wallP, a, b, 4), wallMat));
        for (let k = a; k < b; k += 4) { const p = P[k]; posts.push({ x: p.x + p.nx * side * (lim + 0.25), y: p.y + 0.4, z: p.z + p.nz * side * (lim + 0.25), ry: Math.atan2(p.tx, p.tz) }); }
      } else if (t === 0) {
        const m = new THREE.Mesh(sideSweep(trk, side, lim + 0.05, wallP, a, b, 3), wallMat); m.receiveShadow = true; scene.add(m);
      } else {
        // circuito: muro + pneus nas curvas
        scene.add(new THREE.Mesh(sideSweep(trk, side, lim + 0.35, wallP, a, b, 4), wallMat));
      }
      for (let k = a; k < b; k += 18) { const p = P[k]; refl.push({ x: p.x + p.nx * side * (lim + 0.15), y: p.y + 0.9, z: p.z + p.nz * side * (lim + 0.15) }); }
      i = j;
    }
  }
  scene.add(instanced(new THREE.BoxGeometry(0.11, 0.85, 0.11), new THREE.MeshStandardMaterial({ color: 0x9a9da2, metalness: 0.6, roughness: 0.5 }), posts, true));
  {
    const g = colored([{ geo: new THREE.CylinderGeometry(0.035, 0.035, 0.8, 6), color: '#f2f2f0', m: M4(0, 0.4, 0) }, { geo: new THREE.CylinderGeometry(0.06, 0.06, 0.1, 8), color: '#ff7a14', m: M4(0, 0.82, 0) }]);
    scene.add(instanced(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4, emissive: 0x2a1000 }), refl));
  }
  // pneus empilhados no circuito
  if (circuit) {
    const tires = [];
    for (let i = 0; i < N; i += 2) if (tight(i)) { const p = P[i], s = -bendSide(i); for (let h = 0; h < 3; h++) tires.push({ x: p.x + p.nx * s * (lim + 0.0), y: p.y + 0.15 + h * 0.3, z: p.z + p.nz * s * (lim + 0.0), color: h % 2 ? '#e8e8e8' : '#141414' }); }
    const tg = new THREE.TorusGeometry(0.42, 0.17, 8, 14); tg.rotateX(Math.PI / 2);
    scene.add(instanced(tg, new THREE.MeshStandardMaterial({ roughness: 0.9 }), tires, true));
  }

  progress(0.66, 'Sinalizando as curvas');
  await tick();
  const chev = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 96; const g = c.getContext('2d'); g.fillStyle = '#f2c300'; g.fillRect(0, 0, 64, 96); g.fillStyle = '#111'; g.beginPath(); g.moveTo(16, 14); g.lineTo(44, 48); g.lineTo(16, 82); g.lineTo(28, 82); g.lineTo(56, 48); g.lineTo(28, 14); g.fill(); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const signs = [], signPosts = [], mirrors = [];
  for (let i = 0; i < N; i += 7) {
    if (Math.abs(P[i].k) < 1 / 32) continue;
    const p = P[i], s = -bendSide(i), o = lim + 0.6;
    const flip = bendSide(i) > 0 ? 1 : -1;
    signs.push({ x: p.x + p.nx * s * o, y: p.y + 1.35, z: p.z + p.nz * s * o, ry: Math.atan2(-p.tx, -p.tz), sx: flip });
    signPosts.push({ x: p.x + p.nx * s * o, y: p.y + 0.6, z: p.z + p.nz * s * o });
  }
  const signMat = new THREE.MeshStandardMaterial({ map: chev, roughness: 0.4, emissive: 0x3a2a00, side: THREE.DoubleSide });
  scene.add(instanced(new THREE.PlaneGeometry(0.62, 0.9), signMat, signs));
  scene.add(instanced(new THREE.CylinderGeometry(0.035, 0.035, 1.2, 6), new THREE.MeshStandardMaterial({ color: 0xa0a3a8, metalness: 0.6, roughness: 0.4 }), signPosts));
  if (!circuit) {
    // espelhos convexos nos grampos
    let last = -100;
    for (let i = 0; i < N; i++) {
      if (Math.abs(P[i].k) < 1 / 20 || i - last < 40) continue;
      last = i; const p = P[i], s = -bendSide(i), o = lim + 1.2;
      mirrors.push({ x: p.x + p.nx * s * o, y: p.y, z: p.z + p.nz * s * o, ry: Math.atan2(-p.nx * s, -p.nz * s) });
    }
    const mg = colored([{ geo: new THREE.CylinderGeometry(0.05, 0.05, 2.6, 8), color: '#e8641c', m: M4(0, 1.3, 0) }, { geo: new THREE.TorusGeometry(0.42, 0.05, 8, 24), color: '#e8641c', m: M4(0, 2.9, 0.05) }]);
    scene.add(instanced(mg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 }), mirrors, true));
    scene.add(instanced(new THREE.CircleGeometry(0.4, 24).translate(0, 2.9, 0.07), new THREE.MeshStandardMaterial({ color: 0xc8d0d8, metalness: 1, roughness: 0.05 }), mirrors));
    // postes de luz/telefone com fios no lado da descida
    const poles = [], wires = [];
    let prev = null;
    for (let i = 0; i < N; i += 38) {
      const p = P[i], s = -sUp[i], o = lim + 2.6;
      const x = p.x + p.nx * s * o, z = p.z + p.nz * s * o, y = G.at(x, z);
      if (Math.abs(y - p.y) > 4) { prev = null; continue; }
      poles.push({ x, y, z, ry: Math.atan2(p.tx, p.tz) });
      const top = new THREE.Vector3(x, y + 8.6, z);
      if (prev && prev.distanceTo(top) < 60) for (let w = 0; w < 3; w++) { const d = (w - 1) * 0.5; wires.push(prev.x + p.tz * d, prev.y - w * 0.35, prev.z - p.tx * d, top.x + p.tz * d, top.y - w * 0.35, top.z - p.tx * d); }
      prev = top;
    }
    const pg = colored([{ geo: new THREE.CylinderGeometry(0.13, 0.17, 9, 8), color: '#8f8a80', m: M4(0, 4.5, 0) }, { geo: new THREE.BoxGeometry(1.4, 0.09, 0.09), color: '#5a5650', m: M4(0, 8.6, 0) }, { geo: new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8), color: '#6a6862', m: M4(0.35, 7.6, 0) }]);
    scene.add(instanced(pg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }), poles, true));
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wires, 3));
    scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x15161a, transparent: true, opacity: 0.8 })));
  }

  progress(0.74, 'Plantando a floresta');
  await tick();
  const kinds = {}, lists = {};
  for (const k of new Set(th.trees)) { kinds[k] = treeKit(k, 13 + k.length); lists[k] = []; }
  const target = q.trees * (circuit ? 0.6 : 1), span = { x0: G.x0, z0: G.z0, w: (G.nx - 1) * G.cell, h: (G.nz - 1) * G.cell };
  const mapleCols = ['#ffffff', '#ffd2b0', '#ffb0a0', '#fff0a0', '#ff9080'];
  let tries = 0;
  while (tries++ < target * 12 && Object.values(lists).reduce((a, l) => a + l.length, 0) < target) {
    let x, z;
    if (R() < 0.7) { const p = P[(R() * N) | 0], s = R() < 0.5 ? 1 : -1, o = lim + 4 + Math.pow(R(), 1.8) * 140; x = p.x + p.nx * s * o + (R() - 0.5) * 8; z = p.z + p.nz * s * o + (R() - 0.5) * 8; }
    else { x = span.x0 + R() * span.w; z = span.z0 + R() * span.h; }
    const qq = DF.at(x, z); if (qq.d < lim + 3.5) continue;
    const y = G.at(x, z), sl = Math.abs(G.at(x + 2, z) - y) + Math.abs(G.at(x, z + 2) - y);
    if (sl > 2.4) continue;
    if (circuit && qq.d < lim + 18) continue;
    const kind = th.trees[(R() * th.trees.length) | 0], s = 0.75 + R() * 0.65;
    lists[kind].push({ x, y: y - 0.2, z, s, sy: s * (0.9 + R() * 0.3), ry: R() * 6.28, color: kind === 'maple' ? mapleCols[(R() * mapleCols.length) | 0] : R() < 0.5 ? '#ffffff' : '#d8e4d0' });
  }
  for (const k in lists) addTrees(scene, kinds[k], lists[k]);

  if (circuit) {
    progress(0.82, 'Montando boxes e arquibancadas');
    await tick();
    const st = P[0], ang = Math.atan2(st.tx, st.tz), s = -sUp[0];
    const o = lim + 14, bx = st.x + st.nx * s * o, bz = st.z + st.nz * s * o, by = G.at(bx, bz);
    const box = colored([
      { geo: new THREE.BoxGeometry(46, 6, 12), color: '#e8e6e0', m: M4(0, 3, 0) }, { geo: new THREE.BoxGeometry(48, 0.5, 14), color: '#c43030', m: M4(0, 6.2, 0) },
      ...[0, 1, 2, 3, 4, 5].map(i => ({ geo: new THREE.BoxGeometry(6, 4.2, 0.2), color: '#2a2e35', m: M4(-17.5 + i * 7, 2.1, -6.05) }))
    ]);
    const pit = new THREE.Mesh(box, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 })); pit.position.set(bx, by, bz); pit.rotation.y = Math.atan2(st.nx * s, st.nz * s); pit.castShadow = true; scene.add(pit);
    const os = lim + 12, gx = st.x - st.nx * s * os, gz = st.z - st.nz * s * os;
    const stand = colored([0, 1, 2, 3, 4, 5, 6].map(i => ({ geo: new THREE.BoxGeometry(40, 0.8, 2.2), color: ['#1c3f9e', '#d8d8d8', '#c43030', '#d8d8d8', '#1c3f9e', '#d8d8d8', '#c43030'][i], m: M4(0, 0.6 + i * 0.9, i * 2.2) })).concat([{ geo: new THREE.BoxGeometry(42, 0.4, 16), color: '#f0f0ee', m: M4(0, 9.5, 8) }, { geo: new THREE.BoxGeometry(42, 9, 0.4), color: '#d0d4d8', m: M4(0, 4.5, 16) }]));
    const sm = new THREE.Mesh(stand, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 })); sm.position.set(gx, G.at(gx, gz), gz); sm.rotation.y = Math.atan2(-st.nx * s, -st.nz * s); sm.castShadow = true; scene.add(sm);
    // linha de largada quadriculada
    const ck = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 16; const g = c.getContext('2d'); for (let y = 0; y < 2; y++) for (let x = 0; x < 8; x++) { g.fillStyle = (x + y) % 2 ? '#111' : '#f2f2f2'; g.fillRect(x * 8, y * 8, 8, 8); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
    const sl = new THREE.Mesh(strip(trk, -hw, hw, 0.09, 0.09, 1, 2, 4), new THREE.MeshStandardMaterial({ map: ck, roughness: 0.6 })); scene.add(sl);
  }
  world.heightAt = (x, z) => G.at(x, z);
  world.envGround = th.far[0];
}
