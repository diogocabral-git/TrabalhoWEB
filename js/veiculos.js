/* Página Veículos: abrir/fechar filtros no mobile e filtrar os cartões. */
(function () {
  var filtros = document.querySelector('.filtros');
  var toggle = document.querySelector('.filtros__toggle');
  var form = document.getElementById('filtros-form');
  var cartoes = document.querySelectorAll('#lista-veiculos > li');
  var contagem = document.getElementById('contagem');
  var semResultados = document.getElementById('sem-resultados');

  if (!filtros || !form) return;

  filtros.classList.add('com-js');

  // Abrir/fechar o painel de filtros (só visível no mobile/tablet)
  toggle.addEventListener('click', function () {
    var aberto = filtros.classList.toggle('aberto');
    toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });

  function aplicarFiltros() {
    var marca = form.marca.value;
    var combustivel = form.combustivel.value;
    var anoMin = parseInt(form.ano.value, 10) || 0;
    var precoMax = parseInt(form.preco.value, 10) || Infinity;
    var visiveis = 0;

    cartoes.forEach(function (li) {
      var c = li.querySelector('.card-veiculo').dataset;
      var mostra =
        (!marca || c.marca === marca) &&
        (!combustivel || c.combustivel === combustivel) &&
        Number(c.ano) >= anoMin &&
        Number(c.preco) <= precoMax;

      li.hidden = !mostra;
      if (mostra) visiveis++;
    });

    contagem.textContent = visiveis === 1
      ? '1 veículo encontrado'
      : visiveis + ' veículos encontrados';
    semResultados.hidden = visiveis !== 0;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    aplicarFiltros();
    // No mobile, fecha o painel depois de aplicar
    filtros.classList.remove('aberto');
    toggle.setAttribute('aria-expanded', 'false');
  });

  form.addEventListener('reset', function () {
    // O reset só limpa os campos depois deste evento
    setTimeout(aplicarFiltros, 0);
  });
})();
