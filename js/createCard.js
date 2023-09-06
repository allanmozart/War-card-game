const createCard = (name, color, symbol, id) => {
  const card = document.createElement("div");
  const cardContent = document.createElement("div");
  const cardFront = document.createElement("div");
  const cardBack = document.createElement("div");

  card.id = id;
  card.classList.add("card");
  cardContent.classList.add("card-content");
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

  //   cardFront.style.animation = "display-front 5s";
  //   cardBack.style.animation = "display-back 5s";
  cardContent.appendChild(cardFront);
  cardContent.appendChild(cardBack);

  card.appendChild(cardContent);

  return card;
};

export default createCard;
