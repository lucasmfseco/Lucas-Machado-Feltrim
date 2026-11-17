/* Céu, iluminação e mapa de reflexos de cada mapa. */
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { rng, glowTexture } from './tex.js';

export function setupSky(scene, renderer, map, q) {
  const sk = map.sky, night = !!sk.night;
  const sunDir = new THREE.Vector3(...(sk.sun || [0.3, 0.6, 0.2])).normalize();
  const out = { night, sunDir, exposure: sk.exposure || 0.6 };
  let skyMesh;
  if (!night) {
    skyMesh = new Sky(); skyMesh.scale.setScalar(9000);
    const u = skyMesh.material.uniforms;
    u.turbidity.value = sk.turbidity; u.rayleigh.value = sk.rayleigh; u.mieCoefficient.value = 0.005; u.mieDirectionalG.value = 0.82;
    u.sunPosition.value.copy(sunDir).multiplyScalar(1000);
    scene.add(skyMesh);
  } else {
    const g = new THREE.SphereGeometry(4000, 32, 16), c = [], p = g.attributes.position;
    const top = new THREE.Color('#03040a'), mid = new THREE.Color('#0d0f24'), hor = new THREE.Color(sk.fog || '#1b1430'), t = new THREE.Color();
    for (let i = 0; i < p.count; i++) { const h = p.getY(i) / 4000; t.copy(hor).lerp(mid, Math.min(1, Math.max(0, h * 6))).lerp(top, Math.min(1, Math.max(0, h * 2 - 0.2))); c.push(t.r, t.g, t.b); }
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
    skyMesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
    scene.add(skyMesh);
    const R = rng(3), pos = [];
    for (let i = 0; i < 1500; i++) { const a = R() * 6.283, e = 0.12 + R() * 1.3; pos.push(Math.cos(a) * Math.cos(e) * 3800, Math.sin(e) * 3800, Math.sin(a) * Math.cos(e) * 3800); }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xcfd8ff, size: 1.6, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.8 }));
    skyMesh.add(stars);
    const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xe8ecff, fog: false, depthWrite: false }));
    moon.scale.setScalar(220); moon.position.copy(sunDir).multiplyScalar(3500); skyMesh.add(moon);
  }
  out.sky = skyMesh;
  scene.fog = new THREE.FogExp2(new THREE.Color(sk.fog), sk.fogD);

  // luz do sol (ou da lua)
  const el = sunDir.y, warm = new THREE.Color().setHSL(0.08, 0.8, 0.62), white = new THREE.Color(0xfff6ea);
  const sunCol = night ? new THREE.Color(0x8fa2d8) : white.clone().lerp(warm, 1 - Math.min(1, el / 0.35));
  const sun = new THREE.DirectionalLight(sunCol, night ? 0.35 : 2.4 + el * 1.6);
  sun.castShadow = q.shadows > 0;
  if (sun.castShadow) {
    sun.shadow.mapSize.set(q.shadows, q.shadows);
    const c = sun.shadow.camera; c.left = -48; c.right = 48; c.top = 48; c.bottom = -48; c.near = 1; c.far = 400;
    sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.05;
  }
  scene.add(sun); scene.add(sun.target);
  out.sun = sun;
  const hemi = new THREE.HemisphereLight(night ? 0x2a3050 : new THREE.Color(sk.fog).lerp(new THREE.Color(0x9fc4ff), 0.5), night ? 0x080810 : 0x3a3a30, night ? 0.4 : 0.55 + Math.max(0, 0.3 - el) * 1.5);
  scene.add(hemi);

  // reflexos: cena simplificada do céu + chão + luzes
  const env = new THREE.Scene();
  if (!night) {
    const s2 = new Sky(); s2.scale.setScalar(900); s2.material = skyMesh.material; env.add(s2);
    const ground = new THREE.Mesh(new THREE.CircleGeometry(800, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(map.envGround || '#2b3324') }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -6; env.add(ground);
    const R = rng(9);
    for (let i = 0; i < 26; i++) {
      const a = i / 26 * Math.PI * 2, h = 30 + R() * 80;
      const m = new THREE.Mesh(new THREE.BoxGeometry(120, h, 20), new THREE.MeshBasicMaterial({ color: new THREE.Color(map.envGround || '#2b3324').multiplyScalar(0.7 + R() * 0.4) }));
      m.position.set(Math.cos(a) * 420, h / 2 - 6, Math.sin(a) * 420); m.lookAt(0, h / 2, 0); env.add(m);
    }
  } else {
    env.background = new THREE.Color(0x05060c);
    const cols = map.theme === 'neon' ? ['#ff2d6f', '#00e5ff', '#ffe600', '#ffffff', '#a14bff', '#ff8a1f', '#ffd9a0'] : ['#ffd9a0', '#ffffff', '#ffb070', '#9fc4ff'];
    const R = rng(4);
    for (let i = 0; i < 40; i++) {
      const a = R() * Math.PI * 2, d = 60 + R() * 120, w = 6 + R() * 18, h = 3 + R() * 20;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(cols[(R() * cols.length) | 0]).multiplyScalar(1.5 + R() * 3), side: THREE.DoubleSide }));
      m.position.set(Math.cos(a) * d, 4 + R() * 30, Math.sin(a) * d); m.lookAt(0, 4, 0); env.add(m);
    }
    const g = new THREE.Mesh(new THREE.CircleGeometry(400, 24), new THREE.MeshBasicMaterial({ color: 0x0b0b10 })); g.rotation.x = -Math.PI / 2; g.position.y = -2; env.add(g);
  }
  const pm = new THREE.PMREMGenerator(renderer);
  const rt = pm.fromScene(env, 0.02, 0.1, 3000);
  scene.environment = rt.texture;
  pm.dispose();
  env.traverse(o => { if (o.geometry) o.geometry.dispose(); });
  out.envRT = rt;
  return out;
}
