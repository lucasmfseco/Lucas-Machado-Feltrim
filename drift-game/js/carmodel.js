/* Modelo 3D dos carros: carroceria por seções (loft), rodas, body kits, aerofólios e detalhes. */
(function () {
  const DG = window.DG, T = THREE;
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const Y0 = 0.17;

  let carbonTex = null, glowTex = null;
  function carbon() {
    if (carbonTex) return carbonTex;
    const c = document.createElement('canvas'); c.width = c.height = 32;
    const g = c.getContext('2d');
    g.fillStyle = '#0c0d10'; g.fillRect(0, 0, 32, 32);
    g.fillStyle = '#23262c';
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) if ((x + y) % 2 === 0) g.fillRect(x * 8, y * 8, 8, 8);
    g.fillStyle = 'rgba(255,255,255,.06)';
    for (let i = 0; i < 4; i++) g.fillRect(i * 8, 0, 1, 32);
    carbonTex = new T.CanvasTexture(c);
    carbonTex.wrapS = carbonTex.wrapT = T.RepeatWrapping; carbonTex.repeat.set(14, 14);
    carbonTex.colorSpace = T.SRGBColorSpace;
    return carbonTex;
  }
  DG.glowTexture = function () {
    if (glowTex) return glowTex;
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,.55)');
    gr.addColorStop(0.6, 'rgba(255,255,255,.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    glowTex = new T.CanvasTexture(c);
    return glowTex;
  };

  function profAt(prof, t) {
    for (let i = 0; i < prof.length - 1; i++) {
      const a = prof[i], b = prof[i + 1];
      if (t <= b[0] || i === prof.length - 2) {
        const f = clamp((t - a[0]) / (b[0] - a[0]), 0, 1);
        return [a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
      }
    }
  }
  function section(car, t) {
    const [hb, hr] = profAt(car.prof, t);
    const e = Math.max(0, (Math.abs(t) - 0.7) / 0.3), hw = car.W / 2;
    const w = hw * (1 - (t > 0 ? 0.17 : 0.12) * e * e);
    return { t, z: t * car.L / 2, w, yb: Y0 + 0.1 * e * e * e, hb, hr, wc: Math.min(hw * car.cw * (1 - 0.22 * e * e), w * 0.86) };
  }
  DG.carSection = section;

  function ring(s) {
    const k = clamp((s.hr - s.hb) / 0.3, 0, 1);
    const h = [
      [0, s.yb], [s.w * 0.84, s.yb], [s.w * 0.975, s.yb + 0.09], [s.w, s.yb + (s.hb - s.yb) * 0.5], [s.w * 0.955, s.hb - 0.06], [s.w * 0.86, s.hb],
      [s.wc, s.hb + 0.004], [s.wc * (1 - 0.16 * k), s.hb + (s.hr - s.hb) * 0.94], [0, s.hr + 0.014]
    ];
    const out = h.slice();
    for (let i = 7; i >= 1; i--) out.push([-h[i][0], h[i][1]]);
    return out;
  }

  function cabinFront(car) {
    let t = 0.3;
    for (const p of car.prof) if (p[0] > -0.1 && p[2] - p[1] < 0.05) { t = p[0]; break; }
    return t;
  }

  function buildBody(car) {
    const ts = [];
    for (let i = 0; i <= 32; i++) ts.push(-1 + i / 16);
    for (const p of car.prof) ts.push(p[0]);
    for (const p of (car.pillars || [])) { ts.push(p - 0.02); ts.push(p + 0.02); }
    ts.sort((a, b) => a - b);
    const st = [];
    for (const t of ts) if (!st.length || t - st[st.length - 1].t > 0.004) st.push(section(car, t));
    const pos = [], idx = { body: [], glass: [], hood: [], roof: [] };
    for (const s of st) for (const p of ring(s)) pos.push(p[0], p[1], s.z);
    const cf = cabinFront(car);
    for (let i = 0; i < st.length - 1; i++) {
      const a = st[i], b = st[i + 1], tm = (a.t + b.t) / 2;
      const ca = a.hr - a.hb, cb = b.hr - b.hb, slope = Math.abs(b.hr - a.hr) / (b.z - a.z);
      const pillar = (car.pillars || []).some(p => Math.abs(tm - p) < 0.021);
      for (let j = 0; j < 16; j++) {
        const m = j < 8 ? j : 15 - j;
        let grp = 'body';
        if (m === 6) {
          if (Math.min(ca, cb) > 0.1 && !pillar) grp = 'glass';
          else if (Math.max(ca, cb) < 0.1 && tm > cf && tm < 0.9) grp = 'hood';
        } else if (m === 7) {
          if (Math.max(ca, cb) > 0.1) grp = slope > 0.2 ? 'glass' : 'roof';
          else if (tm > cf && tm < 0.9) grp = 'hood';
        }
        const v0 = i * 16 + j, v1 = i * 16 + (j + 1) % 16, v2 = (i + 1) * 16 + (j + 1) % 16, v3 = (i + 1) * 16 + j;
        idx[grp].push(v0, v1, v3, v1, v2, v3);
      }
    }
    // tampas dianteira e traseira
    const n = st.length, f = st[n - 1], r = st[0];
    const cF = pos.length / 3; pos.push(0, (f.yb + f.hb) / 2, f.z + 0.05);
    const cR = pos.length / 3; pos.push(0, (r.yb + r.hb) / 2, r.z - 0.04);
    for (let j = 0; j < 16; j++) {
      idx.body.push(cF, (n - 1) * 16 + j, (n - 1) * 16 + (j + 1) % 16);
      idx.body.push(cR, (j + 1) % 16, j);
    }
    const geos = {};
    for (const k in idx) {
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
      const uv = [];
      for (let i = 0; i < pos.length; i += 3) uv.push(pos[i] / 2, pos[i + 2] / 2);
      g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
      g.setIndex(idx[k]); g.computeVertexNormals();
      geos[k] = g;
    }
    return geos;
  }

  function paintMat(cfg) {
    const f = cfg.finish, p = { color: new T.Color(cfg.paint), metalness: 0.15, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.06 };
    if (f === 'metal') { p.metalness = 0.75; p.roughness = 0.36; }
    else if (f === 'pearl') { p.metalness = 0.45; p.roughness = 0.28; p.iridescence = 0.8; p.iridescenceIOR = 1.6; }
    else if (f === 'matte') { p.metalness = 0.1; p.roughness = 0.88; p.clearcoat = 0; }
    else if (f === 'chrome') { p.metalness = 1; p.roughness = 0.07; p.clearcoat = 0; }
    return new T.MeshPhysicalMaterial(p);
  }

  function buildWheel(R, width, design, rimColor, size, caliperColor) {
    const g = new T.Group();
    const rr = R * (0.64 + 0.07 * size), w2 = width / 2;
    const tireM = new T.MeshStandardMaterial({ color: 0x0d0d0f, roughness: 0.92 });
    const rimM = new T.MeshStandardMaterial({ color: new T.Color(rimColor), metalness: 0.9, roughness: 0.28 });
    const darkM = new T.MeshStandardMaterial({ color: 0x15161a, metalness: 0.6, roughness: 0.5 });
    const pts = [[rr, -w2], [R - 0.03, -w2], [R, -w2 + 0.035], [R, w2 - 0.035], [R - 0.03, w2], [rr, w2]].map(p => new T.Vector2(p[0], p[1]));
    const tire = new T.Mesh(new T.LatheGeometry(pts, 28), tireM); tire.rotation.z = Math.PI / 2; tire.castShadow = true; g.add(tire);
    const barrel = new T.Mesh(new T.CylinderGeometry(rr, rr, width, 24, 1, true), new T.MeshStandardMaterial({ color: new T.Color(rimColor), metalness: 0.9, roughness: 0.35, side: T.DoubleSide }));
    barrel.rotation.z = Math.PI / 2; g.add(barrel);
    const dish = design === 'dish';
    const xo = w2 - (dish ? 0.1 : 0.025);
    const lip = new T.Mesh(new T.TorusGeometry(rr - 0.006, dish ? 0.02 : 0.012, 6, 28), rimM); lip.rotation.y = Math.PI / 2; lip.position.x = w2; g.add(lip);
    const spoke = (len, wz, ang, th) => {
      const geo = new T.BoxGeometry(th || 0.028, len, wz); geo.translate(0, len / 2, 0);
      const m = new T.Mesh(geo, rimM); m.rotation.x = ang; m.position.x = xo; g.add(m);
    };
    const L = rr - 0.005, PI2 = Math.PI * 2;
    if (design === 'six') for (let i = 0; i < 6; i++) spoke(L, 0.06, i / 6 * PI2, 0.04);
    else if (design === 'star') for (let i = 0; i < 5; i++) { spoke(L, 0.022, i / 5 * PI2 - 0.13); spoke(L, 0.022, i / 5 * PI2 + 0.13); }
    else if (design === 'mesh') for (let i = 0; i < 12; i++) { spoke(L, 0.013, i / 12 * PI2 - 0.2, 0.02); spoke(L, 0.013, i / 12 * PI2 + 0.2, 0.02); }
    else if (design === 'multi') for (let i = 0; i < 10; i++) spoke(L, 0.02, i / 10 * PI2);
    else if (design === 'dish') for (let i = 0; i < 5; i++) spoke(L, 0.055, i / 5 * PI2, 0.03);
    else if (design === 'fan') {
      const d = new T.Mesh(new T.CylinderGeometry(rr * 0.97, rr * 0.97, 0.02, 28), rimM); d.rotation.z = Math.PI / 2; d.position.x = xo; g.add(d);
      for (let i = 0; i < 12; i++) {
        const geo = new T.BoxGeometry(0.03, rr * 0.5, 0.018); geo.translate(0, rr * 0.6, 0);
        const m = new T.Mesh(geo, darkM); m.rotation.x = i / 12 * PI2; m.position.x = xo + 0.002; g.add(m);
      }
    } else for (let i = 0; i < 5; i++) spoke(L, 0.085, i / 5 * PI2, 0.035);
    const hub = new T.Mesh(new T.CylinderGeometry(0.055, 0.06, 0.05, 12), rimM); hub.rotation.z = Math.PI / 2; hub.position.x = xo + 0.01; g.add(hub);
    if (design !== 'fan') {
      const disc = new T.Mesh(new T.CylinderGeometry(rr * 0.8, rr * 0.8, 0.02, 24), new T.MeshStandardMaterial({ color: 0x77797d, metalness: 0.9, roughness: 0.4 }));
      disc.rotation.z = Math.PI / 2; disc.position.x = xo - 0.07; g.add(disc);
    }
    g.userData.caliperX = xo - 0.06; g.userData.rr = rr;
    return g;
  }

  DG.buildCar = function (car, cfg) {
    const e = cfg.eq, root = new T.Group(), body = new T.Group();
    root.add(body);
    const hl = car.L / 2, hw = car.W / 2, R = car.wheelR;
    const drop = { stock: 0, low: 0.04, coil: 0.07, slam: 0.1 }[e.susp] || 0;
    const camber = { coil: 0.045, slam: 0.11 }[e.susp] || 0;
    body.position.y = -drop;

    const paint = paintMat(cfg);
    const carbonM = new T.MeshPhysicalMaterial({ map: carbon(), color: 0xffffff, metalness: 0.3, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.1 });
    const blackM = new T.MeshStandardMaterial({ color: 0x0b0c0e, roughness: 0.55, metalness: 0.2 });
    const glossBlack = new T.MeshPhysicalMaterial({ color: 0x050506, roughness: 0.2, metalness: 0.3, clearcoat: 1 });
    const chromeM = new T.MeshStandardMaterial({ color: 0xd8dade, metalness: 1, roughness: 0.15 });
    const tintO = { none: 0.84, mid: 0.93, dark: 0.985 }[e.tint] || 0.84;
    const glassM = new T.MeshPhysicalMaterial({ color: e.tint === 'none' ? 0x1a2630 : 0x06080a, metalness: 0.7, roughness: 0.04, transparent: true, opacity: tintO, clearcoat: 1 });
    const headCol = { white: 0xfff6e0, yellow: 0xffd23a, ice: 0xbfe4ff }[e.lights] || 0xfff6e0;
    const headM = new T.MeshStandardMaterial({ color: 0xffffff, emissive: headCol, emissiveIntensity: 2.2, roughness: 0.2 });
    const brakeM = new T.MeshStandardMaterial({ color: 0x5a0508, emissive: 0xff1020, emissiveIntensity: 1.1, roughness: 0.3 });

    const geos = buildBody(car);
    const add = (geo, mat, shadow) => { const m = new T.Mesh(geo, mat); m.castShadow = !!shadow; body.add(m); return m; };
    add(geos.body, paint, true);
    add(geos.glass, glassM);
    add(geos.hood, e.hood.indexOf('carbon') === 0 ? carbonM : paint, true);
    add(geos.roof, e.roof === 'carbon' ? carbonM : e.roof === 'black' ? glossBlack : paint, true);

    const box = (w, h, d, mat, x, y, z, parent) => { const m = new T.Mesh(new T.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); (parent || body).add(m); return m; };
    const disk = (r, mat, x, y, z, back) => { const m = new T.Mesh(new T.CylinderGeometry(r, r, 0.03, 16), mat); m.rotation.x = Math.PI / 2; m.position.set(x, y, z); body.add(m); return m; };
    const both = fn => { fn(1); fn(-1); };

    const F = section(car, 1), F9 = section(car, 0.94), Rr = section(car, -1), cf = cabinFront(car);
    const fh = F.hb - F.yb;

    // grade e entradas de ar
    const gy = F.yb + fh * 0.36, gz = hl + 0.035;
    if (car.grille === 'kidney') {
      both(s => box(0.2, 0.11, 0.03, blackM, s * 0.12, F.hb - 0.1, gz - 0.01));
      box(F.w * 1.1, 0.09, 0.03, blackM, 0, F.yb + 0.1, gz);
    } else if (car.grille === 'hex') box(F.w * 1.25, fh * 0.55, 0.03, blackM, 0, F.yb + fh * 0.5, gz);
    else if (car.grille === 'mouth') box(F.w * 0.9, fh * 0.42, 0.03, blackM, 0, gy, gz);
    else if (car.grille === 'wide') { box(F.w * 1.25, fh * 0.3, 0.03, blackM, 0, gy, gz); both(s => box(0.16, 0.09, 0.03, blackM, s * F.w * 0.78, F.yb + 0.09, gz - 0.03)); }
    else box(F.w * 1.15, 0.08, 0.03, blackM, 0, gy, gz);

    // faróis
    const hy = F9.hb - 0.05, hz = hl * 0.94;
    if (car.head === 'quad') both(s => { disk(0.062, headM, s * F.w * 0.52, F.hb - 0.1, gz - 0.01); disk(0.062, headM, s * F.w * 0.8, F.hb - 0.1, gz - 0.04); });
    else if (car.head === 'triple') both(s => { for (let i = 0; i < 3; i++) { const m = new T.Mesh(new T.SphereGeometry(0.058, 10, 8), headM); m.position.set(s * F9.w * (0.5 + i * 0.17), hy + 0.01 - i * 0.012, hz + 0.02 - i * 0.05); body.add(m); } });
    else if (car.head === 'sleek') both(s => { const m = box(0.42, 0.07, 0.3, headM, s * F9.w * 0.66, hy + 0.012, hz - 0.04); m.rotation.y = -s * 0.5; });
    else if (car.head === 'popup') both(s => { box(0.26, 0.05, 0.03, headM, s * F.w * 0.66, F.yb + fh * 0.62, gz - 0.02); box(0.3, 0.012, 0.2, glossBlack, s * F9.w * 0.6, section(car, 0.84).hb + 0.004, hl * 0.84); });
    else both(s => box(0.38, 0.11, 0.24, headM, s * F9.w * 0.66, hy, hz));
    both(s => box(0.09, 0.04, 0.03, new T.MeshStandardMaterial({ color: 0xff9a1f, emissive: 0xff7a00, emissiveIntensity: 0.6 }), s * F.w * 0.86, F.yb + 0.16, gz - 0.07));

    // lanternas
    const ty = Rr.yb + (Rr.hb - Rr.yb) * 0.74, tz = -hl - 0.04;
    if (car.tail === 'bar') box(Rr.w * 1.7, 0.08, 0.03, brakeM, 0, ty, tz);
    else if (car.tail === 'barround') { box(Rr.w * 1.6, 0.03, 0.03, brakeM, 0, ty, tz); both(s => { disk(0.06, brakeM, s * Rr.w * 0.74, ty, tz); disk(0.05, brakeM, s * Rr.w * 0.52, ty, tz); }); }
    else if (car.tail === 'round2') both(s => { disk(0.082, brakeM, s * Rr.w * 0.74, ty, tz); disk(0.062, brakeM, s * Rr.w * 0.5, ty, tz); });
    else if (car.tail === 'round4') both(s => { for (let i = 0; i < 3; i++) disk(0.064 - i * 0.008, brakeM, s * Rr.w * (0.8 - i * 0.18), ty, tz); });
    else if (car.tail === 'tri') both(s => { for (let i = 0; i < 3; i++) box(0.05, 0.16, 0.03, brakeM, s * Rr.w * (0.82 - i * 0.11), ty, tz); });
    else if (car.tail === 'vert') both(s => box(0.13, 0.2, 0.03, brakeM, s * Rr.w * 0.78, ty - 0.02, tz));
    else both(s => box(0.36, 0.1, 0.03, brakeM, s * Rr.w * 0.62, ty, tz));
    box(0.32, 0.11, 0.012, new T.MeshStandardMaterial({ color: 0xf3f3ee, roughness: 0.6 }), 0, Rr.yb + (Rr.hb - Rr.yb) * 0.36, tz + 0.01);

    // retrovisores
    const ms = section(car, cf - 0.04);
    both(s => box(0.14, 0.08, 0.08, paint, s * (ms.w * 0.9 + 0.07), ms.hb + 0.075, ms.z));

    // caixas de roda
    const zf = car.wb / 2 + 0.04, zr = -car.wb / 2 + 0.04;
    const wellG = new T.CylinderGeometry(R + 0.04, R + 0.04, car.W + 0.012, 24);
    for (const z of [zf, zr]) { const m = new T.Mesh(wellG, blackM); m.rotation.z = Math.PI / 2; m.position.set(0, R + 0.04 + drop * 0.5, z); body.add(m); }

    // escape
    const exR = (car.bigTip ? 0.055 : 0.036) * (e.exhaust === 'straight' ? 1.35 : e.exhaust === 'sport' ? 1.15 : 1);
    const exM = e.exhaust === 'straight' ? new T.MeshStandardMaterial({ color: 0x6f7fd0, metalness: 1, roughness: 0.25 }) : chromeM;
    const exX = car.tips === 4 ? [0.56, 0.4, -0.4, -0.56] : car.tips === 2 ? [0.5, -0.5] : [-0.5];
    const exhaust = [];
    for (const fx of exX) {
      const m = new T.Mesh(new T.CylinderGeometry(exR, exR, 0.2, 12, 1, true), exM); m.material.side = T.DoubleSide;
      m.rotation.x = Math.PI / 2; m.position.set(fx * Rr.w, Y0 + 0.07, -hl - 0.03); body.add(m);
      exhaust.push(new T.Vector3(fx * Rr.w, Y0 + 0.07 - drop, -hl - 0.15));
    }

    // body kits
    const kit = e.kit, wide = kit === 'wide' || kit === 'widepro', aero = kit === 'aero' || kit === 'widepro';
    const off = kit === 'wide' ? 0.07 : kit === 'widepro' ? 0.1 : 0;
    const kitM = aero ? carbonM : paint;
    if (kit !== 'stock') {
      box(F.w * 2.08, 0.03, 0.26, aero ? carbonM : blackM, 0, Y0 + 0.075, hl - 0.06);
      box(F.w * 1.9, 0.09, 0.1, paint, 0, Y0 + 0.13, hl - 0.03);
      const sl = car.wb - 2 * R - 0.2;
      both(s => box(0.07, 0.09, sl, kitM, s * (hw + 0.012 + off * 0.5), Y0 + 0.04, 0.04));
    }
    if (aero) {
      both(s => { for (let i = 0; i < 2; i++) { const m = box(0.22, 0.014, 0.16, carbonM, s * (F9.w + 0.05), Y0 + 0.2 + i * 0.13, hl * 0.9); m.rotation.z = -s * 0.35; m.rotation.y = -s * 0.25; } });
      box(Rr.w * 1.6, 0.1, 0.24, carbonM, 0, Y0 + 0.06, -hl + 0.06);
      for (let i = -2; i <= 2; i++) box(0.012, 0.11, 0.3, carbonM, i * Rr.w * 0.3, Y0 + 0.05, -hl + 0.02);
    }
    if (wide) {
      const tube = kit === 'widepro' ? 0.1 : 0.08;
      const fg = new T.TorusGeometry(R + 0.05, tube, 8, 22, Math.PI);
      const rivM = new T.MeshStandardMaterial({ color: 0x1a1b1e, metalness: 0.8, roughness: 0.4 });
      for (const z of [zf, zr]) both(s => {
        const m = new T.Mesh(fg, paint); m.rotation.y = Math.PI / 2; m.scale.set(1, 1, 0.85);
        m.position.set(s * (hw + off * 0.45), R + drop * 0.6, z); m.castShadow = true; body.add(m);
        if (kit === 'wide') for (let i = 0; i < 7; i++) {
          const a = (i + 0.5) / 7 * Math.PI, rv = new T.Mesh(new T.SphereGeometry(0.014, 6, 5), rivM);
          rv.position.set(s * (hw + off * 0.45 + tube * 0.82), R + drop * 0.6 + Math.sin(a) * (R + 0.075), z + Math.cos(a) * (R + 0.075)); body.add(rv);
        }
      });
    }

    // capô com saídas de ar
    if (e.hood === 'vent' || e.hood === 'carbonvent') {
      const hs = section(car, cf + 0.28);
      both(s => { const m = box(0.13, 0.014, 0.34, blackM, s * hs.w * 0.36, hs.hb + 0.006, hs.z); m.rotation.x = 0.05; });
    }

    // aerofólios
    const D = section(car, -0.9), dy = D.hb, wz = -hl * 0.9, W = car.W;
    if (e.wing === 'duck') { const m = box(W * 0.8, 0.03, 0.26, paint, 0, dy + 0.045, -hl + 0.12); m.rotation.x = 0.38; }
    else if (e.wing === 'lip') { box(W * 0.8, 0.022, 0.17, paint, 0, dy + 0.11, wz); both(s => box(0.04, 0.1, 0.12, paint, s * W * 0.3, dy + 0.055, wz)); }
    else if (e.wing === 'hoop') {
      box(W * 0.88, 0.035, 0.2, paint, 0, dy + 0.3, wz - 0.05);
      both(s => { const m = box(0.06, 0.34, 0.2, paint, s * W * 0.41, dy + 0.15, wz); m.rotation.x = 0.3; m.rotation.z = s * 0.12; });
    } else if (e.wing === 'gt' || e.wing === 'gtbig') {
      const big = e.wing === 'gtbig', h = big ? 0.5 : 0.33, ww = big ? W * 1.02 : W * 0.92, z = wz - (big ? 0.12 : 0.02);
      const blade = box(ww, 0.028, big ? 0.32 : 0.26, carbonM, 0, dy + h, z); blade.rotation.x = 0.14; blade.castShadow = true;
      both(s => { box(0.02, h, 0.16, blackM, s * W * 0.2, dy + h / 2, z + 0.04); box(0.012, big ? 0.2 : 0.14, big ? 0.36 : 0.3, carbonM, s * ww / 2, dy + h + 0.02, z); });
    }

    // rodas
    const tw = wide ? 0.27 : 0.23, size = { s0: 0, s1: 1, s2: 2 }[e.wsize] || 0, wheels = [];
    const calM = new T.MeshStandardMaterial({ color: new T.Color(cfg.caliper || '#c2161a'), roughness: 0.4, metalness: 0.3 });
    for (const [z, front] of [[zf, true], [zr, false]]) for (const s of [1, -1]) {
      const pivot = new T.Group(), cam = new T.Group(), spin = buildWheel(R, tw, e.wheels, cfg.wheelColor, size, cfg.caliper);
      pivot.position.set(s * (hw - tw / 2 + 0.018 + off), R, z);
      cam.rotation.set(0, s > 0 ? 0 : Math.PI, camber);
      if (e.wheels !== 'fan') { const c = new T.Mesh(new T.BoxGeometry(0.05, 0.11, 0.16), calM); c.position.set(spin.userData.caliperX, spin.userData.rr * 0.5, 0.02 + spin.userData.rr * 0.4); cam.add(c); }
      cam.add(spin); pivot.add(cam); root.add(pivot);
      wheels.push({ pivot, spin, front, sign: s });
    }

    // neon inferior
    let neon = null;
    if (e.neon === 'on') {
      neon = new T.Mesh(new T.PlaneGeometry(car.W + 1.5, car.L + 1.3), new T.MeshBasicMaterial({ map: DG.glowTexture(), color: new T.Color(cfg.neonColor), transparent: true, blending: T.AdditiveBlending, depthWrite: false, opacity: 0.9 }));
      neon.rotation.x = -Math.PI / 2; neon.position.y = 0.035; root.add(neon);
      both(s => box(0.03, 0.02, car.wb * 0.7, new T.MeshBasicMaterial({ color: new T.Color(cfg.neonColor) }), s * hw * 0.8, Y0 - 0.02, 0));
    }

    root.userData = { wheels, exhaust, brakeM, headM, headCol, rearX: hw - tw / 2 + off, rearZ: zr, frontZ: zf, L: car.L, W: car.W + off * 2, R, neon, drop, body };
    return root;
  };

  DG.disposeObj = function (o) {
    o.traverse(c => {
      if (c.geometry) c.geometry.dispose();
      if (c.material) (Array.isArray(c.material) ? c.material : [c.material]).forEach(m => m.dispose());
    });
  };
})();
