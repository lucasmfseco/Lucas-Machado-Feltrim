/* Jogo: estado, loop, pontuação, câmera, efeitos, HUD, garagem e loja. */
import * as T from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildCar, disposeObj, glowTex } from './car/car.js';
import { buildWorld, MAPS, locate } from './world/index.js';
import { trackOf } from './world/index.js';

const DG = window.DG, A = DG.Audio, $ = id => document.getElementById(id);
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const fmt = n => Math.round(n).toLocaleString('pt-BR');
const COIN_RATE = 15;
const TIPS = [
  '<b>Vire forte acelerando</b> acima de 45 km/h e o carro já entra em drift.',
  'Um toque no <b>S</b> na entrada da curva solta a traseira mais cedo.',
  'Emende uma curva na outra: o multiplicador só zera se você ficar <b>1,6 s sem derrapar</b>.',
  'Batida forte <b>perde o combo inteiro</b>, batida média perde metade. Encostar de leve não custa nada.',
  'Derrapar <b>rente ao guard-rail</b> rende 50% a mais e sobe o multiplicador mais rápido.',
  'Soltar o volante no meio do drift faz o carro <b>se realinhar sozinho</b>.',
  'Ângulos acima de 45° rendem mais. O <b>kit de ângulo</b> da garagem aumenta o limite.',
  'Nas descidas da serra o carro ganha velocidade: <b>freie antes do grampo</b>.',
  'Na neve o carro escorrega mais: entre nas curvas mais devagar.'
];

/* ---------- progresso salvo ---------- */
const KEY = 'kazedrift.v2';
const carDef = id => DG.CARS.find(c => c.id === id) || DG.CARS[0];
function fresh() { const c = DG.CARS[0]; return { coins: 1500, car: c.id, cars: { [c.id]: DG.defaultCfg(c) }, best: {}, set: { vol: 0.8, q: 'high' } }; }
function load() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { }
  if (!s) try { const old = JSON.parse(localStorage.getItem('kazedrift.v1')); if (old && old.coins) { s = fresh(); s.coins = old.coins; for (const id in old.cars) if (DG.CARS.find(c => c.id === id)) s.cars[id] = old.cars[id]; } } catch (e) { }
  if (s && s.cars) {
    for (const id of Object.keys(s.cars)) if (!DG.CARS.find(c => c.id === id)) delete s.cars[id];
    if (!s.cars[s.car]) s.car = DG.CARS[0].id;
    if (!s.cars[s.car]) s.cars[s.car] = DG.defaultCfg(carDef(s.car));
    for (const id in s.cars) { const d = DG.defaultCfg(carDef(id)), c = s.cars[id]; for (const k in d.eq) { if (!c.eq[k]) c.eq[k] = d.eq[k]; if (!c.owned[k]) c.owned[k] = d.owned[k]; } for (const k in d) if (c[k] === undefined) c[k] = d[k]; }
    s.set = Object.assign({ vol: 0.8, q: 'high' }, s.set); s.best = s.best || {};
    return s;
  }
  return fresh();
}
let save = load();
function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) { } }

/* ---------- qualidade ---------- */
const QUALITY = {
  high: { pr: 2, shadows: 2048, terrainCell: 3, trees: 3200, post: true, msaa: 4, bloom: true },
  med: { pr: 1.25, shadows: 1024, terrainCell: 4, trees: 2000, post: true, msaa: 2, bloom: true },
  low: { pr: 1, shadows: 0, terrainCell: 5, trees: 900, post: false, msaa: 0, bloom: false }
};
const Q = () => QUALITY[save.set.q] || QUALITY.high;

/* ---------- renderizador e pós-processamento ---------- */
let renderer;
try { renderer = new T.WebGLRenderer({ canvas: $('gl'), antialias: false, powerPreference: 'high-performance' }); }
catch (e) {
  const d = document.createElement('div'); d.id = 'fatal';
  d.innerHTML = '<div><h2>Não foi possível iniciar o 3D</h2><p>Seu navegador está sem WebGL. Ative a aceleração de hardware nas configurações do navegador e recarregue a página.</p></div>';
  $('app').appendChild(d); throw e;
}
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.shadowMap.type = T.PCFSoftShadowMap;
const camera = new T.PerspectiveCamera(60, 1, 0.1, 9000);
let composer = null, renderPass = null, bloom = null, grade = null, smokeScale = 500;
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, vig: { value: 0.35 }, sat: { value: 1.08 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: 'uniform sampler2D tDiffuse; uniform float vig; uniform float sat; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722)); c.rgb = mix(vec3(l), c.rgb, sat); vec2 d = vUv - 0.5; c.rgb *= 1.0 - vig * dot(d, d) * 2.2; gl_FragColor = c; }'
};
function setupPost() {
  const q = Q();
  if (composer) { composer.renderTarget1.dispose(); composer.renderTarget2.dispose(); composer = null; }
  if (!q.post) return;
  const size = renderer.getDrawingBufferSize(new T.Vector2());
  const rt = new T.WebGLRenderTarget(size.x, size.y, { type: T.HalfFloatType, samples: q.msaa });
  composer = new EffectComposer(renderer, rt);
  renderPass = new RenderPass(new T.Scene(), camera);
  composer.addPass(renderPass);
  bloom = new UnrealBloomPass(new T.Vector2(size.x / 2, size.y / 2), 0.3, 0.55, 0.92);
  if (q.bloom) composer.addPass(bloom);
  grade = new ShaderPass(GradeShader); composer.addPass(grade);
  composer.addPass(new OutputPass());
}
function resize() {
  const w = $('app').clientWidth || innerWidth, h = $('app').clientHeight || innerHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); }
  smokeScale = renderer.domElement.height / (2 * Math.tan(camera.fov * Math.PI / 360));
}
function applyQuality() {
  const q = Q(); renderer.setPixelRatio(Math.min(devicePixelRatio || 1, q.pr)); renderer.shadowMap.enabled = q.shadows > 0;
  setupPost(); resize();
}
window.addEventListener('resize', resize);
applyQuality();
function draw(scene) {
  if (composer) { renderPass.scene = scene; composer.render(); }
  else renderer.render(scene, camera);
}

/* ---------- garagem (estúdio) ---------- */
const garage = new T.Scene();
{
  garage.background = new T.Color(0x0b0c10);
  const pm = new T.PMREMGenerator(renderer); garage.environment = pm.fromScene(new RoomEnvironment(renderer), 0.03).texture; pm.dispose(); garage.environmentIntensity = 0.8;
  garage.fog = new T.Fog(0x0b0c10, 16, 46);
  const floorTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d'); g.fillStyle = '#2a2b2f'; g.fillRect(0, 0, 512, 512); for (let i = 0; i < 20000; i++) { const v = 30 + Math.random() * 30; g.fillStyle = `rgba(${v},${v},${v + 3},.4)`; g.fillRect(Math.random() * 512, Math.random() * 512, 2, 2); } g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 2; for (let x = 0; x <= 512; x += 128) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 512); g.stroke(); g.beginPath(); g.moveTo(0, x); g.lineTo(512, x); g.stroke(); } const t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(10, 10); t.colorSpace = T.SRGBColorSpace; return t; })();
  const floor = new T.Mesh(new T.CircleGeometry(40, 64), new T.MeshStandardMaterial({ map: floorTex, roughness: 0.32, metalness: 0.2 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; garage.add(floor);
  const ring = new T.Mesh(new T.RingGeometry(3.9, 3.96, 96), new T.MeshBasicMaterial({ color: 0xff8a1f })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.01; garage.add(ring);
  for (let i = 0; i < 14; i++) {
    const a = i / 14 * Math.PI * 2, m = new T.Mesh(new T.PlaneGeometry(0.18, 7), new T.MeshBasicMaterial({ color: new T.Color(['#ff2d6f', '#00e5ff', '#ff8a1f'][i % 3]).multiplyScalar(1.6) }));
    m.position.set(Math.cos(a) * 20, 3.5, Math.sin(a) * 20); m.lookAt(0, 3.5, 0); garage.add(m);
  }
  const soft = new T.Mesh(new T.PlaneGeometry(8, 3), new T.MeshBasicMaterial({ color: new T.Color(0xffffff).multiplyScalar(2) })); soft.position.set(0, 7, 0); soft.rotation.x = Math.PI / 2; garage.add(soft);
  const key = new T.DirectionalLight(0xffffff, 1.6); key.position.set(4, 10, 6); key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 30 }); key.shadow.bias = -0.0003; key.shadow.normalBias = 0.03;
  garage.add(key); garage.add(new T.HemisphereLight(0x8090b0, 0x101018, 0.4));
}
let show = null, orbit = 0.75, orbitV = 0, dragging = false, dragX = 0, viewOff = -1.3;
function showcase(id, cfg) {
  if (show) { garage.remove(show); disposeObj(show); }
  show = buildCar(carDef(id), cfg); garage.add(show);
}
$('gl').addEventListener('pointerdown', e => { if (state === 'menu') { dragging = true; dragX = e.clientX; } });
addEventListener('pointermove', e => { if (dragging) { orbit -= (e.clientX - dragX) * 0.008; dragX = e.clientX; orbitV = 0; } });
addEventListener('pointerup', () => { dragging = false; });

/* ---------- telas ---------- */
let state = 'menu';
const SCREENS = ['menu', 'garage', 'dealer', 'maps', 'loading'];
function go(name) {
  for (const s of SCREENS) $(s).hidden = s !== name;
  $('wallet').hidden = name === 'loading' || name === 'play';
  $('hud').hidden = name !== 'play';
  viewOff = name === 'menu' ? -1.3 : 0;
  refreshWallet();
}
function refreshWallet() {
  $('coins').textContent = fmt(save.coins); $('hcoins').textContent = fmt(save.coins);
  $('menuCar').innerHTML = 'Carro atual · <b>' + carDef(save.car).name + '</b>';
}
let toastT = 0;
function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200); }
const click = (id, fn) => $(id).addEventListener('click', () => { A.init(); A.ui(); fn(); });

/* ---------- garagem: categorias e peças ---------- */
let gCat = 'paint', gSel = null;
const myCfg = () => save.cars[save.car];
function openGarage() { go('garage'); $('garTitle').textContent = 'Garagem · ' + carDef(save.car).name; showcase(save.car, myCfg()); renderCats(); selectCat(gCat); }
function renderCats() {
  const el = $('catList'); el.innerHTML = ''; let grp = '';
  for (const c of DG.CATS) {
    if (c.group !== grp) { grp = c.group; const l = document.createElement('div'); l.className = 'label'; l.textContent = grp; el.appendChild(l); }
    const b = document.createElement('button'); b.className = 'cat' + (c.id === gCat ? ' on' : ''); b.textContent = c.name;
    b.onclick = () => { A.ui(); selectCat(c.id); }; el.appendChild(b);
  }
}
function swatchRow(title, colors, cur, onPick, custom) {
  const frag = document.createDocumentFragment(), l = document.createElement('div'); l.className = 'label'; l.innerHTML = title + ' <span class="free">grátis</span>'; frag.appendChild(l);
  const row = document.createElement('div'); row.className = 'swatches';
  for (const c of colors) { const b = document.createElement('button'); b.className = 'sw' + (c.toLowerCase() === String(cur).toLowerCase() ? ' on' : ''); b.style.background = c; b.setAttribute('aria-label', 'Cor ' + c); b.onclick = () => { A.ui(); onPick(c); }; row.appendChild(b); }
  if (custom) { const i = document.createElement('input'); i.type = 'color'; i.value = cur; i.id = 'col-' + custom; i.setAttribute('aria-label', 'Cor personalizada'); i.onchange = () => onPick(i.value, true); row.appendChild(i); }
  frag.appendChild(row); return frag;
}
function selectCat(id) {
  gCat = id; gSel = null; renderCats(); showcase(save.car, myCfg());
  const el = $('optList'), cfg = myCfg(); el.innerHTML = ''; $('buyBar').hidden = true;
  const setFree = k => (v, keep) => { cfg[k] = v; persist(); showcase(save.car, previewCfg()); if (!keep) selectCat(id); };
  if (id === 'paint') {
    el.appendChild(swatchRow('Cor da carroceria', DG.PAINTS, cfg.paint, setFree('paint'), 'paint'));
    const l = document.createElement('div'); l.className = 'label'; l.innerHTML = 'Acabamento <span class="free">grátis</span>'; el.appendChild(l);
    const ch = document.createElement('div'); ch.className = 'chips';
    for (const f of DG.FINISHES) { const b = document.createElement('button'); b.className = 'chip' + (cfg.finish === f.id ? ' on' : ''); b.textContent = f.name; b.onclick = () => { A.ui(); setFree('finish')(f.id); }; ch.appendChild(b); }
    el.appendChild(ch);
    el.appendChild(swatchRow('Cor das pinças de freio', ['#c2161a', '#f2c200', '#1c3f9e', '#1f8a4c', '#15161a', '#ff8a1f', '#d8dade'], cfg.caliper, setFree('caliper')));
    return;
  }
  if (id === 'wheels') el.appendChild(swatchRow('Cor das rodas', DG.WHEEL_COLORS, cfg.wheelColor, setFree('wheelColor'), 'wheel'));
  if (id === 'neon') el.appendChild(swatchRow('Cor do neon', DG.GLOWS, cfg.neonColor, setFree('neonColor'), 'neon'));
  if (id === 'smoke') el.appendChild(swatchRow('Cor da fumaça', DG.GLOWS, cfg.smokeColor, setFree('smokeColor'), 'smoke'));
  const l = document.createElement('div'); l.className = 'label'; l.textContent = 'Opções'; el.appendChild(l);
  for (const p of DG.PARTS[id]) {
    const owned = cfg.owned[id].includes(p.id), eq = cfg.eq[id] === p.id;
    const b = document.createElement('button'); b.className = 'opt' + (eq ? ' sel' : ''); b.dataset.id = p.id;
    b.innerHTML = '<b></b><span class="tag ' + (eq ? 'eq' : owned ? 'own' : 'price') + '">' + (eq ? 'EQUIPADO' : owned ? 'COMPRADO' : fmt(p.price) + ' moedas') + '</span><small></small>';
    b.querySelector('b').textContent = p.name; b.querySelector('small').textContent = p.desc;
    b.onclick = () => { A.ui(); pickOpt(p); };
    el.appendChild(b);
  }
}
function previewCfg() { const cfg = myCfg(); if (!gSel) return cfg; const c = JSON.parse(JSON.stringify(cfg)); c.eq[gCat] = gSel.id; return c; }
function pickOpt(p) {
  const cfg = myCfg(), owned = cfg.owned[gCat].includes(p.id);
  gSel = p;
  for (const b of $('optList').querySelectorAll('.opt')) b.classList.toggle('sel', b.dataset.id === p.id);
  showcase(save.car, previewCfg());
  if (owned) { if (cfg.eq[gCat] !== p.id) { cfg.eq[gCat] = p.id; persist(); } selectCat(gCat); return; }
  $('buyBar').hidden = false; $('buyName').textContent = p.name; $('buyDesc').textContent = p.desc;
  const can = save.coins >= p.price, btn = $('buyBtn');
  btn.textContent = can ? 'Comprar · ' + fmt(p.price) : 'Faltam ' + fmt(p.price - save.coins);
  btn.className = 'btn' + (can ? '' : ' off');
}
$('buyBtn').addEventListener('click', () => {
  if (!gSel) return;
  const cfg = myCfg();
  if (save.coins < gSel.price) { A.deny(); toast('Faltam ' + fmt(gSel.price - save.coins) + ' moedas. Vá para a pista derrapar.'); return; }
  save.coins -= gSel.price; cfg.owned[gCat].push(gSel.id); cfg.eq[gCat] = gSel.id; persist();
  A.buy(); toast(gSel.name + ' instalado.'); refreshWallet(); selectCat(gCat);
});

/* ---------- concessionária ---------- */
let dSel = null;
function openDealer() { go('dealer'); dSel = save.car; renderDealer(); }
function renderDealer() {
  const el = $('carList'); el.innerHTML = '';
  for (const c of DG.CARS) {
    const own = !!save.cars[c.id], b = document.createElement('button'); b.className = 'carCard' + (c.id === dSel ? ' sel' : '');
    b.innerHTML = '<b></b><span class="tag ' + (c.id === save.car ? 'eq' : own ? 'own' : 'price') + '" style="font:600 13px var(--num)">' + (c.id === save.car ? 'EM USO' : own ? 'NA GARAGEM' : fmt(c.price)) + '</span><small></small>';
    b.querySelector('b').textContent = c.name; b.querySelector('small').textContent = c.sub;
    b.onclick = () => { A.ui(); dSel = c.id; renderDealer(); };
    el.appendChild(b);
  }
  const c = carDef(dSel), own = !!save.cars[c.id];
  showcase(c.id, save.cars[c.id] || DG.defaultCfg(c));
  const info = $('dealInfo');
  info.innerHTML = '<h3></h3><p></p>' + ['Potência:pot', 'Facilidade de drift:drift', 'Velocidade:vel'].map(s => { const [n, k] = s.split(':'); return '<div class="stat"><span>' + n + '</span><i style="--v:' + c.stats[k] * 10 + '%"></i></div>'; }).join('') +
    '<p>Giro máximo: ' + fmt(c.redline) + ' rpm · ' + (c.turbo ? 'Turbo' : 'Aspirado') + '</p><button class="btn" id="dealBtn"></button>';
  info.querySelector('h3').textContent = c.name; info.querySelector('p').textContent = c.sub;
  const btn = $('dealBtn');
  if (c.id === save.car) { btn.textContent = 'Em uso'; btn.className = 'btn off'; }
  else if (own) btn.textContent = 'Usar este carro';
  else if (save.coins >= c.price) btn.textContent = 'Comprar · ' + fmt(c.price);
  else { btn.textContent = 'Faltam ' + fmt(c.price - save.coins); btn.className = 'btn off'; }
  btn.onclick = () => {
    A.init();
    if (c.id === save.car) return;
    if (!own) {
      if (save.coins < c.price) { A.deny(); toast('Faltam ' + fmt(c.price - save.coins) + ' moedas.'); return; }
      save.coins -= c.price; save.cars[c.id] = DG.defaultCfg(c); A.buy(); toast(c.name + ' é seu.');
    } else A.ui();
    save.car = c.id; persist(); refreshWallet(); renderDealer();
  };
}

/* ---------- mapas ---------- */
function pathOn(g, trk, w, h, pad, color, lw) {
  const B = trk.bounds, sc = Math.min((w - pad * 2) / (B.x1 - B.x0), (h - pad * 2) / (B.z1 - B.z0));
  const ox = w / 2 - (B.x0 + B.x1) / 2 * sc, oz = h / 2 - (B.z0 + B.z1) / 2 * sc;
  g.strokeStyle = color; g.lineWidth = lw; g.lineJoin = 'round';
  g.beginPath();
  if (trk.arena) g.rect(B.x0 * sc + ox, B.z0 * sc + oz, (B.x1 - B.x0) * sc, (B.z1 - B.z0) * sc);
  else { trk.pts.forEach((p, i) => { const x = p.x * sc + ox, y = p.z * sc + oz; i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath(); }
  g.stroke();
  return { sc, ox, oz };
}
function openMaps() {
  go('maps'); const el = $('mapGrid');
  if (el.children.length) return;
  for (const m of MAPS) {
    const b = document.createElement('button'); b.className = 'mapCard';
    const cv = document.createElement('canvas'); cv.width = 480; cv.height = 270;
    const g = cv.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 270);
    gr.addColorStop(0, m.thumb[0]); gr.addColorStop(0.6, m.thumb[1]); gr.addColorStop(1, m.thumb[2]);
    g.fillStyle = gr; g.fillRect(0, 0, 480, 270);
    pathOn(g, trackOf(m), 480, 270, 22, m.sky.night ? '#ffffff' : '#14161c', 5);
    const d = document.createElement('div'); d.innerHTML = '<b></b><small></small>'; d.querySelector('b').textContent = m.name; d.querySelector('small').textContent = m.sub;
    b.appendChild(cv); b.appendChild(d); b.onclick = () => { A.init(); A.ui(); startRun(m); };
    el.appendChild(b);
  }
}

/* ---------- efeitos ---------- */
function Smoke(scene, n, color) {
  const pos = new Float32Array(n * 3), dat = new Float32Array(n * 2), vel = new Float32Array(n * 3), life = new Float32Array(n * 2);
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.BufferAttribute(pos, 3)); g.setAttribute('aData', new T.BufferAttribute(dat, 2));
  const mat = new T.ShaderMaterial({
    uniforms: { map: { value: smokeTex() }, color: { value: color }, scale: { value: smokeScale } },
    vertexShader: 'attribute vec2 aData; uniform float scale; varying float vA; varying float vR; void main(){ vA=aData.y; vR = fract(position.x * 7.13 + position.z * 3.7); vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aData.x*scale/max(0.5,-mv.z); gl_Position=projectionMatrix*mv; }',
    fragmentShader: 'uniform sampler2D map; uniform vec3 color; varying float vA; varying float vR; void main(){ vec2 uv = gl_PointCoord - 0.5; float a0 = vR * 6.283; uv = mat2(cos(a0), -sin(a0), sin(a0), cos(a0)) * uv + 0.5; float a=texture2D(map,uv).a*vA; if(a<0.004) discard; gl_FragColor=vec4(color * (0.75 + 0.25 * texture2D(map, uv).r), a); }',
    transparent: true, depthWrite: false
  });
  const pts = new T.Points(g, mat); pts.frustumCulled = false; pts.renderOrder = 5; scene.add(pts);
  let cur = 0;
  this.emit = (x, y, z, vx, vy, vz, size, lf) => { const i = cur; cur = (cur + 1) % n; pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z; vel[i * 3] = vx; vel[i * 3 + 1] = vy; vel[i * 3 + 2] = vz; life[i * 2] = lf; life[i * 2 + 1] = lf; dat[i * 2] = size; dat[i * 2 + 1] = 0.5; };
  this.update = dt => {
    mat.uniforms.scale.value = smokeScale;
    for (let i = 0; i < n; i++) {
      if (life[i * 2] <= 0) { dat[i * 2 + 1] = 0; continue; }
      life[i * 2] -= dt; const k = Math.max(0, life[i * 2] / life[i * 2 + 1]);
      pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      vel[i * 3] *= 1 - 1.4 * dt; vel[i * 3 + 2] *= 1 - 1.4 * dt; vel[i * 3 + 1] *= 1 - 0.6 * dt;
      dat[i * 2] += dt * 3.2; dat[i * 2 + 1] = 0.34 * k * Math.min(1, (1 - k) * 7);
    }
    g.attributes.position.needsUpdate = true; g.attributes.aData.needsUpdate = true;
  };
}
let _smoke = null;
function smokeTex() {
  if (_smoke) return _smoke;
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  for (let i = 0; i < 26; i++) { const x = 64 + (Math.random() - 0.5) * 50, y = 64 + (Math.random() - 0.5) * 50, r = 16 + Math.random() * 30, gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); }
  return (_smoke = new T.CanvasTexture(c));
}
function Skids(scene, n, dark) {
  const pos = new Float32Array(n * 12), idx = [];
  for (let i = 0; i < n; i++) { const a = i * 4; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(pos, 3)); g.setIndex(idx);
  const m = new T.Mesh(g, new T.MeshBasicMaterial({ color: dark, transparent: true, opacity: 0.55, depthWrite: false, side: T.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
  m.frustumCulled = false; m.renderOrder = 3; scene.add(m);
  let cur = 0; const last = [null, null];
  this.mark = (w, x, y, z, px, pz, on) => {
    if (!on) { last[w] = null; return; }
    const a = [x + px * 0.12, z + pz * 0.12, x - px * 0.12, z - pz * 0.12, y], l = last[w];
    if (l) {
      if (Math.hypot(a[0] - l[0], a[1] - l[1]) < 0.35) return;
      const o = cur * 12; cur = (cur + 1) % n;
      pos.set([l[0], l[4], l[1], l[2], l[4], l[3], a[0], y, a[1], a[2], y, a[3]], o);
      g.attributes.position.needsUpdate = true;
    }
    last[w] = a;
  };
}

/* ---------- corrida ---------- */
let world = null, car = null, carObj = null, stats = null, P = null, smoke = null, skids = null, fx = {};
const keys = { w: false, a: false, s: false, d: false };
const cam = { ang: 0, shake: 0, pos: new T.Vector3(), look: new T.Vector3() };
let ld = { target: 0, shown: 0 };

async function startRun(map) {
  state = 'loading'; go('loading');
  $('loadName').textContent = map.name; $('loadSub').textContent = map.sub;
  $('loadTip').innerHTML = 'Dica: ' + TIPS[(Math.random() * TIPS.length) | 0];
  ld = { target: 0, shown: 0 }; setLoad(0, 'Preparando');
  endRun(true);
  await new Promise(r => setTimeout(r, 100));
  world = await buildWorld(map, renderer, (p, label) => { ld.target = p * 100; $('loadStep').textContent = label; }, Q());
  ld.target = 92; $('loadStep').textContent = 'Tirando o carro da garagem';
  await new Promise(r => setTimeout(r, 30));
  const def = carDef(save.car), cfg = myCfg();
  stats = DG.carStats(def, cfg);
  carObj = buildCar(def, cfg); carObj.rotation.order = 'YXZ'; world.scene.add(carObj);
  const st = world.track.start;
  car = DG.newCar(st.x, st.z, st.h); car.y = st.y || 0;
  cam.ang = st.h; cam.pos.set(st.x - Math.sin(st.h) * 8, car.y + 3, st.z - Math.cos(st.h) * 8);
  const smokeCol = cfg.eq.smoke === 'color' ? new T.Color(cfg.smokeColor) : new T.Color(world.night ? 0x8a909a : 0xd8d8d8);
  smoke = new Smoke(world.scene, 520, smokeCol);
  skids = new Skids(world.scene, 3000, map.theme === 'snow' ? 0x3a4450 : 0x070707);
  fx = { flames: [], flameT: 0, tails: [] };
  const U = carObj.userData;
  if (world.night) {
    const sp = new T.SpotLight(U.headCol, 260, 90, 0.55, 0.6, 1.3); sp.position.set(0, 0.7, U.L / 2 - 0.2); sp.target.position.set(0, -0.8, U.L / 2 + 24);
    carObj.add(sp); carObj.add(sp.target);
    U.headM.emissiveIntensity = 3.5;
    for (const pu of U.popups) pu.visible = true;
  }
  for (const s of [1, -1]) { const g = new T.Sprite(new T.SpriteMaterial({ map: glowTex(), color: 0xff1020, blending: T.AdditiveBlending, depthWrite: false, opacity: 0.4 })); g.scale.setScalar(0.8); g.position.set(s * U.W * 0.32, 0.8, -U.L / 2 - 0.1); carObj.add(g); fx.tails.push(g); }
  for (const e of U.exhaust) { const g = new T.Sprite(new T.SpriteMaterial({ map: glowTex(), color: 0xffa040, blending: T.AdditiveBlending, depthWrite: false, opacity: 0 })); g.scale.set(0.5, 0.5, 1); g.position.copy(e); g.position.z -= 0.1; carObj.add(g); fx.flames.push(g); }
  renderer.toneMappingExposure = world.exposure;
  if (bloom) { bloom.strength = world.night ? 0.5 : 0.22; bloom.threshold = world.night ? 0.85 : 0.95; bloom.radius = world.night ? 0.5 : 0.45; }
  if (grade) grade.uniforms.vig.value = world.night ? 0.5 : 0.32;
  P = { map, idx: -1, score: 0, coins: 0, pot: 0, combo: 0, mult: 1, grace: 0, best: 0, bestMult: 1, time: 0, near: false, hint: 9, lastHit: 0, stuck: 0 };
  drawMiniBase();
  camera.fov = 60; camera.updateProjectionMatrix();
  updateCamera(0.016); world.update(0, camera.position, carObj.position);
  renderer.compile(world.scene, camera);
  ld.target = 100; $('loadStep').textContent = 'Pronto';
  await new Promise(r => { const t = setInterval(() => { if (ld.shown >= 99.5) { clearInterval(t); r(); } }, 40); });
  A.startCar(def.engine, stats);
  for (const k in keys) keys[k] = false;
  $('keyHint').style.opacity = 1; $('hudTop').classList.remove('on');
  go('play'); state = 'play'; updateHud();
}
function setLoad(p, label) { $('loadPct').textContent = Math.round(p) + '%'; $('loadBar').firstElementChild.style.width = p + '%'; if (label) $('loadStep').textContent = label; }

function endRun(silent) {
  if (P && P.pot > 0) bank();
  A.stopCar();
  if (world) { if (carObj) disposeObj(carObj); world.dispose(); }
  world = car = carObj = P = smoke = skids = null;
  renderer.toneMappingExposure = 1;
  if (bloom) { bloom.strength = 0.3; bloom.threshold = 0.92; }
  if (!silent) persist();
}
function bank() {
  const gained = Math.round(P.pot * P.mult);
  if (gained <= 0) { P.pot = 0; P.combo = 0; P.mult = 1; return; }
  const coins = Math.max(1, Math.round(gained / COIN_RATE));
  P.score += gained; P.coins += coins; save.coins += coins;
  if (gained > P.best) P.best = gained;
  if (gained > (save.best[P.map.id] || 0)) save.best[P.map.id] = gained;
  popup('+' + fmt(gained) + '<small>+' + fmt(coins) + ' moedas</small>', false);
  A.bank(); P.pot = 0; P.combo = 0; P.mult = 1; persist();
}
function popup(html, bad) { const p = $('pop'); p.innerHTML = html; p.className = bad ? 'bad' : ''; void p.offsetWidth; p.classList.add('show'); }
function crash(v) {
  if (P.time - P.lastHit < 0.4) return;
  P.lastHit = P.time; A.thud(clamp(v / 10, 0.3, 1)); cam.shake = clamp(v / 12, 0.2, 0.9);
  if (P.pot <= 0) return;
  if (v > 7) { if (P.pot * P.mult > 300) { popup('COMBO PERDIDO<small>batida forte</small>', true); A.lost(); } P.pot = 0; P.combo = 0; P.mult = 1; P.grace = 0; }
  else if (v > 3.5) { if (P.pot * P.mult > 300) popup('BATEU<small>metade do combo perdida</small>', true); P.pot *= 0.5; P.mult = Math.max(1, Math.ceil(P.mult / 2)); P.combo = (P.mult - 1) * 2.5; }
}
function resetCar() {
  const trk = world.track; let x = trk.start.x, z = trk.start.z, h = trk.start.h;
  if (!trk.arena && P.idx >= 0) { const p = trk.pts[P.idx]; x = p.x; z = p.z; h = Math.atan2(p.tx, p.tz); }
  const c = DG.newCar(x, z, h); Object.assign(car, c); car.y = trk.arena ? 0 : trk.pts[Math.max(0, P.idx)].y; cam.ang = h; P.stuck = 0;
}

function collide(hh) {
  const trk = world.track, c = car; let near = false;
  const hit = (nx, nz, pen) => {
    c.x -= nx * pen; c.z -= nz * pen;
    const vn = c.vx * nx + c.vz * nz;
    if (vn > 0) { c.vx -= nx * vn * 1.4; c.vz -= nz * vn * 1.4; const k = vn > 4 ? 0.85 : 1 - 1.2 * hh; c.vx *= k; c.vz *= k; if (vn > 2.2) crash(vn); }
  };
  const alignTo = th => {
    let d = th - c.h; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
    if (Math.abs(d) > Math.PI / 2) d -= Math.sign(d) * Math.PI;
    c.h += d * 0.1; c.w *= 0.9;
  };
  if (trk.arena) {
    const a = trk.arena, mx = a.hx - 1.1, mz = a.hz - 1.1;
    if (c.x > mx) { hit(1, 0, c.x - mx); alignTo(0); } if (c.x < -mx) { hit(-1, 0, -mx - c.x); alignTo(0); }
    if (c.z > mz) { hit(0, 1, c.z - mz); alignTo(Math.PI / 2); } if (c.z < -mz) { hit(0, -1, -mz - c.z); alignTo(Math.PI / 2); }
    near = mx - Math.abs(c.x) < 2.2 || mz - Math.abs(c.z) < 2.2;
    c.y = 0; c.grade = 0;
  } else {
    const loc = locate(trk, c.x, c.z, P.idx), m = trk.limit - 1.0, al = Math.abs(loc.lat), s = Math.sign(loc.lat);
    P.idx = loc.i; c.y = loc.y + 0.05; c.grade = loc.grade; c.tx = loc.p.tx; c.tz = loc.p.tz;
    if (al > m) { hit(loc.p.nx * s, loc.p.nz * s, al - m); alignTo(Math.atan2(loc.p.tx, loc.p.tz)); }
    near = m - al < 1.7;
  }
  for (const o of world.obstacles) {
    const dx = c.x - o.x, dz = c.z - o.z, d = Math.hypot(dx, dz), r = o.r + 1.0;
    if (d < r && d > 0.01) { hit(-dx / d, -dz / d, r - d); alignTo(Math.atan2(-dz, dx)); }
    if (d < r + 2.4) near = true;
  }
  P.near = near;
}

function stepPlay(dt) {
  const c = car, inp = { up: keys.w, down: keys.s, steer: (keys.a ? 1 : 0) - (keys.d ? 1 : 0) };
  const sub = Math.max(1, Math.ceil(dt / 0.009)), h = dt / sub;
  let shifted = 0, lifted = false;
  for (let i = 0; i < sub; i++) {
    DG.stepCar(c, inp, h, stats, world.grip); collide(h);
    if (c.grade) { const g = 9.81 * c.grade * 0.85; c.vx -= c.tx * g * h; c.vz -= c.tz * g * h; }
    if (c.shifted) shifted = c.shifted; if (c.lifted) lifted = true;
  }
  P.time += dt;
  if (shifted) { A.shift(); if (shifted > 0 && stats.turbo && c.boost > 0.35) A.blowoff(); if (stats.exhaust === 'straight' && Math.random() < 0.7) flame(); }
  if (lifted) { A.blowoff(); if (stats.exhaust !== 'stock' && Math.random() < (stats.exhaust === 'straight' ? 0.9 : 0.35)) flame(); }

  const deg = Math.abs(c.slip) * 57.3, drifting = deg > 13 && c.speed > 8 && c.vF > 0;
  if (drifting) {
    const bonus = P.near ? 1.5 : 1;
    P.pot += deg * c.speed * 0.09 * bonus * dt;
    P.combo += dt * (1 + (deg > 45 ? 0.5 : 0) + (P.near ? 0.6 : 0));
    P.grace = 1.6;
    const m = Math.min(10, 1 + Math.floor(P.combo / 2.5));
    if (m > P.mult) { P.mult = m; A.multUp(m); const e = $('mult'); e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); if (m > P.bestMult) P.bestMult = m; }
  } else if (P.pot > 0) { P.grace -= dt; if (P.grace <= 0) bank(); }
  P.tag = !drifting ? '' : P.near ? 'Rente ao muro +50%' : deg > 45 ? 'Ângulo insano' : deg > 30 ? 'Ótimo ângulo' : 'Drift';
  P.drifting = drifting; P.deg = deg;

  // carro
  const U = carObj.userData;
  carObj.position.set(c.x, c.y, c.z); carObj.rotation.y = c.h;
  const fwdT = Math.sin(c.h) * (c.tx || 0) + Math.cos(c.h) * (c.tz || 0), sideT = Math.cos(c.h) * (c.tx || 0) - Math.sin(c.h) * (c.tz || 0);
  carObj.rotation.x += (-Math.atan((c.grade || 0) * fwdT) - carObj.rotation.x) * Math.min(1, dt * 8);
  carObj.rotation.z += (Math.atan((c.grade || 0) * sideT) * 0.5 - carObj.rotation.z) * Math.min(1, dt * 8);
  const lat = clamp(c.w * c.speed * 0.0035 + c.slip * 0.05, -0.08, 0.08);
  U.body.rotation.z += (lat - U.body.rotation.z) * Math.min(1, dt * 6);
  const pitch = c.brake ? 0.022 : c.thr ? -0.015 : 0;
  U.body.rotation.x += (pitch - U.body.rotation.x) * Math.min(1, dt * 5);
  const sv = clamp(c.steer * 0.45 * (1 - c.drift) + (c.drift > 0.2 ? -c.slip * 0.85 + c.steer * 0.12 : 0), -0.62, 0.62);
  for (const w of U.wheels) {
    if (w.front) w.pivot.rotation.y += (sv - w.pivot.rotation.y) * Math.min(1, dt * 12);
    const spinV = (w.front ? c.vF : c.vF + (c.thr ? c.drift * 14 : 0)) / U.R;
    w.spin.rotation.x += spinV * dt * w.sign;
  }
  U.brakeM.emissiveIntensity = c.brake ? 4 : world.night ? 1.2 : 0.35;
  for (const t of fx.tails) t.material.opacity = c.brake ? 0.9 : world.night ? 0.35 : 0.05;
  if (fx.flameT > 0) { fx.flameT -= dt; for (const f of fx.flames) { f.material.opacity = fx.flameT * 9; const s = 0.4 + Math.random() * 0.5; f.scale.set(s, s, 1); } }
  else for (const f of fx.flames) f.material.opacity = 0;

  const sh = Math.sin(c.h), ch = Math.cos(c.h), sp = c.speed || 1, px = c.vz / sp, pz = -c.vx / sp;
  const smoking = (drifting && deg > 16) || (c.brake && c.speed > 12 && c.drift > 0.3) || (c.thr && c.speed < 6 && c.rpmN > 0.45);
  [1, -1].forEach((s, wi) => {
    const wx = c.x + ch * s * U.rearX + sh * U.rearZ, wz = c.z - sh * s * U.rearX + ch * U.rearZ;
    skids.mark(wi, wx, c.y + 0.03, wz, px, pz, drifting && deg > 15);
    if (smoking && Math.random() < dt * 60) smoke.emit(wx + (Math.random() - .5) * .3, c.y + 0.3, wz + (Math.random() - .5) * .3, c.vx * 0.25 + (Math.random() - .5) * 1.5, 0.7 + Math.random() * 1.0, c.vz * 0.25 + (Math.random() - .5) * 1.5, 1.2 + Math.random() * 1.0, 1.3 + Math.random() * 1.0);
  });
  smoke.update(dt);
  A.update({ rpm: c.rpm, thr: c.thr, boost: c.boost, speed: c.speed, skid: drifting ? clamp(deg / 40, 0.25, 1) * clamp(c.speed / 18, 0.3, 1) : (c.brake && c.speed > 10 ? 0.35 : 0), time: P.time });

  if (c.speed < 1 && (keys.w || keys.s)) { P.stuck += dt; if (P.stuck > 4) { toast('Carro preso? Pause e use "Voltar o carro para a pista".'); P.stuck = -6; } } else if (P.stuck > 0) P.stuck = 0;
  if (P.hint > 0) { P.hint -= dt; if (P.hint <= 0) $('keyHint').style.opacity = 0; }
  updateCamera(dt);
  world.update(dt, camera.position, carObj.position);
  updateHud();
}
function flame() { fx.flameT = 0.14; A.pop(); }

function updateCamera(dt) {
  const c = car;
  let want = c.h - c.slip * 0.62;
  if (c.vF < -1) want = c.h;
  let d = want - cam.ang; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
  cam.ang += d * Math.min(1, dt * 4.5);
  const dist = 6.4 + c.speed * 0.035, hgt = 2.2;
  const tx = c.x - Math.sin(cam.ang) * dist, tz = c.z - Math.cos(cam.ang) * dist;
  cam.pos.x += (tx - cam.pos.x) * Math.min(1, dt * 9); cam.pos.z += (tz - cam.pos.z) * Math.min(1, dt * 9);
  // mantém a câmera sobre a pista para o barranco não tapar o carro
  const trk = world.track;
  if (!trk.arena) {
    const l = locate(trk, cam.pos.x, cam.pos.z, P.idx), lim = trk.limit - 0.4;
    if (Math.abs(l.lat) > lim) { const ex = (Math.abs(l.lat) - lim) * Math.sign(l.lat); cam.pos.x -= l.p.nx * ex; cam.pos.z -= l.p.nz * ex; }
  }
  let ty = c.y + hgt;
  if (world.heightAt) ty = Math.max(ty, world.heightAt(cam.pos.x, cam.pos.z) + 1.2);
  cam.pos.y += (ty - cam.pos.y) * Math.min(1, dt * 6);
  cam.shake *= Math.max(0, 1 - dt * 5);
  const sk = cam.shake + (P.drifting ? 0.01 : 0) + c.speed * 0.00025;
  camera.position.set(cam.pos.x + (Math.random() - .5) * sk, cam.pos.y + (Math.random() - .5) * sk, cam.pos.z + (Math.random() - .5) * sk);
  cam.look.set(c.x + Math.sin(cam.ang) * 3, c.y + 0.95, c.z + Math.cos(cam.ang) * 3);
  camera.lookAt(cam.look);
  const fov = 58 + clamp(c.speed, 0, 70) * 0.32;
  if (Math.abs(fov - camera.fov) > 0.05) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); smokeScale = renderer.domElement.height / (2 * Math.tan(camera.fov * Math.PI / 360)); }
}

/* ---------- HUD ---------- */
const gauge = $('gauge').getContext('2d'), mini = $('mini').getContext('2d');
let miniBase = null, miniT = null, hudCache = {};
function drawMiniBase() { miniBase = document.createElement('canvas'); miniBase.width = miniBase.height = 336; miniT = pathOn(miniBase.getContext('2d'), world.track, 336, 336, 30, 'rgba(255,255,255,.85)', 7); }
function setText(id, v) { if (hudCache[id] !== v) { hudCache[id] = v; $(id).textContent = v; } }
function updateHud() {
  const c = car;
  setText('score', fmt(P.score)); setText('hcoins', fmt(save.coins));
  const active = P.pot > 0;
  $('hudTop').classList.toggle('on', active);
  if (active) {
    setText('pot', fmt(P.pot)); setText('mult', 'x' + P.mult); setText('tag', P.tag || (P.grace < 1.6 ? 'Segure o combo' : ''));
    $('multBar').firstElementChild.style.width = (P.mult >= 10 ? 100 : (P.combo % 2.5) / 2.5 * 100) + '%';
    const gr = $('grace'); gr.style.opacity = P.drifting ? 0 : 1; gr.firstElementChild.style.width = clamp(P.grace / 1.6, 0, 1) * 100 + '%';
  }
  for (const k in keys) { const e = $('keys').querySelector('[data-k=' + k + ']'); if (e.classList.contains('on') !== keys[k]) e.classList.toggle('on', keys[k]); }
  mini.clearRect(0, 0, 336, 336); mini.drawImage(miniBase, 0, 0);
  const t = miniT, mx = c.x * t.sc + t.ox, my = c.z * t.sc + t.oz;
  mini.fillStyle = '#ff8a1f'; mini.beginPath(); mini.arc(mx, my, 9, 0, 6.283); mini.fill(); mini.strokeStyle = '#fff'; mini.lineWidth = 2.5; mini.stroke();
  const g = gauge, cx = 270, cy = 270, r = 220, a0 = Math.PI * 0.75, sweep = Math.PI * 1.5, red = stats.redline, maxK = Math.ceil(red / 1000);
  g.clearRect(0, 0, 540, 540);
  g.fillStyle = 'rgba(10,12,18,.78)'; g.beginPath(); g.arc(cx, cy, r + 26, 0, 6.283); g.fill();
  g.lineWidth = 16; g.strokeStyle = 'rgba(255,255,255,.12)'; g.beginPath(); g.arc(cx, cy, r, a0, a0 + sweep); g.stroke();
  const rz = (red * 0.9) / (maxK * 1000);
  g.strokeStyle = 'rgba(255,59,78,.75)'; g.beginPath(); g.arc(cx, cy, r, a0 + sweep * rz, a0 + sweep); g.stroke();
  const rn = clamp(c.rpm / (maxK * 1000), 0, 1), hot = c.rpm > red * 0.92;
  g.strokeStyle = hot ? '#ff3b4e' : '#ff8a1f'; g.beginPath(); g.arc(cx, cy, r, a0, a0 + sweep * rn); g.stroke();
  g.font = '600 26px "Chakra Petch", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  for (let i = 0; i <= maxK; i++) {
    const a = a0 + sweep * i / maxK, c1 = Math.cos(a), s1 = Math.sin(a);
    g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 3; g.beginPath(); g.moveTo(cx + c1 * (r - 14), cy + s1 * (r - 14)); g.lineTo(cx + c1 * (r - 34), cy + s1 * (r - 34)); g.stroke();
    g.fillStyle = i * 1000 >= red * 0.9 ? '#ff6b7a' : '#cfd3dc'; g.fillText(i, cx + c1 * (r - 58), cy + s1 * (r - 58));
  }
  const na = a0 + sweep * rn;
  g.strokeStyle = '#fff'; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath(); g.moveTo(cx + Math.cos(na) * 40, cy + Math.sin(na) * 40); g.lineTo(cx + Math.cos(na) * (r - 20), cy + Math.sin(na) * (r - 20)); g.stroke(); g.lineCap = 'butt';
  g.fillStyle = '#fff'; g.font = '700 104px "Barlow Condensed", sans-serif'; g.fillText(Math.round(c.speed * 3.6), cx, cy - 6);
  g.fillStyle = '#9aa1b0'; g.font = '600 22px "Chakra Petch", sans-serif'; g.fillText('km/h', cx, cy + 56); g.fillText('x1000 rpm', cx, cy - 86);
  const gear = c.reverse && c.vF < 0.5 ? 'R' : c.speed < 0.6 && !c.thr ? 'N' : String(c.gear + 1);
  g.fillStyle = c.shiftT > 0 ? '#00e5ff' : hot ? '#ff3b4e' : '#ff8a1f'; g.font = '700 92px "Barlow Condensed", sans-serif'; g.fillText(gear, cx, cy + 150);
  g.fillStyle = '#9aa1b0'; g.font = '600 18px "Chakra Petch", sans-serif'; g.fillText('MARCHA', cx, cy + 206);
  if (P.drifting) { g.fillStyle = '#ffd27a'; g.font = '600 22px "Chakra Petch", sans-serif'; g.fillText(Math.round(P.deg) + '°', cx + 140, cy + 150); }
}

/* ---------- pausa ---------- */
function pause() {
  if (state !== 'play') return;
  state = 'pause'; A.suspend(); $('pause').hidden = false;
  $('pScore').textContent = fmt(P.score); $('pCoins').textContent = fmt(P.coins); $('pBest').textContent = fmt(Math.max(P.best, save.best[P.map.id] || 0)); $('pMult').textContent = 'x' + P.bestMult;
}
function resume() { $('pause').hidden = true; state = 'play'; A.resume(); for (const k in keys) keys[k] = false; last = performance.now(); }
function leaveTo(fn) { $('pause').hidden = true; A.resume(); endRun(); state = 'menu'; showcase(save.car, myCfg()); fn(); }

/* ---------- entrada ---------- */
addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (k in keys) { if (state === 'play') { keys[k] = true; e.preventDefault(); } }
  else if (e.key === 'Escape') { if (state === 'play') pause(); else if (state === 'pause') resume(); }
});
addEventListener('keyup', e => { const k = e.key.toLowerCase(); if (k in keys) keys[k] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; if (state === 'play') pause(); });

click('btnPlay', openMaps); click('btnGarage', openGarage); click('btnDealer', openDealer);
click('btnSettings', () => { $('settings').hidden = false; $('setVol').value = save.set.vol; $('setQ').value = save.set.q; resetArm = false; $('setReset').textContent = 'Zerar progresso'; });
click('garBack', () => { showcase(save.car, myCfg()); go('menu'); });
click('dealBack', () => { showcase(save.car, myCfg()); go('menu'); });
click('mapBack', () => go('menu'));
click('setClose', () => { $('settings').hidden = true; });
$('setVol').addEventListener('input', e => { save.set.vol = +e.target.value; A.init(); A.setVolume(save.set.vol); persist(); });
$('setQ').addEventListener('change', e => { save.set.q = e.target.value; applyQuality(); persist(); });
let resetArm = false;
click('setReset', () => {
  if (!resetArm) { resetArm = true; $('setReset').textContent = 'Clique de novo para confirmar'; return; }
  save = fresh(); persist(); resetArm = false; $('setReset').textContent = 'Progresso zerado'; showcase(save.car, myCfg()); refreshWallet(); applyQuality();
});
click('btnPause', pause); click('pResume', resume);
click('pReset', () => { resetCar(); resume(); });
click('pMaps', () => leaveTo(openMaps)); click('pGarage', () => leaveTo(openGarage));

/* ---------- loop ---------- */
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (state === 'loading') { ld.shown += (ld.target - ld.shown) * Math.min(1, dt * 7) + (ld.target > ld.shown ? dt * 12 : 0); ld.shown = Math.min(ld.shown, ld.target); setLoad(ld.shown); return; }
  if (state === 'play') { stepPlay(dt); draw(world.scene); return; }
  if (state === 'pause') { draw(world.scene); return; }
  if (!dragging) { orbitV += (0.12 - orbitV) * dt; orbit += orbitV * dt; }
  if (camera.fov !== 34) { camera.fov = 34; camera.updateProjectionMatrix(); }
  const wide = camera.aspect > 1.1, dist = wide ? 9.6 : 13.5;
  camera.position.set(Math.sin(orbit) * dist, 1.9, Math.cos(orbit) * dist);
  const rx = Math.cos(orbit), rz = -Math.sin(orbit), off = wide ? viewOff : 0;
  camera.lookAt(rx * off, 0.6, rz * off);
  camera.position.x += rx * off; camera.position.z += rz * off;
  if (show) for (const w of show.userData.wheels) if (w.front) w.pivot.rotation.y = 0.32;
  renderer.toneMappingExposure = 0.72;
  if (bloom) { bloom.strength = 0.12; bloom.threshold = 0.98; }
  draw(garage);
}

A.setVolume(save.set.vol);
showcase(save.car, myCfg()); go('menu');
requestAnimationFrame(frame);

/* ganchos para teste automatizado */
DG._t = { step: dt => stepPlay(dt), get state() { return state; }, get car() { return car; }, get P() { return P; }, get world() { return world; }, keys, startRun, MAPS, save: () => save, pause, resume, openGarage, openDealer, selectCat, showcase, cam };
