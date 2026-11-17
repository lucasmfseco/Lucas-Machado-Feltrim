/* Texturas procedurais: asfalto com faixas, rocha, muro de contenção, folhagem, fachadas, letreiros. */
import * as THREE from 'three';

export function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

/* ruído de valor 2D periódico e fbm */
export function makeNoise(seed) {
  const R = rng(seed), P = new Float32Array(256 * 256);
  for (let i = 0; i < P.length; i++) P[i] = R();
  const at = (x, y) => P[((y & 255) << 8) | (x & 255)];
  const n = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = at(xi, yi), b = at(xi + 1, yi), c = at(xi, yi + 1), d = at(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  const fbm = (x, y, o = 5) => { let s = 0, amp = 0.5, f = 1; for (let i = 0; i < o; i++) { s += n(x * f, y * f) * amp; amp *= 0.5; f *= 2.03; } return s; };
  return { n, fbm };
}

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function toTex(c, srgb = true, rep = [1, 1]) {
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
/* mapa de normais a partir de um campo de altura */
function normalFrom(h, w, ht, strength) {
  const c = canvas(w, ht), g = c.getContext('2d'), img = g.createImageData(w, ht);
  for (let y = 0; y < ht; y++) for (let x = 0; x < w; x++) {
    const l = h[y * w + ((x - 1 + w) % w)], r = h[y * w + ((x + 1) % w)], u = h[((y - 1 + ht) % ht) * w + x], d = h[((y + 1) % ht) * w + x];
    let nx = (l - r) * strength, ny = (u - d) * strength, nz = 1; const L = Math.hypot(nx, ny, nz); nx /= L; ny /= L; nz /= L;
    const k = (y * w + x) * 4; img.data[k] = (nx * 0.5 + 0.5) * 255; img.data[k + 1] = (ny * 0.5 + 0.5) * 255; img.data[k + 2] = (nz * 0.5 + 0.5) * 255; img.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0); return c;
}

/* Asfalto: textura de cor com faixas (u atravessa a pista, v ao longo) + normal + rugosidade */
export function roadTextures(o) {
  const W = 512, H = 1024, R = rng(o.seed || 7), N = makeNoise(o.seed || 7);
  const hgt = new Float32Array(W * H), c = canvas(W, H), g = c.getContext('2d'), img = g.createImageData(W, H);
  const base = new THREE.Color(o.color || '#2b2c30'), rough = canvas(W, H), rg = rough.getContext('2d'), rimg = rg.createImageData(W, H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const big = N.fbm(x / 90, y / 90, 4), fine = R();
    const agg = fine > 0.93 ? 0.18 : fine < 0.06 ? -0.14 : 0;
    const v = 0.82 + big * 0.28 + agg + (R() - 0.5) * 0.08;
    hgt[y * W + x] = fine * 0.25 + big * 0.75;
    const k = (y * W + x) * 4;
    img.data[k] = Math.min(255, base.r * 255 * v * 1.15); img.data[k + 1] = Math.min(255, base.g * 255 * v * 1.15); img.data[k + 2] = Math.min(255, base.b * 255 * v * 1.15); img.data[k + 3] = 255;
    if (R() < 0.1) { img.data[k] *= 0.85; img.data[k + 1] *= 0.85; img.data[k + 2] *= 0.85; }
    const r0 = (o.wet ? 0.4 : 0.86) + (big - 0.5) * (o.wet ? 0.35 : 0.1) + (fine - 0.5) * 0.06;
    rimg.data[k] = rimg.data[k + 1] = rimg.data[k + 2] = Math.max(0, Math.min(255, r0 * 255)); rimg.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0); rg.putImageData(rimg, 0, 0);
  // remendos e trilhas de pneu escurecidas
  g.globalAlpha = 0.18; g.fillStyle = '#000';
  for (const f of [0.32, 0.4, 0.6, 0.68]) g.fillRect(f * W - 10, 0, 20, H);
  g.globalAlpha = 0.25;
  for (let i = 0; i < 5; i++) { g.fillStyle = R() < 0.5 ? '#1a1a1d' : '#3a3a3e'; g.fillRect(R() * W * 0.6 + W * 0.2, R() * H, 30 + R() * 60, 40 + R() * 120); }
  g.globalAlpha = 1;
  // faixas
  const u = f => f * W, paint = o.paint || '#e9e7df';
  const edge = o.edge; // fração da largura onde fica a linha de borda
  const line = (x, w, col, dash) => {
    g.fillStyle = col; rg.fillStyle = '#7a7a7a';
    if (!dash) { g.fillRect(x - w / 2, 0, w, H); rg.fillRect(x - w / 2, 0, w, H); }
    else for (let y = 0; y < H; y += dash[0] + dash[1]) { g.fillRect(x - w / 2, y, w, dash[0]); rg.fillRect(x - w / 2, y, w, dash[0]); }
  };
  if (edge) { line(u(edge), 7, paint); line(u(1 - edge), 7, paint); }
  if (o.center === 'yellow') { line(u(0.5) - 5, 5, '#e2b53a'); line(u(0.5) + 5, 5, '#e2b53a'); }
  else if (o.center === 'dash') line(u(0.5), 6, paint, [H * 0.25, H * 0.25]);
  if (o.curb) {
    for (let k = 0; k < 8; k++) { g.fillStyle = k % 2 ? '#f1f1ee' : '#c4202a'; g.fillRect(0, k * H / 8, u(edge) - 4, H / 8); g.fillRect(u(1 - edge) + 4, k * H / 8, W - u(1 - edge) - 4, H / 8); }
  }
  // desgaste por cima das faixas
  g.fillStyle = 'rgba(40,40,40,.35)';
  for (let i = 0; i < 9000; i++) g.fillRect(R() * W, R() * H, 2, 2);
  return { map: toTex(c), normal: toTex(normalFrom(hgt, W, H, 0.9), false), rough: toTex(rough, false) };
}

export function rockTextures(seed, tint) {
  const W = 512, N = makeNoise(seed), R = rng(seed), h = new Float32Array(W * W), c = canvas(W, W), g = c.getContext('2d'), img = g.createImageData(W, W);
  const col = new THREE.Color(tint || '#7d7568');
  for (let y = 0; y < W; y++) for (let x = 0; x < W; x++) {
    const a = N.fbm(x / 64, y / 64, 6), strata = Math.sin((y + a * 120) / 9) * 0.5 + 0.5, v = a * 0.7 + strata * 0.25 + R() * 0.08;
    h[y * W + x] = v; const k = (y * W + x) * 4, f = 0.55 + v * 0.75;
    img.data[k] = col.r * 255 * f; img.data[k + 1] = col.g * 255 * f; img.data[k + 2] = col.b * 255 * f; img.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return { map: toTex(c), normal: toTex(normalFrom(h, W, W, 6), false) };
}

/* muro de contenção em grelha de concreto, típico das estradas de serra japonesas */
export function latticeTextures() {
  const W = 512, c = canvas(W, W), g = c.getContext('2d'), N = makeNoise(31), R = rng(31), h = new Float32Array(W * W);
  const img = g.createImageData(W, W);
  for (let y = 0; y < W; y++) for (let x = 0; x < W; x++) {
    const cell = 128, bx = x % cell, by = y % cell, beam = bx < 22 || by < 22;
    const n = N.fbm(x / 40, y / 40, 4), k = (y * W + x) * 4;
    let r, gg, b;
    if (beam) { const v = 0.62 + n * 0.25 + (R() - 0.5) * 0.06; r = 168 * v; gg = 166 * v; b = 158 * v; h[y * W + x] = 1; }
    else { const v = 0.4 + n * 0.5; r = 70 * v; gg = 92 * v; b = 48 * v; h[y * W + x] = 0.2 + n * 0.2; }
    img.data[k] = r; img.data[k + 1] = gg; img.data[k + 2] = b; img.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  g.globalAlpha = 0.25; g.fillStyle = '#2a2a24';
  for (let i = 0; i < 40; i++) { const x = R() * W; g.fillRect(x, R() * W, 2 + R() * 3, 30 + R() * 90); }
  g.globalAlpha = 1;
  return { map: toTex(c), normal: toTex(normalFrom(h, W, W, 3), false) };
}

export function concreteTextures(seed, tint) {
  const W = 256, c = canvas(W, W), g = c.getContext('2d'), N = makeNoise(seed), R = rng(seed), img = g.createImageData(W, W), col = new THREE.Color(tint || '#a9a8a2');
  for (let y = 0; y < W; y++) for (let x = 0; x < W; x++) {
    const v = 0.75 + N.fbm(x / 30, y / 30, 4) * 0.35 + (R() - 0.5) * 0.08, k = (y * W + x) * 4;
    const stain = Math.max(0, 1 - y / W * 1.6) * N.fbm(x / 12, 3, 2) * 0.25;
    img.data[k] = col.r * 255 * (v - stain); img.data[k + 1] = col.g * 255 * (v - stain); img.data[k + 2] = col.b * 255 * (v - stain * 0.8); img.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(0, 0, 3, W);
  return toTex(c);
}

/* folhagem com recorte alfa (cartões das árvores) */
export function foliageTexture(kind, seed) {
  const W = 256, c = canvas(W, W), g = c.getContext('2d'), R = rng(seed);
  const pal = kind === 'cedar' ? ['#1d3a22', '#24462a', '#2d5531', '#183020'] : kind === 'maple' ? ['#b8261a', '#d4421c', '#e8781f', '#9c1b14', '#f0a52a'] : kind === 'snow' ? ['#1f3a26', '#e9eef3', '#dfe7ee', '#2a4a30'] : ['#2f5a2a', '#3d6e33', '#4b7d3a', '#264a22'];
  for (let i = 0; i < 2600; i++) {
    const x = R() * W, y = R() * W, r = 3 + R() * 7;
    const dx = (x - W / 2) / (W / 2), dy = (y - W / 2) / (W / 2);
    if (dx * dx + dy * dy > 0.95 - R() * 0.25) continue;
    g.fillStyle = pal[(R() * pal.length) | 0]; g.globalAlpha = 0.85;
    g.beginPath(); g.ellipse(x, y, r, r * (0.5 + R() * 0.5), R() * 3, 0, Math.PI * 2); g.fill();
  }
  g.globalAlpha = 1;
  const t = toTex(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
}

export function barkTexture(seed) {
  const W = 64, H = 256, c = canvas(W, H), g = c.getContext('2d'), R = rng(seed);
  g.fillStyle = '#4a3426'; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 90; i++) { g.fillStyle = R() < 0.5 ? '#3a281d' : '#5c4331'; g.fillRect(R() * W, 0, 1 + R() * 3, H); }
  return toTex(c);
}

/* Fachadas: janela por andar. Retorna cor e emissiva (noite). */
export function facadeTextures(style, seed, night) {
  const R = rng(seed), W = 256, H = 512, c = canvas(W, H), g = c.getContext('2d'), e = canvas(W, H), ge = e.getContext('2d');
  ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  const cols = 4, rows = 8, cw = W / cols, rh = H / rows;
  const wall = { office: ['#8e9399', '#7d838b', '#a3a6aa', '#646a72'], apt: ['#d8d2c4', '#c9c3b5', '#e2ddd2', '#b9b2a2'], house: ['#e6dfcf', '#cfc6b3', '#b9a88f', '#efe9dc'], glass: ['#2b3a48', '#33475a', '#24313d'] }[style] || ['#999'];
  const wc = wall[(R() * wall.length) | 0];
  const N = makeNoise(seed), wcol = new THREE.Color(wc), img = g.createImageData(W, H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const k = (y * W + x) * 4, f = (0.9 + N.fbm(x / 20, y / 20, 3) * 0.2) * 255; img.data[k] = wcol.r * f; img.data[k + 1] = wcol.g * f; img.data[k + 2] = wcol.b * f; img.data[k + 3] = 255; }
  g.putImageData(img, 0, 0);
  const warm = ['#ffd9a0', '#fff1d6', '#ffe7b8', '#cfe6ff', '#fff8ec'];
  for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
    const x = k * cw, y = r * rh;
    if (style === 'glass') {
      g.fillStyle = 'rgba(160,190,215,.35)'; g.fillRect(x + 2, y + 4, cw - 4, rh - 8);
      g.fillStyle = '#1a232c'; g.fillRect(x, y + rh - 6, cw, 6);
    } else if (style === 'office') {
      g.fillStyle = '#2b3846'; g.fillRect(x + 6, y + 10, cw - 12, rh - 22);
      g.fillStyle = 'rgba(200,220,235,.3)'; g.fillRect(x + 6, y + 10, cw - 12, 6);
    } else if (style === 'apt') {
      g.fillStyle = '#34414c'; g.fillRect(x + 10, y + 8, cw - 20, rh - 30);
      g.fillStyle = '#8f8a80'; g.fillRect(x + 2, y + rh - 22, cw - 4, 4);
      g.strokeStyle = '#9a958a'; g.lineWidth = 2; for (let i = 0; i < 6; i++) { g.beginPath(); g.moveTo(x + 4 + i * (cw - 8) / 5, y + rh - 22); g.lineTo(x + 4 + i * (cw - 8) / 5, y + rh - 4); g.stroke(); }
      g.fillStyle = '#7d786e'; g.fillRect(x + 2, y + rh - 4, cw - 4, 3);
    } else {
      if ((k + r) % 3 !== 1) { g.fillStyle = '#3a4650'; g.fillRect(x + 14, y + 14, cw - 28, rh - 34); g.fillStyle = '#efeadf'; g.fillRect(x + 12, y + rh - 22, cw - 24, 3); }
    }
    if (night && R() < (style === 'office' ? 0.62 : 0.5)) {
      ge.fillStyle = warm[(R() * warm.length) | 0]; ge.globalAlpha = 0.5 + R() * 0.5;
      if (style === 'glass') ge.fillRect(x + 2, y + 4, cw - 4, rh - 8);
      else if (style === 'office') ge.fillRect(x + 6, y + 10, cw - 12, rh - 22);
      else if (style === 'apt') ge.fillRect(x + 10, y + 8, cw - 20, rh - 30);
      else ge.fillRect(x + 14, y + 14, cw - 28, rh - 34);
    }
  }
  ge.globalAlpha = 1;
  return { map: toTex(c), emissive: night ? toTex(e) : null, rows, cols };
}

/* letreiros verticais em japonês e painéis luminosos */
const WORDS = ['ラーメン', '居酒屋', 'カラオケ', '焼肉', '寿司', 'ホテル', '薬局', 'ゲーム', 'BAR', '喫茶', '書店', '酒場', 'うどん', '駐車場', 'ドリフト', '中古車', 'タイヤ', '整備', '電気'];
export function signTexture(seed, vertical) {
  const R = rng(seed), W = vertical ? 96 : 384, H = vertical ? 384 : 96, c = canvas(W, H), g = c.getContext('2d');
  const bgs = ['#c4141c', '#121418', '#f2f2f0', '#1840a8', '#f3c400', '#0f7a43', '#7a1fb5', '#ff5aa5'];
  const bg = bgs[(R() * bgs.length) | 0]; g.fillStyle = bg; g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(255,255,255,.85)'; g.lineWidth = 6; g.strokeRect(6, 6, W - 12, H - 12);
  const word = WORDS[(R() * WORDS.length) | 0], light = ['#f2f2f0', '#f3c400'].includes(bg);
  g.fillStyle = light ? '#c4141c' : '#ffffff';
  g.font = `bold ${vertical ? 64 : 58}px "Hiragino Sans","Yu Gothic","Meiryo","Noto Sans CJK JP","MS Gothic",sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  if (vertical) { const chars = [...word]; const step = (H - 40) / Math.max(chars.length, 1); chars.forEach((ch, i) => g.fillText(ch, W / 2, 20 + step * (i + 0.5))); }
  else g.fillText(word, W / 2, H / 2 + 4);
  const t = toTex(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
}

export function glowTexture() {
  const c = canvas(128, 128), g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.2, 'rgba(255,255,255,.6)'); gr.addColorStop(0.55, 'rgba(255,255,255,.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export function skidTexture() {
  const c = canvas(64, 256), g = c.getContext('2d'), R = rng(5);
  for (let y = 0; y < 256; y++) for (let x = 0; x < 64; x++) {
    const inT = (x > 4 && x < 26) || (x > 38 && x < 60);
    if (!inT) continue; g.fillStyle = `rgba(8,8,8,${(0.25 + R() * 0.35).toFixed(2)})`; g.fillRect(x, y, 1, 1);
  }
  const t = new THREE.CanvasTexture(c); t.wrapT = THREE.RepeatWrapping; return t;
}
