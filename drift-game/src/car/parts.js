/* Peças do carro: rodas, faróis, lanternas, grades, kits, aerofólios, interior. */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const TL = new THREE.TextureLoader();
const cache = {};
export function tex(name, repeat, srgb = true) {
  const key = name + repeat;
  if (cache[key]) return cache[key];
  const t = TL.load(new URL('assets/' + name, document.baseURI).href);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return (cache[key] = t);
}
function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/* ---------- materiais compartilhados ---------- */
let M = null;
export function mats() {
  if (M) return M;
  const honey = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#050506'; g.fillRect(0, 0, w, h); g.strokeStyle = '#2a2c30'; g.lineWidth = 3;
    for (let y = 0; y < 9; y++) for (let x = 0; x < 9; x++) {
      const cx = x * 16 + (y % 2) * 8, cy = y * 14; g.beginPath();
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6; g.lineTo(cx + Math.cos(a) * 7, cy + Math.sin(a) * 7); }
      g.closePath(); g.stroke();
    }
  });
  honey.repeat.set(6, 6);
  const tread = canvasTex(64, 512, (g, w, h) => {
    g.fillStyle = '#1b1b1d'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#0a0a0b'; for (const x of [12, 30, 48]) g.fillRect(x, 0, 4, h);
    for (let y = 0; y < h; y += 16) { g.fillRect(0, y, 10, 3); g.fillRect(54, y + 8, 10, 3); }
  });
  const rotor = canvasTex(256, 256, (g, w, h) => {
    const gr = g.createRadialGradient(128, 128, 30, 128, 128, 128); gr.addColorStop(0, '#3a3c40'); gr.addColorStop(0.45, '#8c8f94'); gr.addColorStop(1, '#6d7075');
    g.fillStyle = gr; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(30,30,32,.8)'; g.lineWidth = 3;
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.beginPath(); g.arc(128, 128, 90, a, a + 0.4); g.stroke(); }
  });
  const plate = canvasTex(256, 128, (g, w, h) => {
    g.fillStyle = '#f4f4ee'; g.fillRect(0, 0, w, h); g.strokeStyle = '#2f6b3a'; g.lineWidth = 6; g.strokeRect(5, 5, w - 10, h - 10);
    g.fillStyle = '#2f6b3a'; g.font = 'bold 30px sans-serif'; g.textAlign = 'center'; g.fillText('品川 300', 128, 44);
    g.font = 'bold 60px sans-serif'; g.fillText('86-20', 140, 110); g.font = 'bold 30px sans-serif'; g.fillText('さ', 34, 100);
  });
  M = {
    black: new THREE.MeshStandardMaterial({ color: 0x0b0c0e, roughness: 0.6, metalness: 0.1 }),
    trim: new THREE.MeshPhysicalMaterial({ color: 0x050506, roughness: 0.18, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.92 }),
    tire: new THREE.MeshStandardMaterial({ color: 0x6a6a6a, map: tread, roughness: 0.92, envMapIntensity: 0.35 }),
    well: new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 1 }),
    wellD: new THREE.MeshStandardMaterial({ color: 0x070707, roughness: 1, side: THREE.DoubleSide }),
    interior: new THREE.MeshStandardMaterial({ color: 0x17181b, roughness: 0.9 }),
    seat: new THREE.MeshStandardMaterial({ color: 0x1d1e22, roughness: 0.95 }),
    seatRed: new THREE.MeshStandardMaterial({ color: 0x7a1016, roughness: 0.9 }),
    chrome: new THREE.MeshStandardMaterial({ color: 0xe8eaee, metalness: 1, roughness: 0.06 }),
    satin: new THREE.MeshStandardMaterial({ color: 0xb8bcc2, metalness: 1, roughness: 0.32 }),
    honey: new THREE.MeshStandardMaterial({ color: 0xffffff, map: honey, roughness: 0.7, metalness: 0.3 }),
    rotor: new THREE.MeshStandardMaterial({ map: rotor, metalness: 0.9, roughness: 0.42 }),
    reflector: new THREE.MeshStandardMaterial({ color: 0xcfd3d8, metalness: 1, roughness: 0.18 }),
    lens: new THREE.MeshPhysicalMaterial({ color: 0xeef4ff, roughness: 0.02, metalness: 0, transparent: true, opacity: 0.38, clearcoat: 1, envMapIntensity: 3, depthWrite: false }),
    amber: new THREE.MeshPhysicalMaterial({ color: 0xff8a10, emissive: 0xff6a00, emissiveIntensity: 0.25, roughness: 0.1, transparent: true, opacity: 0.85, clearcoat: 1 }),
    clearLamp: new THREE.MeshPhysicalMaterial({ color: 0xf2f2f2, roughness: 0.05, transparent: true, opacity: 0.6, clearcoat: 1, envMapIntensity: 2 }),
    plate: new THREE.MeshStandardMaterial({ map: plate, roughness: 0.5, metalness: 0.2 }),
    carbon: new THREE.MeshPhysicalMaterial({ map: tex('carbon.jpg', 3), normalMap: tex('carbon_n.jpg', 3, false), normalScale: new THREE.Vector2(0.4, 0.4), color: 0xffffff, metalness: 0.25, roughness: 0.4, clearcoat: 1, clearcoatRoughness: 0.05 }),
    mirror: new THREE.MeshStandardMaterial({ color: 0xaab4c0, metalness: 1, roughness: 0.02 }),
    cage: new THREE.MeshStandardMaterial({ color: 0xc8c8cc, metalness: 0.6, roughness: 0.35 })
  };
  return M;
}

/* ---------- formas 2D ---------- */
export function shape2D(def) {
  const s = new THREE.Shape(), [kind] = def;
  if (kind === 'rr') {
    const [, w, h, r0] = def, r = Math.min(r0, w / 2 - 1e-3, h / 2 - 1e-3), x = -w / 2, y = -h / 2;
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r);
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  } else if (kind === 'circle') s.absarc(0, 0, def[1], 0, Math.PI * 2, false);
  else if (kind === 'poly') {
    const [, pts, r] = def, n = pts.length;
    for (let i = 0; i < n; i++) {
      const p = pts[i], a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
      const da = Math.hypot(a[0] - p[0], a[1] - p[1]), db = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const ra = Math.min(r, da / 2) / da, rb = Math.min(r, db / 2) / db;
      const p0 = [p[0] + (a[0] - p[0]) * ra, p[1] + (a[1] - p[1]) * ra], p1 = [p[0] + (b[0] - p[0]) * rb, p[1] + (b[1] - p[1]) * rb];
      if (i === 0) s.moveTo(p0[0], p0[1]); else s.lineTo(p0[0], p0[1]);
      s.quadraticCurveTo(p[0], p[1], p1[0], p1[1]);
    }
    s.closePath();
  }
  return s;
}
function shapeSize(def) {
  if (def[0] === 'rr') return [def[1], def[2]];
  if (def[0] === 'circle') return [def[1] * 2, def[1] * 2];
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const p of def[1]) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); }
  return [x1 - x0, y1 - y0];
}
const extr = (shape, depth, bevel, curve = 18) => new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: 3, curveSegments: curve });

/* Gruda um objeto (plano XY, frente em +Z) na superfície da carroceria. */
const RC = new THREE.Raycaster();
export function surfacePoint(meshes, origin, dir) {
  RC.set(origin, dir); RC.far = 10;
  const h = RC.intersectObjects(meshes, false)[0];
  if (!h) return null;
  const n = h.face.normal.clone().transformDirection(h.object.matrixWorld);
  return { p: h.point, n };
}
export function orientTo(obj, p, n, along, blend, mirror) {
  const fwd = n.clone().lerp(along, blend).normalize();
  const up = new THREE.Vector3(0, 1, 0);
  const right = new THREE.Vector3().crossVectors(up, fwd).normalize();
  const up2 = new THREE.Vector3().crossVectors(fwd, right).normalize();
  const m = new THREE.Matrix4().makeBasis(right, up2, fwd);
  obj.quaternion.setFromRotationMatrix(m);
  obj.position.copy(p);
  if (mirror) obj.scale.x = -1;
}

/* ---------- faróis e lanternas ---------- */
export function lampUnit(def, kind, headMat, tailMat) {
  const m = mats(), g = new THREE.Group(), sh = shape2D(def.shape), [w, h] = shapeSize(def.shape);
  const lens = new THREE.Mesh(extr(sh, 0.02, 0.012), kind === 'head' ? m.lens : kind === 'tail' ? tailMat : def.color === 'amber' ? m.amber : m.clearLamp);
  lens.position.z = -0.012; g.add(lens);
  const back = new THREE.Mesh(new THREE.ShapeGeometry(sh, 18), kind === 'head' ? m.reflector : m.black);
  back.position.z = -0.02; g.add(back);
  if (kind === 'head') {
    const inner = def.inner || 'proj1', bulb = r => { const b = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), headMat); b.scale.z = 0.5; return b; };
    const ring = (r) => { const t = new THREE.Mesh(new THREE.TorusGeometry(r, r * 0.12, 8, 24), m.chrome); return t; };
    const place = (o, x, y) => { o.position.set(x, y, -0.008); g.add(o); };
    if (inner === 'twin') { for (const x of [-w * 0.24, w * 0.24]) { place(bulb(h * 0.32), x, 0); place(ring(h * 0.38), x, 0); } }
    else if (inner === 'proj3') { for (let i = 0; i < 3; i++) place(bulb(h * 0.26), -w * 0.3 + i * w * 0.27, -h * 0.05 + i * 0.005); }
    else if (inner === 'proj2') { place(bulb(h * 0.3), -w * 0.18, -h * 0.05); place(bulb(h * 0.26), w * 0.2, -h * 0.02); place(ring(h * 0.34), -w * 0.18, -h * 0.05); }
    else { place(bulb(h * 0.33), w * 0.15, 0); place(ring(h * 0.38), w * 0.15, 0); const s2 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.4, h * 0.18, 0.01), headMat); place(s2, -w * 0.22, -h * 0.25); }
  } else if (kind === 'tail') {
    if (def.ring) { const t = new THREE.Mesh(new THREE.TorusGeometry(Math.min(w, h) * 0.3, Math.min(w, h) * 0.05, 8, 28), tailMat); t.position.z = 0.012; g.add(t); }
    if (def.kind === 'band' || def.kind === 'bar') {
      for (const x of [-1, 1]) { const b = new THREE.Mesh(new THREE.BoxGeometry(w * 0.2, h * 0.55, 0.012), tailMat); b.position.set(x * w * 0.37, 0, 0.004); g.add(b); }
      const rv = new THREE.Mesh(new THREE.BoxGeometry(w * 0.07, h * 0.4, 0.01), m.clearLamp); rv.position.set(w * 0.18, 0, 0.006); g.add(rv);
    }
  }
  g.userData.size = [w, h];
  return g;
}

/* ---------- rodas ---------- */
function spokeShape(design, rr) {
  const s = new THREE.Shape(), r0 = rr * 0.24, r1 = rr * 0.98;
  const wedge = (w0, w1) => { s.moveTo(-w0, r0); s.lineTo(w0, r0); s.lineTo(w1, r1); s.lineTo(-w1, r1); s.closePath(); };
  if (design === 'six') wedge(rr * 0.11, rr * 0.075);
  else if (design === 'star') { s.moveTo(-rr * 0.05, r0); s.lineTo(rr * 0.05, r0); s.lineTo(rr * 0.14, r1); s.lineTo(rr * 0.08, r1); s.lineTo(0, r0 + rr * 0.3); s.lineTo(-rr * 0.08, r1); s.lineTo(-rr * 0.14, r1); s.closePath(); }
  else if (design === 'multi') wedge(rr * 0.045, rr * 0.05);
  else if (design === 'mesh') wedge(rr * 0.022, rr * 0.022);
  else if (design === 'dish') wedge(rr * 0.07, rr * 0.055);
  else wedge(rr * 0.15, rr * 0.12);
  return s;
}
const SPOKES = { stock: 5, six: 6, star: 5, multi: 10, mesh: 15, dish: 5, fan: 0 };

export function buildWheel(o) {
  const m = mats(), g = new THREE.Group(), R = o.R, w = o.width, rr = o.rimR, w2 = w / 2;
  // pneu
  const prof = [];
  const side = R - rr;
  prof.push([rr - 0.004, -w2 * 0.92]);
  for (let i = 0; i <= 8; i++) { const a = i / 8; prof.push([rr + side * a, -w2 * (0.92 + 0.08 * Math.sin(a * Math.PI * 0.9))]); }
  prof.push([R, -w2 * 0.86]); prof.push([R + 0.004, 0]); prof.push([R, w2 * 0.86]);
  for (let i = 8; i >= 0; i--) { const a = i / 8; prof.push([rr + side * a, w2 * (0.92 + 0.08 * Math.sin(a * Math.PI * 0.9))]); }
  prof.push([rr - 0.004, w2 * 0.92]);
  const tg = new THREE.LatheGeometry(prof.reverse().map(p => new THREE.Vector2(p[0], p[1])), 48);
  const tire = new THREE.Mesh(tg, m.tire); tire.rotation.z = Math.PI / 2; tire.castShadow = true; g.add(tire);
  // aro
  const rimM = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(o.rimColor), metalness: 0.95, roughness: 0.25, clearcoat: 0.6 });
  const lipM = o.design === 'dish' || o.design === 'mesh' ? m.chrome : rimM;
  const face = w2 - 0.012, dish = o.design === 'dish' ? 0.08 : o.design === 'mesh' ? 0.05 : 0.02;
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr, w * 0.9, 40, 1, true), new THREE.MeshStandardMaterial({ color: 0x3a3c40, metalness: 0.8, roughness: 0.5, side: THREE.DoubleSide }));
  barrel.rotation.z = Math.PI / 2; g.add(barrel);
  const lipP = [[rr - 0.025, face - dish], [rr - 0.01, face - dish + 0.004], [rr - 0.004, face - 0.006], [rr + 0.006, face], [rr + 0.008, face - 0.012]];
  const lip = new THREE.Mesh(new THREE.LatheGeometry(lipP.map(p => new THREE.Vector2(p[0], p[1])), 48), lipM); lip.rotation.z = -Math.PI / 2; lip.scale.y = -1; g.add(lip);
  const hubX = face - dish - 0.035;
  if (o.design === 'fan') {
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(rr * 0.97, rr * 0.97, 0.02, 40), rimM); disc.rotation.z = Math.PI / 2; disc.position.x = hubX + 0.02; g.add(disc);
    const bl = [];
    for (let i = 0; i < 14; i++) { const b = new THREE.BoxGeometry(0.018, rr * 0.48, 0.035); b.translate(0, rr * 0.62, 0); b.rotateX(0.35); b.rotateX(i / 14 * Math.PI * 2); bl.push(b); }
    const fan = new THREE.Mesh(mergeGeometries(bl), m.black); fan.rotation.y = Math.PI / 2; fan.position.x = hubX + 0.032; g.add(fan);
  } else {
    const n = SPOKES[o.design] || 5, sg = spokeShape(o.design, rr);
    const base = new THREE.ExtrudeGeometry(sg, { depth: o.design === 'mesh' ? 0.016 : 0.028, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.005, bevelSegments: 2, curveSegments: 4 });
    const p = base.attributes.position;
    for (let i = 0; i < p.count; i++) { const r = Math.hypot(p.getX(i), p.getY(i)); p.setZ(i, p.getZ(i) + (r / rr) * (dish + 0.025)); }
    base.computeVertexNormals();
    const parts = [];
    for (let i = 0; i < n; i++) {
      const gg = base.clone(); gg.rotateZ(i / n * Math.PI * 2);
      if (o.design === 'mesh') { const g2 = base.clone(); g2.rotateZ(0.22); g2.rotateZ(i / n * Math.PI * 2); parts.push(g2); gg.rotateZ(-0.22); }
      parts.push(gg);
    }
    const sp = new THREE.Mesh(mergeGeometries(parts), rimM); sp.rotation.y = Math.PI / 2; sp.position.x = hubX; sp.castShadow = true; g.add(sp);
  }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(rr * 0.26, rr * 0.3, 0.05, 24), rimM); hub.rotation.z = Math.PI / 2; hub.position.x = hubX + 0.01; g.add(hub);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(rr * 0.12, rr * 0.13, 0.012, 20), m.black); cap.rotation.z = Math.PI / 2; cap.position.x = hubX + 0.038; g.add(cap);
  const nuts = [];
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2, nb = new THREE.CylinderGeometry(0.011, 0.011, 0.02, 6); nb.rotateZ(Math.PI / 2); nb.translate(hubX + 0.036, Math.cos(a) * rr * 0.19, Math.sin(a) * rr * 0.19); nuts.push(nb); }
  g.add(new THREE.Mesh(mergeGeometries(nuts), m.chrome));
  // freio: disco e pinça (não giram)
  const brake = new THREE.Group();
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(rr * 0.85, rr * 0.85, 0.024, 36), m.rotor); disc.rotation.z = Math.PI / 2; disc.position.x = hubX - 0.06; brake.add(disc);
  const cal = new THREE.Mesh(new THREE.CylinderGeometry(rr * 0.88, rr * 0.88, 0.05, 16, 1, false, -0.55, 1.1), new THREE.MeshStandardMaterial({ color: new THREE.Color(o.caliper), roughness: 0.35, metalness: 0.2 }));
  cal.rotation.z = Math.PI / 2; cal.rotation.x = 0.6; cal.position.x = hubX - 0.06; cal.scale.set(1, 1, 1); brake.add(cal);
  return { spin: g, brake };
}

/* ---------- varredura de um perfil ao longo de um caminho ---------- */
export function sweep(path, profile, closed) {
  const pos = [], idx = [], np = profile.length;
  for (const s of path) for (const [a, b] of profile) pos.push(s.p.x + s.a.x * a + s.b.x * b, s.p.y + s.a.y * a + s.b.y * b, s.p.z + s.a.z * a + s.b.z * b);
  for (let i = 0; i < path.length - 1; i++) for (let k = 0; k < (closed ? np : np - 1); k++) {
    const a = i * np + k, b = i * np + (k + 1) % np, c = (i + 1) * np + (k + 1) % np, d = (i + 1) * np + k;
    idx.push(a, d, b, b, d, c);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}

/* aerofólio: perfil de asa */
export function airfoil(chord, thick) {
  const s = new THREE.Shape(), n = 16, pts = [];
  for (let i = 0; i <= n; i++) { const x = i / n; pts.push([x * chord, thick * chord * 5 * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1015 * x * x * x * x)]); }
  s.moveTo(0, 0);
  for (const p of pts) s.lineTo(p[0], p[1] + chord * 0.03 * Math.sin(p[0] / chord * Math.PI));
  for (let i = pts.length - 1; i >= 0; i--) s.lineTo(pts[i][0], -pts[i][1] * 0.5 + chord * 0.03 * Math.sin(pts[i][0] / chord * Math.PI));
  return s;
}

/* banco esportivo */
export function seat(mat, bucket) {
  const g = new THREE.Group();
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.62, 0.12, 2, 2, 1), mat); back.position.set(0, 0.36, -0.16); back.rotation.x = -0.2; g.add(back);
  const cush = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.5), mat); cush.position.set(0, 0.06, 0.08); g.add(cush);
  const head = new THREE.Mesh(new THREE.BoxGeometry(bucket ? 0.36 : 0.26, bucket ? 0.3 : 0.18, 0.11), mat); head.position.set(0, bucket ? 0.74 : 0.78, -0.24); head.rotation.x = -0.2; g.add(head);
  if (bucket) for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.5, 0.26), mat); w.position.set(s * 0.25, 0.32, -0.08); w.rotation.x = -0.2; g.add(w); }
  return g;
}
