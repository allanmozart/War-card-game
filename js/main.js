import Game from "./gameClass.js";
import deck from "../data/deck.js";
import performAnimation from "./cardAnimations.js";
import createCard from "./createCard.js";
import { winGame, removeWinGame } from "./winGame.js";

// Navbar & footer:

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");
const gameNameInput = document.getElementById("gameNameInput");
const playerName = document.getElementById("player-name");
const confirmButton = document.getElementById("confirmGameName");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Fechar o modal se o usuário clicar fora dele
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Adicionar valor ao último <li> quando o usuário confirmar
confirmButton.addEventListener("click", function () {
  const gameName = gameNameInput.value; // Remova espaços em branco
  if (gameName) {
    playerName.innerText = `${gameName}: `;
    gameNameInput.value = ""; // Limpa o campo de entrada
  }
  modal.style.display = "none";
});

// Adicionar evento de tecla para capturar Enter
gameNameInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    confirmButton.click(); // Clique no botão Confirm quando Enter for pressionado
  }
});

// Gameplay:

const newGame = document.getElementById("startNewGame");
const gameDiv = document.querySelector("main");
const pDeck = document.getElementById("player-deck");
const cDeck = document.getElementById("computer-deck");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let game;

newGame.addEventListener("click", () => {
  removeWinGame(); // If there a window stating the winner, remove it
  modal.style.display = "block";
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  game = new Game(deck);
  playerScore.innerText = `26`;
  computerScore.innerText = `26`;
  pDeck.style.bottom = "2vh";
  pDeck.style.transform = "translateX(-50%)";
  cDeck.style.top = "2vh";
  cDeck.style.transform = "translateX(-50%)";
});

pDeck.addEventListener("click", () => {
  if (!game || game.animationRunning) {
    return;
  } // If game is not on or animation is still running, don't do anything
  game.resetOpenCards();
  let winner = game.playTurn();
  gameDiv.appendChild(createCard(game.openCards[1], "player-card"));
  gameDiv.appendChild(createCard(game.openCards[0], "computer-card"));
  performAnimation(winner, gameDiv, game);
  playerScore.innerText = `${game.playerHand.length}`;
  computerScore.innerText = `${game.computerHand.length}`;
  if (!game.gameOn) {
    winGame(game.winner);
  }
});
