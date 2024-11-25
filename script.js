function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('collapsed');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const itemList = document.querySelector(".item-list");
  
    toggleButton.addEventListener("click", function () {
        itemList.classList.toggle("hidden");
        
        // Atualiza o texto do botão com base no estado da lista
        if (itemList.classList.contains("hidden")) {
            toggleButton.textContent = "Mostrar Itens";
        } else {
            toggleButton.textContent = "Ocultar Itens";
        }
    });
  });
  
  function toggleGamelist() {
      const gameList = document.querySelector('.game-list');
      const toggleIcon = document.querySelector('.PUCBET-icon');
  
      if (gameList.classList.contains('expanded')) {
          // Colapsa a lista
          gameList.style.maxHeight = '0';
          gameList.classList.remove('expanded');
          toggleIcon.classList.remove('expanded');
          toggleIcon.textContent = '▼';
      } else {
          // Expande a lista: calcula a altura real do conteúdo
          gameList.classList.add('expanded');
          toggleIcon.classList.add('expanded');
          toggleIcon.textContent = '▲';
  
          // Define o max-height para a altura total dos itens
          const fullHeight = gameList.scrollHeight + "px";
          gameList.style.maxHeight = fullHeight;
      }
  }
  
  function toggleCassinolist() {
    const CassinoList = document.querySelector('.Cassino-list');
    const toggleIcon = document.querySelector('.Cassino-icon');
  
    if (CassinoList.classList.contains('expanded')) {
        // Colapsa a lista
        CassinoList.style.maxHeight = '0';
        CassinoList.classList.remove('expanded');
        toggleIcon.classList.remove('expanded');
        toggleIcon.textContent = '▼';
    } else {
        // Expande a lista: calcula a altura real do conteúdo
        CassinoList.classList.add('expanded');
        toggleIcon.classList.add('expanded');
        toggleIcon.textContent = '▲';
  
        // Define o max-height para a altura total dos itens
        const fullHeight = CassinoList.scrollHeight + "px";
        CassinoList.style.maxHeight = fullHeight;
    }
  }
  
  // Função para abrir o pop-up de Cadastro
  function openPopupRegister() {
      document.getElementById("modalBg-register").style.display = "flex";
  }
  
  // Função para fechar o pop-up de Cadastro
  function closePopupRegister() {
      document.getElementById("modalBg-register").style.display = "none";
  }
  
  // Função para abrir o pop-up de Login
  function openPopupLogin() {
      document.getElementById("modalBg-login").style.display = "flex";
  }
  
  // Função para fechar o pop-up de Login
  function closePopupLogin() {
      document.getElementById("modalBg-login").style.display = "none";
  }
  
  // Fechar o pop-up ao clicar fora da área do modal de Cadastro
  window.onclick = function(event) {
      const modalBgRegister = document.getElementById("modalBg-register");
      if (event.target === modalBgRegister) {
          closePopupRegister();
      }
  };
  
  // Fechar o pop-up ao clicar fora da área do modal de Login
  window.onclick = function(event) {
      const modalBgLogin = document.getElementById("modalBg-login");
      if (event.target === modalBgLogin) {
          closePopupLogin();
      }
  };
  
  // Função para abrir o pop-up de Login
  function openPopupLogin() {
      document.getElementById("modalBg-login").style.display = "flex";
  }
  
  // Função para fechar o pop-up
  function closePopupLogin() {
      document.getElementById("modalBg-login").style.display = "none";
  }
  
  // Fechar o pop-up ao clicar fora da área do modal
  window.onclick = function(event) {
      const modalBglogin = document.getElementById("modalBg-login");
      if (event.target === modalBglogin) {
          closePopupLogin();
      }
  };
  
  
  // Função para exibir ou nao o footer
  document.addEventListener('DOMContentLoaded', function () {
      const footer = document.querySelector('footer');
      let lastScrollY = window.scrollY;
  
      function checkContentHeight() {
          if (document.body.scrollHeight <= window.innerHeight) {
              // Mostra o footer se não houver conteúdo suficiente para rolar
              footer.style.bottom = '0';
              footer.style.visibility = 'visible';
          } else {
              // Caso haja conteúdo suficiente, oculta o footer inicialmente
              footer.style.bottom = '-100px';
              footer.style.visibility = 'hidden';
          }
      }
  
      window.addEventListener('scroll', function () {
          const currentScrollY = window.scrollY;
  
          // Verifica se o usuário rolou para baixo
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
              footer.style.bottom = '0'; // Traz o footer para a tela
              footer.style.visibility = 'visible';
          } else {
              footer.style.bottom = '-100px'; // Esconde o footer para fora da tela
              footer.style.visibility = 'hidden';
          }
          
          lastScrollY = currentScrollY;
      });
  
      // Verifica a altura do conteúdo ao carregar a página
      checkContentHeight();
  
      // Verifica a altura do conteúdo ao redimensionar a janela
      window.addEventListener('resize', checkContentHeight);
  });
  
  