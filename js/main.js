import Game from "./gameClass.js";
import deck from "../data/deck.js";
import performAnimation from "./cardAnimations.js";
import createCard from "./createCard.js";

const newGame = document.getElementById("new");
const gameDiv = document.querySelector("main");
const pDeck = document.getElementById("player-deck");
const score = document.getElementById("score");

const symbols = {
  spades: "♠",
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
};

let game;

newGame.addEventListener("click", () => {
  game = new Game(deck);
});

pDeck.addEventListener("click", () => {
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
  performAnimation(winner, gameDiv);
  score.innerText = `Player: ${game.playerHand.length} | Computer: ${game.computerHand.length}`;
});
