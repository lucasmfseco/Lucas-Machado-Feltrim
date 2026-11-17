/* Dados do jogo: carros, peças, mapas e amostragem de pista. Sem dependência de Three.js. */
(function (root) {
  const DG = root.DG = root.DG || {};

  /* prof: [t, alturaCarroceria, alturaTeto] com t de -1 (traseira) a 1 (frente), em metros */
  DG.CARS = [
    {
      id: 'k86', name: 'Kaze 86', sub: 'Hatch leve dos anos 80 · 4 cilindros aspirado', price: 0,
      L: 4.2, W: 1.63, wb: 2.4, wheelR: 0.29, cw: 0.8, color: '#f4f4f0',
      engine: 'i4', turbo: false, redline: 7800, accel: 7.6, top: 50, agility: 1.08,
      prof: [[-1, .76, .76], [-.94, .88, .88], [-.86, .89, .92], [-.36, .88, 1.32], [0, .87, 1.33], [.3, .83, .84], [.9, .72, .72], [1, .6, .6]],
      pillars: [-.2], head: 'popup', tail: 'rect', grille: 'slot', tips: 1,
      stats: { pot: 3, drift: 9, vel: 3 }
    },
    {
      id: 'b36', name: 'Bayern 36', sub: 'Cupê alemão dos anos 90 · 6 em linha aspirado', price: 12000,
      L: 4.43, W: 1.71, wb: 2.7, wheelR: 0.31, cw: 0.8, color: '#1b2a4a',
      engine: 'i6', turbo: false, redline: 7200, accel: 8.6, top: 58, agility: 1.0,
      prof: [[-1, .82, .82], [-.96, .96, .96], [-.62, .98, .99], [-.34, .95, 1.35], [-.02, .94, 1.37], [.24, .9, .91], [.92, .78, .78], [1, .6, .6]],
      pillars: [-.16], head: 'quad', tail: 'rect', grille: 'kidney', tips: 2,
      stats: { pot: 4, drift: 7, vel: 5 }
    },
    {
      id: 's15', name: 'Sylph S15', sub: 'Cupê japonês · 4 cilindros turbo', price: 18000,
      L: 4.45, W: 1.7, wb: 2.52, wheelR: 0.31, cw: 0.8, color: '#c8ccd2',
      engine: 'i4t', turbo: true, redline: 7500, accel: 9.6, top: 62, agility: 1.06,
      prof: [[-1, .8, .8], [-.95, .92, .92], [-.66, .95, .96], [-.3, .92, 1.27], [-.05, .91, 1.29], [.22, .86, .87], [.9, .7, .7], [1, .55, .55]],
      pillars: [-.15], head: 'sleek', tail: 'rect', grille: 'slot', tips: 1,
      stats: { pot: 5, drift: 9, vel: 6 }
    },
    {
      id: 'z35', name: 'Zetto 350', sub: 'Fastback japonês · V6 aspirado', price: 24000,
      L: 4.31, W: 1.82, wb: 2.65, wheelR: 0.33, cw: 0.78, color: '#d9661c',
      engine: 'v6', turbo: false, redline: 7000, accel: 10.2, top: 64, agility: 1.0,
      prof: [[-1, .8, .8], [-.95, .95, .95], [-.8, .98, 1.02], [-.3, .97, 1.29], [-.08, .95, 1.32], [.2, .9, .91], [.9, .74, .74], [1, .55, .55]],
      pillars: [-.2], head: 'sleek', tail: 'vert', grille: 'wide', tips: 2,
      stats: { pot: 6, drift: 7, vel: 6 }
    },
    {
      id: 'x100', name: 'Tourer X100', sub: 'Sedã japonês · 6 em linha turbo', price: 28000,
      L: 4.72, W: 1.76, wb: 2.73, wheelR: 0.32, cw: 0.8, color: '#e9e9e4',
      engine: 'i6t', turbo: true, redline: 7400, accel: 10.6, top: 65, agility: 0.95,
      prof: [[-1, .84, .84], [-.96, .98, .98], [-.6, 1.0, 1.01], [-.4, .97, 1.38], [.02, .95, 1.4], [.28, .92, .93], [.93, .82, .82], [1, .62, .62]],
      pillars: [-.2, .0], head: 'rect', tail: 'bar', grille: 'wide', tips: 1,
      stats: { pot: 6, drift: 8, vel: 6 }
    },
    {
      id: 'fd7', name: 'Rota-7 FD', sub: 'Esportivo japonês · motor rotativo biturbo', price: 38000,
      L: 4.29, W: 1.76, wb: 2.43, wheelR: 0.32, cw: 0.76, color: '#c2161a',
      engine: 'rotary', turbo: true, redline: 9000, accel: 11.2, top: 68, agility: 1.1,
      prof: [[-1, .74, .74], [-.94, .86, .86], [-.7, .9, .93], [-.25, .9, 1.22], [-.06, .89, 1.23], [.22, .84, .85], [.6, .75, .75], [.9, .61, .61], [1, .48, .48]],
      pillars: [], head: 'popup', tail: 'barround', grille: 'mouth', tips: 2,
      stats: { pot: 7, drift: 9, vel: 7 }
    },
    {
      id: 'stl', name: 'Stallion GT', sub: 'Muscle americano · V8', price: 42000,
      L: 4.78, W: 1.92, wb: 2.72, wheelR: 0.34, cw: 0.77, color: '#20242b',
      engine: 'v8', turbo: false, redline: 7000, accel: 12.2, top: 68, agility: 0.92,
      prof: [[-1, .86, .86], [-.96, 1.0, 1.0], [-.78, 1.03, 1.06], [-.25, .99, 1.36], [-.05, .97, 1.38], [.18, .95, .96], [.92, .86, .86], [1, .62, .62]],
      pillars: [-.14], head: 'rect', tail: 'tri', grille: 'hex', tips: 4,
      stats: { pot: 8, drift: 6, vel: 7 }
    },
    {
      id: 'mk4', name: 'Sora MK4', sub: 'Lenda japonesa de 1993 · 6 em linha biturbo', price: 55000,
      L: 4.52, W: 1.81, wb: 2.55, wheelR: 0.33, cw: 0.77, color: '#e36a12',
      engine: 'i6t', turbo: true, redline: 7200, accel: 12.6, top: 72, agility: 1.0,
      prof: [[-1, .78, .78], [-.95, .9, .9], [-.68, .94, .95], [-.22, .92, 1.26], [-.04, .91, 1.27], [.24, .87, .88], [.6, .8, .8], [.9, .68, .68], [1, .5, .5]],
      pillars: [-.12], head: 'triple', tail: 'round4', grille: 'mouth', tips: 1, bigTip: true,
      stats: { pot: 9, drift: 8, vel: 9 }
    },
    {
      id: 'r34', name: 'Raijin GT-34', sub: 'Cupê japonês de 1999 · 6 em linha biturbo', price: 65000,
      L: 4.6, W: 1.79, wb: 2.67, wheelR: 0.33, cw: 0.8, color: '#1c3f9e',
      engine: 'i6rb', turbo: true, redline: 8200, accel: 13.2, top: 72, agility: 1.02,
      prof: [[-1, .86, .86], [-.96, .98, .98], [-.62, 1.0, 1.01], [-.34, .97, 1.34], [-.02, .95, 1.36], [.2, .92, .93], [.92, .8, .8], [1, .58, .58]],
      pillars: [-.16], head: 'rect', tail: 'round2', grille: 'wide', tips: 1, bigTip: true,
      stats: { pot: 10, drift: 8, vel: 9 }
    }
  ];

  DG.PAINTS = ['#f4f4f0', '#0e0f12', '#c2161a', '#e36a12', '#f2c200', '#1c3f9e', '#00a3c4', '#1f8a4c', '#7a2bd1', '#ff4fa3', '#8d949c', '#3b2416', '#b7e000', '#0b5b55', '#f1e4c9', '#5c0f1c'];
  DG.FINISHES = [
    { id: 'gloss', name: 'Brilhante' }, { id: 'metal', name: 'Metálica' }, { id: 'pearl', name: 'Perolizada' },
    { id: 'matte', name: 'Fosca' }, { id: 'chrome', name: 'Cromada' }
  ];
  DG.GLOWS = ['#ff2d6f', '#00e5ff', '#7cff3a', '#ff8a1f', '#a14bff', '#ffffff', '#ffe600', '#2d6bff'];
  DG.WHEEL_COLORS = ['#c9ccd1', '#15161a', '#d4a63a', '#f4f4f0', '#8a5a2b', '#c2161a', '#1c3f9e', '#3a3d44'];

  /* Categorias da garagem. free: opção de cor/acabamento sem custo. */
  DG.CATS = [
    { id: 'paint', name: 'Pintura', group: 'Visual', free: true },
    { id: 'kit', name: 'Body kit', group: 'Visual' },
    { id: 'wing', name: 'Aerofólio', group: 'Visual' },
    { id: 'wheels', name: 'Rodas', group: 'Visual' },
    { id: 'wsize', name: 'Aro', group: 'Visual' },
    { id: 'hood', name: 'Capô', group: 'Visual' },
    { id: 'roof', name: 'Teto', group: 'Visual' },
    { id: 'susp', name: 'Suspensão', group: 'Visual' },
    { id: 'tint', name: 'Vidros', group: 'Visual' },
    { id: 'lights', name: 'Faróis', group: 'Visual' },
    { id: 'neon', name: 'Neon', group: 'Visual' },
    { id: 'smoke', name: 'Fumaça', group: 'Visual' },
    { id: 'engine', name: 'Motor', group: 'Desempenho' },
    { id: 'turbo', name: 'Turbo', group: 'Desempenho' },
    { id: 'exhaust', name: 'Escape', group: 'Desempenho' },
    { id: 'tires', name: 'Pneus', group: 'Desempenho' },
    { id: 'angle', name: 'Kit de ângulo', group: 'Desempenho' },
    { id: 'weight', name: 'Peso', group: 'Desempenho' }
  ];

  DG.PARTS = {
    kit: [
      { id: 'stock', name: 'Original', desc: 'Carroceria de fábrica.', price: 0 },
      { id: 'street', name: 'Street', desc: 'Lip dianteiro e saias laterais.', price: 1800 },
      { id: 'aero', name: 'Aero GT', desc: 'Lip, saias, canards e difusor traseiro.', price: 4200 },
      { id: 'wide', name: 'Widebody rebitado', desc: 'Para-lamas alargados com rebites aparentes, no estilo das oficinas japonesas.', price: 9500 },
      { id: 'widepro', name: 'Widebody Pro', desc: 'Para-lamas largos, lip, saias, canards e difusor completos.', price: 14000 }
    ],
    wing: [
      { id: 'none', name: 'Sem aerofólio', desc: 'Traseira limpa.', price: 0 },
      { id: 'duck', name: 'Ducktail', desc: 'Aba curta que prolonga a tampa traseira.', price: 900 },
      { id: 'lip', name: 'Asa baixa', desc: 'Asa discreta colada na tampa.', price: 1300 },
      { id: 'hoop', name: 'Arco anos 90', desc: 'O aerofólio em arco alto dos esportivos japoneses de 1990.', price: 2400 },
      { id: 'gt', name: 'GT Wing', desc: 'Asa de competição com suportes e endplates.', price: 3400 },
      { id: 'gtbig', name: 'GT Wing alto', desc: 'Asa larga com suportes altos, de carro de time attack.', price: 5400 }
    ],
    wheels: [
      { id: 'stock', name: 'Originais', desc: 'Rodas de fábrica de 5 raios largos.', price: 0 },
      { id: 'six', name: '6 raios forjada', desc: 'O clássico japonês de seis raios grossos.', price: 1800 },
      { id: 'star', name: 'Estrela 5 pontas', desc: 'Cinco raios finos em estrela.', price: 1500 },
      { id: 'mesh', name: 'Malha', desc: 'Raios cruzados em malha, estilo europeu.', price: 2300 },
      { id: 'multi', name: 'Multirraio', desc: 'Dez raios finos.', price: 2400 },
      { id: 'dish', name: 'Deep dish', desc: 'Aba larga e funda com raios curtos.', price: 2900 },
      { id: 'fan', name: 'Turbofan', desc: 'Disco fechado com aletas, estilo corrida dos anos 80.', price: 3100 }
    ],
    wsize: [
      { id: 's0', name: 'Aro original', desc: 'Pneu de perfil alto.', price: 0 },
      { id: 's1', name: 'Aro +1"', desc: 'Roda maior, pneu mais baixo.', price: 700 },
      { id: 's2', name: 'Aro +2"', desc: 'Roda grande com pneu de perfil bem baixo.', price: 1400 }
    ],
    hood: [
      { id: 'stock', name: 'Original', desc: 'Capô na cor do carro.', price: 0 },
      { id: 'vent', name: 'Com saídas de ar', desc: 'Capô na cor do carro com duas saídas de ar.', price: 1500 },
      { id: 'carbon', name: 'Fibra de carbono', desc: 'Capô em fibra de carbono aparente.', price: 2800 },
      { id: 'carbonvent', name: 'Carbono com saídas', desc: 'Fibra de carbono com saídas de ar.', price: 3600 }
    ],
    roof: [
      { id: 'stock', name: 'Original', desc: 'Teto na cor do carro.', price: 0 },
      { id: 'carbon', name: 'Fibra de carbono', desc: 'Teto em fibra de carbono aparente.', price: 1800 },
      { id: 'black', name: 'Preto brilhante', desc: 'Teto preto contrastante.', price: 600 }
    ],
    susp: [
      { id: 'stock', name: 'Original', desc: 'Altura de fábrica.', price: 0 },
      { id: 'low', name: 'Molas esportivas', desc: 'Carro 4 cm mais baixo.', price: 1200 },
      { id: 'coil', name: 'Coilover', desc: 'Carro 7 cm mais baixo com leve cambagem.', price: 2600 },
      { id: 'slam', name: 'Socado', desc: 'Rente ao chão, com cambagem negativa forte.', price: 3800 }
    ],
    tint: [
      { id: 'none', name: 'Transparentes', desc: 'Vidros de fábrica.', price: 0 },
      { id: 'mid', name: 'Fumê médio', desc: 'Película escura média.', price: 400 },
      { id: 'dark', name: 'Fumê escuro', desc: 'Película bem escura.', price: 800 }
    ],
    lights: [
      { id: 'white', name: 'Brancos', desc: 'Faróis de fábrica.', price: 0 },
      { id: 'yellow', name: 'Amarelos', desc: 'Faróis amarelos, tradição das corridas japonesas.', price: 400 },
      { id: 'ice', name: 'Azul gelo', desc: 'Faróis de xenônio azulados.', price: 500 }
    ],
    neon: [
      { id: 'none', name: 'Sem neon', desc: 'Sem luz embaixo do carro.', price: 0 },
      { id: 'on', name: 'Neon inferior', desc: 'Luz embaixo do carro. A cor você troca de graça.', price: 1600 }
    ],
    smoke: [
      { id: 'white', name: 'Branca', desc: 'Fumaça normal de pneu.', price: 0 },
      { id: 'color', name: 'Colorida', desc: 'Pneus de fumaça colorida. A cor você troca de graça.', price: 1300 }
    ],
    engine: [
      { id: 'stock', name: 'Original', desc: 'Motor de fábrica.', price: 0, pow: 1 },
      { id: 'st1', name: 'Estágio 1', desc: 'Filtro, remap e velas. +10% de potência.', price: 3000, pow: 1.1 },
      { id: 'st2', name: 'Estágio 2', desc: 'Comando e bicos maiores. +22% de potência.', price: 7000, pow: 1.22 },
      { id: 'st3', name: 'Estágio 3', desc: 'Motor forjado. +38% de potência.', price: 14000, pow: 1.38 }
    ],
    turbo: [
      { id: 'stock', name: 'Original', desc: 'Indução de fábrica.', price: 0, pow: 1 },
      { id: 'kit', name: 'Kit turbo', desc: 'Turbo e válvula de alívio aberta. +12% de potência e o som do turbo.', price: 5500, pow: 1.12 },
      { id: 'big', name: 'Turbo grande', desc: 'Turbina grande com alívio barulhento. +20% de potência.', price: 9500, pow: 1.2 }
    ],
    exhaust: [
      { id: 'stock', name: 'Original', desc: 'Escape silencioso de fábrica.', price: 0, pow: 1 },
      { id: 'sport', name: 'Esportivo', desc: 'Mais ronco. +3% de potência.', price: 1500, pow: 1.03 },
      { id: 'straight', name: 'Direto', desc: 'Escape reto: alto, com estouros e chamas. +6% de potência.', price: 3400, pow: 1.06 }
    ],
    tires: [
      { id: 'street', name: 'De rua', desc: 'Pneus comuns.', price: 0 },
      { id: 'sport', name: 'Esportivos', desc: 'Mais tração na saída das curvas.', price: 1600 },
      { id: 'drift', name: 'De drift', desc: 'Derrapam fácil e seguram o ângulo por mais tempo.', price: 3200 }
    ],
    angle: [
      { id: 'stock', name: 'Original', desc: 'Esterço de fábrica.', price: 0 },
      { id: 'kit', name: 'Kit de ângulo', desc: 'Mais esterço: ângulos de drift maiores sem rodar.', price: 2600 },
      { id: 'pro', name: 'Kit de ângulo Pro', desc: 'Esterço máximo, de carro de competição.', price: 5200 }
    ],
    weight: [
      { id: 'stock', name: 'Original', desc: 'Interior completo.', price: 0 },
      { id: 'lite', name: 'Alívio de peso', desc: 'Sem banco traseiro e forros. Acelera e vira mais rápido.', price: 2200 },
      { id: 'race', name: 'Preparação de pista', desc: 'Interior depenado e gaiola. O mais ágil.', price: 4800 }
    ]
  };

  DG.defaultCfg = function (car) {
    const eq = {};
    for (const k in DG.PARTS) eq[k] = DG.PARTS[k][0].id;
    const owned = {};
    for (const k in DG.PARTS) owned[k] = [DG.PARTS[k][0].id];
    return { eq, owned, paint: car.color, finish: 'gloss', wheelColor: '#c9ccd1', neonColor: '#00e5ff', smokeColor: '#ff2d6f', caliper: '#c2161a' };
  };

  DG.part = function (cat, id) {
    const l = DG.PARTS[cat];
    return l.find(p => p.id === id) || l[0];
  };

  /* Estatísticas finais do carro com as peças equipadas */
  DG.carStats = function (car, cfg) {
    const e = cfg.eq;
    const pow = DG.part('engine', e.engine).pow * DG.part('turbo', e.turbo).pow * DG.part('exhaust', e.exhaust).pow;
    const wt = e.weight === 'race' ? 1.1 : e.weight === 'lite' ? 1.05 : 1;
    const tire = e.tires;
    return {
      accel: car.accel * pow * wt,
      top: car.top * (1 + (pow - 1) * 0.45),
      steer: 1.95 * car.agility * (wt > 1 ? 1 + (wt - 1) * 0.6 : 1),
      grip: tire === 'sport' ? 10.5 : 9,
      driftGrip: tire === 'drift' ? 2.3 : tire === 'sport' ? 2.8 : 2.6,
      driftHold: tire === 'drift' ? 1.6 : 2.5,
      maxSlip: e.angle === 'pro' ? 1.2 : e.angle === 'kit' ? 1.06 : 0.92,
      redline: car.redline,
      turbo: car.turbo || e.turbo !== 'stock',
      turboLvl: e.turbo === 'big' ? 2 : e.turbo === 'kit' ? 1 : car.turbo ? 0.7 : 0,
      exhaust: e.exhaust
    };
  };

  /* ---------- Mapas ---------- */
  DG.MAPS = [
    {
      id: 'tokyo', name: 'Via Expressa de Tóquio', sub: 'Noite · neon e pista molhada', theme: 'tokyo', width: 15, grip: 1,
      gen: { R: 215, sx: 1.25, sz: 0.85, n: 30, waves: [[2, .18, 0], [3, .14, 1.2], [5, .06, .5]] },
      sky: ['#05060f', '#141033', '#3a1d4f'], fog: ['#1a1230', 120, 900], night: true
    },
    {
      id: 'touge', name: 'Touge do Monte Haru', sub: 'Pôr do sol · serra com grampos', theme: 'touge', width: 11.5, grip: 1,
      pts: [[-90, 0], [20, -4], [112, 0], [140, 6], [153, 26], [140, 46], [112, 52], [20, 48], [-36, 52], [-62, 58], [-74, 78], [-62, 98], [-36, 104], [30, 100], [112, 104], [140, 110], [153, 131], [140, 152], [112, 158], [0, 154], [-110, 160], [-170, 120], [-185, 60], [-150, 12]],
      sky: ['#1d1a4a', '#c85a3a', '#ffc27a'], fog: ['#d98a5c', 140, 1100], night: false
    },
    {
      id: 'circuit', name: 'Autódromo Vale Verde', sub: 'Dia claro · zebras e arquibancadas', theme: 'circuit', width: 16, grip: 1.03,
      gen: { R: 175, sx: 1.3, sz: 0.9, n: 30, waves: [[3, .22, .4], [4, .12, 2], [7, .04, 1]] },
      sky: ['#2f7fd8', '#8cc4f2', '#dff1ff'], fog: ['#cfe6f7', 300, 1800], night: false
    },
    {
      id: 'docks', name: 'Docas de Yokohama', sub: 'Entardecer · contêineres e guindastes', theme: 'docks', width: 14, grip: 1,
      gen: { R: 150, sx: 1.2, sz: 0.9, n: 28, waves: [[4, .18, 0], [6, .045, 1]] },
      sky: ['#24304f', '#8f6a8a', '#ffb07a'], fog: ['#a98496', 160, 1200], night: false, lamps: true
    },
    {
      id: 'desert', name: 'Cânion Vermelho', sub: 'Fim de tarde · curvas longas e rápidas', theme: 'desert', width: 16, grip: 1,
      gen: { R: 235, sx: 1.15, sz: 0.9, n: 30, waves: [[2, .24, .7], [5, .09, 0]] },
      sky: ['#3a6fc4', '#f0b27a', '#ffe2b0'], fog: ['#f0c79a', 250, 1700], night: false
    },
    {
      id: 'coast', name: 'Orla do Pacífico', sub: 'Manhã de sol · palmeiras e mar', theme: 'coast', width: 14, grip: 1,
      gen: { R: 190, sx: 1.45, sz: 0.72, n: 30, waves: [[3, .2, 1], [6, .035, 0]] },
      sky: ['#1e78d6', '#7fd0f5', '#e8fbff'], fog: ['#cdeefb', 300, 1900], night: false
    },
    {
      id: 'snow', name: 'Passo de Hokkaido', sub: 'Dia nevado · pista escorregadia', theme: 'snow', width: 13, grip: 0.82,
      gen: { R: 165, sx: 1.2, sz: 0.95, n: 30, waves: [[5, .15, 0], [2, .2, 2]] },
      sky: ['#8fa4bd', '#c9d6e3', '#eef3f8'], fog: ['#dfe7ef', 90, 620], night: false
    },
    {
      id: 'arena', name: 'Pátio do Estádio', sub: 'Noite · espaço aberto para manobras', theme: 'arena', width: 0, grip: 1,
      arena: { hx: 120, hz: 80 },
      sky: ['#04050b', '#0d1226', '#1f2a4d'], fog: ['#0d1226', 150, 900], night: true
    }
  ];

  function controlPoints(map) {
    if (map.pts) return map.pts.map(p => ({ x: p[0], z: p[1] }));
    const g = map.gen, out = [];
    for (let i = 0; i < g.n; i++) {
      const th = i / g.n * Math.PI * 2;
      let r = 1;
      for (const w of g.waves) r += w[1] * Math.sin(w[0] * th + w[2]);
      out.push({ x: Math.cos(th) * g.R * r * g.sx, z: Math.sin(th) * g.R * r * g.sz });
    }
    return out;
  }

  function cr(p0, p1, p2, p3, t) {
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
  }

  /* Amostra a pista fechada em pontos equidistantes (~1,5 m) com tangente e normal */
  DG.sampleTrack = function (map) {
    if (map.arena) {
      const a = map.arena;
      return { arena: a, pts: [], len: 0, halfW: 0, limit: 0, start: { x: 0, z: -a.hz * 0.5, h: Math.PI / 2 }, bounds: { x0: -a.hx, x1: a.hx, z0: -a.hz, z1: a.hz } };
    }
    const cp = controlPoints(map), n = cp.length, dense = [];
    for (let i = 0; i < n; i++) {
      const a = cp[(i - 1 + n) % n], b = cp[i], c = cp[(i + 1) % n], d = cp[(i + 2) % n];
      for (let k = 0; k < 24; k++) {
        const t = k / 24;
        dense.push({ x: cr(a.x, b.x, c.x, d.x, t), z: cr(a.z, b.z, c.z, d.z, t) });
      }
    }
    const m = dense.length, acc = [0];
    for (let i = 1; i <= m; i++) {
      const p = dense[i % m], q = dense[i - 1];
      acc.push(acc[i - 1] + Math.hypot(p.x - q.x, p.z - q.z));
    }
    const len = acc[m], N = Math.round(len / 1.5), pts = [];
    let j = 0;
    for (let i = 0; i < N; i++) {
      const d = i / N * len;
      while (acc[j + 1] < d) j++;
      const f = (d - acc[j]) / (acc[j + 1] - acc[j] || 1), p = dense[j], q = dense[(j + 1) % m];
      pts.push({ x: p.x + (q.x - p.x) * f, z: p.z + (q.z - p.z) * f });
    }
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (let i = 0; i < N; i++) {
      const a = pts[(i - 1 + N) % N], b = pts[(i + 1) % N], p = pts[i];
      const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
      p.tx = dx / l; p.tz = dz / l; p.nx = p.tz; p.nz = -p.tx;
      x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); z0 = Math.min(z0, p.z); z1 = Math.max(z1, p.z);
    }
    const s = pts[0];
    return {
      pts, len, N, halfW: map.width / 2, shoulder: 1.6, limit: map.width / 2 + 1.6,
      start: { x: s.x, z: s.z, h: Math.atan2(s.tx, s.tz) }, bounds: { x0, x1, z0, z1 }
    };
  };

  /* Ponto mais próximo da pista: devolve índice e deslocamento lateral */
  DG.trackLocate = function (trk, x, z, hint) {
    const pts = trk.pts, N = trk.N;
    let best = -1, bd = 1e18;
    if (hint >= 0) {
      for (let k = -25; k <= 25; k++) {
        const i = ((hint + k) % N + N) % N, p = pts[i], d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z);
        if (d < bd) { bd = d; best = i; }
      }
    }
    if (best < 0 || bd > 900) {
      for (let i = 0; i < N; i++) {
        const p = pts[i], d = (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z);
        if (d < bd) { bd = d; best = i; }
      }
    }
    const p = pts[best];
    return { i: best, lat: (x - p.x) * p.nx + (z - p.z) * p.nz, p };
  };
})(typeof window !== 'undefined' ? window : globalThis);
