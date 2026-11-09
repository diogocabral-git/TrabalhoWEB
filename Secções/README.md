# Secções

Páginas (secções) do site GaragemFácil, à semelhança da pasta `Esquemas`.

| Ficheiro | Secção | JS próprio |
| --- | --- | --- |
| `inicio.html` | Página inicial | — |
| `veiculos.html` | Listagem de veículos | `js/veiculos.js` |
| `veiculo.html` | Detalhe de um veículo | `js/veiculo.js` |
| `sobre.html` | Sobre nós | — |
| `contactos.html` | Contactos | — |
| `modelo.html` | Modelo base (cabeçalho, rodapé e cartão) | — |

## Estrutura do código (igual aos exemplos da aula)

- **Uma só folha de estilos**: `css/estilos.css`, usada por todas as páginas. Está dividida em secções numeradas (1. Variáveis, 2. Reset, 3. Contentor, 4. Cabeçalho e menu, 5. Componentes, … 13. Contactos) e as media queries ficam todas juntas no fim.
- **Mobile first**: primeiro os estilos para telemóvel; depois `@media (min-width: …)` com os pontos de quebra da aula: `sm` 640px, `md` 768px, `lg` 1024px (e `xl` 1280px só na grelha de veículos).
- **Nomes em português, estilo BEM**: `.bloco`, `.bloco__elemento`, `.bloco--variante`. Exemplos: `.cabecalho__interior`, `.menu__link--ativo`, `.cartao-veiculo__preco`, `.botao--primario`, `.contentor`, `.rodape`.
- **HTML semântico** com `lang="pt-PT"`, blocos separados por comentários `<!-- ===== CABEÇALHO ===== -->`, `<!-- ===== RODAPÉ ===== -->`, e título `GaragemFácil | Página`.
- **Formulários** com `fieldset`/`legend`, `required`, `minlength`, `pattern` e mensagens de ajuda que aparecem só com CSS (`:user-invalid`), sem JavaScript.
- **JavaScript** só onde é preciso: `js/main.js` (menu hambúrguer e ano no rodapé), `js/veiculos.js` (filtros) e `js/veiculo.js` (galeria).

Todas as páginas usam `css/estilos.css` e `js/main.js`, que estão nas pastas `css/` e `js/` da raiz (por isso os caminhos começam por `../`).

O `index.html` da raiz só reencaminha para `Secções/inicio.html`, para o endereço público do GitHub Pages continuar a abrir.
