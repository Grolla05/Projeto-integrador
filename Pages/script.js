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
