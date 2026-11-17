/* Mapas: traçado (cantos com raio e altura), largura, tema e horário. */

/* Escada de grampos gerada: sobe a encosta em zigue-zague */
function ladder(x0, z0, legs, legLen, gap, r, y0, dy, dir) {
  const pts = [];
  for (let i = 0; i < legs; i++) {
    const z = z0 + i * gap * dir, east = i % 2 === 0;
    const xa = east ? x0 : x0 + legLen, xb = east ? x0 + legLen : x0;
    const wob = (i % 3 - 1) * 6;
    pts.push([xa + (east ? 18 : -18), z + wob, 30, y0 + dy * i]);
    pts.push([(xa + xb) / 2, z - wob * 0.6 + (east ? 4 : -4), 40, y0 + dy * (i + 0.5)]);
    pts.push([xb, z, r, y0 + dy * (i + 0.8)]);
    pts.push([xb + (east ? 6 : -6), z + gap * dir * 0.5, r, y0 + dy * (i + 0.9)]);
  }
  return pts;
}

/* Tartaruga: [reta até o canto, ângulo da curva em graus (+ esquerda), raio, altura].
   O erro de fechamento é distribuído pelos cantos para o laço fechar. */
function turtle(items, h0 = 0) {
  let x = 0, z = 0, h = h0 * Math.PI / 180;
  const pts = [];
  for (const [L, ang, r, y] of items) {
    x += Math.cos(h) * L; z += Math.sin(h) * L;
    pts.push([x, z, r, y]);
    h += ang * Math.PI / 180;
  }
  const n = pts.length, ex = pts[n - 1][0], ez = pts[n - 1][1];
  return pts.map((p, i) => [p[0] - ex * (i + 1) / n, p[1] - ez * (i + 1) / n, p[2], p[3]]);
}

export const MAPS = [
  {
    id: 'haruna', name: 'Touge do Monte Haruna', sub: 'Pôr do sol · serra com grampos e guard-rails', kind: 'touge', theme: 'sunset', thumb: ['#2a2350', '#c8603e', '#ffc07a'],
    width: 9, shoulder: 1.0,
    pts: [[59.5, 0, 45.3, 21.0], [86.8, -65.4, 36.8, 34.7], [54.4, -103, 24.1, 41.0], [102.9, -149.7, 39.9, 39.2], [180.2, -139.1, 23.0, 35.1], [199.9, -82.1, 20.3, 35.1], [141.5, -13.4, 19.1, 39.2], [90, -46.4, 13.4, 41.0], [133.7, 18.5, 59.7, 34.7], [192.8, 5.1, 18.3, 21.0], [207, 93.3, 31.3, 7.3], [253.4, 138.1, 51.9, 1.0], [255.4, 197.5, 18.6, 2.8], [173.8, 217.9, 22.3, 6.9], [124.4, 158.6, 38.3, 6.9], [168.4, 79.5, 12.2, 2.8], [35.7, 147.7, 22, 1.0], [0, 0, 22, 7.3]],
    sky: { sun: [-0.62, 0.13, -0.55], turbidity: 9, rayleigh: 2.6, exposure: 0.75, hdr: 'venice_sunset_1k.hdr', fog: '#d39a7c', fogD: 0.0022 }
  },
  {
    id: 'iroha', name: 'Serra de Irohazaka', sub: 'Outono · escada de grampos na montanha', kind: 'touge', theme: 'autumn', thumb: ['#3b78c4', '#9cc6ea', '#e9a25a'],
    width: 8.5, shoulder: 1.0,
    pts: null,
    gen: () => {
      const up = ladder(0, 0, 6, 105, 34, 12, 0, 11, 1);
      const back = [[150, 235, 26, 70], [205, 200, 18, 66], [180, 150, 22, 60], [235, 110, 18, 52], [200, 60, 20, 44], [250, 15, 22, 34], [215, -45, 18, 22], [150, -70, 22, 14], [90, -40, 16, 8], [30, -75, 22, 3], [-40, -40, 20, 0]];
      return up.concat(back);
    },
    sky: { sun: [0.45, 0.42, -0.4], turbidity: 4, rayleigh: 1.4, exposure: 0.55, hdr: 'quarry_01_1k.hdr', fog: '#c8d4dc', fogD: 0.0016 }
  },
  {
    id: 'shibuya', name: 'Ruas de Shibuya', sub: 'Noite · neon, esquinas de 90° e asfalto molhado', kind: 'city', theme: 'neon', thumb: ['#05060f', '#1d1440', '#ff2d6f'],
    width: 11, shoulder: 0.4,
    pts: [[0, 0, 10, 0], [110, 0, 10, 1], [110, 60, 9, 3], [170, 60, 9, 4], [170, -20, 10, 3], [240, -20, 12, 2], [240, 110, 10, 1], [150, 110, 10, 2], [150, 150, 8, 3], [40, 150, 10, 4], [40, 90, 9, 3], [-30, 90, 10, 2], [-30, 22, 12, 1], [-12, 0, 8, 0]],
    sky: { night: true, hdr: 'moonless_golf_1k.hdr', fog: '#1b1430', fogD: 0.006, exposure: 0.9 }
  },
  {
    id: 'setagaya', name: 'Bairro de Setagaya', sub: 'Entardecer · ruas estreitas, postes e fios', kind: 'city', theme: 'dusk', thumb: ['#3a3360', '#d07a5a', '#ffcf8a'],
    width: 9.5, shoulder: 0.3,
    pts: [[0, 0, 9, 0], [70, 0, 9, 0], [70, 50, 8, 1], [130, 50, 9, 2], [150, 20, 14, 2], [210, 20, 9, 3], [210, 110, 9, 4], [160, 110, 8, 4], [160, 80, 8, 4], [95, 80, 8, 3], [95, 140, 9, 3], [20, 140, 9, 2], [-25, 100, 14, 1], [-25, 40, 9, 0]],
    sky: { sun: [-0.75, 0.09, 0.35], turbidity: 10, rayleigh: 3, exposure: 0.85, hdr: 'venice_sunset_1k.hdr', fog: '#c58a78', fogD: 0.004 }
  },
  {
    id: 'ebisu', name: 'Circuito Ebisu Sul', sub: 'Dia · circuito de drift na encosta', kind: 'circuit', theme: 'day', thumb: ['#2f7fd8', '#8cc4f2', '#cfe8d0'],
    width: 12, shoulder: 3,
    pts: [[81.7, 0, 51.1, 11.5], [116.7, -59.3, 26.5, 12.0], [205.3, -61.3, 49.6, 9.1], [222.6, -106.5, 27.5, 4.0], [165, -179.6, 28.4, 0.9], [212.1, -232.7, 54.2, 1.1], [299.4, -244.3, 29.8, 2.2], [352.3, -165.3, 41.0, 1.4], [338.9, -66.3, 19.5, -0.1], [280.8, -72.8, 20.1, 1.0], [243.3, -5.5, 48.0, 5.4], [158, -14, 26.7, 10.0], [172.6, 74.9, 36.1, 11.3], [45.9, 156.3, 22, 10.2], [0, 0, 22, 9.9]],    sky: { sun: [0.3, 0.75, 0.45], turbidity: 3, rayleigh: 1, exposure: 0.5, hdr: 'quarry_01_1k.hdr', fog: '#bccfdc', fogD: 0.0012 }
  },
  {
    id: 'hokkaido', name: 'Passo de Hokkaido', sub: 'Neve · serra escorregadia ao amanhecer', kind: 'touge', theme: 'snow', thumb: ['#6f8fb8', '#d9c4c0', '#f4f6f8'], grip: 0.82,
    width: 9, shoulder: 1.0,
    pts: [[52.5, 0, 30.2, 33.4], [74.6, 51, 38.5, 39.2], [38.9, 123.3, 33.9, 37.8], [-51.4, 118.4, 49.9, 29.1], [-84.8, 41.7, 46.1, 19.0], [-72.9, -7.1, 17.9, 13.3], [-140.1, -47, 59.2, 12.7], [-177.4, -136.4, 28.0, 12.7], [-97.8, -148.4, 12.0, 8.5], [-168, -173.6, 52.2, 0.6], [-211.1, -248.2, 41.5, -5.2], [-168.7, -313.7, 18.1, -3.8], [-93.4, -266.2, 23.5, 4.9], [-111.9, -176.3, 55.4, 15.0], [-78.3, -140.7, 24.1, 20.7], [-110, -101.3, 45.7, 21.3], [-93.1, -61.6, 22, 21.3], [0, 0, 22, 25.5]],
    sky: { sun: [0.55, 0.16, 0.6], turbidity: 6, rayleigh: 1.2, exposure: 0.5, hdr: 'blouberg_sunrise_2_1k.hdr', fog: '#dfe6ee', fogD: 0.004 }
  },
  {
    id: 'porto', name: 'Pátio do Porto', sub: 'Noite · estacionamento aberto para treinar', kind: 'lot', theme: 'port', thumb: ['#03040a', '#141a30', '#3a4a70'],
    arena: [120, 80],
    sky: { night: true, hdr: 'moonless_golf_1k.hdr', fog: '#141826', fogD: 0.004, exposure: 0.9 }
  }
];

export function mapPoints(map) {
  if (map.pts) return map.pts;
  if (map.gen) return map.gen();
  if (map.mirror) { const src = MAPS.find(m => m.id === map.mirror); return mapPoints(src).map(p => [-p[0], p[1], p[2], p[3]]).reverse(); }
  return null;
}
