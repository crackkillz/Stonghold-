const playerDeck = [
    {"card_number": 1, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
    {"card_number": 2, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
    {"card_number": 3, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
    {"card_number": 4, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
    {"card_number": 5, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
    {"card_number": 6, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
    {"card_number": 7, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
    {"card_number": 8, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
    {"card_number": 9, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
    {"card_number": 10, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "knight.jpg"},
    {"card_number": 11, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "knight.jpg"},    
    {"card_number": 13, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
    {"card_number": 14, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
    {"card_number": 15, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
    {"card_number": 16, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
    {"card_number": 17, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
    {"card_number": 18, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "cavalry.jpg"},  
    {"card_number": 19, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "cavalry.jpg"},
    {"card_number": 20, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "cavalry.jpg"},
    {"card_number": 21, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
    {"card_number": 22, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
    {"card_number": 23, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
    {"card_number": 24, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
    {"card_number": 25, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "squire.jpg"},
    {"card_number": 26, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "squire.jpg"},
    {"card_number": 27, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "squire.jpg"},
    {"card_number": 28, "card_name": "Balista", "health": 40, "damage": 20, "range": 4, "image": "balista.jpg"},
    {"card_number": 29, "card_name": "Catapult", "health": 35, "damage": 15, "range": 4, "image": "card/catapult.jpg"},
    {"card_number": 30, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 31, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 32, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 33, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
    {"card_number": 34, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2,  "image": "card/pikeman.jpg"},
    {"card_number": 35, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2,  "image": "card/pikeman.jpg"},
    {"card_number": 36, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
    {"card_number": 37, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
    {"card_number": 38, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"}, 
    {"card_number": 39, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"},
    {"card_number": 40, "card_name": "Paladin", "health": 30, "damage": 15, "range": 1, "image": "card/paladin.jpg"}];

    const enemyDeck = [
        {"card_number": 1, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
        {"card_number": 2, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
        {"card_number": 3, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
        {"card_number": 4, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
        {"card_number": 5, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "swordsman.jpg"},
        {"card_number": 6, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
        {"card_number": 7, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
        {"card_number": 8, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
        {"card_number": 9, "card_name": "Spearman", "health": 15, "damage": 15, "range": 2, "image": "spearman.jpg"},
        {"card_number": 10, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "knight.jpg"},
        {"card_number": 11, "card_name": "Knight", "health": 30, "damage": 10, "range": 1, "image": "knight.jpg"},    
        {"card_number": 13, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
        {"card_number": 14, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
        {"card_number": 15, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
        {"card_number": 16, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
        {"card_number": 17, "card_name": "Archer", "health": 15, "damage": 10, "range": 3, "image": "archer.jpg"},
        {"card_number": 18, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "cavalry.jpg"},  
        {"card_number": 19, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "cavalry.jpg"},
        {"card_number": 20, "card_name": "Cavalry", "health": 25, "damage": 15, "range": 1, "image": "cavalry.jpg"},
        {"card_number": 21, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
        {"card_number": 22, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
        {"card_number": 23, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
        {"card_number": 24, "card_name": "Crossbowman", "health": 20, "damage": 10, "range": 2, "image": "crossbowman.jpg"},
        {"card_number": 25, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "squire.jpg"},
        {"card_number": 26, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "squire.jpg"},
        {"card_number": 27, "card_name": "Squire", "health": 10, "damage": 10, "range": 1, "image": "squire.jpg"},
        {"card_number": 28, "card_name": "Balista", "health": 40, "damage": 20, "range": 4, "image": "balista.jpg"},
        {"card_number": 29, "card_name": "Catapult", "health": 35, "damage": 15, "range": 4, "image": "card/catapult.jpg"},
        {"card_number": 30, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
        {"card_number": 31, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
        {"card_number": 32, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
        {"card_number": 33, "card_name": "Axeman", "health": 15, "damage": 10, "range": 1, "image": "card/axeman.jpg"},
        {"card_number": 34, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2,  "image": "card/pikeman.jpg"},
        {"card_number": 35, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2,  "image": "card/pikeman.jpg"},
        {"card_number": 36, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
        {"card_number": 37, "card_name": "Pikeman", "health": 15, "damage": 10, "range": 2, "image": "card/pikeman.jpg"}, 
        {"card_number": 38, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"}, 
        {"card_number": 39, "card_name": "Shield Bearer", "health": 35, "damage": 0, "range": 1, "image": "card/shieldbearer.jpg"},
        {"card_number": 40, "card_name": "Paladin", "health": 30, "damage": 15, "range": 1, "image": "card/paladin.jpg"}
      ]; 
    



class GameStart {
    constructor(player, enemy) {
      this.player = player;
      this.enemy = enemy;
    }
  
    shuffleDeck(deck) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  
    startGame() {
      this.shuffleDeck(playerDeck);
      this.shuffleDeck(enemyDeck);
    
      console.log('Player Deck:', playerDeck);
      console.log('Enemy Deck:', enemyDeck);
    }
  
    drawCards(player, numCards) {
      for (let i = 0; i < numCards; i++) {
        const card = player.drawCard();
        if (card !== null) {
          player.addToHand(card);
        }
      }
    }
  }

  class Player {
    constructor(player, deck, hand, frontline, backline, graveyard, life) {
      this.player = player;
      this.deck = deck || [deck];  
      this.hand = hand || [];
      this.frontline = frontline || [];
      this.backline = backline || [];
      this.graveyard = graveyard || [];
      this.life = life || 100;
    }
  
    drawCard() {
      if (this.deck.length > 0) {
        return this.deck.pop();
      } else {
        return null;
      }
    }
  
    addToHand(card) {
      this.hand.push(card);
    }
  
    removeFromHand(card) {
      this.hand.splice(this.hand.indexOf(card), 1);
    }
  
    addToFrontline(card) {
      this.frontline.push(card);
    }
  
    removeFromFrontline(card) {
      this.frontline.splice(this.frontline.indexOf(card), 1);
    }
  
    addToBackline(card) {
      this.backline.push(card);
    }
  
    removeFromBackline(card) {
      this.backline.splice(this.backline.indexOf(card), 1);
    }
  
    addToGraveyard(card) {
      this.graveyard.push(card);
    }
  
    removeFromGraveyard(card) {
      this.graveyard.splice(this.graveyard.indexOf(card), 1);
    }
  
    isDead() {
      return this.life <= 0;
    }
  }
  class Enemy {
    constructor(enemy, deck) {
      this.enemy = enemy;
      this.deck = deck || [deck]; 
      this.hand = [];
      this.frontline = [];
      this.backline = [];
      this.graveyard = [];
      this.life = 100;
    }
  }
    
const player = new Player('Player1', playerDeck);
const enemy = new Enemy('Enemy1', enemyDeck);

  // Create an instance of GameStart
const game = new GameStart(player, enemy);

// Start the game
game.startGame() 
  this.shuffleDeck(this.player.deck);
  this.shuffleDeck(this.enemy.deck);

  console.log('Player Deck:', this.player.deck);
  console.log('Enemy Deck:', this.enemy.deck);

  const gameView = new GameView(game);

    
  class GameView { 
    constructor(game) {  // Only pass game as it has references to player and enemy
        this.game = game;
        this.playerDeck = this.game.player.deck;  // use game.player.deck instead of playerDeck
        this.enemyDeck = this.game.enemy.deck;    
        this.playerHand = document.getElementById("player-hand");
        this.playerFrontline = document.getElementById("player-frontline");
        this.playerBackline = document.getElementById("player-backline");
        this.playerGraveyard = document.getElementById("player-graveyard");
        this.enemyHand = document.getElementById("enemy-hand");
        this.enemyFrontline = document.getElementById("enemy-frontline");
        this.enemyBackline = document.getElementById("enemy-backline");
        this.enemyGraveyard = document.getElementById("enemy-graveyard");
        this.playerLife = document.getElementById("player-life");
        this.enemyLife = document.getElementById("enemy-life");
        this.playerDeckCount = document.getElementById("player-deck-count");
        this.enemyDeckCount = document.getElementById("enemy-deck-count");
        this.playerDeckCount.innerHTML = this.playerDeck.length;
        this.enemyDeckCount.innerHTML = this.enemyDeck.length;
        this.player = document.getElementById("player");
        this.enemy = document.getElementById("enemy");
        this.playerHandCards = [];
        this.playerFrontlineCards = [];
        this.playerBacklineCards = [];
        this.playerGraveyardCards = [];
        this.enemyHandCards = [];
        this.enemyFrontlineCards = [];
        this.enemyBacklineCards = [];
        this.enemyGraveyardCards = [];
        this.playerLife.innerHTML = this.game.player.life;
        this.enemyLife.innerHTML = this.game.enemy.life;
        this.playerHandCards = [];
        this.enemyHandCards = [];
        this.playerFrontlineCards = [];
        this.enemyFrontlineCards = [];
        this.playerBacklineCards = [];
        this.enemyBacklineCards = [];
        this.playerGraveyardCards = [];
        this.enemyGraveyardCards = [];
    
        this.playerDeck.forEach(card => { 
            this.playerHandCards.push(this.createCard(card, "player-hand"));
        }
        );
        this.enemyDeck.forEach(card => {
            this.enemyHandCards.push(this.createCard(card, "enemy-hand"));
        }
        );
    }

    createCard(card, location) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        cardContainer.id = card.card_number;
        cardContainer.style.backgroundImage = `url(${card.image})`;
        const cardName = document.createElement("div");
        cardName.classList.add("card-name");
        cardName.innerHTML = card.card_name;
        const cardHealth = document.createElement("div");
        cardHealth.classList.add("card-health");
        cardHealth.innerHTML = card.health;
        const cardDamage = document.createElement("div");
        cardDamage.classList.add("card-damage");
        cardDamage.innerHTML = card.damage;
        const cardRange = document.createElement("div");
        cardRange.classList.add("card-range");
        cardRange.innerHTML = card.range;
        cardContainer.appendChild(cardName);
        cardContainer.appendChild(cardHealth);
        cardContainer.appendChild(cardDamage);
        cardContainer.appendChild(cardRange);
        cardContainer.addEventListener("click", () => {
            if (location == "player-hand") {
                this.game.playCard(card, "frontline");
                this.playerHandCards.splice(this.playerHandCards.indexOf(cardContainer), 1);
                this.playerFrontlineCards.push(cardContainer);
                this.playerHand.removeChild(cardContainer);
                this.playerFrontline.appendChild(cardContainer);
            } else if (location == "enemy-hand") {
                this.game.playCard(card, "frontline");
                this.enemyHandCards.splice(this.enemyHandCards.indexOf(cardContainer), 1);
                this.enemyFrontlineCards.push(cardContainer);
                this.enemyHand.removeChild(cardContainer);
                this.enemyFrontline.appendChild(cardContainer);
            }
        });
        return cardContainer;
    }

    update() {
        this.playerLife.innerHTML = this.game.player.life;
        this.enemyLife.innerHTML = this.game.enemy.life;
        this.playerDeckCount.innerHTML = this.playerDeck.length;
        this.enemyDeckCount.innerHTML = this.enemyDeck.length;
    }
}


