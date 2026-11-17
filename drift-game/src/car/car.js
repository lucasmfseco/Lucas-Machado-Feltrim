/* Monta o carro completo a partir das medidas e da configuração da garagem. */
import * as THREE from 'three';
import { SPECS } from './specs.js';
import { shapeOf, buildLowerBody, buildCabin } from './body.js';
import { mats, lampUnit, buildWheel, surfacePoint, orientTo, sweep, airfoil, seat, shape2D } from './parts.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

function paintMaterial(cfg, map) {
  const p = { color: new THREE.Color(cfg.paint), map, metalness: 0.05, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.1 };
  const f = cfg.finish;
  if (f === 'metal') { p.metalness = 0.65; p.roughness = 0.38; }
  else if (f === 'pearl') { p.metalness = 0.35; p.roughness = 0.3; p.iridescence = 0.7; p.iridescenceIOR = 1.5; p.sheen = 0.4; p.sheenColor = new THREE.Color(0xffffff); }
  else if (f === 'matte') { p.metalness = 0.1; p.roughness = 0.75; p.clearcoat = 0; }
  else if (f === 'chrome') { p.metalness = 1; p.roughness = 0.05; p.clearcoat = 0.4; }
  return new THREE.MeshPhysicalMaterial(p);
}

const mirrorDef = d => d[0] === 'poly' ? ['poly', d[1].map(p => [-p[0], p[1]]).reverse(), d[2]] : d;

export function buildCar(def, cfg, opts = {}) {
  const spec = SPECS[def.id], e = cfg.eq, m = mats();
  const kit = e.kit, S = shapeOf(spec, kit);
  const root = new THREE.Group(), body = new THREE.Group();
  root.add(body);
  const drop = { stock: 0, low: 0.035, coil: 0.065, slam: 0.095 }[e.susp] || 0;
  const camber = { coil: 0.035, slam: 0.09 }[e.susp] || 0;
  body.position.y = -drop;

  const lower = buildLowerBody(spec, S, { carbonHood: e.hood.indexOf('carbon') === 0 });
  const paint = paintMaterial(cfg, lower.panel);
  const roofMat = e.roof === 'carbon' ? m.carbon : e.roof === 'black' ? m.trim : paint;
  const tint = { none: 0.74, mid: 0.87, dark: 0.96 }[e.tint] ?? 0.74;
  const glass = new THREE.MeshPhysicalMaterial({ color: e.tint === 'none' ? 0x22303a : 0x07090b, metalness: 0.1, roughness: 0.03, transparent: true, opacity: tint, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 2.6, depthWrite: false });
  const headCol = { white: 0xfff4e2, yellow: 0xffd03a, ice: 0xc6e4ff }[e.lights] || 0xfff4e2;
  const headM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: headCol, emissiveIntensity: 1.2, roughness: 0.2 });
  const tailM = new THREE.MeshPhysicalMaterial({ color: 0x8c0a10, emissive: 0xff1420, emissiveIntensity: 0.35, roughness: 0.12, transparent: true, opacity: 0.93, clearcoat: 1 });
  const add = (geo, mat, cast = true, parent = body) => { if (!geo) return null; const o = new THREE.Mesh(geo, mat); o.castShadow = cast; o.receiveShadow = false; parent.add(o); return o; };

  const shell = [];
  shell.push(add(lower.geos.paint, paint));
  shell.push(add(lower.geos.hood, m.carbon));
  add(lower.geos.well, m.well, false);
  add(lower.geos.under, m.black, false);
  add(lower.geos.interior, m.interior, false);
  const cab = buildCabin(spec, S, {});
  add(cab.glass, glass, false);
  shell.push(add(cab.trim, m.trim));
  shell.push(add(cab.roof, roofMat));
  shell.push(add(cab.paint, paint));
  const hits = shell.filter(Boolean);
  root.updateMatrixWorld(true);

  const hl = S.hl, F = V(0, 0, 1), B = V(0, 0, -1);
  const topF = S.deckZ(hl - 0.04), topR = S.deckZ(-hl + 0.04);
  const front = (x, y) => surfacePoint(hits, V(x, (y < 0 ? topF + y : y) - drop, hl + 1), B);
  const rear = (x, y) => surfacePoint(hits, V(x, (y < 0 ? topR + y : y) - drop, -hl - 1), F);
  const stick = (obj, hit, along, blend, inset) => {
    const p = hit.p.clone().addScaledVector(hit.n, -inset); p.y += drop;
    orientTo(obj, p, hit.n, along, blend); body.add(obj);
  };
  const hwAt = z => S.hwPlan(z);

  // faróis
  const popups = [];
  if (spec.head.type === 'popup') {
    const hd = spec.head;
    for (const s of [1, -1]) {
      const g = new THREE.Group(), z = hl - 0.16, x = s * hwAt(z) * hd.x, y = S.deckZ(z) + 0.004;
      const box = new THREE.Mesh(new THREE.BoxGeometry(hd.w, 0.14, hd.d * 0.9), paint); box.position.set(0, 0.07, -hd.d * 0.45); g.add(box);
      const face = new THREE.Mesh(new THREE.BoxGeometry(hd.w * 0.94, 0.11, 0.01), m.black); face.position.set(0, 0.07, 0.001); g.add(face);
      for (const dx of [-0.25, 0.25]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.05, 0.02, 20), headM); l.rotation.x = Math.PI / 2; l.position.set(dx * hd.w, 0.07, 0.008); g.add(l); }
      g.position.set(x, y, z + hd.d / 2); g.visible = false; body.add(g); popups.push(g);
    }
  } else {
    for (const s of [1, -1]) {
      const def2 = s > 0 ? spec.head.shape : mirrorDef(spec.head.shape);
      const h = front(s * hwAt(hl - 0.2) * spec.head.x, spec.head.y);
      if (!h) continue;
      const u = lampUnit({ shape: def2, inner: spec.head.inner }, 'head', headM);
      if (s < 0) u.children.forEach(c => { if (c.geometry.type === 'SphereGeometry' || c.geometry.type === 'TorusGeometry' || c.geometry.type === 'BoxGeometry') c.position.x *= -1; });
      u.scale.set(1.25, 1.25, 1); stick(u, h, F, 0.65 * (1 - (spec.head.blend ?? 0.3)), -0.008);
    }
  }
  for (const t of spec.turn || []) for (const s of [1, -1]) {
    const h = front(s * hwAt(hl - 0.1) * t.x, t.y); if (!h) continue;
    stick(lampUnit(t, 'turn'), h, F, 0.6, 0.006);
  }
  // grades e entradas de ar
  for (const gdef of spec.grille || []) {
    const sides = gdef.x === 0 ? [0] : [1, -1];
    for (const s of sides) {
      const x = gdef.x === 0 ? 0 : Math.abs(gdef.x) < 0.5 ? s * Math.abs(gdef.x) : s * hwAt(hl - 0.1) * gdef.x;
      const h = front(x, gdef.y); if (!h) continue;
      const geo = new THREE.ExtrudeGeometry(shape2D(gdef.shape), { depth: 0.03, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2, curveSegments: 12 });
      const o = new THREE.Mesh(geo, m.honey); stick(o, h, F, 0.7, 0.018);
      const rim = new THREE.Mesh(new THREE.ExtrudeGeometry(shape2D(gdef.shape), { depth: 0.012, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.012, bevelSegments: 2, curveSegments: 12 }), m.trim);
      stick(rim, h, F, 0.7, 0.02);
    }
  }
  // lanternas
  for (const t of spec.tail) {
    const sides = t.x === 0 ? [0] : [1, -1];
    for (const s of sides) {
      const x = s * hwAt(-hl + 0.1) * t.x;
      const h = rear(x, t.y); if (!h) continue;
      const def2 = s > 0 ? mirrorDef(t.shape) : t.shape;
      const u = lampUnit(Object.assign({}, t, { shape: def2 }), t.kind === 'garnish' ? 'turn' : 'tail', null, t.kind === 'garnish' ? m.trim : tailM);
      if (t.kind === 'garnish') u.children[0].material = m.trim;
      if (!t.kind) u.scale.set(1.12, 1.12, 1);
      stick(u, h, B, 0.5, 0.006);
    }
  }
  // placas
  const plate = (hit, along) => { if (!hit) return; const p = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.165, 0.012), [m.black, m.black, m.black, m.black, m.plate, m.black]); stick(p, hit, along, 0.9, -0.004); };
  plate(front(0, spec.plateF), F); plate(rear(0, spec.plateR), B);

  // retrovisores
  for (const s of [1, -1]) {
    const z = S.zA - 0.12, hb = hwAt(z) * (1 - spec.sh * 0.9) - 0.035, y = S.deckZ(z) + 0.1;
    const g = new THREE.Group();
    const hous = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14, 0, Math.PI * 2, 0, Math.PI), paint); hous.scale.set(0.075, 0.05, 0.1); hous.position.set(s * 0.11, 0.02, 0); hous.castShadow = true; g.add(hous);
    const gl = new THREE.Mesh(new THREE.CircleGeometry(1, 20), m.mirror); gl.scale.set(0.065, 0.044, 1); gl.position.set(s * 0.11, 0.02, -0.035); gl.rotation.y = Math.PI; g.add(gl);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.06), m.trim); arm.position.set(s * 0.05, -0.015, 0.01); g.add(arm);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.14), m.trim); base.position.set(0, -0.02, 0.01); g.add(base);
    g.position.set(s * (hb + 0.02), y - 0.02, z); body.add(g);
  }
  // limpadores
  for (const s of [1, -1]) {
    const z = S.zA - 0.03, y = S.deckZ(z) + 0.012;
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.012, 0.018), m.black); w.position.set(s * 0.2 - 0.05, y, z - 0.02); w.rotation.y = s * 0.08; body.add(w);
  }
  // interior
  const sz = S.zRf - 0.42, floor = S.bottomZ(sz) + 0.12, hand = spec.hand === 'L' ? 1 : -1;
  const seatMat = e.weight === 'race' ? m.seatRed : m.seat;
  for (const s of [1, -1]) { const st = seat(seatMat, e.weight !== 'stock'); st.position.set(s * 0.36, floor + 0.05, sz); body.add(st); }
  const dashZ = S.zA - 0.2, dashY = S.deckZ(dashZ) - 0.04;
  const dash = new THREE.Mesh(new THREE.BoxGeometry(hwAt(dashZ) * 1.6, 0.14, 0.4), m.interior); dash.position.set(0, dashY, dashZ); body.add(dash);
  const sw = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.022, 10, 28), m.black); sw.position.set(hand * 0.36, dashY + 0.06, dashZ - 0.32); sw.rotation.x = -0.35; body.add(sw);
  if (e.weight === 'race') {
    const tube = (a, b) => { const d = b.clone().sub(a), c = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, d.length(), 8), m.cage); c.position.copy(a).add(b).multiplyScalar(0.5); c.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize()); body.add(c); };
    const zb = sz - 0.45, top = (spec.cab.roof - 0.08), hz = S.zRf - 0.05;
    for (const s of [1, -1]) { tube(V(s * 0.55, floor, zb), V(s * 0.5, top, zb)); tube(V(s * 0.5, top, zb), V(s * 0.48, top, hz)); tube(V(s * 0.48, top, hz), V(s * 0.62, S.deckZ(S.zA - 0.2), S.zA - 0.2)); }
    tube(V(0.5, top, zb), V(-0.5, top, zb)); tube(V(0.55, floor, zb), V(-0.5, top, zb));
  }
  // escape
  const tips = def.tips || 1, exR = (spec.bigTip ? 0.05 : 0.034) * (e.exhaust === 'straight' ? 1.4 : e.exhaust === 'sport' ? 1.18 : 1);
  const exM = e.exhaust === 'straight' ? new THREE.MeshStandardMaterial({ color: 0x8a90d8, metalness: 1, roughness: 0.22 }) : m.chrome;
  const xs = tips === 4 ? [0.62, 0.46, -0.46, -0.62] : tips === 2 ? [0.55, -0.55] : [-0.55];
  const exhaust = [];
  for (const fx of xs) {
    const x = fx * hwAt(-hl + 0.1), y = S.bottomZ(-hl + 0.08) - 0.02;
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(exR, exR * 0.92, 0.26, 18, 1, true), exM); tube.material.side = THREE.DoubleSide;
    tube.rotation.x = Math.PI / 2; tube.position.set(x, y, -hl + 0.06); body.add(tube);
    const inner = new THREE.Mesh(new THREE.CircleGeometry(exR * 0.9, 16), m.well); inner.position.set(x, y, -hl + 0.03); inner.rotation.y = Math.PI; body.add(inner);
    exhaust.push(V(x, y - drop, -hl - 0.12));
  }
  // capô com saídas de ar
  if (e.hood === 'vent' || e.hood === 'carbonvent') for (const s of [1, -1]) {
    const z = S.zA + (hl - S.zA) * 0.45, h = surfacePoint(hits, V(s * hwAt(z) * 0.3, 3, z), V(0, -1, 0));
    if (!h) continue;
    const v = new THREE.Mesh(new THREE.ExtrudeGeometry(shape2D(['rr', 0.16, 0.3, 0.03]), { depth: 0.02, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.008, bevelSegments: 2 }), m.honey);
    const p = h.p.clone(); p.y += drop - 0.012; orientTo(v, p, h.n, V(0, 1, 0), 0, false); body.add(v);
  }

  // friso das caixas de roda
  for (const zc of [S.zF, S.zR]) for (const s of [1, -1]) {
    const path = [], Ra = S.Ra, yc = spec.R, yb = S.bottomZ(zc) + 0.01;
    const pt = (y, z, a) => { const x = s * (lower.surfX(z, y) - 0.004); path.push({ p: V(x, y, z), a, b: V(s, 0, 0) }); };
    for (let y = yb; y < yc; y += 0.03) pt(y, zc - Ra, V(0, 0, -1));
    for (let i = 0; i <= 40; i++) { const f = i / 40 * Math.PI; pt(yc + Math.sin(f) * Ra, zc - Math.cos(f) * Ra, V(0, Math.sin(f), -Math.cos(f))); }
    for (let y = yc - 0.03; y >= yb; y -= 0.03) pt(y, zc + Ra, V(0, 0, 1));
    const lipG = sweep(path, [[-0.004, -0.025], [-0.004, 0.0], [0.004, 0.006], [0.014, 0.004], [0.018, -0.006]], false);
    add(lipG, paint);
    const wallG = sweep(path, [[0.0, -0.004], [0.0, -0.03], [0.02, -0.12], [0.03, -0.36]], false);
    const wall = add(wallG, m.well, false); wall.material = m.wellD;
  }
  // caixas de roda internas
  for (const zc of [S.zF, S.zR]) for (const s of [1, -1]) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(S.Ra - 0.01, S.Ra - 0.01, 0.36, 24, 1, true, 0, Math.PI), m.well);
    c.material.side = THREE.DoubleSide; c.rotation.z = Math.PI / 2; c.rotation.y = 0;
    c.position.set(s * (hwAt(zc) - 0.24), spec.R + drop, zc); body.add(c);
  }

  // kits
  const wide = kit === 'wide' || kit === 'widepro', aero = kit === 'aero' || kit === 'widepro';
  const kitM = aero ? m.carbon : paint;
  const outline = (z0, z1, front) => {
    const pts = [];
    for (let z = z0; z <= z1 + 1e-6; z += 0.03) pts.push(V(hwAt(z) * (1 - spec.tuck * 0.5), S.bottomZ(z), z));
    if (front != null) {
      const zE = front > 0 ? hl - 0.02 : -hl + 0.02, xe = hwAt(zE) * (1 - spec.tuck * 0.5);
      const fr = []; for (let i = 1; i < 12; i++) { const x = xe * (1 - 2 * i / 12); fr.push(V(x, S.bottomZ(zE), zE)); }
      const mirror = pts.map(p => V(-p.x, p.y, p.z)).reverse();
      return pts.concat(fr, mirror);
    }
    return pts;
  };
  const frame = (pts, up) => pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], t = b.clone().sub(a); t.y = 0; t.normalize();
    let n = V(t.z, 0, -t.x); if (n.dot(V(p.x, 0, p.z * 0.25)) < 0) n.negate();
    return { p, a: n, b: up || V(0, 1, 0) };
  });
  // para-choques: faixa saliente na base da frente e da traseira
  {
    const bm = spec.bumper === 'black' ? m.black : paint;
    const rearOutline = () => {
      const pts = [];
      for (let z = S.zR - S.Ra - 0.04; z >= -hl + 0.02 - 1e-6; z -= 0.03) pts.push(V(hwAt(z) * (1 - spec.tuck * 0.5), S.bottomZ(z), z));
      const zE = -hl + 0.02, xe = hwAt(zE) * (1 - spec.tuck * 0.5), fr = [];
      for (let i = 1; i < 12; i++) fr.push(V(xe * (1 - 2 * i / 12), S.bottomZ(zE), zE));
      return pts.concat(fr, pts.map(p => V(-p.x, p.y, p.z)).reverse());
    };
    const prof = [[-0.04, 0.0], [0.006, 0.012], [0.016, 0.07], [0.014, 0.17], [0.0, 0.215], [-0.04, 0.215]];
    add(sweep(frame(outline(S.zF + S.Ra + 0.04, hl - 0.02, 1)), prof, true), bm);
    add(sweep(frame(rearOutline()), prof, true), bm);
    if (spec.molding) for (const s of [1, -1]) {
      const pts = []; for (let z = S.zR + S.Ra + 0.05; z <= S.zF - S.Ra - 0.05; z += 0.05) pts.push(V(s * (lower.surfX(z, spec.molding) + 0.004), spec.molding, z));
      add(sweep(frame(pts), [[-0.01, -0.02], [0.012, -0.018], [0.014, 0.018], [-0.01, 0.02]], true), m.black, false);
    }
  }
  // terceira luz de freio
  { const z = S.zC - 0.06, br = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.035, 0.05), tailM); br.position.set(0, S.deckZ(z) + 0.03, z); body.add(br); }
  if (kit !== 'stock') {
    const ext = aero ? 0.07 : 0.035;
    const lip = sweep(frame(outline(S.zF + S.Ra + 0.04, hl - 0.02, 1)), [[-0.14, 0.03], [0.0, 0.025], [ext, -0.012], [ext - 0.01, -0.03], [-0.14, -0.025]], true);
    add(lip, aero ? m.carbon : m.trim);
    const skirt = sweep(frame(outline(S.zR + S.Ra + 0.03, S.zF - S.Ra - 0.03)).map(f => f), [[-0.05, 0.07], [0.02, 0.06], [0.04 + (aero ? 0.02 : 0), -0.025], [0.02, -0.05], [-0.05, -0.05]], true);
    add(skirt, kitM);
    const skirt2 = sweep(frame(outline(S.zR + S.Ra + 0.03, S.zF - S.Ra - 0.03).map(p => V(-p.x, p.y, p.z))), [[-0.05, 0.07], [0.02, 0.06], [0.04 + (aero ? 0.02 : 0), -0.025], [0.02, -0.05], [-0.05, -0.05]], true);
    add(skirt2, kitM);
  }
  if (aero) {
    const by = S.bottomZ(-hl + 0.1);
    const dif = new THREE.Mesh(new THREE.BoxGeometry(hwAt(-hl + 0.2) * 1.5, 0.015, 0.42), m.carbon); dif.position.set(0, by - 0.02, -hl + 0.17); dif.rotation.x = -0.12; body.add(dif);
    for (let i = -3; i <= 3; i++) { const f = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.1, 0.4), m.carbon); f.position.set(i * 0.17, by + 0.02, -hl + 0.15); body.add(f); }
    for (const s of [1, -1]) for (let i = 0; i < 2; i++) {
      const h = front(s * hwAt(hl - 0.15) * 0.93, 0.32 + i * 0.1); if (!h) continue;
      const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(0.2, 0); sh.lineTo(0.02, 0.05); sh.closePath();
      const c = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.008, bevelEnabled: false }), m.carbon);
      c.position.copy(h.p); c.position.y += drop; c.rotation.set(Math.PI / 2, 0, s > 0 ? -0.5 : Math.PI + 0.5); body.add(c);
    }
  }
  if (wide) {
    const ow = kit === 'widepro' ? 0.1 : 0.075, rivM = new THREE.MeshStandardMaterial({ color: 0xd8dade, metalness: 1, roughness: 0.25 });
    for (const zc of [S.zF, S.zR]) for (const s of [1, -1]) {
      const Rf = S.Ra + 0.005, xs = s * (hwAt(zc) - 0.03), yc = spec.R, path = [], by = S.bottomZ(zc) + 0.03;
      for (let y = by; y < yc; y += 0.04) path.push({ p: V(xs, y, zc - Rf), a: V(0, 0, -1), b: V(s, 0, 0) });
      for (let i = 0; i <= 24; i++) { const f = i / 24 * Math.PI, a = V(0, Math.sin(f), -Math.cos(f)); path.push({ p: V(xs, yc + Math.sin(f) * Rf, zc - Math.cos(f) * Rf), a, b: V(s, 0, 0) }); }
      for (let y = yc - 0.04; y >= by; y -= 0.04) path.push({ p: V(xs, y, zc + Rf), a: V(0, 0, 1), b: V(s, 0, 0) });
      const prof = [[-0.01, -0.02], [-0.01, 0.01], [0.01, ow * 0.85], [0.04, ow], [0.075, ow * 0.7], [0.095, 0.02], [0.095, -0.02]];
      const of = new THREE.Mesh(sweep(path, prof, true), paint); of.castShadow = true; body.add(of);
      if (kit === 'wide') for (let i = 0; i <= 9; i++) {
        const f = i / 9 * Math.PI, rv = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), rivM);
        rv.position.set(xs + s * (ow * 0.97), yc + Math.sin(f) * (Rf + 0.03), zc - Math.cos(f) * (Rf + 0.03)); body.add(rv);
      }
    }
  }
  // aerofólios
  const wz = -hl + 0.2, wy = S.deckZ(wz), Wd = spec.W;
  if (e.wing === 'duck') {
    const sh = new THREE.Shape(); sh.moveTo(0.28, 0); sh.quadraticCurveTo(0.1, 0.02, -0.03, 0.075); sh.lineTo(0.0, 0.04); sh.quadraticCurveTo(0.1, -0.005, 0.28, -0.02); sh.closePath();
    const d = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: Wd * 0.82, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 2 }), paint);
    d.rotation.y = -Math.PI / 2; d.position.set(Wd * 0.41, S.deckZ(-hl + 0.05), -hl + 0.02); d.castShadow = true; body.add(d);
  } else if (e.wing !== 'none') {
    const cfgW = { lip: [0.17, 0.07, Wd * 0.78, paint], hoop: [0.24, 0.27, Wd * 0.86, paint], gt: [0.28, 0.34, Wd * 0.95, m.carbon], gtbig: [0.34, 0.5, Wd * 1.04, m.carbon] }[e.wing];
    const [chord, hgt, span, mat] = cfgW;
    const blade = new THREE.Mesh(new THREE.ExtrudeGeometry(airfoil(chord, 0.14), { depth: span, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 1, curveSegments: 4 }), mat);
    blade.rotation.set(0, Math.PI / 2, 0); blade.rotateZ(0.12); blade.position.set(-span / 2, wy + hgt, wz + chord * 0.5);
    blade.castShadow = true; body.add(blade);
    if (e.wing === 'hoop') {
      for (const s of [1, -1]) {
        const path = []; for (let i = 0; i <= 10; i++) { const f = i / 10; path.push({ p: V(s * (span / 2 - 0.04 - f * 0.1), wy + f * hgt, wz + 0.05 - f * 0.08), a: V(0, 0, 1), b: V(s, 0, 0) }); }
        const leg = new THREE.Mesh(sweep(path, [[-0.07, -0.015], [0.07, -0.015], [0.07, 0.015], [-0.07, 0.015]], true), paint); leg.castShadow = true; body.add(leg);
      }
    } else if (e.wing === 'lip') {
      for (const s of [1, -1]) { const st = new THREE.Mesh(new THREE.BoxGeometry(0.03, hgt, 0.1), paint); st.position.set(s * span * 0.3, wy + hgt / 2, wz + 0.02); body.add(st); }
    } else {
      for (const s of [1, -1]) {
        const up = new THREE.Mesh(new THREE.BoxGeometry(0.018, hgt + 0.05, 0.16), m.black); up.position.set(s * span * 0.22, wy + hgt / 2, wz + chord * 0.1); up.castShadow = true; body.add(up);
        const ep = new THREE.Mesh(new THREE.ExtrudeGeometry(shape2D(['rr', chord * 1.25, hgt * 0.45 + 0.08, 0.02]), { depth: 0.008, bevelEnabled: false }), m.carbon);
        ep.rotation.y = Math.PI / 2; ep.position.set(s * span / 2 + (s > 0 ? 0 : -0.008), wy + hgt - 0.03, wz); body.add(ep);
      }
    }
  }

  // rodas
  const size = { s0: 0, s1: 1, s2: 2 }[e.wsize] || 0;
  const tw = spec.tireW + (wide ? 0.04 : 0) + size * 0.008;
  const rimR = Math.min(spec.R - 0.06, (spec.rim + size) * 0.0127 + 0.012);
  const wheels = [];
  for (const [zc, isF] of [[S.zF, true], [S.zR, false]]) for (const s of [1, -1]) {
    const pivot = new THREE.Group(), cam = new THREE.Group();
    const w = buildWheel({ R: spec.R, rimR, width: tw, design: e.wheels, rimColor: cfg.wheelColor, caliper: cfg.caliper });
    const x = s * (hwAt(zc) - tw / 2 - (wide ? -0.01 : 0.012) + (e.susp === 'slam' ? 0.015 : 0));
    pivot.position.set(x, spec.R, zc);
    cam.rotation.set(0, s > 0 ? 0 : Math.PI, camber);
    cam.add(w.spin); cam.add(w.brake); pivot.add(cam); root.add(pivot);
    wheels.push({ pivot, spin: w.spin, front: isF, sign: s });
  }

  // neon e sombra de contato
  let neon = null;
  if (e.neon === 'on') {
    neon = new THREE.Mesh(new THREE.PlaneGeometry(spec.W + 1.6, spec.L + 1.4), new THREE.MeshBasicMaterial({ map: glowTex(), color: new THREE.Color(cfg.neonColor), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    neon.rotation.x = -Math.PI / 2; neon.position.y = 0.03; root.add(neon);
  }
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(spec.W + 0.7, spec.L + 0.6), new THREE.MeshBasicMaterial({ map: shadowTex(), transparent: true, depthWrite: false, opacity: 0.85, color: 0x000000 }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.012; shadow.renderOrder = 1; root.add(shadow);

  root.traverse(o => { if (o.isMesh && o.castShadow === undefined) o.castShadow = false; });
  const rx = Math.abs(wheels[2].pivot.position.x);
  root.userData = { wheels, exhaust, brakeM: tailM, headM, headCol, rearX: rx, rearZ: S.zR, frontZ: S.zF, L: spec.L, W: spec.W + (wide ? 0.15 : 0), R: spec.R, neon, drop, body, popups, shadow };
  return root;
}

let _glow = null, _shadow = null;
export function glowTex() {
  if (_glow) return _glow;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,.55)'); gr.addColorStop(0.6, 'rgba(255,255,255,.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return (_glow = new THREE.CanvasTexture(c));
}
function shadowTex() {
  if (_shadow) return _shadow;
  const c = document.createElement('canvas'); c.width = 128; c.height = 256;
  const g = c.getContext('2d'), img = g.createImageData(128, 256);
  for (let y = 0; y < 256; y++) for (let x = 0; x < 128; x++) {
    const u = Math.abs(x - 63.5) / 64, v = Math.abs(y - 127.5) / 128;
    const d = Math.pow(Math.pow(u, 4) + Math.pow(v, 4), 0.25), a = Math.max(0, Math.min(1, (1 - d) / 0.35));
    img.data[(y * 128 + x) * 4 + 3] = Math.round(a * a * 200);
  }
  g.putImageData(img, 0, 0);
  return (_shadow = new THREE.CanvasTexture(c));
}

export function disposeObj(o) {
  o.traverse(c => {
    if (c.geometry) c.geometry.dispose();
    if (c.material) (Array.isArray(c.material) ? c.material : [c.material]).forEach(mt => { if (!Object.values(mats()).includes(mt)) mt.dispose(); });
  });
}
