const createCard = (cardObject, id) => {
  const card = document.createElement("div");
  card.id = id;
  card.classList.add("card");
  card.innerHTML = cardObject.layout;
  card.style.color = cardObject.color;

  return card;
};

export default createCard;
