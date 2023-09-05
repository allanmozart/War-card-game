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
const decideTurnWinner = () => {
  openCards.unshift(playerHand.shift());
  openCards.unshift(computerHand.shift());
  if (openCards[0].value === openCards[1].value) {
    if (playerHand.length < 4) {
      console.log("You don't have enough cards to finish the war. You lose!");
      playerHand = [];
      return "computer";
    }
    if (computerHand.length < 4) {
      console.log(
        "Computer doesn't have enough cards to finish the war. You win!"
      );
      computerHand = [];
      return "player";
    }
    openCards.push(...playerHand.splice(0, 3));
    openCards.push(...computerHand.splice(0, 3));
    decideTurnWinner();
  }
  if (openCards[0].value > openCards[1].value) {
    return "computer";
  }
  if (openCards[0].value < openCards[1].value) {
    return "player";
  }
};

const playTurn = () => {
  if (!gameOn) {
    return;
  }
  const turnWin = decideTurnWinner();
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
  } else if (turnWin === "computer") {
    computerHand = computerHand.concat(openCards);
  }
  console.log(`comp: ${computerHand.length}, player: ${playerHand.length}`);
};

console.log("-------------Before start--------------------");
console.log(playerHand);
console.log(computerHand);
console.log("-------------First--------------------");
playTurn();
openCards = [];
console.log(playerHand);
console.log(computerHand);
console.log("-------------Second--------------------");
playTurn();
openCards = [];
console.log(playerHand);
console.log(computerHand);
console.log("-------------Third--------------------");
playTurn();
openCards = [];
console.log(playerHand);
console.log(computerHand);
