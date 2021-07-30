let numberOfCards = null;
let deck = [];
let firstCard = null;
let clicks = 0;
let pairs = 0;
const gifs = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "unicornparrot.gif",
];

memoryGame();

function memoryGame() {
  while (numberOfCards % 2 !== 0 || numberOfCards >= 15 || numberOfCards <= 3) {
    numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
  }
  console.log(numberOfCards);
  for (let i = 0; i < numberOfCards / 2; i++) {
    const card = `<div class="cards card1" id="checkcard${i}" onclick="toSelectCard(this)">
     <img class="front" src="Images/front.png">
     <img class="back hide" src="Images/${gifs[i]}">
     </div>`;
    deck.push(card);
    deck.push(card);
  }
}

deck.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

const cardsDistribution = document.querySelector(".container");
cardsDistribution.innerHTML = "";

for (let i = 0; i < numberOfCards; i++) {
  cardsDistribution.innerHTML += deck[i];
}

function toSelectCard(card) {
  const front = card.querySelector(".front");
  const back = card.querySelector(".back");
  front.classList.add("hide");
  back.classList.remove("hide");
  toCompare(card);
}

function toCompare(card) {
  if (firstCard === null) {
    console.log("essa foi a primeira carta");
    firstCard = card;
    firstCard.setAttribute("onclick", "");
    clicks++;
  } else if (firstCard.innerHTML === card.innerHTML) {
    console.log("Cartas iguais");
    card.setAttribute("onclick", "");
    firstCard.setAttribute("onclick", "");
    firstCard = null;
    clicks++;
    pairs = pairs + 2;
    console.log(pairs);
    if (pairs === numberOfCards) {
      alert(`Você ganhou em ${clicks / 2} jogadas!`);
      return;
    }
  } else {
    console.log("Cartas Diferentes");
    differentCards(card, firstCard);
    firstCard = null;
    clicks++;
  }
}

function differentCards(card, firstCard) {
  setTimeout(() => unflipCard(card, firstCard), 1000);

  function unflipCard(card, firstCard) {
    const frontCard = card.querySelector(".front");
    const backCard = card.querySelector(".back");
    frontCard.classList.remove("hide");
    backCard.classList.add("hide");
    card.setAttribute("onclick", "toSelectCard(this)");
    const frontFirstCard = firstCard.querySelector(".front");
    const backFirstCard = firstCard.querySelector(".back");
    frontFirstCard.classList.remove("hide");
    backFirstCard.classList.add("hide");
    firstCard.setAttribute("onclick", "toSelectCard(this)");
  }
}
