let numberOfCards = null;

cardsDefinition();

function cardsDefinition() {
  while (numberOfCards % 2 !== 0 || numberOfCards >= 15 || numberOfCards <= 3) {
    numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
  }
}
