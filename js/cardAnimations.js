const animatePlayerWin = (pCard, cCard) => {
  pCard.style.animation = "player-win-p-card 5s";
  cCard.style.animation = "player-win-c-card 5s";
};

const animateComputerWin = (pCard, cCard) => {
  pCard.style.animation = "computer-win-p-card 5s";
  cCard.style.animation = "computer-win-c-card 5s";
};

// To do:
// animateWar - cards stay on center
// animateWarDeck - additional cards

const performAnimation = (winner, gameDiv, game) => {
  game.animationRunning = true;
  const pCard = document.getElementById("player-card");
  const cCard = document.getElementById("computer-card");
  pCard.classList.add("player-card", "card");
  cCard.classList.add("computer-card", "card");
  winner === "player"
    ? animatePlayerWin(pCard, cCard)
    : animateComputerWin(pCard, cCard);
  setTimeout(() => {
    gameDiv.removeChild(pCard);
    gameDiv.removeChild(cCard);
  }, 5000);
  game.animationRunning = false;
};

export default performAnimation;
