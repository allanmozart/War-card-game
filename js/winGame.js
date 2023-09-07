const winGame = (winner) => {
  const winDiv = document.createElement("div");
  winDiv.id = "win-game";
  const winDivText = document.createElement("p");
  winDivText.innerText = `${winner} wins!`;

  winDiv.appendChild(winDivText);
  setTimeout(() => {
    document.body.appendChild(winDiv);
  }, 5000);
};

const removeWinGame = () => {
  const winDiv = document.getElementById("win-game");
  if (winDiv) {
    document.body.removeChild(winDiv);
  }
};

export { winGame, removeWinGame };
