// Define Card constructor
function Card(name, health, damage, range, img, status) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.range = range;
  this.img = img;
  this.status = status;

  // create method  that updates the status of a card
  this.updateStatus = function (newStatus) {
    this.status = newStatus;
  };

  // method that updates the health of a card 
  this.updateHealth = function (health) {
    this.health = health;
  };
}

// Shuffle deck function
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Draw cards function
function drawCards(player, numCards) {
  for (let i = 0; i < numCards; i++) {
    if (player.player_deck > 0) {
      const card = player.player_deck.pop();
      player.player_hand.push(card);
    } else {
      console.log("No more cards in the deck!");
      break;
    }
  }
}

// Define the objects in the game
function GameStart(player, enemy) {
  this.player = player;
  this.enemy = enemy;
}

// Define what part of the game belongs to or is the player
function Player(playerLife) {
  this.playerLife = playerLife;
  this.player_deck = [];
  this.player_graveyard = [];
  this.player_hand = [];
  this.player_frontline = [];
  this.player_backline = [];
}

// Define enemy
function Enemy(enemy_life) {
  this.enemy_life = enemy_life;
  this.enemy_deck = [];
  this.enemy_graveyard = [];
  this.enemy_hand = [];
  this.enemy_frontline = [];
  this.enemy_backline = [];
}

// Create an instance of the game
const player = new Player(100);
const enemy = new Enemy(100);
const game = new GameStart(player, enemy);

// define player deck
player.player_deck = [
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Knight", 30, 10, 1, "card/Knight.jpg", ""),
  new Card("Knight", 30, 10, 1, "card/Knight.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Cavalry", 25, 15, 1, "card/Cavalry.jpg", ""),
  new Card("Cavalry", 25, 15, 1, "card/Cavalry.jpg", ""),
  new Card("Cavalry", 25, 15, 1, "card/Cavalry.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Squire", 10, 10, 1, "card/Squire.jpg", ""),
  new Card("Squire", 10, 10, 1, "card/Squire.jpg", ""),
  new Card("Squire", 10, 10, 1, "card/Squire.jpg", ""),
  new Card("Balista", 40, 20, 4, "card/Balista.jpg", ""),
  new Card("Catapult", 35, 15, 4, "card/Catapult.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Shield Bearer", 35, 0, 1, "card/ShieldBearer.jpg", ""),
  new Card("Shield Bearer", 35, 0, 1, "card/ShieldBearer.jpg", ""),
  new Card("Paladin", 30, 15, 1, "card/Paladin.jpg", "")
];

// enemy deck
enemy.enemy_deck = [
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Swordsman", 20, 15, 1, "card/Swordsman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Spearman", 15, 15, 2, "card/Spearman.jpg", ""),
  new Card("Knight", 30, 10, 1, "card/Knight.jpg", ""),
  new Card("Knight", 30, 10, 1, "card/Knight.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Archer", 15, 10, 3, "card/Archer.jpg", ""),
  new Card("Cavalry", 25, 15, 1, "card/Cavalry.jpg", ""),
  new Card("Cavalry", 25, 15, 1, "card/Cavalry.jpg", ""),
  new Card("Cavalry", 25, 15, 1, "card/Cavalry.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Crossbowman", 20, 10, 2, "card/Crossbowman.jpg", ""),
  new Card("Squire", 10, 10, 1, "card/Squire.jpg", ""),
  new Card("Squire", 10, 10, 1, "card/Squire.jpg", ""),
  new Card("Squire", 10, 10, 1, "card/Squire.jpg", ""),
  new Card("Balista", 40, 20, 4, "card/Balista.jpg", ""),
  new Card("Catapult", 35, 15, 4, "card/Catapult.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Axeman", 15, 10, 1, "card/Axeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Pikeman", 15, 10, 2, "card/Pikeman.jpg", ""),
  new Card("Shield Bearer", 35, 0, 1, "card/ShieldBearer.jpg", ""),
  new Card("Shield Bearer", 35, 0, 1, "card/ShieldBearer.jpg", ""),
  new Card("Paladin", 30, 15, 1, "card/Paladin.jpg", "")
];

// Shuffle decks
shuffleDeck(player.player_deck);
shuffleDeck(enemy.enemy_deck);

console.log( player.player_deck.length);

// Draw 5 cards for each player
drawCards(player, 5);
drawCards(enemy, 5);

displayPlayerHand(player);
const cardElement = document.createElement("card");
cardElement.classList.add("card");
const nameElement = document.createElement("span");
nameElement.classList.add("card-name");
nameElement.innerText = card.name;
cardElement.appendChild(nameElement);
playerHandContainer.appendChild(cardElement);
// Function to play a card from the player's hand
function playCard(player, cardIndex, position) {
  const card = player.player_hand[cardIndex];

  // Check if the card exists in the player's hand
  if (!card) {
    console.log("Invalid card index.");
    return;
  }

  // Remove the card from the player's hand
  player.player_hand.splice(cardIndex, 1);

  // Add the card to the specified position
  if (position === "frontline") {
    player.player_frontline.push(card);
  } else {
    player.player_backline.push(card);
  }

  console.log(`Played ${card.name} to the ${position}.`);
}
function gameLoop(game) {
  let currentPlayer = game.player;
  let currentEnemy = game.enemy;

  while (game.player.playerLife > 0 && game.enemy.enemy_life > 0) {
    // Player's turn
    console.log("Player's turn");
 

    // Enemy's turn
    console.log("Enemy's turn");


    // Switch players for the next turn
    currentPlayer = currentPlayer === game.player ? game.enemy : game.player;
    currentEnemy = currentEnemy === game.player ? game.enemy : game.player;
  }

  // Game over
  if (game.player.playerLife <= 0) {
    console.log("Game over. Enemy wins!");
  } else if (game.enemy.enemy_life <= 0) {
    console.log("Game over. Player wins!");
  }
}

