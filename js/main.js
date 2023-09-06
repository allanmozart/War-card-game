import Game from "./gameClass.js";
import deck from "../data/deck.js";

const newGame = document.getElementById("new");
const gameDiv = document.querySelector("main");
const pDeck = document.getElementById("player-deck");
const cDeck = document.getElementById("computer-deck");
const pCardValue = document.getElementById("player-card-value");
const pCardSymbol = document.getElementById("player-card-symbol");
const cCardValue = document.getElementById("computer-card-value");
const cCardSymbol = document.getElementById("computer-card-symbol");
const score = document.getElementById("score");
const playTurn = document.getElementById("play");

const symbols = {
  spades: "♠",
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
};

let igra;

newGame.addEventListener("click", () => {
  igra = new Game(deck);
  pCardValue.innerText = igra.openCards[1].name;
  pCardValue.style.color = igra.openCards[1].color;
  pCardSymbol.innerText = symbols[igra.openCards[1].symbol];
  pCardSymbol.style.color = igra.openCards[1].color;
  cCardValue.innerText = igra.openCards[0].name;
  cCardValue.style.color = igra.openCards[0].color;
  cCardSymbol.innerText = symbols[igra.openCards[0].symbol];
  cCardSymbol.style.color = igra.openCards[0].color;

  score.innerText = `Player: ${igra.playerHand.length} | Computer: ${igra.computerHand.length}`;
});

playTurn.addEventListener("click", () => {
  igra.resetOpenCards();
  igra.playTurn();
  pCardValue.innerText = igra.openCards[1].name;
  pCardValue.style.color = igra.openCards[1].color;
  pCardSymbol.innerText = symbols[igra.openCards[1].symbol];
  pCardSymbol.style.color = igra.openCards[1].color;
  cCardValue.innerText = igra.openCards[0].name;
  cCardValue.style.color = igra.openCards[0].color;
  cCardSymbol.innerText = symbols[igra.openCards[0].symbol];
  cCardSymbol.style.color = igra.openCards[0].color;
  score.innerText = `Player: ${igra.playerHand.length} | Computer: ${igra.computerHand.length}`;
});

pDeck.addEventListener("click", () => {
  const pCard = document.createElement("div");
  const cCard = document.createElement("div");
  pCard.classList.add("player-card", "card");
  cCard.classList.add("computer-card", "card");
  gameDiv.appendChild(pCard);
  gameDiv.appendChild(cCard);
  animatePlayerWin(pCard, cCard);
  setTimeout(() => {
    gameDiv.removeChild(pCard);
    gameDiv.removeChild(cCard);
  }, 8000);
});

cDeck.addEventListener("click", () => {
  const pCard = document.createElement("div");
  const cCard = document.createElement("div");
  pCard.classList.add("player-card", "card");
  cCard.classList.add("computer-card", "card");
  gameDiv.appendChild(pCard);
  gameDiv.appendChild(cCard);
  animateComputerWin(pCard, cCard);
  setTimeout(() => {
    gameDiv.removeChild(pCard);
    gameDiv.removeChild(cCard);
  }, 8000);
});

const animatePlayerWin = (pCard, cCard) => {
  pCard.style.animation = "player-win-p-card 8s";
  cCard.style.animation = "player-win-c-card 8s";
};
const animateComputerWin = (pCard, cCard) => {
  pCard.style.animation = "computer-win-p-card 8s";
  cCard.style.animation = "computer-win-c-card 8s";
};
