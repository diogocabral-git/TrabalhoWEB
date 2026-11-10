/* ==========================================================
   Página Veículos (Secções/veiculos.html)
   - Abrir e fechar o painel de filtros no mobile
   - Filtrar os cartões de veículo por marca, combustível,
     ano e preço
   ========================================================== */

// Função que corre logo ao carregar, para as variáveis não ficarem globais
(function () {
  // Elementos da página que vamos usar
  var filtros = document.querySelector('.filtros');             // painel de filtros
  var toggle = document.querySelector('.filtros__toggle');      // botão "Filtros" (mobile)
  var form = document.getElementById('filtros-form');           // formulário com os campos
  var cartoes = document.querySelectorAll('#lista-veiculos > li'); // um <li> por veículo
  var contagem = document.getElementById('contagem');           // texto "X veículos encontrados"
  var semResultados = document.getElementById('sem-resultados'); // mensagem de lista vazia

  // Se a página não tiver filtros, não há nada a fazer
  if (!filtros || !form) return;

  // Marca que o JavaScript está ativo: o CSS passa a esconder os filtros no mobile
  filtros.classList.add('com-js');

  // Botão "Filtros": abre ou fecha o painel e atualiza o aria-expanded (acessibilidade)
  toggle.addEventListener('click', function () {
    var aberto = filtros.classList.toggle('aberto');
    toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });

  // Mostra só os cartões que cumprem todos os filtros escolhidos
  function aplicarFiltros() {
    // Valores escolhidos; vazio quer dizer "Todos"
    var marca = form.marca.value;
    var combustivel = form.combustivel.value;
    var anoMin = parseInt(form.ano.value, 10) || 0;
    var precoMax = parseInt(form.preco.value, 10) || Infinity;
    var visiveis = 0;

    // Percorre os cartões e compara com os atributos data-* de cada um
    cartoes.forEach(function (li) {
      var c = li.querySelector('.card-veiculo').dataset;
      var mostra =
        (!marca || c.marca === marca) &&
        (!combustivel || c.combustivel === combustivel) &&
        Number(c.ano) >= anoMin &&
        Number(c.preco) <= precoMax;

      // Esconde ou mostra o cartão e conta os que ficam visíveis
      li.hidden = !mostra;
      if (mostra) visiveis++;
    });

    // Atualiza o texto da contagem (singular ou plural)
    contagem.textContent = visiveis === 1
      ? '1 veículo encontrado'
      : visiveis + ' veículos encontrados';

    // Mostra a mensagem "Nenhum veículo..." só quando não sobra nenhum
    semResultados.hidden = visiveis !== 0;
  }

  // Botão "Aplicar": filtra sem recarregar a página
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    aplicarFiltros();
    // No mobile, fecha o painel depois de aplicar para se verem os resultados
    filtros.classList.remove('aberto');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Botão "Limpar": repõe os campos e volta a mostrar todos os veículos
  form.addEventListener('reset', function () {
    // O reset só limpa os campos depois deste evento, por isso espera um instante
    setTimeout(aplicarFiltros, 0);
  });
})();
