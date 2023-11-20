class Card {
  constructor(id, name, attack, range, health, image) {
    this.id = id;
    this.name = name;
    this.attack = attack;
    this.range = range;
    this.health = health;
    this.image = image;
    this.element = this.createCardElement();
  }

  createCardElement() {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.backgroundImage = `url(${this.image})`;
    cardDiv.style.backgroundSize = 'cover';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'name';

    const attackSpan = document.createElement('span');
    attackSpan.className = 'attack';
    attackSpan.innerText = `${this.attack}`;

    const rangeSpan = document.createElement('span');
    rangeSpan.className = 'range';
    rangeSpan.innerText = `${this.range}`;

    const healthSpan = document.createElement('span');
    healthSpan.className = 'health';
    healthSpan.innerText = `${this.health}`;

    cardDiv.appendChild(nameSpan);
    cardDiv.appendChild(attackSpan);
    cardDiv.appendChild(rangeSpan);
    cardDiv.appendChild(healthSpan);

    return cardDiv;
  }

  updateCard() {
  }
}

function loadCardData(callback) {
  fetch('cards.json')
    .then((response) => response.json())
    .then((data) => {
      const cardsData = data.cards;
      callback(cardsData);
    })
    .catch((error) => {
      console.error('Error loading card data:', error);
    });
}

class Player {
  constructor(name) {
    this.name = name;
    this.life = 200;
  }

  decreaseLife(amount) {
    this.life -= amount;
    if (this.life < 0) {
      this.life = 0;
    }
  }

  isOutOfLife() {
    return this.life <= 0;
  }
}

const player1 = new Player('Player1');
const player2 = new Player('Player2');
let currentPlayer = player1; // Set the initial player

console.log(`${player1.name} has ${player1.life} life.`);
console.log(`${player2.name} has ${player2.life} life`);

const player1Deck = [];
const player2Deck = [];

function loadPlayerDeck(playerDeckFile, callback) {
  fetch(playerDeckFile)
    .then((response) => response.json())
    .then((data) => {
      callback(data.cards);
    })
    .catch((error) => {
      console.error(`Error loading player deck data from ${playerDeckFile}:`, error);
    });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCardObjects(cardsData, playerDeck) {
  shuffleArray(cardsData);

  cardsData.forEach((card) => {
    for (let i = 0; i < card.quantity; i++) {
      playerDeck.push(new Card(
        card['card number'],
        card['card name'],
        card.damage,
        card.range,
        card.health,
        card.image
      ));
    }
  });
}

// Load card data and create card objects
loadCardData((data) => {
  createCardObjects(data, player1Deck);
  createCardObjects(data, player2Deck);

  shuffleArray(player1Deck);
  shuffleArray(player2Deck);

  const player1Hand = player1Deck.splice(0, 7);
  const player2Hand = player2Deck.splice(0, 7);

  console.log(`${player1.name}'s hand:`);
  player1Hand.forEach((card, index) => {
    console.log(`Card ${index + 1}: ${card.name}`);
  });

  console.log(`${player2.name}'s hand:`);
  player2Hand.forEach((card, index) => {
    console.log(`Card ${index + 1}: ${card.name}`);
  });

  // Display cards in HTML containers
  const handContainerPlayer1 = document.getElementById('handContainerPlayer1');
  player1Hand.forEach((card) => {
    card.element.addEventListener('click', () => handleCardClick(card));
    card.element.setAttribute('draggable', true);
    handContainerPlayer1.appendChild(card.element);
  });

  const handContainerPlayer2 = document.getElementById('handContainerPlayer2');
  player2Hand.forEach((card) => {
    card.element.addEventListener('click', () => handleCardClick(card));
    card.element.setAttribute('draggable', true);
    handContainerPlayer2.appendChild(card.element);
  });
});

let draggedCard = null;

function handleCardClick(card) {
  if (currentPlayer === player1 && handContainerPlayer1.contains(card.element)) {
   
    player2.decreaseLife(card.attack);
    console.log(`${player1.name} attacks ${player2.name} for ${card.attack} damage.`);

    if (player2.isOutOfLife()) {
      console.log(`${player1.name} wins!`);
    }

    currentPlayer = player2;
  } else if (currentPlayer === player2 && handContainerPlayer2.contains(card.element)) {
   
    player1.decreaseLife(card.attack);
    console.log(`${player2.name} attacks ${player1.name} for ${card.attack} damage.`);

    if (player1.isOutOfLife()) {
      console.log(`${player2.name} wins!`);
    }

    currentPlayer = player1;
  }

  console.log(`${player1.name} has ${player1.life} life.`);
  console.log(`${player2.name} has ${player2.life} life.`);
}

const zones = document.querySelectorAll('.cardzone');

zones.forEach((zone) => {
  zone.addEventListener('click', () => handleZoneClick(zone));
  zone.addEventListener('dragover', handleDragOver);
  zone.addEventListener('drop', (event) => handleDrop(event, zone));
});

function handleZoneClick(zone) {
  console.log(`Clicked on card zone: ${zone.id}`);
}

function handleDragStart(event, card) {
  draggedCard = card;
  event.dataTransfer.setData('text/plain', ''); // Required for Firefox
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event, zone) {
  event.preventDefault();
  if (draggedCard) {
    if (zone.classList.contains('cardzone')) {

      const opponent = currentPlayer === player1 ? player2 : player1;
      opponent.decreaseLife(draggedCard.attack);
      console.log(`${currentPlayer.name} attacks ${opponent.name} for ${draggedCard.attack} damage.`);

      if (opponent.isOutOfLife()) {
        console.log(`${currentPlayer.name} wins!`);
      }

      console.log(`${player1.name} has ${player1.life} life.`);
      console.log(`${player2.name} has ${player2.life} life.`);

      draggedCard.element.parentNode.removeChild(draggedCard.element);

      zone.appendChild(draggedCard.element);
    }
  }

  draggedCard = null; // Reset dragged card
}
