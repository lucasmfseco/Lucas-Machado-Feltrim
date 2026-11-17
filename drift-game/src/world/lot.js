/* Pátio do porto: área aberta para treinar, contêineres, guindastes, torres de luz e o mar. */
import * as THREE from 'three';
import { rng, glowTexture, concreteTextures, facadeTextures } from './tex.js';
import { instanced, colored, M4, tick } from './common.js';
import { tex } from '../car/parts.js';

export async function buildLot(ctx) {
  const { scene, trk, progress, world } = ctx, a = trk.arena, R = rng(41);
  progress(0.2, 'Pintando o pátio');
  await tick();
  const c = document.createElement('canvas'); c.width = c.height = 2048; const g = c.getContext('2d');
  g.fillStyle = '#26272b'; g.fillRect(0, 0, 2048, 2048);
  for (let i = 0; i < 90000; i++) { const v = 20 + R() * 40; g.fillStyle = `rgba(${v},${v},${v + 4},.5)`; g.fillRect(R() * 2048, R() * 2048, 2, 2); }
  const X = x => (x + a.hx) / (2 * a.hx) * 2048, Z = z => (z + a.hz) / (2 * a.hz) * 2048;
  g.strokeStyle = 'rgba(235,235,225,.8)'; g.lineWidth = 4;
  for (let x = -a.hx + 8; x < a.hx - 8; x += 5.5) { g.beginPath(); g.moveTo(X(x), Z(a.hz - 3)); g.lineTo(X(x), Z(a.hz - 9)); g.stroke(); g.beginPath(); g.moveTo(X(x), Z(-a.hz + 3)); g.lineTo(X(x), Z(-a.hz + 9)); g.stroke(); }
  g.strokeStyle = 'rgba(240,200,40,.85)'; g.lineWidth = 7;
  for (const [x, z, r] of [[-60, 10, 14], [60, 10, 14], [0, 42, 10]]) { g.beginPath(); g.arc(X(x), Z(z), r / (2 * a.hx) * 2048, 0, 6.283); g.stroke(); }
  g.globalAlpha = 0.5; g.strokeStyle = '#0a0a0a'; g.lineWidth = 16;
  for (let i = 0; i < 26; i++) { const cx = X((R() - 0.5) * a.hx * 1.6), cz = Z((R() - 0.5) * a.hz * 1.6), r = 60 + R() * 220; g.beginPath(); g.arc(cx, cz, r, R() * 6, R() * 6 + 2 + R() * 3); g.stroke(); }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const lotM = new THREE.MeshStandardMaterial({ map: t, roughness: 0.5, metalness: 0.15, envMapIntensity: 1.3 });
  const lot = new THREE.Mesh(new THREE.PlaneGeometry(a.hx * 2, a.hz * 2), lotM); lot.rotation.x = -Math.PI / 2; lot.receiveShadow = true; scene.add(lot);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshStandardMaterial({ color: 0x1c1d21, roughness: 0.9 })); ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02; scene.add(ground);
  // muretas tipo new jersey no perímetro
  const cm = new THREE.MeshStandardMaterial({ map: concreteTextures(3, '#b8b6b0'), roughness: 0.85 });
  const jg = new THREE.CylinderGeometry(0.25, 0.42, 0.85, 4, 1); jg.rotateY(Math.PI / 4); jg.scale(1, 1, 5.2);
  const jl = [];
  for (let x = -a.hx; x <= a.hx; x += 3.05) { jl.push({ x, y: 0.42, z: a.hz + 0.6 }); jl.push({ x, y: 0.42, z: -a.hz - 0.6 }); }
  for (let z = -a.hz; z <= a.hz; z += 3.05) { jl.push({ x: a.hx + 0.6, y: 0.42, z, ry: Math.PI / 2 }); jl.push({ x: -a.hx - 0.6, y: 0.42, z, ry: Math.PI / 2 }); }
  scene.add(instanced(jg, cm, jl, true));
  // pilhas de pneus para contornar
  const stacks = [[-60, 10], [60, 10], [0, 42], [0, -8], [-95, -50], [95, 50]];
  const tg = new THREE.TorusGeometry(0.5, 0.2, 8, 16); tg.rotateX(Math.PI / 2);
  const tl = []; for (const [x, z] of stacks) { for (let h = 0; h < 4; h++) for (const [dx, dz] of [[0, 0], [1.05, 0], [0.52, 0.9]]) tl.push({ x: x + dx - 0.5, y: 0.2 + h * 0.38, z: z + dz - 0.3, color: h % 2 ? '#e2e2e2' : '#151515' }); world.obstacles.push({ x, z, r: 1.7 }); }
  scene.add(instanced(tg, new THREE.MeshStandardMaterial({ roughness: 0.9 }), tl, true));
  // cones
  const cones = []; for (let i = 0; i < 14; i++) { const x = -30 + i * 4.6, z = -32 + Math.sin(i) * 3; cones.push({ x, y: 0, z }); }
  const cg = colored([{ geo: new THREE.ConeGeometry(0.22, 0.7, 12), color: '#ff5a10', m: M4(0, 0.38, 0) }, { geo: new THREE.CylinderGeometry(0.135, 0.17, 0.12, 12), color: '#f4f4f0', m: M4(0, 0.4, 0) }, { geo: new THREE.BoxGeometry(0.5, 0.04, 0.5), color: '#202020', m: M4(0, 0.02, 0) }]);
  scene.add(instanced(cg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 }), cones, true));

  progress(0.45, 'Empilhando contêineres');
  await tick();
  const cols = ['#b5332c', '#1f5fa8', '#2f8a5a', '#d9771c', '#e6e6e0', '#1f8a8a', '#7a3a7a', '#c9a11f'];
  const ctex = (() => { const cc = document.createElement('canvas'); cc.width = 64; cc.height = 32; const gg = cc.getContext('2d'); gg.fillStyle = '#fff'; gg.fillRect(0, 0, 64, 32); gg.fillStyle = 'rgba(0,0,0,.28)'; for (let x = 0; x < 64; x += 4) gg.fillRect(x, 0, 1.5, 32); gg.fillRect(0, 0, 64, 2); gg.fillRect(0, 30, 64, 2); const tt = new THREE.CanvasTexture(cc); tt.colorSpace = THREE.SRGBColorSpace; tt.wrapS = THREE.RepeatWrapping; tt.repeat.set(3, 1); return tt; })();
  const cl = [];
  for (let x = -a.hx - 6; x <= a.hx + 6; x += 12.6) for (const z of [a.hz + 10, a.hz + 13, -a.hz - 10, -a.hz - 13]) { const n = 1 + ((R() * 4) | 0); for (let h = 0; h < n; h++) cl.push({ x, y: 1.3 + h * 2.6, z, ry: Math.PI / 2, color: cols[(R() * cols.length) | 0] }); }
  for (let z = -a.hz - 6; z <= a.hz + 6; z += 12.6) for (const x of [-a.hx - 10, -a.hx - 13]) { const n = 1 + ((R() * 4) | 0); for (let h = 0; h < n; h++) cl.push({ x, y: 1.3 + h * 2.6, z, color: cols[(R() * cols.length) | 0] }); }
  scene.add(instanced(new THREE.BoxGeometry(2.45, 2.6, 12.2), new THREE.MeshStandardMaterial({ map: ctex, roughness: 0.6, metalness: 0.35 }), cl, true));
  // guindastes de cais
  const crane = colored([
    ...[[-11, -9], [11, -9], [-11, 9], [11, 9]].map(([x, z]) => ({ geo: new THREE.BoxGeometry(1.8, 44, 1.8), color: '#d9571c', m: M4(x, 22, z) })),
    { geo: new THREE.BoxGeometry(26, 3, 20), color: '#c94a16', m: M4(0, 44, 0) }, { geo: new THREE.BoxGeometry(3.4, 3, 96), color: '#d9571c', m: M4(0, 48, 30) },
    { geo: new THREE.BoxGeometry(5, 4, 7), color: '#e8e8e0', m: M4(0, 43, 22) }, { geo: new THREE.BoxGeometry(1, 30, 1), color: '#d9571c', m: M4(0, 60, -6, 0.45) }
  ]);
  const crl = [], blink = [];
  for (let i = 0; i < 4; i++) { const x = -150 + i * 100; crl.push({ x, z: a.hz + 60 }); blink.push(x, 50, a.hz + 60, x, 51, a.hz + 120); }
  scene.add(instanced(crane, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.3 }), crl, true));
  const water = new THREE.Mesh(new THREE.PlaneGeometry(6000, 3000), new THREE.MeshPhysicalMaterial({ color: 0x0a1420, roughness: 0.05, metalness: 0.2, normalMap: tex('water_n.jpg', 80, false), normalScale: new THREE.Vector2(0.25, 0.25) }));
  water.rotation.x = -Math.PI / 2; water.position.set(0, -1.5, a.hz + 1580); scene.add(water);

  progress(0.65, 'Ligando as torres de luz');
  await tick();
  const tower = colored([{ geo: new THREE.CylinderGeometry(0.35, 0.6, 26, 8), color: '#4a4d55', m: M4(0, 13, 0) }, { geo: new THREE.BoxGeometry(7, 2.6, 0.8), color: '#c8ccd8', m: M4(0, 26.5, 0.3) }]);
  const tw = [], gl = [], pools = [];
  for (const [x, z] of [[-a.hx + 4, -a.hz + 4], [a.hx - 4, -a.hz + 4], [-a.hx + 4, a.hz - 4], [a.hx - 4, a.hz - 4], [0, -a.hz + 4], [0, a.hz - 4]]) {
    const ry = Math.atan2(-x, -z); tw.push({ x, z, ry });
    for (let k = -1; k <= 1; k++) gl.push(x + Math.cos(ry) * k * 2.2, 26.6, z - Math.sin(ry) * k * 2.2);
    pools.push({ x: x * 0.6, y: 0.03, z: z * 0.55, sx: 70, sz: 70 });
  }
  scene.add(instanced(tower, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, emissive: 0x1a1d26 }), tw, true));
  const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(gl.concat(blink), 3));
  scene.add(new THREE.Points(gg, new THREE.PointsMaterial({ map: glowTexture(), size: 9, color: 0xeef2ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
  const pl = new THREE.PlaneGeometry(1, 1); pl.rotateX(-Math.PI / 2);
  scene.add(instanced(pl, new THREE.MeshBasicMaterial({ map: glowTexture(), color: 0xcdd8ff, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending }), pools));
  const fl = new THREE.SpotLight(0xdfe6ff, 2600, 260, 0.9, 0.6, 1.4); fl.position.set(0, 60, -40); fl.target.position.set(0, 0, 10); scene.add(fl); scene.add(fl.target);
  // horizonte da cidade do outro lado da baía
  const ff = facadeTextures('office', 77, true); ff.map.repeat.set(4, 8); ff.emissive.repeat.set(4, 8);
  const sky = [];
  for (let i = 0; i < 160; i++) { const x = -1400 + R() * 2800, z = a.hz + 900 + R() * 700, h = 30 + Math.pow(R(), 2) * 220, w = 30 + R() * 40; sky.push({ x, y: h / 2 - 2, z, sx: w, sy: h, sz: w }); }
  scene.add(instanced(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ map: ff.map, emissiveMap: ff.emissive, emissive: 0xffffff, emissiveIntensity: 1.4, roughness: 0.8 }), sky));
  // ponte estaiada ao fundo
  const bridge = colored([{ geo: new THREE.BoxGeometry(1600, 4, 26), color: '#d8dce4', m: M4(0, 40, 0) }, { geo: new THREE.BoxGeometry(8, 170, 8), color: '#e8ecf2', m: M4(-300, 85, 0) }, { geo: new THREE.BoxGeometry(8, 170, 8), color: '#e8ecf2', m: M4(300, 85, 0) }]);
  const br = new THREE.Mesh(bridge, new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0x334466, emissiveIntensity: 0.5 })); br.position.set(200, 0, a.hz + 650); scene.add(br);
  const bl = []; for (let x = -800; x <= 800; x += 25) bl.push(200 + x, 43, a.hz + 650); for (let y = 0; y < 170; y += 20) bl.push(-100, y, a.hz + 650, 500, y, a.hz + 650);
  const bg = new THREE.BufferGeometry(); bg.setAttribute('position', new THREE.Float32BufferAttribute(bl, 3));
  scene.add(new THREE.Points(bg, new THREE.PointsMaterial({ map: glowTexture(), size: 14, color: 0xffe0b0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
  world.heightAt = () => 0;
  world.envGround = '#101218';
}
