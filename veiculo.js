// ==========================================================
// GaragemFácil · Página de detalhe do veículo (Secções/veiculo.html)
// Galeria: ao clicar numa miniatura, mostra essa vista no
// espaço principal e marca a miniatura como selecionada.
// ==========================================================

// Espera que o HTML esteja todo carregado antes de procurar os elementos
document.addEventListener('DOMContentLoaded', function () {

  // Vai buscar o espaço da foto principal e todas as miniaturas
  var principal = document.getElementById('foto-principal');
  var miniaturas = document.querySelectorAll('.miniatura');

  // Se a página não tiver galeria, não faz nada
  if (!principal) return;

  // Para cada miniatura, prepara o que acontece quando se clica nela
  miniaturas.forEach(function (botao) {
    botao.addEventListener('click', function () {

      // Lê o nome da vista guardado no atributo data-legenda (ex.: "Lateral")
      var legenda = botao.dataset.legenda;

      // Mostra esse nome no espaço principal e atualiza a descrição
      // para quem usa leitor de ecrã
      principal.querySelector('span').textContent = legenda;
      principal.setAttribute('aria-label', 'Espaço para a foto do Peugeot 308: ' + legenda.toLowerCase());

      // Tira a seleção de todas as miniaturas e marca só a que foi clicada
      miniaturas.forEach(function (m) { m.classList.remove('ativa'); });
      botao.classList.add('ativa');
    });
  });
});
