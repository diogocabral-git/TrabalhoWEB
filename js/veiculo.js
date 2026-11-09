// GaragemFácil · Página de detalhe do veículo
// Galeria: ao clicar numa miniatura, mostra essa vista no espaço principal.

document.addEventListener('DOMContentLoaded', function () {
  var principal = document.getElementById('foto-principal');
  var miniaturas = document.querySelectorAll('.miniatura');

  if (!principal) return;

  miniaturas.forEach(function (botao) {
    botao.addEventListener('click', function () {
      var legenda = botao.dataset.legenda;
      principal.querySelector('span').textContent = legenda;
      principal.setAttribute('aria-label', 'Espaço para a foto do Peugeot 308: ' + legenda.toLowerCase());

      miniaturas.forEach(function (m) { m.classList.remove('ativa'); });
      botao.classList.add('ativa');
    });
  });
});
