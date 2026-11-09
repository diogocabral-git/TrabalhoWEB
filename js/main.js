/* ==========================================================================
   GaragemFácil — JavaScript comum a todas as páginas
   - Menu hambúrguer (abrir/fechar no telemóvel)
   - Ano atual no rodapé
   ========================================================================== */

/* Espera que o HTML esteja todo carregado antes de procurar os elementos */
document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Menu hambúrguer ---------- */

  /* Procura o botão hambúrguer (.botao-menu) e a navegação (.navegacao) */
  var botao = document.querySelector(".botao-menu");
  var menu = document.querySelector(".navegacao");

  /* Só continua se a página tiver botão e menu */
  if (botao && menu) {
    /* Função que fecha o menu e repõe o estado do botão */
    function fecharMenu() {
      menu.classList.remove("navegacao--aberta");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
    }

    /* Ao carregar no botão: abre o menu se estiver fechado, fecha se estiver aberto.
       O aria-expanded avisa os leitores de ecrã e anima o botão para "X" (CSS) */
    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("navegacao--aberta");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    /* Fecha o menu quando se carrega num dos links */
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        fecharMenu();
      }
    });

    /* Fecha o menu com a tecla Esc e devolve o foco ao botão */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("navegacao--aberta")) {
        fecharMenu();
        botao.focus();
      }
    });

    /* Se a janela passar para tamanho tablet ou maior (>= 768px, o "md" do CSS), repõe o estado inicial */
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        fecharMenu();
      }
    });
  }

  /* ---------- Ano atual no rodapé ---------- */

  /* Escreve o ano atual no elemento #ano-atual, se existir na página */
  var ano = document.getElementById("ano-atual");
  if (ano) {
    ano.textContent = new Date().getFullYear();
  }
});
