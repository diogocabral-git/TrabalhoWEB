/* GaragemFácil — JavaScript comum a todas as páginas
   - Menu hambúrguer (abrir/fechar no mobile)
   - Ano atual no rodapé */

document.addEventListener("DOMContentLoaded", function () {
  var botao = document.querySelector(".menu-toggle, .nav-toggle");
  var menu = document.querySelector(".site-nav");

  if (botao && menu) {
    function fecharMenu() {
      menu.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
    }

    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu ao carregar num link ou na tecla Esc
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        fecharMenu();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("aberto")) {
        fecharMenu();
        botao.focus();
      }
    });

    // Ao passar para desktop, repõe o estado inicial
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) {
        fecharMenu();
      }
    });
  }

  // Ano atual no footer
  var ano = document.getElementById("ano-atual");
  if (ano) {
    ano.textContent = new Date().getFullYear();
  }
});
