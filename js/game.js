import deck from "../data/deck.js";

// Arrange cards
const shuffleDeck = (deck) => {
  return deck.slice().sort(() => 0.5 - Math.random());
};

const splitDeck = (deck) => {
  const playersHalf = deck.slice(0, 26);
  const computersHalf = deck.slice(26);
  return [playersHalf, computersHalf];
};

let [playerHand, computerHand] = splitDeck(shuffleDeck(deck));
let openCards = [];
let gameOn = true;

// Draw cards and check who wins
const drawCards = () => {
  openCards.unshift(playerHand.shift());
  openCards.unshift(computerHand.shift());
  console.log(openCards);
  // If players draw same cards, war starts:
  if (openCards[0].value === openCards[1].value) {
    // If any of players does not have enough cards for war, end game
    if (playerHand.length < 4) {
      playerHand = [];
      return "computer";
    }
    if (computerHand.length < 4) {
      computerHand = [];
      return "player";
    }
    // Each player places 3 additional cards
    openCards.push(...playerHand.splice(0, 3));
    openCards.push(...computerHand.splice(0, 3));
    // Cards are drawn again until turn winner is decided
    console.log("draw again");
    console.log(openCards);
    drawCards();
  }
  if (openCards[0].value > openCards[1].value) {
    console.log("comp w");
    return "computer";
  }
  if (openCards[0].value < openCards[1].value) {
    console.log("p win");
    return "player";
  }
};

const playTurn = () => {
  if (!gameOn) {
    return;
  }
  const turnWin = drawCards();
  //
  if (playerHand.length === 0) {
    console.log("You lose the game!");
    gameOn = false;
    return;
  }
  if (computerHand.length === 0) {
    console.log("You win the game!");
    gameOn = false;
    return;
  }
  if (turnWin === "player") {
    playerHand = playerHand.concat(openCards);
  }
  if (turnWin === "computer") {
    computerHand = computerHand.concat(openCards);
  }
  console.log(`comp: ${computerHand.length}, player: ${playerHand.length}`);
  openCards = [];
};
