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

// Função para abrir o pop-up
function openPopup() {
    document.getElementById("modalBg").style.display = "flex";
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById("modalBg").style.display = "none";
}

// Fechar o pop-up ao clicar fora da área do modal
window.onclick = function(event) {
    const modalBg = document.getElementById("modalBg");
    if (event.target === modalBg) {
        closePopup();
    }
};

// JavaScript to add floating effect to the chips
const chips = document.querySelectorAll('.chip');
chips.forEach((chip, index) => {
    chip.style.animationDelay = `${Math.random() * 2}s`;
    chip.style.transform = `rotate(${Math.random() * 360}deg)`;
});
