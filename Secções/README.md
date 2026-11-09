# Secções

Páginas (secções) do site GaragemFácil, à semelhança da pasta `Esquemas`.

| Ficheiro | Secção | CSS próprio | JS próprio |
| --- | --- | --- | --- |
| `inicio.html` | Página inicial | `css/inicio.css` | — |
| `veiculos.html` | Listagem de veículos | `css/veiculos.css` | `js/veiculos.js` |
| `veiculo.html` | Detalhe de um veículo | `css/veiculo.css` | `js/veiculo.js` |
| `sobre.html` | Sobre nós | `css/sobre.css` | — |
| `contactos.html` | Contactos | `css/contactos.css` | — |
| `modelo.html` | Modelo base (header, footer e cartão) | — | — |

Todas usam `css/style.css` e `js/main.js`, que continuam nas pastas `css/` e `js/` da raiz (por isso os caminhos começam por `../`).

O `index.html` da raiz só reencaminha para `Secções/inicio.html`, para o endereço público do GitHub Pages continuar a abrir.
