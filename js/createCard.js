// const createCard1 = (name, color, symbol, id) => {
//   const card = document.createElement("div");

//   card.id = id;
//   card.classList.add("card");

//   const cardValue = document.createElement("h1");
//   const cardSymbol = document.createElement("h1");

//   cardValue.innerText = name;
//   cardSymbol.innerText = symbol;
//   cardValue.style.color = color;
//   cardSymbol.style.color = color;

//   card.appendChild(cardValue);
//   card.appendChild(cardSymbol);

//   return card;
// };

const createCard = (cardObject, id) => {
  const card = document.createElement("div");
  card.id = id;
  card.classList.add("card");
  card.innerHTML = cardObject.layout;
  card.style.color = cardObject.color;

  return card;
};

export default createCard;
