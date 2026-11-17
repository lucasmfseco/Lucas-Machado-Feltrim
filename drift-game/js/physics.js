/* Física arcade de drift. Sem dependência de Three.js.
   Convenção: frente do carro = (sin h, cos h); h cresce virando para a esquerda. */
(function (root) {
  const DG = root.DG = root.DG || {};
  const GEAR_FRAC = [0.24, 0.4, 0.56, 0.72, 0.87, 1.0];
  const GEAR_ACC = [1.0, 0.82, 0.64, 0.5, 0.4, 0.32];
  const IDLE = 950;

  DG.newCar = function (x, z, h) {
    return { x, z, h, vx: 0, vz: 0, w: 0, steer: 0, drift: 0, gear: 0, shiftT: 0, rpmN: 0.1, rpm: IDLE, slip: 0, speed: 0, vF: 0, boost: 0, reverse: false, shifted: 0, lifted: false, thr: 0 };
  };

  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

  DG.stepCar = function (c, inp, dt, s, gripMul) {
    const sh = Math.sin(c.h), ch = Math.cos(c.h);
    let vF = c.vx * sh + c.vz * ch;
    let vL = c.vx * ch - c.vz * sh;
    const speed = Math.hypot(vF, vL);
    gripMul = gripMul || 1;

    c.steer += (inp.steer - c.steer) * Math.min(1, dt * (inp.steer === 0 ? 7 : 10));

    // pedais: S freia e, parado, dá ré
    let thr = 0, brk = 0;
    if (inp.up) { if (vF > -0.5) thr = 1; else brk = 1; }
    if (inp.down) { if (vF > 0.8) brk = 1; else thr = -1; }
    c.reverse = thr < 0;

    // câmbio automático
    const top = s.top;
    c.shifted = 0;
    if (c.shiftT > 0) c.shiftT -= dt;
    const wheelN = Math.abs(vF) / (top * GEAR_FRAC[c.gear]);
    if (c.shiftT <= 0 && vF > 0) {
      if (wheelN > 0.94 && c.gear < 5) { c.gear++; c.shiftT = 0.2; c.shifted = 1; }
      else if (c.gear > 0 && Math.abs(vF) / (top * GEAR_FRAC[c.gear - 1]) < 0.62) { c.gear--; c.shiftT = 0.12; c.shifted = -1; }
    }
    if (vF <= 0.5 && c.gear !== 0) c.gear = 0;

    // motor
    const n = clamp(Math.abs(vF) / (top * GEAR_FRAC[c.gear]), 0, 1);
    const curve = 0.62 + 0.38 * Math.sin(n * Math.PI * 0.9 + 0.2);
    let a = 0;
    if (thr > 0 && c.shiftT <= 0) {
      a = s.accel * GEAR_ACC[c.gear] * curve * (vF < top ? 1 : 0);
      a *= 0.75 + 0.25 * Math.min(1, c.boost + (s.turbo ? 0 : 1));
    } else if (thr < 0) {
      a = vF > -9 ? -s.accel * 0.6 : 0;
    }
    const dragK = s.accel * GEAR_ACC[5] * 0.8 / (top * top);
    a -= Math.sign(vF) * (dragK * vF * vF + 0.35 + (thr === 0 ? 0.9 : 0));
    if (brk) a -= Math.sign(vF) * 15;
    const vF0 = vF;
    vF += a * dt;
    if (thr === 0 && !brk && vF0 * vF < 0) vF = 0;
    if (brk && vF0 * vF < 0) vF = 0;

    // turbo
    const boostT = thr > 0 && c.shiftT <= 0 ? clamp((n - 0.25) * 2.2, 0, 1) : 0;
    c.lifted = s.turbo && c.boost > 0.5 && boostT === 0 && c.thr > 0;
    c.boost += (boostT - c.boost) * Math.min(1, dt * (boostT > c.boost ? 2.2 : 6));
    c.thr = thr > 0 && c.shiftT <= 0 ? 1 : 0;

    // ângulo de deriva: positivo quando a frente aponta mais à esquerda que a velocidade
    const slip = speed > 1.5 ? Math.atan2(-vL, Math.abs(vF)) : 0;
    const aslip = Math.abs(slip);

    // entrar e sair do drift
    const hard = Math.abs(c.steer) > 0.8;
    const want = speed > 8 && vF > 0 && (aslip > 0.15 || (brk && Math.abs(c.steer) > 0.4 && speed > 10) || (thr > 0 && hard && speed > 12.5));
    if (want) c.drift += dt * 5;
    else if (aslip < 0.1 || speed < 6) c.drift -= dt * s.driftHold;
    c.drift = clamp(c.drift, 0, 1);

    // guinada
    const dir = vF >= -0.5 ? 1 : -1;
    let maxYaw = s.steer / (1 + speed / 40) * clamp(speed / 6, 0, 1);
    maxYaw *= 1 - 0.2 * c.drift;
    let target = c.steer * maxYaw * dir;
    if (c.drift > 0.3 && Math.abs(inp.steer) < 0.1) target = -slip * 2.4;      // realinha sozinho
    if (brk && c.drift > 0.2) target += c.steer * 0.5;
    c.w += (target - c.w) * Math.min(1, dt * 7);
    c.h += c.w * dt;

    // aderência lateral
    const dg = s.driftGrip * (1 - 0.22 * (thr > 0 ? 1 : 0)) * (brk ? 0.8 : 1);
    const grip = (s.grip + (dg - s.grip) * c.drift) * gripMul;
    const sp0 = Math.hypot(vF, vL);
    vL *= Math.exp(-grip * dt);
    const sp1 = Math.hypot(vF, vL);
    if (sp1 > 0.01) {
      const k = (sp1 + (sp0 - sp1) * (0.7 + 0.2 * c.drift)) / sp1;
      vF *= k; vL *= k;
    }

    // volta ao referencial do mundo com o novo rumo
    const sh2 = Math.sin(c.h - c.w * dt), ch2 = Math.cos(c.h - c.w * dt);
    c.vx = vF * sh2 + vL * ch2;
    c.vz = vF * ch2 - vL * sh2;

    // limite de ângulo: impede rodar
    const va = Math.atan2(c.vx, c.vz);
    let rel = c.h - va;
    while (rel > Math.PI) rel -= Math.PI * 2;
    while (rel < -Math.PI) rel += Math.PI * 2;
    const sp = Math.hypot(c.vx, c.vz);
    if (sp > 4 && Math.abs(rel) < 2.4 && Math.abs(rel) > s.maxSlip) {
      const ex = (Math.abs(rel) - s.maxSlip) * Math.sign(rel);
      c.h -= ex * Math.min(1, dt * 12);
      if (Math.sign(c.w) === Math.sign(rel)) c.w *= 0.8;
    }

    c.x += c.vx * dt;
    c.z += c.vz * dt;

    // conta-giros: no drift as rodas patinam e o giro sobe
    let rt = n;
    if (thr > 0 && c.drift > 0.2) rt = Math.max(rt, 0.62 + 0.36 * c.drift);
    if (thr > 0 && speed < 4) rt = Math.max(rt, 0.5);
    if (c.shiftT > 0) rt *= 0.8;
    if (thr <= 0 && Math.abs(vF) < 1) rt = 0;
    c.rpmN += (rt - c.rpmN) * Math.min(1, dt * (rt > c.rpmN ? 6 : 4));
    c.rpm = IDLE + c.rpmN * (s.redline - IDLE);
    if (c.rpmN > 0.97) c.rpm -= Math.random() * 180;

    c.speed = sp; c.vF = vF; c.slip = sp > 3 ? rel : 0; c.brake = brk > 0;
    return c;
  };
})(typeof window !== 'undefined' ? window : globalThis);
