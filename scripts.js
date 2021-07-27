let numberOfCards = null;

cardsDefinition();

function cardsDefinition() {
  while (numberOfCards % 2 !== 0 || numberOfCards >= 15 || numberOfCards <= 3) {
    numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
  }
}

alert(numberOfCards);

const cardsDistribution = document.querySelector(".container");
console.log(cardsDistribution);
for (let i = 1; i <= numberOfCards; i++) {
  cardsDistribution.innerHTML += `
    <div class="card">
        <img src="images/front.png" alt="card" />
    </div>
  `;
}
