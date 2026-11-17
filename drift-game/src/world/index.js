/* Monta o mundo de um mapa: pista, céu, luz, cenário. */
import * as THREE from 'three';
import { buildPath, arenaTrack, locate } from './track.js';
import { MAPS, mapPoints } from './maps.js';
import { setupSky } from './sky.js';
import { buildMountain } from './mountain.js';
import { buildCity } from './city.js';
import { buildLot } from './lot.js';
import { tick } from './common.js';

export { MAPS, locate };

const trackCache = {};
export function trackOf(map) {
  if (trackCache[map.id]) return trackCache[map.id];
  const t = map.arena ? arenaTrack(map.arena[0], map.arena[1]) : buildPath(mapPoints(map), { width: map.width, shoulder: map.shoulder });
  return (trackCache[map.id] = t);
}

export async function buildWorld(map, renderer, progress, q) {
  const t0 = performance.now(), p0 = progress; let lastL = '', lastT = t0;
  progress = (p, l) => { if (window.__timing && l !== lastL) { console.log('[t]', lastL, Math.round(performance.now() - lastT)); lastL = l; lastT = performance.now(); } p0(p, l); };
  const scene = new THREE.Scene(), trk = trackOf(map);
  const world = { scene, track: trk, obstacles: [], grip: map.grip || 1, night: !!map.sky.night, map };
  const ctx = { scene, trk, map, q, progress, world };
  progress(0.04, 'Preparando o céu');
  await tick();
  if (map.kind === 'city') await buildCity(ctx);
  else if (map.kind === 'lot') await buildLot(ctx);
  else await buildMountain(ctx);
  progress(0.88, 'Calculando luz e reflexos');
  await tick();
  map.envGround = world.envGround;
  const sky = setupSky(scene, renderer, map, q);
  Object.assign(world, { sun: sky.sun, sunDir: sky.sunDir, exposure: sky.exposure, sky: sky.sky });
  world.update = (dt, cam, car) => {
    if (sky.sky && sky.sky.isMesh && !sky.sky.material.uniforms) sky.sky.position.set(cam.x, 0, cam.z);
    const s = sky.sun, d = sky.sunDir;
    s.position.set(car.x + d.x * 150, car.y + d.y * 150, car.z + d.z * 150);
    s.target.position.set(car.x, car.y, car.z);
  };
  world.dispose = () => {
    scene.traverse(o => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { for (const k of ['map', 'normalMap', 'roughnessMap', 'emissiveMap']) if (m[k] && !m[k].userData.keep) m[k].dispose(); m.dispose(); });
    });
    sky.envRT.dispose();
  };
  return world;
}
