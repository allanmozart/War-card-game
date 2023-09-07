const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function() {
    const startNewGameLink = document.getElementById("startNewGame");
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");
    const gameNameInput = document.getElementById("gameNameInput");
    //const gameBoard = document.querySelector(".game-board");
    const gameBoard = document.getElementById("player-name");
    const confirmButton = document.getElementById("confirmGameName");
  
    startNewGameLink.addEventListener("click", function(event) {
      event.preventDefault();
      modal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // Fechar o modal se o usuário clicar fora dele
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Adicionar valor ao último <li> quando o usuário confirmar
    confirmButton.addEventListener("click", function() {
      const gameName = gameNameInput.value.trim(); // Remova espaços em branco
      if (gameName) {
        const lastListItem = gameBoard;
            lastListItem.textContent= gameName     
        modal.style.display = "none";
        gameNameInput.value = ""; // Limpa o campo de entrada
      }
    });
  
    // Adicionar evento de tecla para capturar Enter
    gameNameInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        confirmButton.click(); // Clique no botão Confirm quando Enter for pressionado
      }
    });
  });