# Kaze Drift

Jogo de drift arcade em 3D para navegador (Three.js r160), feito para teclado.

## Como jogar

Abra `index.html` no navegador do computador (Chrome, Edge ou Firefox) através de um servidor local, por exemplo `npx serve .` dentro desta pasta. O jogo já vem compilado em `js/game.bundle.js`.

Para alterar o código: `npm install` e depois `npm run build` (gera o bundle a partir de `src/`).

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

- 9 carros inspirados em ícones do drift (sem marcas), modelados por código a partir das medidas reais: carroceria contínua, caixas de roda recortadas, cabine com vidros e interior, faróis com lente.
- 18 categorias de personalização: pintura e acabamento (grátis), body kits (inclusive widebody rebitado), aerofólios, rodas, aro, capô, teto, suspensão, vidros, faróis, neon, fumaça, motor, turbo, escape, pneus, kit de ângulo e peso.
- 7 pistas de drift livre: Monte Haruna (pôr do sol), Irohazaka (outono, escada de grampos), Shibuya (noite com neon), Setagaya (entardecer), Circuito Ebisu (dia), Hokkaido (neve) e o Pátio do Porto (noite).
- Pistas com subidas e descidas, guard-rails, muros de contenção, espelhos de curva, postes com fios, viaduto e letreiros.
- Pós-processamento (bloom, antisserrilhado, gradação de cor) e três níveis de qualidade gráfica.

O progresso fica salvo no navegador (localStorage).

## Arquivos

- `src/car/` — medidas dos carros, carroceria procedural, peças e montagem
- `src/world/` — traçado das pistas, texturas, terreno, serra, cidade, porto, céu e reflexos
- `src/game.js` — loop, pontuação, câmera, HUD, garagem e loja
- `js/data.js` — carros, peças e preços
- `js/physics.js` — física do carro e câmbio
- `js/audio.js` — som sintetizado (motor, turbo, pneus)
- `assets/` — texturas de grama, fibra de carbono e água (do repositório do Three.js, licença MIT)
