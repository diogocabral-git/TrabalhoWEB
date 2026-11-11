/* ==========================================================================
   GaragemFácil — JavaScript comum a todas as páginas
   - Menu hambúrguer (abrir/fechar no telemóvel e tablet)
   - Ano atual no rodapé
   ========================================================================== */

/* Espera que o HTML esteja todo carregado antes de procurar os elementos */
document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Menu hambúrguer ---------- */

  /* Procura o botão hambúrguer (.menu-toggle ou .nav-toggle) e o menu */
  var botao = document.querySelector(".menu-toggle, .nav-toggle");
  var menu = document.querySelector(".site-nav");

  /* Só continua se a página tiver botão e menu */
  if (botao && menu) {
    /* Função que fecha o menu e repõe o estado do botão */
    function fecharMenu() {
      menu.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
    }

    /* Ao carregar no botão: abre o menu se estiver fechado, fecha se estiver aberto.
       O aria-expanded avisa os leitores de ecrã e anima o botão para "X" (CSS) */
    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
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
      if (e.key === "Escape" && menu.classList.contains("aberto")) {
        fecharMenu();
        botao.focus();
      }
    });

    /* Se a janela passar para tamanho desktop (>= 992px), repõe o estado inicial */
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) {
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
     /* ---------- Pesquisa rápida (Início): modelos conforme a marca ---------- */

  /* Procura as caixas "Marca" e "Modelo" da pesquisa (só existem na página inicial) */
  var selMarca = document.getElementById("marca");
  var selModelo = document.getElementById("modelo");

  if (selMarca && selModelo) {
    /* Guarda todas as opções de modelo, tal como estão escritas no HTML */
    var todosModelos = Array.prototype.slice.call(selModelo.options);

    /* Volta a encher a caixa "Modelo" só com os modelos da marca escolhida */
    function atualizarModelos() {
      var marca = selMarca.value;
      var escolhido = selModelo.value;

      /* Esvazia a caixa e volta a pôr só as opções que interessam:
         "Todos os modelos" (não tem data-marca) e os modelos da marca escolhida.
         Se a marca for "Todas as marcas" (valor vazio), põe todos os modelos */
      selModelo.innerHTML = "";
      todosModelos.forEach(function (opcao) {
        if (!opcao.dataset.marca || !marca || opcao.dataset.marca === marca) {
          selModelo.appendChild(opcao);
        }
      });

      /* Mantém o modelo que estava escolhido; se já não for desta marca, volta a "Todos os modelos" */
      selModelo.value = escolhido;
      if (selModelo.selectedIndex === -1) {
        selModelo.selectedIndex = 0;
      }
    }

    /* Atualiza os modelos sempre que se muda a marca, e uma vez ao abrir a página */
    selMarca.addEventListener("change", atualizarModelos);
    atualizarModelos();
  }
});
