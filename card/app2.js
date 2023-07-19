// JavaScript code for the game logic
var currentPlayer = 'player'; // Variable to track the current player
var playerDeck = [
    {"card_number": 1, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 2, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 3, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 4, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 5, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 6, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 7, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 8, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 9, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 10, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "card/knight.jpg"},
    {"card_number": 11, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "card/knight.jpg"},    
    {"card_number": 13, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 14, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 15, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 16, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 17, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 18, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "card/cavalry.jpg"},  
    {"card_number": 19, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "card/cavalry.jpg"},
    {"card_number": 20, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "card/cavalry.jpg"},
    {"card_number": 21, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 22, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 23, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 24, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 25, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "card/squire.jpg"},
    {"card_number": 26, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "card/squire.jpg"},
    {"card_number": 27, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "card/squire.jpg"},
    {"card_number": 28, "card_name": "Balista", "health": 40, "damage": 20, "range": 4, "quantity": 1, "image": "card/balista.jpg"},
    {"card_number": 29, "card_name": "Catapult", "health": 35, "damage": 15, "range": 4, "quantity": 1, "image": "card/catapult.jpg"},
    {"card_number": 30, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 31, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 32, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 33, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 34, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "quantity": 4, "image": "card/pikeman.jpg"},
    {"card_number": 35, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "quantity": 4, "image": "card/pikeman.jpg"},
    {"card_number": 35, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "quantity": 4, "image": "card/pikeman.jpg"}, 
    {"card_number": 36, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
    {"card_number": 37, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
    {"card_number": 38, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"}, 
    {"card_number": 39, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"},
    {"card_number": 40, "card_name": "Paladin", "health": 30, "damage": 15, "range": 1, "image": "card/paladin.jpg"}];
var enemyDeck = [
    {"card_number": 1, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 2, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 3, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 4, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 5, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
    {"card_number": 6, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 7, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 8, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 9, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "card/spearman.jpg"},
    {"card_number": 10, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "card/knight.jpg"},
    {"card_number": 11, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "card/knight.jpg"},    
    {"card_number": 13, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 14, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 15, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 16, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 17, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "card/archer.jpg"},
    {"card_number": 18, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "card/cavalry.jpg"},  
    {"card_number": 19, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "card/cavalry.jpg"},
    {"card_number": 20, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "card/cavalry.jpg"},
    {"card_number": 21, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 22, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 23, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 24, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "card/crossbowman.jpg"},
    {"card_number": 25, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "card/squire.jpg"},
    {"card_number": 26, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "card/squire.jpg"},
    {"card_number": 27, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "card/squire.jpg"},
    {"card_number": 28, "card_name": "Balista", "health": 40, "damage": 20, "range": 4, "quantity": 1, "image": "card/balista.jpg"},
    {"card_number": 29, "card_name": "Catapult", "health": 35, "damage": 15, "range": 4, "quantity": 1, "image": "card/catapult.jpg"},
    {"card_number": 30, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 31, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 32, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 33, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 34, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "quantity": 4, "image": "card/pikeman.jpg"},
    {"card_number": 35, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "quantity": 4, "image": "card/pikeman.jpg"},
    {"card_number": 35, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "quantity": 4, "image": "card/pikeman.jpg"}, 
    {"card_number": 36, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
    {"card_number": 37, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
    {"card_number": 38, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"}, 
    {"card_number": 39, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"},
    {"card_number": 40, "card_name": "Paladin", "health": 30, "damage": 15, "range": 1, "image": "card/paladin.jpg"}];
// Create an array to hold the cards
var cards = [];

// Function to initialize the game
function initializeGame() {
  // Shuffle the cards array
  cards = shuffle(playerDeck.concat(enemyDeck));

  playersDeck = cards.slice(0, 40);
  enemyDeck = cards.slice(0, 40);

  // Place player's deck and enemy's deck in the respective HTML elements
  var playerDeckElement = document.getElementById('player_deck');
  var enemyDeckElement = document.getElementById('enemy_deck');

  playerDeckElement.innerHTML = generateCardHTML(playerDeck);
  enemyDeckElement.innerHTML = generateCardHTML(enemyDeck);

  // Add click event listeners to player's cards
  var playerCards = playerDeckElement.getElementsByClassName('card');
  for (var i = 0; i < playerCards.length; i++) {
    playerCards[i].addEventListener('click', playCard);
  }
}

// Function to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Function to generate HTML for a given array of cards
function generateCardHTML(cardArray) {
  var html = '';

  for (var i = 0; i < cardArray.length; i++) {
    var card = cardArray[i];

    html += '<card class="' + currentPlayer + '" id="' + card.card_number + '">';
    html += '<span class="card-name">' + card.card_name + '</span>';
    html += '<img src="' + card.image + '" alt="' + card.card_name + '" class="card-image">';
    html += '<span class="card-attack">' + card.damage + '</span>';
    html += '<span class="card-range">' + card.range + '</span>';
    html += '<span class="card-defense">' + card.health + '</span>';
    html += '</card>';
  }

  return html;
}

// Function to handle the player's card click event
function playCard(event) {
  var cardId = event.target.id;
  var cardIndex = findCardIndex(playerDeck, cardId);

  if (cardIndex !== -1) {
    var playedCard = playerDeck.splice(cardIndex, 1)[0];

    // Place the played card on the battlefield
    var battlefieldElement = document.getElementById('battlefield');
    battlefieldElement.innerHTML += generateCardHTML([playedCard]);

    // Switch the current player
    currentPlayer = 'enemy';

    // Enemy's turn
    enemyTurn();
  }
}

// Function to find the index of a card in an array based on its card_number
function findCardIndex(cardArray, cardId) {
  for (var i = 0; i < cardArray.length; i++) {
    if (cardArray[i].card_number === parseInt(cardId)) {
      return i;
    }
  }

  return -1;
}

// Function to simulate the enemy's turn
function enemyTurn() {
  var enemyHand = document.getElementsByClassName('enemy_hand')[0];

  // Check if the enemy has any cards in hand
  if (enemyHand.childElementCount === 0) {
    // If the enemy has no cards in hand, draw a card from the enemy's deck
    if (enemyDeck.length > 0) {
      var drawnCard = enemyDeck.shift();

      // Place the drawn card in the enemy's hand
      var enemyHandElement = document.getElementById('enemy_hand');
      enemyHandElement.innerHTML += generateCardHTML([drawnCard]);
    }
  }

  // Implement the enemy's strategy for playing cards
  // You can add your own logic here based on the game's rules

  // After the enemy's turn, switch the current player back to the player
  currentPlayer = 'player';
}

// Call the initializeGame() function to start the game
initializeGame();

// Function to move a card to a specified location
function moveCard(cardId, to) {
  var cardElement = document.getElementById(cardId);
  var destinationElement = document.getElementById(to);

  if (cardElement && destinationElement) {
    destinationElement.appendChild(cardElement);
  } else {
    console.error("One or more elements not found");
  }
}

// Move card "01" to the player_hand slot "P.A1"
setTimeout(function() {
  moveCard("01", "P.A1");
}, 1000);

// Move card "02" to the player_hand slot "P.A2"
setTimeout(function() {
  moveCard("02", "P.A2");
}, 2000);

// Move card "03" to the player_hand slot "P.A3"
setTimeout(function() {
  moveCard("03", "P.A3");
}, 3000);

// Move card "04" to the player_hand slot "P.A4"
setTimeout(function() {
  moveCard("04", "P.A4");
}, 4000);

// Move card "05" to the player_hand slot "P.A5"
setTimeout(function() {
  moveCard("05", "P.A5");
}, 5000);
