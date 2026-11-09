// GaragemFácil · Página de detalhe do veículo
// Troca a foto principal quando se clica numa miniatura da galeria.

document.addEventListener('DOMContentLoaded', function () {
  var fotoPrincipal = document.getElementById('foto-principal');
  var miniaturas = document.querySelectorAll('.miniatura');

  if (!fotoPrincipal) return;

  miniaturas.forEach(function (botao) {
    botao.addEventListener('click', function () {
      fotoPrincipal.src = botao.dataset.foto;
      fotoPrincipal.alt = botao.dataset.alt;

      miniaturas.forEach(function (m) { m.classList.remove('ativa'); });
      botao.classList.add('ativa');
    });
  });
});
