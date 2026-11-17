/* Som sintetizado: motor por tipo (ordem de ignição), turbo, válvula de alívio, pneus, vento e efeitos. */
(function () {
  const DG = window.DG;
  const ENG = {
    i4: { ph: 4, amps: [1, .82, .95, .8], f: 310, tau: .0045, nz: .25, vol: .9 },
    i4t: { ph: 4, amps: [1, .86, 1, .84], f: 255, tau: .0048, nz: .17, vol: .9 },
    i6: { ph: 6, amps: [1, .9, .97, .92, 1, .88], f: 365, tau: .003, nz: .2, vol: .85 },
    i6t: { ph: 6, amps: [1, .93, .98, .94, 1, .92], f: 245, tau: .0036, nz: .11, vol: .95 },
    i6rb: { ph: 6, amps: [1, .88, .97, .9, 1, .86], f: 335, tau: .003, nz: .22, vol: .9 },
    v6: { ph: 6, amps: [1, .6, .95, .62, 1, .64], f: 285, tau: .0038, nz: .18, vol: .9 },
    v8: { ph: 8, amps: [1, .4, .45, 1, .4, 1, .95, .42], f: 150, tau: .0062, nz: .2, vol: 1 },
    rotary: { ph: 4, amps: [1, .9, 1, .88], f: 430, tau: .0021, nz: .45, vol: .8 }
  };
  let ctx = null, master = null, noise = null, vol = 0.8;
  let eng = null, turbo = null, skid = null, wind = null, bov = null, cur = { type: null };

  function mkNoise() {
    const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  function noiseSrc() { const s = ctx.createBufferSource(); s.buffer = noise; s.loop = true; s.start(); return s; }

  function engineBuffer(type) {
    const e = ENG[type] || ENG.i4, sr = ctx.sampleRate, spc = Math.round(sr * 0.04), cycles = 6, len = spc * cycles;
    const b = ctx.createBuffer(1, len, sr), d = b.getChannelData(0);
    for (let c = 0; c < cycles; c++) for (let i = 0; i < e.ph; i++) {
      const start = Math.round((c + i / e.ph) * spc), A = e.amps[i] * (0.93 + Math.random() * 0.14);
      const dur = Math.round(sr * e.tau * 6), ph = Math.random() * 0.4;
      for (let n = 0; n < dur; n++) {
        const t = n / sr, env = Math.exp(-t / e.tau), att = Math.min(1, n / 6);
        const v = Math.sin(6.2832 * e.f * t + ph) + 0.45 * Math.sin(6.2832 * e.f * 2.31 * t) + 0.2 * Math.sin(6.2832 * e.f * 0.5 * t);
        d[(start + n) % len] += A * att * env * (v + e.nz * (Math.random() * 2 - 1) * 2);
      }
    }
    let pk = 0;
    for (let i = 0; i < len; i++) pk = Math.max(pk, Math.abs(d[i]));
    for (let i = 0; i < len; i++) d[i] *= 0.9 / pk;
    return b;
  }
  function shaper(k) {
    const n = 512, c = new Float32Array(n);
    for (let i = 0; i < n; i++) { const x = i / (n - 1) * 2 - 1; c[i] = Math.tanh(k * x) / Math.tanh(k); }
    const w = ctx.createWaveShaper(); w.curve = c; return w;
  }

  const A = DG.Audio = {
    ready: false,
    init() {
      if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try {
        ctx = new AC();
        master = ctx.createGain(); master.gain.value = vol;
        const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 5;
        master.connect(comp); comp.connect(ctx.destination);
        noise = mkNoise();
        A.ready = true;
      } catch (err) { ctx = null; }
    },
    setVolume(v) { vol = v; if (master) master.gain.value = v; },
    /* liga os sons contínuos do carro */
    startCar(type, stats) {
      if (!A.ready) return;
      A.stopCar();
      const e = ENG[type] || ENG.i4, ex = stats.exhaust;
      const src = ctx.createBufferSource(); src.buffer = engineBuffer(type); src.loop = true;
      const sh = shaper(ex === 'straight' ? 3.2 : ex === 'sport' ? 2.2 : 1.5);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 800; lp.Q.value = 0.7;
      const g = ctx.createGain(); g.gain.value = 0;
      src.connect(sh); sh.connect(lp); lp.connect(g); g.connect(master); src.start();
      eng = { src, lp, g, vol: e.vol * (ex === 'straight' ? 1.25 : ex === 'sport' ? 1.05 : 0.85), bright: ex === 'straight' ? 1.5 : ex === 'sport' ? 1.2 : 1 };
      if (stats.turbo) {
        const o = ctx.createOscillator(); o.type = 'sine';
        const og = ctx.createGain(); og.gain.value = 0;
        const n = noiseSrc(), bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 1.2;
        const ng = ctx.createGain(); ng.gain.value = 0;
        o.connect(og); og.connect(master); n.connect(bp); bp.connect(ng); ng.connect(master); o.start();
        turbo = { o, og, n, bp, ng, lvl: stats.turboLvl };
        const bn = noiseSrc(), hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 2600; hp.Q.value = 0.8;
        const bg = ctx.createGain(); bg.gain.value = 0;
        bn.connect(hp); hp.connect(bg); bg.connect(master);
        bov = { bn, hp, bg, lvl: stats.turboLvl, last: 0 };
      }
      const sn = noiseSrc(), b1 = ctx.createBiquadFilter(), b2 = ctx.createBiquadFilter();
      b1.type = b2.type = 'bandpass'; b1.frequency.value = 980; b1.Q.value = 9; b2.frequency.value = 1480; b2.Q.value = 11;
      const sg = ctx.createGain(); sg.gain.value = 0;
      sn.connect(b1); sn.connect(b2); b1.connect(sg); b2.connect(sg); sg.connect(master);
      skid = { sn, b1, b2, sg };
      const wn = noiseSrc(), wl = ctx.createBiquadFilter(); wl.type = 'lowpass'; wl.frequency.value = 500;
      const wg = ctx.createGain(); wg.gain.value = 0;
      wn.connect(wl); wl.connect(wg); wg.connect(master);
      wind = { wn, wl, wg };
      cur.type = type;
    },
    stopCar() {
      const kill = (o, keys) => { if (!o) return; keys.forEach(k => { try { o[k].stop(); } catch (e) { } try { o[k].disconnect(); } catch (e) { } }); };
      if (eng) { kill(eng, ['src']); eng.g.disconnect(); }
      if (turbo) { kill(turbo, ['o', 'n']); turbo.og.disconnect(); turbo.ng.disconnect(); }
      if (bov) { kill(bov, ['bn']); bov.bg.disconnect(); }
      if (skid) { kill(skid, ['sn']); skid.sg.disconnect(); }
      if (wind) { kill(wind, ['wn']); wind.wg.disconnect(); }
      eng = turbo = bov = skid = wind = null;
    },
    /* st: {rpm, thr, boost, speed, skid(0..1), time} */
    update(st) {
      if (!eng) return;
      const t = ctx.currentTime, rn = st.rpm / 8000;
      eng.src.playbackRate.setTargetAtTime(Math.max(0.25, st.rpm / 3000), t, 0.03);
      eng.lp.frequency.setTargetAtTime((500 + st.thr * 2600 + rn * 3800) * eng.bright, t, 0.05);
      eng.g.gain.setTargetAtTime(eng.vol * (0.3 + 0.7 * st.thr) * (0.55 + 0.45 * rn) * 0.55, t, 0.05);
      if (turbo) {
        turbo.o.frequency.setTargetAtTime(1900 + st.boost * 5200, t, 0.08);
        turbo.og.gain.setTargetAtTime(st.boost * st.boost * 0.028 * turbo.lvl, t, 0.08);
        turbo.bp.frequency.setTargetAtTime(2400 + st.boost * 3000, t, 0.1);
        turbo.ng.gain.setTargetAtTime(st.boost * 0.045 * turbo.lvl, t, 0.1);
      }
      skid.sg.gain.setTargetAtTime(st.skid * 0.2, t, 0.06);
      skid.b1.frequency.setTargetAtTime(880 + st.speed * 7 + Math.sin(st.time * 9) * 45, t, 0.05);
      skid.b2.frequency.setTargetAtTime(1380 + st.speed * 9 + Math.sin(st.time * 6.3) * 60, t, 0.05);
      wind.wg.gain.setTargetAtTime(Math.min(0.14, st.speed / 70 * 0.12), t, 0.2);
      wind.wl.frequency.setTargetAtTime(300 + st.speed * 12, t, 0.2);
    },
    /* válvula de alívio: pshh seguido do "tu-tu-tu" do turbo */
    blowoff() {
      if (!bov) return;
      const t = ctx.currentTime;
      if (t - bov.last < 0.5) return;
      bov.last = t;
      const g = bov.bg.gain, lvl = bov.lvl, pk = 0.16 + 0.1 * lvl;
      g.cancelScheduledValues(t); g.setValueAtTime(0.0001, t);
      g.linearRampToValueAtTime(pk, t + 0.015);
      let tt = t + 0.09;
      g.linearRampToValueAtTime(pk * 0.5, tt);
      const n = Math.round(3 + lvl * 3);
      for (let i = 0; i < n; i++) {
        const a = pk * 0.9 * Math.pow(0.74, i), step = 0.058 + i * 0.006;
        g.linearRampToValueAtTime(a * 0.12, tt + step * 0.45);
        g.linearRampToValueAtTime(a, tt + step * 0.6);
        tt += step;
      }
      g.linearRampToValueAtTime(0.0001, tt + 0.12);
      bov.hp.frequency.cancelScheduledValues(t);
      bov.hp.frequency.setValueAtTime(3400, t); bov.hp.frequency.exponentialRampToValueAtTime(1500, tt + 0.1);
    },
    burst(freq, q, dur, v, type) {
      if (!A.ready) return;
      const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noise;
      const f = ctx.createBiquadFilter(); f.type = type || 'lowpass'; f.frequency.value = freq; f.Q.value = q;
      const g = ctx.createGain(); g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      s.connect(f); f.connect(g); g.connect(master); s.start(t, Math.random()); s.stop(t + dur + 0.02);
    },
    tone(freq, dur, v, type, slide, delay) {
      if (!A.ready) return;
      const t = ctx.currentTime + (delay || 0), o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type || 'sine'; o.frequency.setValueAtTime(freq, t);
      if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0005, t + dur);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
    },
    pop() { A.burst(700 + Math.random() * 500, 1, 0.07, 0.5); A.tone(120, 0.06, 0.25, 'square', 60); },
    thud(v) { A.tone(95, 0.18, 0.5 * v, 'sine', 38); A.burst(500, 0.8, 0.14, 0.45 * v); },
    shift() { A.burst(1800, 2, 0.04, 0.12, 'bandpass'); },
    multUp(n) { A.tone(660 * Math.pow(1.06, n), 0.14, 0.11, 'triangle'); A.tone(990 * Math.pow(1.06, n), 0.2, 0.09, 'triangle', 0, 0.07); },
    bank() { [784, 988, 1175, 1568].forEach((f, i) => A.tone(f, 0.16, 0.09, 'triangle', 0, i * 0.055)); },
    lost() { A.tone(300, 0.3, 0.12, 'sawtooth', 110); },
    ui() { A.tone(720, 0.05, 0.05, 'square'); },
    buy() { [523, 659, 784, 1047].forEach((f, i) => A.tone(f, 0.2, 0.09, 'triangle', 0, i * 0.07)); },
    deny() { A.tone(180, 0.16, 0.1, 'square', 120); },
    suspend() { if (ctx && ctx.state === 'running') ctx.suspend(); },
    resume() { if (ctx && ctx.state === 'suspended') ctx.resume(); }
  };
})();
