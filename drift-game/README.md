# Kaze Drift

Jogo de drift arcade em 3D para navegador (Three.js), feito para teclado.

## Como jogar

Abra `index.html` no navegador do computador (Chrome, Edge ou Firefox). Não precisa instalar nada.

| Tecla | Ação |
|-------|------|
| W | Acelera |
| S | Freia; parado, dá ré |
| A / D | Vira |
| Esc | Pausa |

- Vire forte acelerando acima de 45 km/h e o carro entra em drift. Um toque no S na entrada da curva solta a traseira mais cedo.
- Enquanto derrapa, os pontos entram no combo e o multiplicador sobe até x10. Ficar 1,6 s sem derrapar guarda o combo e converte em moedas (15 pontos = 1 moeda).
- Batida forte perde o combo; batida média perde metade.

## Conteúdo

- 9 carros inspirados em ícones do drift (sem marcas), cada um com motor e som próprios.
- 18 categorias de personalização: pintura e acabamento (grátis), body kits, aerofólios, rodas, aro, capô, teto, suspensão, vidros, faróis, neon, fumaça, motor, turbo, escape, pneus, kit de ângulo e peso.
- 8 pistas de drift livre: Tóquio à noite, touge, autódromo, docas, cânion, orla, neve e um pátio aberto.

O progresso fica salvo no navegador (localStorage).

## Arquivos

- `js/data.js` — carros, peças, mapas e traçado das pistas
- `js/physics.js` — física do carro e câmbio
- `js/carmodel.js` — modelo 3D dos carros e peças
- `js/world.js` — construção dos mapas
- `js/audio.js` — som sintetizado (motor, turbo, pneus)
- `js/game.js` — loop, pontuação, HUD, garagem e loja
- `js/three.min.js` — Three.js r160 (licença MIT)
