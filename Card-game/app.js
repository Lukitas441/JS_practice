const qs = (selector, parent) => {
  const elemnt = parent
    ? parent.document.querySelector(selector)
    : document.querySelector(selector);

  if (!elemnt) throw Error("couldn't find element");

  return elemnt;
};
const qsAll = (selector) => {
  const elemnt = document.querySelectorAll(selector);

  if (!elemnt) throw Error("couldn't find element");

  return elemnt;
};

const cardObjectDefinitions = [
  { id: 1, imageParh: "./img/card-KingHearts.png" },
  { id: 2, imageParh: "./img/card-JackClubs.png" },
  { id: 3, imageParh: "./img/card-QueenDiamonds.png" },
  { id: 4, imageParh: "./img/card-AceSpades.png" },
];

const cardBackImgPath = "./img/card-back-Blue.png";

const cardContainerElement = qs(".card-container");

let cards = [];

const playGameBtn = qs('#playGame')

const colapsedGridAreaTemplete = '"a a" "a a"'
const cardCollectionCellClass = '.class-pos-a'

const loadGame = () => {
    createCards();
    
    cards = qsAll('.card');

    playGameBtn.addEventListener('click', e => {
        startGame()
    })

};

const startGame = () => {
    initializeNewGame();
    startRound()
}

const initializeNewGame = () => {

}

const startRound = () => {
  initializeNewRound()
}

const initializeNewRound = () => {

}

const collectionCards = () => {
  
}

const createCards = () => {
  cardObjectDefinitions.forEach((card) => {
    createCard(card);
  });
};

const createCard = (cardItem) => {
  const cardElemnt = document.createElement("div");
  cardElemnt.classList.add("card");
  cardElemnt.id = cardItem.id;

  cardElemnt.innerHTML = `<div class="card-inner">
        <div class="card-front">
            <img src="${cardItem.imageParh}" class="card-img">
        </div>
        <div class="card-back">
            <img src="${cardBackImgPath}" class="card-img">
        </div>
    </div>`;

  addCardToGridCell(cardElemnt);
};

const addCardToGridCell = (card) => {
  const cardPosElement = qs(mapCardToGridCell(card));
  cardPosElement.appendChild(card);
};
const mapCardToGridCell = (card) => {
  switch (+card.id) {
    case 1:
      return ".card-pos-a";
    case 2:
      return ".card-pos-b";
    case 3:
      return ".card-pos-c";
    case 4:
      return ".card-pos-d";

    default:
      throw Error("unvalid card");
  }
};

loadGame();
