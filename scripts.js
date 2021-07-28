let numberOfCards = null;

cardsDefinition();

function cardsDefinition() {
  while (numberOfCards % 2 !== 0 || numberOfCards >= 15 || numberOfCards <= 3) {
    numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
  }
}

const gifs = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "unicornparrot.gif",
];

const newGifs = [];
for (let i = 0; i < numberOfCards / 2; i++) {
  newGifs.push(gifs[i]);
  newGifs.push(gifs[i]);
}

newGifs.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

console.log(newGifs);

const cardsDistribution = document.querySelector(".container");
//console.log(cardsDistribution);
for (let i = 0; i < numberOfCards; i++) {
  cardsDistribution.innerHTML += `
    <div class="card">
        <img src="images/${newGifs[i]}" alt="card" />
    </div>
  `;
}
