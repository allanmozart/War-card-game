import { shuffleDeck, splitDeck } from "./manipulateDeck.js";

class Game {
  constructor(deck) {
    [this.playerHand, this.computerHand] = splitDeck(shuffleDeck(deck));
    this.openCards = [];
    this.gameOn = true;
    this.winner = "";
    this.animationRunning = false;
    this.warOn = false;
  }

  drawCards() {
    this.openCards.unshift(this.playerHand.shift());
    this.openCards.unshift(this.computerHand.shift());
    // If players draw same cards, war starts:
    if (this.openCards[0].value === this.openCards[1].value) {
      // If any of players does not have enough cards for war, end game
      if (this.playerHand.length < 4) {
        this.playerHand = [];
        return "computer";
      }
      if (this.computerHand.length < 4) {
        this.computerHand = [];
        return "player";
      }
      console.log("war starts");
      this.warOn = true;
      // Each player places 3 additional cards
      this.openCards.push(...this.playerHand.splice(0, 3));
      this.openCards.push(...this.computerHand.splice(0, 3));
      // Cards are drawn again until turn winner is decided
      this.drawCards();
    }
    if (this.openCards[0].value > this.openCards[1].value) {
      console.log("war ends");
      this.warOn = "false";
      return "computer";
    }
    if (this.openCards[0].value < this.openCards[1].value) {
      console.log("war ends");
      this.warOn = "false";
      return "player";
    }
  }

  playTurn() {
    if (!this.gameOn) {
      return;
    }
    const turnWin = this.drawCards();
    //
    if (this.playerHand.length === 0) {
      this.gameOn = false;
      this.winner = "Computer";
      return;
    }
    if (this.computerHand.length === 0) {
      this.gameOn = false;
      this.winner = "Player";
      return;
    }
    if (turnWin === "player") {
      this.playerHand = this.playerHand.concat(this.openCards);
      return "player";
    }
    if (turnWin === "computer") {
      this.computerHand = this.computerHand.concat(this.openCards);
      return "computer";
    }
  }
  resetOpenCards() {
    this.openCards = [];
  }
}

export default Game;
