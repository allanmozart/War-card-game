import deck from "../data/deck.js";

const shuffleDeck = (deck) => {
  return deck.slice().sort(() => 0.5 - Math.random());
};

const splitDeck = (deck) => {
  const playersHalf = deck.slice(0, 26);
  const computersHalf = deck.slice(26, 52);
  return [playersHalf, computersHalf];
};

const [playersCards, computersCards] = splitDeck(shuffleDeck(deck));
