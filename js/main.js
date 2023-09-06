import Game from "./gameClass.js";
import deck from "../data/deck.js";
import performAnimation from "./cardAnimations.js";
import createCard from "./createCard.js";
import { winGame, removeWinGame } from "./winGame.js";

const newGame = document.getElementById("new");
const gameDiv = document.querySelector("main");
const pDeck = document.getElementById("player-deck");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const symbols = {
  spades: "♠",
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
};

let game;

newGame.addEventListener("click", () => {
  removeWinGame(); // If there a window stating the winner, remove it
  game = new Game(deck);
  playerScore.innerText = `Player: 26`;
  computerScore.innerText = `Computer: 26`;
});

pDeck.addEventListener("click", () => {
  if (!game || game.animationRunning) {
    return;
  } // If game is not on or animation is still running, don't do anything
  game.resetOpenCards();
  let winner = game.playTurn();
  gameDiv.appendChild(
    createCard(
      game.openCards[1].name,
      game.openCards[1].color,
      symbols[game.openCards[1].symbol],
      "player-card"
    )
  );
  gameDiv.appendChild(
    createCard(
      game.openCards[0].name,
      game.openCards[0].color,
      symbols[game.openCards[0].symbol],
      "computer-card"
    )
  );
  performAnimation(winner, gameDiv, game);
  playerScore.innerText = `Player: ${game.playerHand.length}`;
  computerScore.innerText = `Computer: ${game.computerHand.length}`;
  if (!game.gameOn) {
    winGame(game.winner);
  }
});
