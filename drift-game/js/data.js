/* Dados do jogo: carros, peças, mapas e amostragem de pista. Sem dependência de Three.js. */
(function (root) {
  const DG = root.DG = root.DG || {};

  /* prof: [t, alturaCarroceria, alturaTeto] com t de -1 (traseira) a 1 (frente), em metros */
  DG.CARS = [
    { id: 'k86', name: 'Kaze 86', sub: 'Hatch leve de 1985 · 4 cilindros aspirado', price: 0, color: '#f4f4f0', engine: 'i4', turbo: false, redline: 7800, accel: 7.8, top: 52, agility: 1.08, tips: 1, stats: { pot: 3, drift: 9, vel: 3 } },
    { id: 's13', name: 'Sakura 180', sub: 'Fastback de 1989 · 4 cilindros turbo', price: 9000, color: '#c2161a', engine: 'i4t', turbo: true, redline: 7400, accel: 8.9, top: 58, agility: 1.06, tips: 1, stats: { pot: 4, drift: 9, vel: 5 } },
    { id: 'b36', name: 'Bayern 36', sub: 'Cupê alemão de 1995 · 6 em linha aspirado', price: 14000, color: '#1b2a4a', engine: 'i6', turbo: false, redline: 7200, accel: 9.0, top: 60, agility: 1.0, tips: 2, stats: { pot: 5, drift: 7, vel: 6 } },
    { id: 's15', name: 'Sylph S15', sub: 'Cupê japonês de 1999 · 4 cilindros turbo', price: 18000, color: '#c8ccd2', engine: 'i4t', turbo: true, redline: 7500, accel: 9.8, top: 62, agility: 1.06, tips: 1, stats: { pot: 5, drift: 9, vel: 6 } },
    { id: 'z35', name: 'Zetto 35', sub: 'Fastback japonês de 2003 · V6 aspirado', price: 24000, color: '#d9661c', engine: 'v6', turbo: false, redline: 7000, accel: 10.4, top: 65, agility: 1.0, tips: 2, stats: { pot: 6, drift: 7, vel: 7 } },
    { id: 'x100', name: 'Tourer X100', sub: 'Sedã japonês de 1996 · 6 em linha turbo', price: 28000, color: '#e9e9e4', engine: 'i6t', turbo: true, redline: 7400, accel: 10.8, top: 66, agility: 0.95, tips: 1, stats: { pot: 6, drift: 8, vel: 7 } },
    { id: 'fd7', name: 'Rota-7 FD', sub: 'Esportivo de 1992 · motor rotativo biturbo', price: 38000, color: '#c2161a', engine: 'rotary', turbo: true, redline: 9000, accel: 11.4, top: 69, agility: 1.1, tips: 2, stats: { pot: 7, drift: 9, vel: 7 } },
    { id: 'mk4', name: 'Sora MK4', sub: 'Lenda japonesa de 1993 · 6 em linha biturbo', price: 55000, color: '#e36a12', engine: 'i6t', turbo: true, redline: 7200, accel: 12.8, top: 73, agility: 1.0, tips: 1, stats: { pot: 9, drift: 8, vel: 9 } },
    { id: 'r34', name: 'Raijin GT-34', sub: 'Cupê japonês de 1999 · 6 em linha biturbo', price: 65000, color: '#1c3f9e', engine: 'i6rb', turbo: true, redline: 8200, accel: 13.4, top: 73, agility: 1.02, tips: 1, stats: { pot: 10, drift: 8, vel: 9 } }
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

})(typeof window !== 'undefined' ? window : globalThis);
