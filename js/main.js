import Game from "./gameClass.js";
import deck from "../data/deck.js";
import performAnimation from "./cardAnimations.js";

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

const createCard = (name, color, symbol, id) => {
  const card = document.createElement("div");
  const cardContent = document.createElement("div");
  const cardFront = document.createElement("div");
  const cardBack = document.createElement("div");

  card.id = id;
  card.classList.add("card");
  cardFront.classList.add("card-front");
  cardBack.classList.add("card-back");

  const cardValue = document.createElement("h1");
  const cardSymbol = document.createElement("h1");

  cardValue.innerText = name;
  cardSymbol.innerText = symbol;
  cardValue.style.color = color;
  cardSymbol.style.color = color;

  cardFront.appendChild(cardValue);
  cardFront.appendChild(cardSymbol);

  cardContent.appendChild(cardFront);
  cardContent.appendChild(cardBack);

  card.appendChild(cardContent);

  return card;
};
