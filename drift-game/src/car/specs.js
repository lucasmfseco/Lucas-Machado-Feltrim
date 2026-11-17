/* Medidas e formas de cada carro, baseadas nas dimensões reais dos modelos de referência.
   t vai de -1 (traseira) a 1 (frente). Alturas em metros a partir do chão. */

export const SPECS = {
  /* hatch dos anos 80, faróis escamoteáveis */
  k86: {
    L: 4.18, W: 1.625, fo: 0.80, wb: 2.40, R: 0.29, rim: 14, tireW: 0.2, drive: 'R', hand: 'R',
    deck: [[-1, .80], [-.94, .87], [-.7, .875], [0, .86], [.36, .85], [.7, .80], [.93, .72], [1, .66]],
    bottom: [[-1, .32], [-.9, .23], [-.6, .17], [.55, .17], [.88, .22], [1, .30]],
    cab: { tA: .36, tRf: .12, tRr: -.36, tC: -.93, roof: 1.335, ws: 1.1, bk: .75, tumble: .14, crown: .02, arch: .01, winR: -.64, pillars: [-.12], hatch: true, sail: false },
    hw: .80, flareF: .012, flareR: .015, noseR: .10, tailR: .08, rvF: .06, rvR: .05, tuck: .06, bulge: .46, sh: .05, crown: .015, hoodCrown: .01,
    doors: [[.33, -.17]], popup: true,
    head: { type: 'popup', x: .66, w: .36, d: .2 },
    turn: [{ shape: ['rr', .17, .05, .015], x: .76, y: .42, color: 'amber' }],
    grille: [{ shape: ['rr', .7, .055, .01], x: 0, y: -.11 }, { shape: ['rr', .5, .07, .02], x: 0, y: .31 }],
    tail: [{ shape: ['rr', 1.45, .13, .02], x: 0, y: -.1, kind: 'band' }],
    plateF: .41, plateR: .52
  },
  /* fastback dos anos 90, faróis escamoteáveis */
  s13: {
    L: 4.54, W: 1.69, fo: 0.93, wb: 2.475, R: 0.30, rim: 15, tireW: 0.205, drive: 'R', hand: 'R',
    deck: [[-1, .78], [-.94, .845], [-.6, .86], [0, .85], [.3, .84], [.7, .78], [.93, .67], [1, .61]],
    bottom: [[-1, .30], [-.9, .22], [-.6, .165], [.55, .165], [.88, .21], [1, .27]],
    cab: { tA: .30, tRf: .06, tRr: -.38, tC: -.90, roof: 1.29, ws: 1.15, bk: .8, tumble: .16, crown: .02, arch: .012, winR: -.48, pillars: [-.1], hatch: true, sail: false },
    hw: .835, flareF: .012, flareR: .014, noseR: .13, tailR: .1, rvF: .07, rvR: .06, tuck: .07, bulge: .44, sh: .065, crown: .015, hoodCrown: .012,
    doors: [[.27, -.2]], popup: true,
    head: { type: 'popup', x: .64, w: .40, d: .19 },
    turn: [{ shape: ['rr', .2, .055, .02], x: .72, y: .40, color: 'clear' }],
    grille: [{ shape: ['rr', .55, .07, .02], x: 0, y: .37 }],
    tail: [{ shape: ['rr', 1.5, .11, .02], x: 0, y: -.09, kind: 'band' }],
    plateF: .36, plateR: .5
  },
  /* cupê japonês de 1999 */
  s15: {
    L: 4.445, W: 1.695, fo: 0.93, wb: 2.525, R: 0.31, rim: 16, tireW: 0.215, drive: 'R', hand: 'R',
    deck: [[-1, .80], [-.95, .915], [-.62, .935], [-.45, .925], [0, .90], [.34, .875], [.7, .80], [.93, .69], [1, .62]],
    bottom: [[-1, .31], [-.9, .22], [-.6, .16], [.55, .16], [.88, .21], [1, .27]],
    cab: { tA: .34, tRf: .10, tRr: -.27, tC: -.56, roof: 1.285, ws: 1.2, bk: 1.25, tumble: .17, crown: .025, arch: .015, winR: -.38, pillars: [-.07], hatch: false, sail: true },
    hw: .835, flareF: .016, flareR: .02, noseR: .2, tailR: .16, rvF: .1, rvR: .08, tuck: .08, bulge: .42, sh: .09, crown: .02, hoodCrown: .015,
    doors: [[.31, -.22]],
    head: { shape: ['poly', [[-.2, -.035], [.17, -.06], [.24, .0], [.2, .045], [-.18, .04]], .02], x: .62, y: -.06, inner: 'proj2', blend: .35 },
    grille: [{ shape: ['rr', .78, .12, .04], x: 0, y: .38 }, { shape: ['rr', .32, .035, .01], x: 0, y: -.14 }],
    tail: [{ shape: ['poly', [[-.18, -.05], [.16, -.06], [.22, .03], [.12, .06], [-.2, .04]], .02], x: .7, y: -.1 }],
    plateF: .36, plateR: .62
  },
  /* cupê japonês de 1999, 6 em linha biturbo */
  r34: {
    L: 4.60, W: 1.785, fo: 0.92, wb: 2.665, R: 0.33, rim: 18, tireW: 0.245, drive: 'A', hand: 'R',
    deck: [[-1, .84], [-.95, 1.0], [-.6, 1.02], [-.42, 1.0], [0, .97], [.32, .95], [.7, .88], [.93, .79], [1, .72]],
    bottom: [[-1, .34], [-.9, .24], [-.6, .17], [.55, .17], [.88, .22], [1, .26]],
    cab: { tA: .33, tRf: .08, tRr: -.3, tC: -.56, roof: 1.36, ws: 1.15, bk: 1.2, tumble: .16, crown: .022, arch: .012, winR: -.44, pillars: [-.08], hatch: false, sail: true },
    hw: .865, flareF: .025, flareR: .03, noseR: .12, tailR: .1, rvF: .07, rvR: .06, tuck: .05, bulge: .48, sh: .05, crown: .015, hoodCrown: .01,
    doors: [[.3, -.2]],
    head: { shape: ['poly', [[-.21, -.05], [.19, -.06], [.24, .04], [-.17, .05]], .015], x: .63, y: -.08, inner: 'proj1', blend: .2 },
    grille: [{ shape: ['rr', .44, .08, .015], x: 0, y: -.12 }, { shape: ['rr', 1.12, .16, .03], x: 0, y: .38 }, { shape: ['rr', .14, .12, .02], x: .84, y: .37 }],
    tail: [{ shape: ['circle', .078], x: .78, y: -.12, ring: true }, { shape: ['circle', .068], x: .52, y: -.12, ring: true }],
    plateF: .3, plateR: .58
  },
  /* lenda japonesa de 1993 */
  mk4: {
    L: 4.52, W: 1.81, fo: 0.99, wb: 2.55, R: 0.32, rim: 17, tireW: 0.235, drive: 'R', hand: 'R',
    deck: [[-1, .80], [-.95, .92], [-.66, .95], [-.45, .93], [0, .90], [.3, .86], [.62, .79], [.88, .69], [1, .56]],
    bottom: [[-1, .32], [-.9, .23], [-.6, .16], [.55, .16], [.85, .2], [1, .25]],
    cab: { tA: .30, tRf: .05, tRr: -.28, tC: -.62, roof: 1.275, ws: 1.3, bk: 1.1, tumble: .2, crown: .03, arch: .02, winR: -.36, pillars: [-.09], hatch: false, sail: true },
    hw: .87, flareF: .035, flareR: .045, noseR: .32, tailR: .26, rvF: .14, rvR: .1, tuck: .1, bulge: .4, sh: .15, crown: .015, hoodCrown: .02,
    doors: [[.27, -.22]],
    head: { shape: ['poly', [[-.2, -.04], [.14, -.065], [.21, -.01], [.18, .05], [-.16, .045]], .04], x: .62, y: -.07, inner: 'proj3', blend: .45 },
    grille: [{ shape: ['rr', .66, .13, .06], x: 0, y: .34 }, { shape: ['rr', .16, .07, .03], x: .74, y: .34 }],
    tail: [{ shape: ['circle', .085], x: .74, y: -.11, ring: true }, { shape: ['circle', .07], x: .5, y: -.11, ring: true }, { shape: ['rr', .5, .05, .02], x: 0, y: -.11, kind: 'garnish' }],
    plateF: .3, plateR: .55, bigTip: true
  },
  /* esportivo de motor rotativo, faróis escamoteáveis */
  fd7: {
    L: 4.295, W: 1.76, fo: 0.88, wb: 2.425, R: 0.32, rim: 17, tireW: 0.235, drive: 'R', hand: 'R',
    deck: [[-1, .76], [-.94, .88], [-.7, .91], [-.5, .90], [0, .86], [.26, .82], [.58, .74], [.85, .64], [1, .50]],
    bottom: [[-1, .30], [-.9, .22], [-.6, .15], [.55, .15], [.85, .19], [1, .23]],
    cab: { tA: .26, tRf: .02, tRr: -.30, tC: -.80, roof: 1.23, ws: 1.35, bk: .75, tumble: .2, crown: .035, arch: .02, winR: -.33, pillars: [-.13], hatch: true, sail: true },
    hw: .85, flareF: .045, flareR: .05, noseR: .34, tailR: .26, rvF: .16, rvR: .1, tuck: .12, bulge: .38, sh: .18, crown: .01, hoodCrown: -.025,
    doors: [[.22, -.2]], popup: true,
    head: { type: 'popup', x: .62, w: .34, d: .17 },
    turn: [{ shape: ['rr', .22, .07, .035], x: .7, y: .41, color: 'clear' }],
    grille: [{ shape: ['rr', .76, .13, .065], x: 0, y: .35 }],
    tail: [{ shape: ['rr', 1.42, .11, .04], x: 0, y: -.11, kind: 'bar' }],
    plateF: .3, plateR: .55
  },
  /* cupê alemão dos anos 90 */
  b36: {
    L: 4.433, W: 1.71, fo: 0.80, wb: 2.70, R: 0.31, rim: 17, tireW: 0.225, drive: 'R', hand: 'L',
    deck: [[-1, .84], [-.95, .96], [-.6, .98], [-.42, .97], [0, .94], [.34, .92], [.75, .86], [.96, .79], [1, .74]],
    bottom: [[-1, .32], [-.9, .23], [-.6, .16], [.55, .16], [.88, .21], [1, .26]],
    cab: { tA: .33, tRf: .08, tRr: -.30, tC: -.53, roof: 1.335, ws: 1.15, bk: 1.25, tumble: .16, crown: .022, arch: .012, winR: -.42, pillars: [-.1], hatch: false, sail: true },
    hw: .845, flareF: .012, flareR: .016, noseR: .14, tailR: .12, rvF: .06, rvR: .07, tuck: .06, bulge: .47, sh: .07, crown: .015, hoodCrown: .015,
    doors: [[.31, -.24]],
    head: { shape: ['rr', .4, .13, .03], x: .64, y: -.1, inner: 'twin', blend: .1 },
    grille: [{ shape: ['rr', .18, .11, .04], x: .14, y: -.1 }, { shape: ['rr', .92, .1, .03], x: 0, y: .36 }],
    tail: [{ shape: ['rr', .38, .12, .02], x: .7, y: -.1 }],
    plateF: .52, plateR: .6
  },
  /* fastback japonês, V6 */
  z35: {
    L: 4.31, W: 1.815, fo: 0.85, wb: 2.65, R: 0.33, rim: 18, tireW: 0.245, drive: 'R', hand: 'R',
    deck: [[-1, .82], [-.95, .96], [-.7, 1.0], [-.45, .98], [0, .93], [.28, .88], [.62, .80], [.9, .68], [1, .58]],
    bottom: [[-1, .32], [-.9, .23], [-.6, .16], [.55, .16], [.85, .2], [1, .25]],
    cab: { tA: .28, tRf: .05, tRr: -.2, tC: -.74, roof: 1.315, ws: 1.35, bk: .7, tumble: .2, crown: .03, arch: .035, winR: -.27, pillars: [-.16], hatch: true, sail: true },
    hw: .865, flareF: .045, flareR: .055, noseR: .3, tailR: .22, rvF: .12, rvR: .1, tuck: .1, bulge: .42, sh: .14, crown: .015, hoodCrown: .02,
    doors: [[.25, -.24]],
    head: { shape: ['poly', [[-.11, -.09], [.15, -.06], [.21, .09], [.06, .13], [-.12, .03]], .03], x: .68, y: -.07, inner: 'proj2', blend: .55 },
    grille: [{ shape: ['rr', .76, .16, .07], x: 0, y: .38 }],
    tail: [{ shape: ['poly', [[-.04, -.1], [.1, -.08], [.13, .1], [.02, .12], [-.06, .02]], .02], x: .8, y: -.11 }],
    plateF: .3, plateR: .62
  },
  /* sedã japonês de 1996, 6 em linha turbo */
  x100: {
    L: 4.715, W: 1.755, fo: 0.94, wb: 2.73, R: 0.32, rim: 17, tireW: 0.225, drive: 'R', hand: 'R',
    deck: [[-1, .84], [-.95, .96], [-.6, .98], [-.45, .97], [0, .94], [.34, .92], [.75, .86], [.96, .79], [1, .73]],
    bottom: [[-1, .33], [-.9, .24], [-.6, .17], [.55, .17], [.88, .22], [1, .27]],
    cab: { tA: .36, tRf: .12, tRr: -.30, tC: -.50, roof: 1.40, ws: 1.15, bk: 1.2, tumble: .15, crown: .022, arch: .01, winR: -.39, pillars: [-.04], hatch: false, sail: true },
    hw: .865, flareF: .01, flareR: .012, noseR: .12, tailR: .1, rvF: .06, rvR: .06, tuck: .05, bulge: .48, sh: .055, crown: .015, hoodCrown: .012,
    doors: [[.34, -.04], [-.045, -.4]],
    head: { shape: ['poly', [[-.24, -.06], [.22, -.065], [.25, .05], [-.24, .06]], .015], x: .58, y: -.09, inner: 'proj2', blend: .15 },
    grille: [{ shape: ['rr', .7, .1, .02], x: 0, y: -.1 }, { shape: ['rr', .95, .09, .02], x: 0, y: .35 }],
    tail: [{ shape: ['rr', .55, .1, .015], x: .6, y: -.1 }, { shape: ['rr', .5, .07, .015], x: 0, y: -.1, kind: 'garnish' }],
    plateF: .4, plateR: .62
  }
};
