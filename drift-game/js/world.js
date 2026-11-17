/* Construção dos mapas: pista, barreiras, céu, luzes e cenário de cada tema. */
(function () {
  const DG = window.DG, T = THREE;

  function rng(seed) { let a = seed >>> 0; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  const THEME = {
    tokyo: { sun: [.3, .8, .2], sunCol: '#8aa0ff', sunInt: .55, hs: '#4a4580', hg: '#0c0c16', hi: 1.5, ground: '#0d0e13', wall: '#6e727c', wallH: 1.1, road: '#15161b', sh: '#1d1e25', exp: 1.15, wet: true },
    touge: { sun: [-.6, .28, -.5], sunCol: '#ffb070', sunInt: 2.8, hs: '#c0a4d8', hg: '#3a2a20', hi: 1.0, ground: '#2c4426', wall: '#aab0b6', wallH: .75, road: '#2a2a2e', sh: '#3b3a33', exp: 1.0 },
    circuit: { sun: [.4, .8, .3], sunCol: '#fff4e0', sunInt: 3.2, hs: '#bcdcff', hg: '#4a6a3a', hi: 1.0, ground: '#3f7d3a', wall: '#ffffff', wallH: 1.0, road: '#2c2d31', sh: 'curb', exp: 1.0 },
    docks: { sun: [-.7, .22, .3], sunCol: '#ffa56a', sunInt: 2.5, hs: '#a79ac0', hg: '#2a2a30', hi: 1.0, ground: '#4e5157', wall: '#9a9c9f', wallH: 1.0, road: '#33353a', sh: '#44474c', exp: 1.0 },
    desert: { sun: [.6, .36, -.4], sunCol: '#ffc890', sunInt: 3.0, hs: '#cfe0ff', hg: '#a0603a', hi: 1.0, ground: '#c98a55', wall: '#d2a878', wallH: .7, road: '#3b3632', sh: '#b88a5a', exp: 1.0 },
    coast: { sun: [.3, .7, -.5], sunCol: '#fff8e8', sunInt: 3.3, hs: '#bfe6ff', hg: '#c9b990', hi: 0.9, ground: '#e0cf9f', wall: '#f4f4f0', wallH: .8, road: '#26282c', sh: '#cfc097', exp: 0.9 },
    snow: { sun: [.2, .6, .4], sunCol: '#e8eef8', sunInt: 1.9, hs: '#dfe8f2', hg: '#aab4c0', hi: 1.0, ground: '#eef2f6', wall: '#f6f8fb', wallH: 1.0, road: '#2f343b', sh: '#cfd8e2', exp: 0.82 },
    arena: { sun: [.2, .9, .1], sunCol: '#8090c0', sunInt: .35, hs: '#3a4268', hg: '#0a0a10', hi: 1.3, ground: '#0b0c10', wall: '#8a8d93', wallH: 1.1, road: '#1d1e23', sh: '#1d1e23', exp: 1.15 }
  };

  function canvasTex(w, h, draw) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = 8;
    return t;
  }
  function speckle(g, w, h, n, R) {
    for (let i = 0; i < n; i++) { const v = R() < 0.5 ? 255 : 0; g.fillStyle = `rgba(${v},${v},${v},${0.03 + R() * 0.06})`; g.fillRect(R() * w, R() * h, 1 + R() * 2, 1 + R() * 2); }
  }
  function roadTex(th, lim, halfW, R) {
    return canvasTex(256, 512, (g, w, h) => {
      g.fillStyle = th.road; g.fillRect(0, 0, w, h);
      speckle(g, w, h, 5000, R);
      const u = (lim - halfW) / (2 * lim) * w;
      if (th.sh === 'curb') for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#f2f2f2' : '#d2202a'; g.fillRect(0, i * h / 8, u, h / 8); g.fillRect(w - u, i * h / 8, u, h / 8); }
      else { g.fillStyle = th.sh; g.fillRect(0, 0, u, h); g.fillRect(w - u, 0, u, h); speckle(g, w, h, 1500, R); }
      g.fillStyle = 'rgba(245,245,240,.9)'; g.fillRect(u, 0, 3, h); g.fillRect(w - u - 3, 0, 3, h);
      g.fillStyle = th.wet ? 'rgba(245,245,240,.85)' : 'rgba(240,200,60,.85)'; g.fillRect(w / 2 - 1.5, 0, 3, h * 0.45);
    });
  }
  function windowTex(R, day) {
    return canvasTex(64, 128, (g, w, h) => {
      g.fillStyle = day ? '#e9e6dc' : '#000'; g.fillRect(0, 0, w, h);
      const cols = day ? ['#35506e', '#2b4057', '#46627f'] : ['#ffd9a0', '#fff2d0', '#a8d8ff', '#ffb870', '#e8f0ff'];
      for (let y = 0; y < 8; y++) for (let x = 0; x < 4; x++) {
        if (!day && R() > 0.46) continue;
        g.fillStyle = cols[(R() * cols.length) | 0]; g.globalAlpha = day ? 1 : 0.45 + R() * 0.55;
        g.fillRect(x * 16 + 3, y * 16 + 4, 10, 9);
      }
      g.globalAlpha = 1;
    });
  }

  /* junta geometrias em uma só, com cor por vértice */
  function merge(parts) {
    const pos = [], nor = [], col = [];
    for (const p of parts) {
      let g = p.geo.index ? p.geo.toNonIndexed() : p.geo.clone();
      if (p.m) g.applyMatrix4(p.m);
      const c = new T.Color(p.color), a = g.attributes.position.array, n = g.attributes.normal.array;
      for (let i = 0; i < a.length; i += 3) { pos.push(a[i], a[i + 1], a[i + 2]); nor.push(n[i], n[i + 1], n[i + 2]); col.push(c.r, c.g, c.b); }
      g.dispose();
    }
    const out = new T.BufferGeometry();
    out.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
    out.setAttribute('normal', new T.Float32BufferAttribute(nor, 3));
    out.setAttribute('color', new T.Float32BufferAttribute(col, 3));
    return out;
  }
  const M = (x, y, z, rx, ry, rz, sx, sy, sz) => new T.Matrix4().compose(new T.Vector3(x, y, z), new T.Quaternion().setFromEuler(new T.Euler(rx || 0, ry || 0, rz || 0)), new T.Vector3(sx || 1, sy || sx || 1, sz || sx || 1));

  function instanced(geo, mat, list, cast) {
    const m = new T.InstancedMesh(geo, mat, list.length), d = new T.Object3D(), c = new T.Color();
    list.forEach((o, i) => {
      d.position.set(o.x, o.y || 0, o.z); d.rotation.set(o.rx || 0, o.ry || 0, 0); d.scale.set(o.sx || 1, o.sy || o.sx || 1, o.sz || o.sx || 1);
      d.updateMatrix(); m.setMatrixAt(i, d.matrix);
      if (o.color) m.setColorAt(i, c.set(o.color));
    });
    m.castShadow = !!cast; m.receiveShadow = false; m.frustumCulled = false;
    return m;
  }

  function strip(trk, o1, y1, o2, y2, tile) {
    const P = trk.pts, N = trk.N, pos = [], uv = [], idx = [], tl = trk.len / Math.max(1, Math.round(trk.len / tile));
    for (let i = 0; i <= N; i++) {
      const p = P[i % N], v = i * (trk.len / N) / tl;
      pos.push(p.x + p.nx * o1, y1, p.z + p.nz * o1, p.x + p.nx * o2, y2, p.z + p.nz * o2); uv.push(0, v, 1, v);
    }
    for (let i = 0; i < N; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    return g;
  }

  function skyDome(cols) {
    const g = new T.SphereGeometry(1900, 32, 20), c = [], p = g.attributes.position;
    const top = new T.Color(cols[0]), mid = new T.Color(cols[1]), bot = new T.Color(cols[2]), t = new T.Color();
    const ss = (a, b, x) => { x = Math.min(1, Math.max(0, (x - a) / (b - a))); return x * x * (3 - 2 * x); };
    for (let i = 0; i < p.count; i++) {
      const h = p.getY(i) / 1900;
      t.copy(bot).lerp(mid, ss(-0.02, 0.2, h)).lerp(top, ss(0.15, 0.7, h));
      c.push(t.r, t.g, t.b);
    }
    g.setAttribute('color', new T.Float32BufferAttribute(c, 3));
    return new T.Mesh(g, new T.MeshBasicMaterial({ vertexColors: true, side: T.BackSide, fog: false, depthWrite: false, toneMapped: false }));
  }

  function glowPoints(list, size, opacity) {
    const pos = [], col = [], c = new T.Color();
    for (const o of list) { pos.push(o.x, o.y, o.z); c.set(o.color); col.push(c.r, c.g, c.b); }
    const g = new T.BufferGeometry();
    g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new T.Float32BufferAttribute(col, 3));
    const p = new T.Points(g, new T.PointsMaterial({ size, map: DG.glowTexture(), vertexColors: true, transparent: true, opacity: opacity || 1, blending: T.AdditiveBlending, depthWrite: false, sizeAttenuation: true, fog: false }));
    p.frustumCulled = false;
    return p;
  }

  const tick = () => new Promise(r => setTimeout(r, 30));

  DG.buildWorld = async function (map, renderer, progress) {
    const th = THEME[map.theme], R = rng(map.id.length * 7919 + map.id.charCodeAt(0) * 31 + map.id.charCodeAt(1));
    const scene = new T.Scene(), trk = DG.sampleTrack(map), lim = trk.limit, P = trk.pts, N = trk.N, B = trk.bounds;
    const cx = (B.x0 + B.x1) / 2, cz = (B.z0 + B.z1) / 2;
    const glows = [], bigGlows = [], pools = [], updaters = [], obstacles = [];
    const world = { scene, track: trk, obstacles, night: !!map.night, theme: th, exposure: th.exp, grip: map.grip };
    const step = async (p, label) => { progress(p, label); await tick(); };

    await step(0.05, 'Pintando o céu');
    scene.fog = new T.Fog(new T.Color(map.fog[0]), map.fog[1], map.fog[2]);
    scene.background = new T.Color(map.sky[2]);
    const sky = skyDome(map.sky); scene.add(sky);
    const sunDir = new T.Vector3(...th.sun).normalize();
    const hemi = new T.HemisphereLight(new T.Color(th.hs), new T.Color(th.hg), th.hi); scene.add(hemi);
    const sun = new T.DirectionalLight(new T.Color(th.sunCol), th.sunInt);
    sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera; sc.left = -55; sc.right = 55; sc.top = 55; sc.bottom = -55; sc.near = 10; sc.far = 400;
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
    scene.add(sun); scene.add(sun.target);
    world.sun = sun; world.sunDir = sunDir;
    if (!map.night) {
      const sp = new T.Sprite(new T.SpriteMaterial({ map: DG.glowTexture(), color: new T.Color(th.sunCol), fog: false, blending: T.AdditiveBlending, depthWrite: false, toneMapped: false }));
      sp.scale.setScalar(map.theme === 'snow' ? 500 : 700); sp.position.copy(sunDir).multiplyScalar(1750); scene.add(sp);
    } else {
      const st = [];
      for (let i = 0; i < 900; i++) { const a = R() * 6.283, e = 0.08 + R() * 1.4; st.push({ x: Math.cos(a) * Math.cos(e) * 1800, y: Math.sin(e) * 1800, z: Math.sin(a) * Math.cos(e) * 1800, color: R() < 0.2 ? '#bcd0ff' : '#ffffff' }); }
      const pts = glowPoints(st, 3, 0.8); pts.material.sizeAttenuation = false; pts.material.size = 2.4; scene.add(pts);
      const moon = new T.Sprite(new T.SpriteMaterial({ map: DG.glowTexture(), color: 0xdfe6ff, fog: false, depthWrite: false, toneMapped: false }));
      moon.scale.setScalar(260); moon.position.copy(sunDir).multiplyScalar(1750); scene.add(moon);
    }
    if (!map.night && map.theme !== 'snow') {
      const ct = canvasTex(128, 64, (g) => { for (let i = 0; i < 9; i++) { const x = 20 + R() * 88, y = 22 + R() * 22, r = 10 + R() * 16, gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 64); } });
      for (let i = 0; i < 16; i++) {
        const s = new T.Sprite(new T.SpriteMaterial({ map: ct, fog: false, depthWrite: false, opacity: 0.55 + R() * 0.3, color: map.theme === 'touge' || map.theme === 'docks' ? 0xffc9a8 : 0xffffff }));
        const a = R() * 6.283, d = 700 + R() * 800; s.position.set(Math.cos(a) * d, 230 + R() * 260, Math.sin(a) * d); s.scale.set(380 + R() * 320, 120 + R() * 80, 1); scene.add(s);
      }
    }

    await step(0.18, 'Asfaltando a pista');
    const gt = canvasTex(128, 128, (g, w, h) => { g.fillStyle = th.ground; g.fillRect(0, 0, w, h); speckle(g, w, h, 1800, R); });
    gt.repeat.set(500, 500);
    const ground = new T.Mesh(new T.PlaneGeometry(5000, 5000), new T.MeshStandardMaterial({ map: gt, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2; ground.position.set(cx, -0.06, cz); ground.receiveShadow = true; scene.add(ground);
    const wallMat = new T.MeshStandardMaterial({ color: new T.Color(th.wall), roughness: 0.8, metalness: map.theme === 'touge' ? 0.7 : 0.05, side: T.DoubleSide });

    const occupied = (x, z, r) => {
      if (trk.arena) return Math.abs(x) < trk.arena.hx + 4 + r && Math.abs(z) < trk.arena.hz + 4 + r;
      const d2 = (lim + 1.2 + r) * (lim + 1.2 + r);
      for (let i = 0; i < N; i += 3) { const p = P[i], dx = p.x - x, dz = p.z - z; if (dx * dx + dz * dz < d2) return true; }
      return false;
    };
    const scatter = (n, dmin, dmax, r, fn) => {
      let done = 0;
      for (let k = 0; k < n * 5 && done < n; k++) {
        let x, z, p = null, s = R() < 0.5 ? 1 : -1;
        if (trk.arena) { const a = R() * 6.283, d = dmin + R() * (dmax - dmin), hx = trk.arena.hx + 6 + r, hz = trk.arena.hz + 6 + r, m = Math.max(Math.abs(Math.cos(a)) / hx, Math.abs(Math.sin(a)) / hz); x = Math.cos(a) / m + Math.cos(a) * d; z = Math.sin(a) / m + Math.sin(a) * d; }
        else { p = P[(R() * N) | 0]; const off = lim + 1.3 + r + dmin + R() * (dmax - dmin); x = p.x + p.nx * s * off; z = p.z + p.nz * s * off; }
        if (occupied(x, z, r)) continue;
        fn(x, z, p, s); done++;
      }
    };

    if (!trk.arena) {
      const rt = roadTex(th, lim, trk.halfW, R);
      const road = new T.Mesh(strip(trk, -lim, 0.01, lim, 0.01, 14), new T.MeshStandardMaterial({ map: rt, roughness: th.wet ? 0.3 : 0.85, metalness: th.wet ? 0.25 : 0, envMapIntensity: th.wet ? 1.5 : 0.25, side: T.DoubleSide }));
      road.receiveShadow = true; scene.add(road);
      await step(0.3, 'Erguendo as barreiras');
      let wm = wallMat;
      if (map.theme === 'circuit') wm = new T.MeshStandardMaterial({ map: canvasTex(64, 64, g => { g.fillStyle = '#f2f2f2'; g.fillRect(0, 0, 64, 64); g.fillStyle = '#d2202a'; g.fillRect(0, 0, 64, 32); }), roughness: 0.8, side: T.DoubleSide });
      const h = th.wallH;
      for (const s of [1, -1]) {
        for (const [a, ya, b, yb] of [[lim, 0, lim, h], [lim, h, lim + 0.45, h], [lim + 0.45, h, lim + 0.45, 0]]) {
          const m = new T.Mesh(strip(trk, s * a, ya, s * b, yb, 4), wm); m.castShadow = true; m.receiveShadow = true; scene.add(m);
        }
        if (map.theme === 'tokyo') {
          const m = new T.Mesh(strip(trk, s * (lim - 0.02), h * 0.62, s * (lim - 0.02), h * 0.74, 4), new T.MeshBasicMaterial({ color: s > 0 ? 0xff2d6f : 0x00e5ff, side: T.DoubleSide, toneMapped: false }));
          scene.add(m);
        }
      }
    } else {
      const a = trk.arena, hx = a.hx, hz = a.hz;
      const at = canvasTex(1024, 1024, (g, w, h) => {
        g.fillStyle = '#1d1e23'; g.fillRect(0, 0, w, h); speckle(g, w, h, 30000, R);
        g.strokeStyle = 'rgba(240,240,235,.75)'; g.lineWidth = 3;
        for (let x = 40; x < w - 40; x += 28) { g.beginPath(); g.moveTo(x, 20); g.lineTo(x, 80); g.stroke(); g.beginPath(); g.moveTo(x, h - 20); g.lineTo(x, h - 80); g.stroke(); }
        g.strokeStyle = 'rgba(255,200,40,.85)'; g.lineWidth = 5;
        for (const [px, pz, r] of [[-55, 10, 16], [55, 10, 16], [0, 40, 12], [0, -5, 10]]) { g.beginPath(); g.arc((px + hx) / (2 * hx) * w, (pz + hz) / (2 * hz) * h, r / (2 * hx) * w, 0, 6.283); g.stroke(); }
        g.strokeRect(12, 12, w - 24, h - 24);
      });
      at.wrapS = at.wrapT = T.ClampToEdgeWrapping;
      const pg = new T.PlaneGeometry(hx * 2, hz * 2); pg.rotateX(-Math.PI / 2);
      const uv = pg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));
      const lot = new T.Mesh(pg, new T.MeshStandardMaterial({ map: at, roughness: 0.55, metalness: 0.1, envMapIntensity: 1 }));
      lot.position.y = 0.01; lot.receiveShadow = true; scene.add(lot);
      await step(0.3, 'Erguendo as barreiras');
      for (const [x, z, w, d] of [[0, hz + 0.3, hx * 2 + 1.2, 0.6], [0, -hz - 0.3, hx * 2 + 1.2, 0.6], [hx + 0.3, 0, 0.6, hz * 2], [-hx - 0.3, 0, 0.6, hz * 2]]) {
        const m = new T.Mesh(new T.BoxGeometry(w, th.wallH, d), wallMat); m.position.set(x, th.wallH / 2, z); m.castShadow = true; scene.add(m);
      }
      const tg = merge([0, 1, 2, 3].map(i => ({ geo: new T.TorusGeometry(1.15, 0.42, 8, 18), color: i % 2 ? '#e8e8e8' : '#141416', m: M(0, 0.35 + i * 0.62, 0, Math.PI / 2) })));
      const stacks = [[-55, 10], [55, 10], [0, 40], [0, -5], [-95, -50], [95, 50], [-95, 55], [95, -50]];
      scene.add(instanced(tg, new T.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }), stacks.map(s => ({ x: s[0], z: s[1] })), true));
      for (const s of stacks) { obstacles.push({ x: s[0], z: s[1], r: 1.6 }); glows.push({ x: s[0], y: 3.2, z: s[1], color: '#ff8a1f' }); }
    }

    await step(0.45, 'Montando o cenário');
    const add = o => scene.add(o);
    const stdV = (o) => new T.MeshStandardMaterial(Object.assign({ vertexColors: true, roughness: 0.9, flatShading: true }, o || {}));

    const buildings = (day, classes, placeFn) => {
      for (const c of classes) {
        const g = new T.BoxGeometry(c.w, c.h, c.w); g.translate(0, c.h / 2, 0);
        const wt = windowTex(R, day); wt.repeat.set(c.rx, c.ry);
        const side = day ? new T.MeshStandardMaterial({ map: wt, roughness: 0.7 }) : new T.MeshStandardMaterial({ color: 0x14161d, emissive: 0xffffff, emissiveMap: wt, emissiveIntensity: 1.5, roughness: 0.6 });
        const cap = new T.MeshStandardMaterial({ color: day ? 0xcfccc2 : 0x101116, roughness: 0.9 });
        const list = placeFn(c);
        if (list.length) add(instanced(g, [side, side, cap, cap, side, side], list, true));
      }
    };
    const lamps = (color, every, opacity) => {
      const poles = [];
      for (let i = 0, k = 0; i < N; i += every, k++) {
        const p = P[i], s = k % 2 ? 1 : -1, x = p.x + p.nx * s * (lim + 1), z = p.z + p.nz * s * (lim + 1);
        poles.push({ x, z }); glows.push({ x: p.x + p.nx * s * (lim - 1.2), y: 8.2, z: p.z + p.nz * s * (lim - 1.2), color });
        pools.push({ x: p.x + p.nx * s * (lim - 4), z: p.z + p.nz * s * (lim - 4), color, o: opacity });
      }
      const pg = merge([{ geo: new T.CylinderGeometry(0.09, 0.13, 8.4, 6), color: '#3a3c42', m: M(0, 4.2, 0) }, { geo: new T.BoxGeometry(0.12, 0.12, 2.6), color: '#3a3c42', m: M(0, 8.3, 0) }]);
      const im = new T.InstancedMesh(pg, stdV({ flatShading: false }), poles.length), d = new T.Object3D();
      for (let i = 0, k = 0; i < N && k < poles.length; i += every, k++) { const p = P[i]; d.position.set(poles[k].x, 0, poles[k].z); d.rotation.y = Math.atan2(p.nx, p.nz); d.updateMatrix(); im.setMatrixAt(k, d.matrix); }
      im.frustumCulled = false; add(im);
    };
    const treeGeo = (snow) => merge([
      { geo: new T.CylinderGeometry(0.22, 0.34, 3, 6), color: '#4a3324', m: M(0, 1.5, 0) },
      { geo: new T.ConeGeometry(2.3, 5, 7), color: snow ? '#2f5a40' : '#24502c', m: M(0, 5, 0) },
      { geo: new T.ConeGeometry(1.7, 4, 7), color: snow ? '#e6eef4' : '#2f6a36', m: M(0, 7.6, 0) },
      { geo: new T.ConeGeometry(1.0, 3, 7), color: snow ? '#f6fafd' : '#3a7a3f', m: M(0, 9.8, 0) }
    ]);
    const mountains = (cols, n, hmin, hmax) => {
      const list = [];
      for (let i = 0; i < n; i++) { const a = i / n * 6.283 + R() * 0.3, r = 260 + R() * 260, d = Math.hypot(B.x1 - B.x0, B.z1 - B.z0) / 2 + r + 90 + R() * 320; list.push({ x: cx + Math.cos(a) * d, z: cz + Math.sin(a) * d, sx: r, sy: hmin + R() * (hmax - hmin), sz: r, ry: R() * 6, color: cols[(R() * cols.length) | 0] }); }
      const g = new T.ConeGeometry(1, 1, 7, 3); g.translate(0, 0.5, 0);
      const p = g.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) > 0.05 && p.getY(i) < 0.95) { p.setX(i, p.getX(i) * (0.8 + R() * 0.45)); p.setZ(i, p.getZ(i) * (0.8 + R() * 0.45)); }
      g.computeVertexNormals();
      add(instanced(g, new T.MeshStandardMaterial({ roughness: 1, flatShading: true }), list));
    };

    if (map.theme === 'tokyo') {
      const neon = ['#ff2d6f', '#00e5ff', '#ffe600', '#7cff3a', '#a14bff', '#ff8a1f', '#ffffff'], signs = [];
      buildings(false, [{ w: 14, h: 26, rx: 1, ry: 1 }, { w: 18, h: 52, rx: 1, ry: 2 }, { w: 24, h: 95, rx: 2, ry: 4 }], c => {
        const l = [];
        scatter(c.h > 60 ? 45 : 70, 2, c.h > 60 ? 150 : 90, c.w * 0.72, (x, z, p, s) => {
          const k = 0.85 + R() * 0.35; l.push({ x, z, sx: k, sy: 0.8 + R() * 0.5, sz: k, ry: Math.atan2(p.nx, p.nz) });
          if (R() < 0.6) {
            const col = neon[(R() * neon.length) | 0], y = 7 + R() * Math.min(26, c.h * 0.5), o = c.w * k * 0.5 + 0.4;
            const sx = x - p.nx * s * o, sz = z - p.nz * s * o;
            signs.push({ x: sx, y, z: sz, ry: Math.atan2(p.nx, p.nz), sx: 1.8 + R() * 2, sy: 5 + R() * 6, sz: 0.5, color: col });
            bigGlows.push({ x: sx - p.nx * s, y, z: sz - p.nz * s, color: col });
          }
        });
        for (let i = 0; i < 26; i++) { const a = R() * 6.283, d = 520 + R() * 500; l.push({ x: cx + Math.cos(a) * d, z: cz + Math.sin(a) * d, sx: 1.6, sy: 1 + R() * 1.6, sz: 1.6 }); }
        return l;
      });
      add(instanced(new T.BoxGeometry(1, 1, 1), new T.MeshBasicMaterial({ toneMapped: false }), signs));
      lamps('#ffd9a8', 16, 0.13);
      const tw = new T.Mesh(new T.ConeGeometry(34, 330, 4, 9, true), new T.MeshBasicMaterial({ color: 0xff6a2a, wireframe: true, fog: false, toneMapped: false }));
      tw.position.set(cx + 520, 165, cz - 380); add(tw);
      for (let i = 0; i < 6; i++) bigGlows.push({ x: cx + 520, y: 60 + i * 52, z: cz - 380, color: i % 2 ? '#ffffff' : '#ff3020' });
    } else if (map.theme === 'touge') {
      const l = []; scatter(1300, 1, 150, 2.2, (x, z) => { const s = 0.8 + R() * 0.9; l.push({ x, z, sx: s, sy: s * (0.9 + R() * 0.4), sz: s, ry: R() * 6 }); });
      add(instanced(treeGeo(false), stdV(), l, true));
      mountains(['#2c3f55', '#3a3660', '#28483a', '#4a3a5a'], 18, 180, 420);
      const rf = []; for (let i = 0; i < N; i += 10) for (const s of [1, -1]) rf.push({ x: P[i].x + P[i].nx * s * (lim - 0.05), y: 0.55, z: P[i].z + P[i].nz * s * (lim - 0.05), color: s > 0 ? '#ff6020' : '#ffffff' });
      const rp = glowPoints(rf, 1.1, 0.9); add(rp);
    } else if (map.theme === 'circuit') {
      const stand = merge([0, 1, 2, 3, 4, 5].map(i => ({ geo: new T.BoxGeometry(46, 1.4, 2.6), color: ['#c8402f', '#e8e2d0', '#2f6fc8', '#e8c22f', '#d8d8d8', '#3a9a5a'][i], m: M(0, 1 + i * 1.5, i * 2.6) }))
        .concat([{ geo: new T.BoxGeometry(48, 0.5, 18), color: '#f2f2f2', m: M(0, 13.5, 7) }, { geo: new T.BoxGeometry(48, 12, 0.6), color: '#d0d4d8', m: M(0, 6.5, 15.5) }]));
      const sl = [];
      for (const i of [0, 40, 80, Math.floor(N / 2), Math.floor(N / 2) + 40]) { const p = P[i % N]; const x = p.x + p.nx * (lim + 9), z = p.z + p.nz * (lim + 9); if (!occupied(x + p.nx * 9, z + p.nz * 9, 20)) sl.push({ x, z, ry: Math.atan2(p.nx, p.nz) }); }
      add(instanced(stand, stdV({ flatShading: false }), sl, true));
      const words = ['DRIFT GP', 'HARU TIRES', 'KAZE OIL', 'TURBO+', 'VALE VERDE'];
      words.forEach((wd, wi) => {
        const bt = canvasTex(256, 64, (g) => { g.fillStyle = ['#d2202a', '#101216', '#f2c200', '#1c3f9e', '#1f8a4c'][wi]; g.fillRect(0, 0, 256, 64); g.fillStyle = wi === 2 ? '#101216' : '#fff'; g.font = 'bold 38px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(wd, 128, 34); });
        const bl = []; scatter(4, 3, 10, 6, (x, z, p, s) => bl.push({ x, y: 4.5, z, ry: Math.atan2(p.nx * s, p.nz * s) + Math.PI }));
        const bm = new T.MeshStandardMaterial({ map: bt, roughness: 0.6 }), dk = new T.MeshStandardMaterial({ color: 0x33363b });
        add(instanced(new T.BoxGeometry(12, 3, 0.3), [dk, dk, dk, dk, bm, bm], bl, true));
        add(instanced(new T.BoxGeometry(0.3, 3, 0.3), dk, bl.reduce((a, b) => a.concat([{ x: b.x + Math.cos(b.ry) * 4, y: 1.5, z: b.z - Math.sin(b.ry) * 4 }, { x: b.x - Math.cos(b.ry) * 4, y: 1.5, z: b.z + Math.sin(b.ry) * 4 }]), [])));
      });
      const rt = merge([{ geo: new T.CylinderGeometry(0.3, 0.4, 3, 6), color: '#5a4030', m: M(0, 1.5, 0) }, { geo: new T.IcosahedronGeometry(3, 1), color: '#2f7a34', m: M(0, 5.2, 0) }, { geo: new T.IcosahedronGeometry(2.2, 1), color: '#3f8f3f', m: M(1.2, 6.8, 0.6) }]);
      const tl = []; scatter(420, 14, 260, 3, (x, z) => { const s = 0.8 + R() * 1; tl.push({ x, z, sx: s, ry: R() * 6 }); });
      add(instanced(rt, stdV(), tl, true));
      mountains(['#5f8f5a', '#6f9f78', '#5a8590'], 12, 90, 200);
    } else if (map.theme === 'docks') {
      const cols = ['#b5332c', '#1f5fa8', '#2f8a5a', '#d9771c', '#e6e6e0', '#1f8a8a', '#8a2f6a', '#c9a11f'], cl = [];
      scatter(190, 0.5, 110, 6.6, (x, z, p) => {
        const ry = Math.atan2(p.tx, p.tz) + (R() < 0.3 ? Math.PI / 2 : 0) + (R() - 0.5) * 0.1, hgt = 1 + ((R() * 3.4) | 0);
        for (let i = 0; i < hgt; i++) cl.push({ x, y: 1.3 + i * 2.6, z, ry, color: cols[(R() * cols.length) | 0] });
      });
      const cg = new T.BoxGeometry(2.5, 2.6, 12.2);
      add(instanced(cg, new T.MeshStandardMaterial({ roughness: 0.7, metalness: 0.3 }), cl, true));
      const crane = merge([
        { geo: new T.BoxGeometry(2, 46, 2), color: '#d9571c', m: M(-12, 23, -9) }, { geo: new T.BoxGeometry(2, 46, 2), color: '#d9571c', m: M(12, 23, -9) },
        { geo: new T.BoxGeometry(2, 46, 2), color: '#d9571c', m: M(-12, 23, 9) }, { geo: new T.BoxGeometry(2, 46, 2), color: '#d9571c', m: M(12, 23, 9) },
        { geo: new T.BoxGeometry(28, 3, 22), color: '#c94a16', m: M(0, 46, 0) }, { geo: new T.BoxGeometry(4, 3, 90), color: '#d9571c', m: M(0, 50, 22) },
        { geo: new T.BoxGeometry(6, 5, 8), color: '#e8e8e0', m: M(0, 45, 20) }, { geo: new T.BoxGeometry(1.2, 26, 1.2), color: '#d9571c', m: M(0, 62, -6, 0.5) }
      ]);
      const zw = B.z1 + 150, crl = [];
      for (let i = 0; i < 5; i++) { const x = cx - 300 + i * 150; crl.push({ x, z: zw - 30 }); bigGlows.push({ x, y: 54, z: zw - 30, color: '#ff3020' }); }
      add(instanced(crane, stdV({ flatShading: false, metalness: 0.3, roughness: 0.6 }), crl, true));
      const water = new T.Mesh(new T.PlaneGeometry(5000, 2000), new T.MeshStandardMaterial({ color: 0x1c2f45, roughness: 0.12, metalness: 0.7, envMapIntensity: 1.6 }));
      water.rotation.x = -Math.PI / 2; water.position.set(cx, -0.03, zw + 1000); add(water);
      const ship = merge([{ geo: new T.BoxGeometry(240, 24, 36), color: '#1d2a3a', m: M(0, 8, 0) }, { geo: new T.BoxGeometry(240, 2, 36), color: '#a8322a', m: M(0, -3, 0) }, { geo: new T.BoxGeometry(22, 26, 30), color: '#e8e8e2', m: M(-90, 33, 0) },
      { geo: new T.BoxGeometry(150, 12, 30), color: '#2f6a8a', m: M(20, 26, 0) }, { geo: new T.BoxGeometry(150, 6, 30), color: '#b5532c', m: M(20, 35, 0) }]);
      const sm = new T.Mesh(ship, stdV({ flatShading: false })); sm.position.set(cx + 60, 0, zw + 70); add(sm);
      lamps('#ffc890', 18, 0.1);
    } else if (map.theme === 'desert') {
      const mg = new T.CylinderGeometry(0.72, 1, 1, 8, 3); mg.translate(0, 0.5, 0);
      const mp = mg.attributes.position; for (let i = 0; i < mp.count; i++) { const k = 0.85 + R() * 0.3; mp.setX(i, mp.getX(i) * k); mp.setZ(i, mp.getZ(i) * k); }
      mg.computeVertexNormals();
      const ml = []; scatter(34, 20, 420, 60, (x, z) => { const r = 28 + R() * 60; ml.push({ x, z, sx: r, sy: 30 + R() * 90, sz: r * (0.7 + R() * 0.6), ry: R() * 6, color: ['#b5532e', '#c9683a', '#9c4526', '#d07a4a'][(R() * 4) | 0] }); });
      add(instanced(mg, new T.MeshStandardMaterial({ roughness: 1, flatShading: true }), ml, true));
      const rl = []; scatter(260, 0.5, 90, 2.5, (x, z) => { const s = 0.6 + R() * 2.6; rl.push({ x, y: s * 0.3, z, sx: s, sy: s * 0.7, sz: s, ry: R() * 6, rx: R(), color: ['#a8553a', '#b86a48', '#8f4a30'][(R() * 3) | 0] }); });
      add(instanced(new T.DodecahedronGeometry(1, 0), new T.MeshStandardMaterial({ roughness: 1, flatShading: true }), rl, true));
      const cg = merge([{ geo: new T.CylinderGeometry(0.32, 0.36, 4.4, 7), color: '#3f7a3a', m: M(0, 2.2, 0) }, { geo: new T.CylinderGeometry(0.2, 0.2, 1.2, 6), color: '#3f7a3a', m: M(0.6, 2.2, 0, 0, 0, Math.PI / 2) }, { geo: new T.CylinderGeometry(0.2, 0.22, 1.6, 6), color: '#478442', m: M(1.1, 2.9, 0) },
      { geo: new T.CylinderGeometry(0.18, 0.18, 1, 6), color: '#3f7a3a', m: M(-0.5, 1.6, 0, 0, 0, Math.PI / 2) }, { geo: new T.CylinderGeometry(0.18, 0.2, 1.3, 6), color: '#478442', m: M(-0.95, 2.2, 0) }]);
      const cl = []; scatter(220, 1, 120, 1.5, (x, z) => { const s = 0.7 + R() * 0.8; cl.push({ x, z, sx: s, ry: R() * 6 }); });
      add(instanced(cg, stdV({ flatShading: false }), cl, true));
    } else if (map.theme === 'coast') {
      const parts = [{ geo: new T.CylinderGeometry(0.16, 0.3, 7.4, 6), color: '#8a6a48', m: M(0.25, 3.7, 0, 0, 0, -0.07) }];
      for (let i = 0; i < 8; i++) { const g = new T.BoxGeometry(0.9, 0.05, 4.2); g.translate(0, 0, 2.1); parts.push({ geo: g, color: i % 2 ? '#2f8a3f' : '#3fa24a', m: M(0.5, 7.3, 0, 0.45 + (i % 3) * 0.12, i / 8 * 6.283, 0) }); }
      const pl = []; scatter(330, 1, 70, 1.6, (x, z) => { const s = 0.85 + R() * 0.5; pl.push({ x, z, sx: s, ry: R() * 6 }); });
      add(instanced(merge(parts), stdV({ flatShading: false, side: T.DoubleSide }), pl, true));
      const zs = B.z0 - 70;
      const sea = new T.Mesh(new T.PlaneGeometry(6000, 3000), new T.MeshStandardMaterial({ color: 0x1589c2, roughness: 0.1, metalness: 0.5, envMapIntensity: 1.4 }));
      sea.rotation.x = -Math.PI / 2; sea.position.set(cx, -0.02, zs - 1500); add(sea);
      const foam = new T.Mesh(new T.PlaneGeometry(6000, 6), new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 })); foam.rotation.x = -Math.PI / 2; foam.position.set(cx, 0, zs - 2); add(foam);
      buildings(true, [{ w: 18, h: 30, rx: 1, ry: 1 }, { w: 22, h: 58, rx: 2, ry: 2 }], c => {
        const l = []; scatter(30, 30, 260, c.w, (x, z) => { if (z > cz + 20) l.push({ x, z, sx: 0.9 + R() * 0.4, sy: 0.8 + R() * 0.5, sz: 0.9 + R() * 0.4, ry: 0 }); }); return l;
      });
      mountains(['#5a8a6a', '#6a9a8a', '#7aa0a8'], 9, 80, 200);
      const ul = [], ucol = ['#e8402f', '#f2c200', '#2f8fd8', '#ff8ac0', '#ffffff'];
      scatter(90, 2, 40, 2, (x, z) => { if (z < cz - 30) ul.push({ x, z, color: ucol[(R() * 5) | 0] }); });
      const ug = merge([{ geo: new T.CylinderGeometry(0.04, 0.04, 2.2, 5), color: '#ffffff', m: M(0, 1.1, 0) }, { geo: new T.ConeGeometry(1.5, 0.6, 8), color: '#ffffff', m: M(0, 2.3, 0) }]);
      if (ul.length) add(instanced(ug, stdV({ flatShading: false }), ul, true));
    } else if (map.theme === 'snow') {
      const l = []; scatter(1000, 1, 140, 2.2, (x, z) => { const s = 0.8 + R() * 1; l.push({ x, z, sx: s, sy: s * (0.9 + R() * 0.4), sz: s, ry: R() * 6 }); });
      add(instanced(treeGeo(true), stdV(), l, true));
      mountains(['#dfe7ee', '#c9d5e0', '#eef3f7', '#b8c6d4'], 18, 200, 460);
      const n = 1800, pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { pos[i * 3] = (R() - 0.5) * 120; pos[i * 3 + 1] = R() * 40; pos[i * 3 + 2] = (R() - 0.5) * 120; }
      const sg = new T.BufferGeometry(); sg.setAttribute('position', new T.BufferAttribute(pos, 3));
      const snow = new T.Points(sg, new T.PointsMaterial({ size: 0.28, map: DG.glowTexture(), color: 0xffffff, transparent: true, opacity: 0.9, depthWrite: false })); snow.frustumCulled = false; add(snow);
      updaters.push((dt, cam) => {
        for (let i = 0; i < n; i++) { pos[i * 3 + 1] -= (4 + (i % 5)) * dt; pos[i * 3] += Math.sin(i + pos[i * 3 + 1]) * dt; if (pos[i * 3 + 1] < 0) pos[i * 3 + 1] = 40; }
        sg.attributes.position.needsUpdate = true; snow.position.set(cam.x, 0, cam.z);
      });
    } else if (map.theme === 'arena') {
      const a = trk.arena, cols = ['#b5332c', '#1f5fa8', '#2f8a5a', '#d9771c', '#e6e6e0', '#1f8a8a'], cl = [];
      for (let x = -a.hx - 10; x <= a.hx + 10; x += 13) for (const z of [a.hz + 9, -a.hz - 9]) { const n = 1 + ((R() * 3) | 0); for (let i = 0; i < n; i++) cl.push({ x, y: 1.3 + i * 2.6, z, ry: Math.PI / 2, color: cols[(R() * 6) | 0] }); }
      for (let z = -a.hz; z <= a.hz; z += 13) for (const x of [a.hx + 9, -a.hx - 9]) { const n = 1 + ((R() * 3) | 0); for (let i = 0; i < n; i++) cl.push({ x, y: 1.3 + i * 2.6, z, color: cols[(R() * 6) | 0] }); }
      add(instanced(new T.BoxGeometry(2.5, 2.6, 12.2), new T.MeshStandardMaterial({ roughness: 0.7, metalness: 0.3 }), cl, true));
      const fl = merge([{ geo: new T.CylinderGeometry(0.4, 0.7, 30, 8), color: '#4a4d55', m: M(0, 15, 0) }, { geo: new T.BoxGeometry(9, 4, 1), color: '#dfe6ff', m: M(0, 31, 0) }]);
      const fls = [];
      for (const [x, z] of [[-a.hx - 14, -a.hz - 14], [a.hx + 14, -a.hz - 14], [-a.hx - 14, a.hz + 14], [a.hx + 14, a.hz + 14], [0, -a.hz - 16], [0, a.hz + 16]]) {
        fls.push({ x, z, ry: Math.atan2(-x, -z) }); bigGlows.push({ x, y: 31, z, color: '#eaf0ff' }); bigGlows.push({ x: x * 0.99, y: 31, z: z * 0.99, color: '#eaf0ff' });
      }
      add(instanced(fl, stdV({ flatShading: false, emissive: 0x222630 }), fls));
      for (let x = -a.hx + 30; x <= a.hx - 30; x += 60) for (let z = -a.hz + 26; z <= a.hz - 26; z += 54) pools.push({ x, z, color: '#cfdcff', o: 0.16, s: 80 });
      const st = windowTex(R, false); st.repeat.set(90, 5);
      const bowl = new T.Mesh(new T.CylinderGeometry(330, 400, 90, 64, 1, true), new T.MeshStandardMaterial({ color: 0x0c0e14, emissive: 0xffffff, emissiveMap: st, emissiveIntensity: 0.9, side: T.BackSide, roughness: 0.8, fog: false }));
      bowl.position.y = 45; add(bowl);
      const pl = new T.PointLight(0xdfe8ff, 5200, 420, 1.6); pl.position.set(0, 60, 0); add(pl);
    }

    await step(0.7, 'Acendendo as luzes');
    if (glows.length) add(glowPoints(glows, map.night ? 7 : 4.5, map.night ? 1 : 0.8));
    if (bigGlows.length) add(glowPoints(bigGlows, 18, 0.7));
    if (pools.length) {
      const pg = new T.PlaneGeometry(1, 1); pg.rotateX(-Math.PI / 2);
      const groups = {};
      for (const p of pools) (groups[p.o] = groups[p.o] || []).push({ x: p.x, y: 0.04, z: p.z, sx: p.s || 22, sy: 1, sz: p.s || 22, color: p.color });
      for (const o in groups) add(instanced(pg, new T.MeshBasicMaterial({ map: DG.glowTexture(), transparent: true, opacity: +o, blending: T.AdditiveBlending, depthWrite: false }), groups[o]));
    }

    await step(0.82, 'Calculando os reflexos');
    const env = new T.Scene();
    env.add(skyDome(map.sky));
    const sb = new T.Mesh(new T.SphereGeometry(map.night ? 60 : 110, 12, 8), new T.MeshBasicMaterial({ color: new T.Color(th.sunCol).multiplyScalar(map.night ? 3 : 9) }));
    sb.position.copy(sunDir).multiplyScalar(1500); env.add(sb);
    if (map.night) {
      const nc = ['#ff2d6f', '#00e5ff', '#ffe600', '#ffffff', '#a14bff', '#ff8a1f'];
      for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283, m = new T.Mesh(new T.BoxGeometry(60, 40 + (i % 3) * 50, 60), new T.MeshBasicMaterial({ color: new T.Color(nc[i % 6]).multiplyScalar(map.theme === 'arena' ? 1.2 : 2.2) })); m.position.set(Math.cos(a) * 420, 30 + (i % 4) * 30, Math.sin(a) * 420); env.add(m); }
    }
    const gnd = new T.Mesh(new T.PlaneGeometry(4000, 4000), new T.MeshBasicMaterial({ color: new T.Color(th.ground).multiplyScalar(0.6) })); gnd.rotation.x = -Math.PI / 2; gnd.position.y = -2; env.add(gnd);
    const pm = new T.PMREMGenerator(renderer);
    const rtEnv = pm.fromScene(env, 0.03, 1, 4000);
    scene.environment = rtEnv.texture; pm.dispose();
    env.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });

    world.update = (dt, cam, carPos) => {
      sky.position.set(cam.x, 0, cam.z);
      sun.position.set(carPos.x + sunDir.x * 160, sunDir.y * 160, carPos.z + sunDir.z * 160);
      sun.target.position.set(carPos.x, 0, carPos.z);
      for (const u of updaters) u(dt, cam);
    };
    world.dispose = () => {
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { if (m.map && m.map !== DG.glowTexture()) m.map.dispose(); if (m.emissiveMap) m.emissiveMap.dispose(); m.dispose(); });
      });
      rtEnv.dispose();
    };
    return world;
  };

  /* Cena da garagem: piso, painéis de luz e reflexos de estúdio */
  DG.buildGarage = function (renderer) {
    const scene = new T.Scene();
    scene.background = new T.Color(0x07080c);
    scene.fog = new T.Fog(0x07080c, 18, 60);
    const floor = new T.Mesh(new T.CircleGeometry(30, 48), new T.MeshStandardMaterial({ color: 0x14161c, roughness: 0.22, metalness: 0.5, envMapIntensity: 0.9 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
    const ring = new T.Mesh(new T.RingGeometry(3.6, 3.68, 64), new T.MeshBasicMaterial({ color: 0xff8a1f, toneMapped: false })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.012; scene.add(ring);
    const panels = [];
    const panel = (w, h, x, y, z, col, k) => { const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: new T.Color(col).multiplyScalar(k), side: T.DoubleSide, toneMapped: false })); m.position.set(x, y, z); m.lookAt(0, 0.8, 0); panels.push(m); return m; };
    scene.add(panel(9, 2.2, 0, 6.5, 0, '#ffffff', 1)); panels[0].rotation.set(Math.PI / 2, 0, 0);
    scene.add(panel(9, 1.6, -17, 6, 6, '#ffb070', 1)); scene.add(panel(9, 1.6, 17, 6, -6, '#70c8ff', 1));
    for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283 + 0.3; scene.add(panel(0.22, 6, Math.cos(a) * 19, 3, Math.sin(a) * 19, ['#ff2d6f', '#00e5ff', '#ff8a1f'][i % 3], 1)); }
    const env = new T.Scene(); env.background = new T.Color(0x05060a);
    for (const p of panels) { const c = p.clone(); c.material = p.material.clone(); c.material.color.multiplyScalar(p === panels[0] ? 9 : 5); c.scale.multiplyScalar(1.6); env.add(c); }
    const wallE = new T.Mesh(new T.SphereGeometry(40, 16, 10), new T.MeshBasicMaterial({ color: 0x1a1d26, side: T.BackSide })); env.add(wallE);
    const pm = new T.PMREMGenerator(renderer); scene.environment = pm.fromScene(env, 0.04).texture; pm.dispose();
    const key = new T.DirectionalLight(0xffffff, 2.2); key.position.set(4, 9, 5); key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
    const sc = key.shadow.camera; sc.left = -5; sc.right = 5; sc.top = 5; sc.bottom = -5; sc.near = 1; sc.far = 30; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03;
    scene.add(key); scene.add(new T.HemisphereLight(0x8090b0, 0x101018, 0.7));
    return scene;
  };
})();
