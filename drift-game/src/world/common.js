/* Peças comuns dos mapas: faixa de pista, varreduras laterais, instâncias, árvores, terreno. */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeNoise, rng, foliageTexture, barkTexture } from './tex.js';

export const tick = () => new Promise(r => setTimeout(r, 0));
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
export const smooth = (a, b, x) => { x = clamp((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x); };

/* faixa ao longo da pista entre deslocamentos laterais o1 e o2 */
export function strip(trk, o1, o2, y1, y2, vScale, i0 = 0, i1 = trk.N) {
  const P = trk.pts, N = trk.N, pos = [], uv = [], idx = [];
  for (let k = i0; k <= i1; k++) {
    const p = P[k % N], v = (k * trk.step) / vScale;
    pos.push(p.x + p.nx * o1, p.y + y1, p.z + p.nz * o1, p.x + p.nx * o2, p.y + y2, p.z + p.nz * o2);
    uv.push(0, v, 1, v);
  }
  for (let k = 0; k < i1 - i0; k++) { const a = k * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

/* pista com várias colunas laterais (permite abaulamento) */
export function roadMesh(trk, offsets, vScale, uOf) {
  const P = trk.pts, N = trk.N, C = offsets.length, pos = [], uv = [], idx = [];
  for (let k = 0; k <= N; k++) {
    const p = P[k % N], v = (k * trk.step) / vScale;
    for (const [o, dy] of offsets) { pos.push(p.x + p.nx * o, p.y + dy, p.z + p.nz * o); uv.push(uOf(o), v); }
  }
  for (let k = 0; k < N; k++) for (let c = 0; c < C - 1; c++) { const a = k * C + c, b = a + C; idx.push(a, b, a + 1, a + 1, b, b + 1); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

/* varre um perfil 2D (lateral, altura) ao longo da pista, num lado, entre índices */
export function sideSweep(trk, side, offset, profile, i0, i1, vScale = 4) {
  const P = trk.pts, N = trk.N, np = profile.length, pos = [], uv = [], idx = [];
  let acc = [0]; for (let i = 1; i < np; i++) acc.push(acc[i - 1] + Math.hypot(profile[i][0] - profile[i - 1][0], profile[i][1] - profile[i - 1][1]));
  for (let k = i0; k <= i1; k++) {
    const p = P[((k % N) + N) % N];
    for (let j = 0; j < np; j++) {
      const o = side * (offset + profile[j][0]);
      pos.push(p.x + p.nx * o, p.y + profile[j][1], p.z + p.nz * o); uv.push(k * trk.step / vScale, acc[j] / vScale);
    }
  }
  for (let k = 0; k < i1 - i0; k++) for (let j = 0; j < np - 1; j++) {
    const a = k * np + j, b = a + np;
    if (side > 0) idx.push(a, a + 1, b, a + 1, b + 1, b); else idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

export function instanced(geo, mat, list, cast) {
  if (!list.length) return new THREE.Group();
  const m = new THREE.InstancedMesh(geo, mat, list.length), d = new THREE.Object3D(), c = new THREE.Color();
  list.forEach((o, i) => {
    d.position.set(o.x, o.y || 0, o.z); d.rotation.set(o.rx || 0, o.ry || 0, o.rz || 0);
    d.scale.set(o.sx || o.s || 1, o.sy || o.s || 1, o.sz || o.s || 1); d.updateMatrix(); m.setMatrixAt(i, d.matrix);
    if (o.color) m.setColorAt(i, c.set(o.color));
  });
  m.castShadow = !!cast; m.receiveShadow = true;
  m.computeBoundingSphere();
  return m;
}

export function colored(parts) {
  const out = [];
  for (const p of parts) {
    let g = p.geo.index ? p.geo.toNonIndexed() : p.geo.clone();
    if (p.m) g.applyMatrix4(p.m);
    const c = new THREE.Color(p.color || '#ffffff'), n = g.attributes.position.count, col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
    out.push(g);
  }
  return mergeGeometries(out);
}
export const M4 = (x, y, z, rx, ry, rz, sx = 1, sy = sx, sz = sx) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx || 0, ry || 0, rz || 0)), new THREE.Vector3(sx, sy, sz));

/* ---------- árvores ---------- */
export function treeKit(kind, seed) {
  const R = rng(seed);
  const leaf = new THREE.MeshStandardMaterial({ map: foliageTexture(kind === 'snowcedar' ? 'snow' : kind, seed), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.85, color: 0xffffff });
  const bark = new THREE.MeshStandardMaterial({ map: barkTexture(seed), roughness: 0.95 });
  let trunk, crown;
  if (kind === 'cedar' || kind === 'snowcedar') {
    trunk = new THREE.CylinderGeometry(0.16, 0.32, 14, 6, 1, true); trunk.translate(0, 7, 0);
    const parts = [];
    for (let i = 0; i < 7; i++) {
      const y = 4.2 + i * 1.55, r = 2.6 * (1 - i / 8.2) + 0.35, h = 2.8;
      const c = new THREE.ConeGeometry(r, h, 8, 1, true);
      const p = c.attributes.position; for (let k = 0; k < p.count; k++) { const yy = p.getY(k); if (yy < 0) { p.setX(k, p.getX(k) * (0.85 + R() * 0.35)); p.setZ(k, p.getZ(k) * (0.85 + R() * 0.35)); p.setY(k, yy - R() * 0.4); } }
      c.rotateY(R() * 6); c.translate(0, y, 0); parts.push(c);
    }
    const top = new THREE.ConeGeometry(0.5, 2.2, 7, 1, true); top.translate(0, 15.5, 0); parts.push(top);
    crown = mergeGeometries(parts.map(g => g.index ? g.toNonIndexed() : g));
  } else {
    trunk = new THREE.CylinderGeometry(0.14, 0.26, 5, 6, 1, true); trunk.translate(0, 2.5, 0);
    const parts = [];
    for (let i = 0; i < 4; i++) {
      const g = new THREE.IcosahedronGeometry(1.8 + R() * 0.9, 1);
      const p = g.attributes.position, ph = R() * 10; for (let k = 0; k < p.count; k++) { const x = p.getX(k), y = p.getY(k), z = p.getZ(k), f = 0.82 + 0.36 * (Math.sin(x * 2.1 + y * 1.3 + ph) * Math.sin(z * 1.7 - y * 0.9 + ph) * 0.5 + 0.5); p.setXYZ(k, x * f, y * f * 0.8, z * f); }
      g.translate((R() - 0.5) * 3, 5 + R() * 2.4, (R() - 0.5) * 3); parts.push(g.toNonIndexed());
    }
    crown = mergeGeometries(parts);
    // UV esférico para a folhagem
    const p = crown.attributes.position, uv = new Float32Array(p.count * 2);
    for (let k = 0; k < p.count; k++) { uv[k * 2] = p.getX(k) * 0.18 + 0.5; uv[k * 2 + 1] = (p.getY(k) - 4) * 0.18 + p.getZ(k) * 0.05; }
    crown.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }
  return { trunk, crown, leaf, bark };
}

export function addTrees(scene, kit, list) {
  if (!list.length) return;
  scene.add(instanced(kit.trunk, kit.bark, list, true));
  scene.add(instanced(kit.crown, kit.leaf, list, true));
}

/* ---------- terreno com material misturado (grama, rocha, grelha de concreto, terra/neve) ---------- */
export function terrainMaterial(tx, opts) {
  const mat = new THREE.MeshStandardMaterial({ map: tx.grass, normalMap: tx.grassN, roughness: 1, metalness: 0 });
  mat.normalScale.set(0.6, 0.6);
  mat.onBeforeCompile = sh => {
    sh.uniforms.rockMap = { value: tx.rock }; sh.uniforms.latMap = { value: tx.lattice }; sh.uniforms.tint = { value: new THREE.Color(opts.tint || '#ffffff') };
    sh.uniforms.dirtCol = { value: new THREE.Color(opts.dirt || '#6b5a45') }; sh.uniforms.snow = { value: opts.snow ? 1 : 0 };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec3 mixw; varying vec3 vMix; varying vec3 vW;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvMix = mixw; vW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform sampler2D rockMap; uniform sampler2D latMap; uniform vec3 tint; uniform vec3 dirtCol; uniform float snow; varying vec3 vMix; varying vec3 vW;')
      .replace('#include <map_fragment>', `
        vec3 g1 = texture2D(map, vW.xz * 0.09).rgb, g2 = texture2D(map, vW.xz * 0.013).rgb;
        vec3 grass = mix(g1, g2, 0.45) * tint;
        if (snow > 0.5) grass = mix(vec3(0.86, 0.9, 0.95), vec3(0.97), g1.g) ;
        vec3 rock = texture2D(rockMap, vec2(vW.x + vW.z, vW.y) * 0.07).rgb;
        vec3 lat = texture2D(latMap, vec2((vW.x - vW.z) * 0.22, vW.y * 0.22)).rgb;
        vec3 col = mix(grass, rock, clamp(vMix.x, 0.0, 1.0));
        col = mix(col, dirtCol * (0.8 + g1.r * 0.4), clamp(vMix.z, 0.0, 1.0));
        col = mix(col, lat, clamp(vMix.y, 0.0, 1.0));
        diffuseColor.rgb *= col;`);
  };
  return mat;
}

/* grade de alturas: relaxa as descontinuidades e mantém a pista fixa */
export function heightGrid(trk, DF, opt) {
  const { cell, margin } = opt, B = trk.bounds;
  const x0 = B.x0 - margin, z0 = B.z0 - margin, nx = Math.ceil((B.x1 - B.x0 + 2 * margin) / cell) + 1, nz = Math.ceil((B.z1 - B.z0 + 2 * margin) / cell) + 1;
  const H = new Float32Array(nx * nz), lock = new Uint8Array(nx * nz), D = new Float32Array(nx * nz), I = new Int32Array(nx * nz), S = new Int8Array(nx * nz);
  for (let gz = 0; gz < nz; gz++) for (let gx = 0; gx < nx; gx++) {
    const x = x0 + gx * cell, z = z0 + gz * cell, q = DF.at(x, z), k = gz * nx + gx;
    D[k] = q.d; I[k] = q.i; S[k] = q.side;
    const h = opt.raw(x, z, q);
    H[k] = h.h; if (h.lock) lock[k] = 1;
  }
  for (let it = 0; it < (opt.relax || 0); it++) {
    for (let gz = 1; gz < nz - 1; gz++) for (let gx = 1; gx < nx - 1; gx++) {
      const k = gz * nx + gx; if (lock[k]) continue;
      H[k] = H[k] * 0.4 + (H[k - 1] + H[k + 1] + H[k - nx] + H[k + nx]) * 0.15;
    }
  }
  if (opt.detail) for (let gz = 0; gz < nz; gz++) for (let gx = 0; gx < nx; gx++) {
    const k = gz * nx + gx; if (lock[k]) continue; H[k] += opt.detail(x0 + gx * cell, z0 + gz * cell, D[k]);
  }
  const at = (x, z) => {
    const fx = clamp((x - x0) / cell, 0, nx - 1.001), fz = clamp((z - z0) / cell, 0, nz - 1.001), ix = Math.floor(fx), iz = Math.floor(fz), u = fx - ix, v = fz - iz, k = iz * nx + ix;
    return H[k] * (1 - u) * (1 - v) + H[k + 1] * u * (1 - v) + H[k + nx] * (1 - u) * v + H[k + nx + 1] * u * v;
  };
  return { x0, z0, nx, nz, cell, H, D, I, S, lock, at };
}

export function terrainMesh(G, mixFn, mat) {
  const { nx, nz, cell, x0, z0, H } = G, pos = new Float32Array(nx * nz * 3), uv = new Float32Array(nx * nz * 2), mix = new Float32Array(nx * nz * 3);
  for (let gz = 0; gz < nz; gz++) for (let gx = 0; gx < nx; gx++) {
    const k = gz * nx + gx; pos[k * 3] = x0 + gx * cell; pos[k * 3 + 1] = H[k]; pos[k * 3 + 2] = z0 + gz * cell;
    uv[k * 2] = gx; uv[k * 2 + 1] = gz;
  }
  const idx = new Uint32Array((nx - 1) * (nz - 1) * 6); let p = 0;
  for (let gz = 0; gz < nz - 1; gz++) for (let gx = 0; gx < nx - 1; gx++) { const a = gz * nx + gx, b = a + 1, c = a + nx, d = c + 1; idx[p++] = a; idx[p++] = c; idx[p++] = b; idx[p++] = b; idx[p++] = c; idx[p++] = d; }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  const nrm = g.attributes.normal.array;
  for (let k = 0; k < nx * nz; k++) { const m = mixFn(k, nrm[k * 3 + 1]); mix[k * 3] = m[0]; mix[k * 3 + 1] = m[1]; mix[k * 3 + 2] = m[2]; }
  g.setAttribute('mixw', new THREE.BufferAttribute(mix, 3));
  const mesh = new THREE.Mesh(g, mat); mesh.receiveShadow = true;
  return mesh;
}

/* montanhas distantes em anel */
export function farMountains(scene, cx, cz, r0, colors, seed, hmin, hmax, count) {
  const R = rng(seed), N = makeNoise(seed), parts = [];
  for (let i = 0; i < count; i++) {
    const a = i / count * Math.PI * 2 + R() * 0.2, d = r0 + R() * r0 * 0.6, rad = 280 + R() * 340, h = hmin + R() * (hmax - hmin);
    const g = new THREE.ConeGeometry(rad, h, 18, 6); g.translate(0, h / 2 - 20, 0);
    const p = g.attributes.position;
    for (let k = 0; k < p.count; k++) { const x = p.getX(k), y = p.getY(k), z = p.getZ(k), f = 0.75 + N.fbm(x / 160 + i, z / 160, 4) * 0.6; if (y > -15 && y < h - 25) { p.setX(k, x * f); p.setZ(k, z * f); p.setY(k, y * (0.9 + N.n(x / 50, z / 50) * 0.2)); } }
    g.computeVertexNormals();
    parts.push({ geo: g, m: M4(cx + Math.cos(a) * d, 0, cz + Math.sin(a) * d, 0, R() * 6, 0), color: colors[(R() * colors.length) | 0] });
  }
  const mesh = new THREE.Mesh(colored(parts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: false }));
  scene.add(mesh);
  return mesh;
}
