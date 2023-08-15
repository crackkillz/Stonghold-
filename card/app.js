const playerDeck = [
    {id: 1, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
    {id: 2, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
    {id: 3, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
    {id: 4, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
    {id: 5, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
    {id: 6, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
    {id: 7, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
    {id: 8, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
    {id: 9, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
    {id: 10, card_name: "Knight", health: 30, damage: 10, range: 1, image: "knight.jpg"},
    {id: 11, card_name: "Knight", health: 30, damage: 10, range: 1, image: "knight.jpg"},    
    {id: 13, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
    {id: 14, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
    {id: 15, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
    {id: 16, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
    {id: 17, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
    {id: 18, card_name: "Cavalry", health: 25, damage: 15, range: 1, image: "cavalry.jpg"},  
    {id: 19, card_name: "Cavalry", health: 25, damage: 15, range: 1, image: "cavalry.jpg"},
    {id: 20, card_name: "Cavalry", health: 25, damage: 15, range: 1, image: "cavalry.jpg"},
    {id: 21, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
    {id: 22, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
    {id: 23, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
    {id: 24, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
    {id: 25, card_name: "Squire", health: 10, damage: 10, range: 1, image: "squire.jpg"},
    {id: 26, card_name: "Squire", health: 10, damage: 10, range: 1, image: "squire.jpg"},
    {id: 27, card_name: "Squire", health: 10, damage: 10, range: 1, image: "squire.jpg"},
    {id: 28, card_name: "Balista", health: 40, damage: 20, range: 4, image: "balista.jpg"},
    {id: 29, card_name: "Catapult", health: 35, damage: 15, range: 4, image: "card/catapult.jpg"},
    {id: 30, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
    {id: 31, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
    {id: 32, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
    {id: 33, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
    {id: 34, card_name: "Pikeman", health: 15, damage: 10, range: 2,  image: "card/pikeman.jpg"},
    {id: 35, card_name: "Pikeman", health: 15, damage: 10, range: 2,  image: "card/pikeman.jpg"},
    {id: 36, card_name: "Pikeman", health: 15, damage: 10, range: 2, image: "card/pikeman.jpg"}, 
    {id: 37, card_name: "Pikeman", health: 15, damage: 10, range: 2, image: "card/pikeman.jpg"}, 
    {id: 38, card_name: "Shield Bearer", health: 35, damage: 0, range: 1, image: "card/shieldbearer.jpg"}, 
    {id: 39, card_name: "Shield Bearer", health: 35, damage: 0, range: 1, image: "card/shieldbearer.jpg"},
    {id: 40, card_name: "Paladin", health: 30, damage: 15, range: 1, image: "card/paladin.jpg"}];

    const enemyDeck = [
        {id: 41, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
        {id: 42, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
        {id: 43, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
        {id: 44, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
        {id: 45, card_name: "Swordsman", health: 20, damage: 15, range: 1, image: "swordsman.jpg"},
        {id: 46, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
        {id: 47, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
        {id: 48, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
        {id: 49, card_name: "Spearman", health: 15, damage: 15, range: 2, image: "spearman.jpg"},
        {id: 50, card_name: "Knight", health: 30, damage: 10, range: 1, image: "knight.jpg"},
        {id: 51, card_name: "Knight", health: 30, damage: 10, range: 1, image: "knight.jpg"},    
        {id: 52, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
        {id: 53, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
        {id: 54, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
        {id: 55, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
        {id: 56, card_name: "Archer", health: 15, damage: 10, range: 3, image: "archer.jpg"},
        {id: 57, card_name: "Cavalry", health: 25, damage: 15, range: 1, image: "cavalry.jpg"},  
        {id: 58, card_name: "Cavalry", health: 25, damage: 15, range: 1, image: "cavalry.jpg"},
        {id: 59, card_name: "Cavalry", health: 25, damage: 15, range: 1, image: "cavalry.jpg"},
        {id: 60, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
        {id: 61, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
        {id: 62, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
        {id: 63, card_name: "Crossbowman", health: 20, damage: 10, range: 2, image: "crossbowman.jpg"},
        {id: 64, card_name: "Squire", health: 10, damage: 10, range: 1, image: "squire.jpg"},
        {id: 65, card_name: "Squire", health: 10, damage: 10, range: 1, image: "squire.jpg"},
        {id: 66, card_name: "Squire", health: 10, damage: 10, range: 1, image: "squire.jpg"},
        {id: 67, card_name: "Balista", health: 40, damage: 20, range: 4, image: "balista.jpg"},
        {id: 68, card_name: "Catapult", health: 35, damage: 15, range: 4, image: "card/catapult.jpg"},
        {id: 69, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
        {id: 70, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
        {id: 71, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
        {id: 72, card_name: "Axeman", health: 15, damage: 10, range: 1, image: "card/axeman.jpg"},
        {id: 73, card_name: "Pikeman", health: 15, damage: 10, range: 2,  image: "card/pikeman.jpg"},
        {id: 74, card_name: "Pikeman", health: 15, damage: 10, range: 2,  image: "card/pikeman.jpg"},
        {id: 75, card_name: "Pikeman", health: 15, damage: 10, range: 2, image: "card/pikeman.jpg"}, 
        {id: 76, card_name: "Pikeman", health: 15, damage: 10, range: 2, image: "card/pikeman.jpg"}, 
        {id: 77, card_name: "Shield Bearer", health: 35, damage: 0, range: 1, image: "card/shieldbearer.jpg"}, 
        {id: 78, card_name: "Shield Bearer", health: 35, damage: 0, range: 1, image: "card/shieldbearer.jpg"},
        {id: 79, card_name: "Paladin", health: 30, damage: 15, range: 1, image: "card/paladin.jpg"}
      ]; 
      const cardBackImgPath = "card/cback.jpg";

      const playerDeck = [];
      const enemyDeck = [];
      const playerHand = [];
      const enemyHand = [];
      const playerField = [];
      const enemyField = [];
      const playerGraveyard = [];
      const enemyGraveyard = [];
      const playerDeckElement = document.getElementById('player-deck');
      const enemyDeckElement = document.getElementById('enemy-deck');
      const playerHandElement = document.getElementById('player-hand');
      const enemyHandElement = document.getElementById('enemy-hand');
      const playerFieldElement = document.getElementById('player-field');
      const enemyFieldElement = document.getElementById('enemy-field');
      const playerGraveyardElement = document.getElementById('player-graveyard');
      const enemyGraveyardElement = document.getElementById('enemy-graveyard');
      const playerHealthElement = document.getElementById('player-health');
      const enemyHealthElement = document.getElementById('enemy-health');

      class Card {
        constructor(id, card_name, health, damage, range, image) {
          this.id = id;
          this.card_name = card_name;
          this.health = health;
          this.damage = damage;
          this.range = range;
          this.image = image;
        }
      }

      class Deck {
        constructor(cards) {
          this.cards = cards;
        }
        
        drawCard() {
          if (this.cards.length > 0) {
            return this.cards.shift();
          } else {
            return null;
          }
        }
      }

      class Player {
        constructor(name, deck, hand, field, graveyard, health) {
          this.name = name;
          this.deck = deck;
          this.hand = hand;
          this.field = field;
          this.graveyard = graveyard;
          this.health = health;
        }

        drawCard() {
          return this.deck.drawCard();
        }

        addToHand(card) {
          this.hand.push(card);
        }

        playCard(card) {
          const index = this.hand.indexOf(card);
          if (index > -1) {
            this.hand.splice(index, 1);
            this.field.push(card);
          }
        }

        removeFromField(card) {
          const index = this.field.indexOf(card);
          
          if (index > -1) {
            this.field.splice(index, 1);
            this.graveyard.push(card);
          }
        }

        attackCard(attacker, defender) {
          if (attacker.range >= defender.range) {
            defender.health -= attacker.damage;
            if (defender.health <= 0) {
              this.removeFromField(defender);
            }
          }
        }

        attackPlayer(attacker, defender) {  
          if (attacker.range >= defender.range) {
            defender.health -= attacker.damage;
            if (defender.health <= 0) {
              console.log('Game Over');
            }
          }
        }
      }

      class Game {
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

      const player = new Player('Player', new Deck(playerDeck), playerHand, playerField, playerGraveyard, 100); 
      const enemy = new Player('Enemy', new Deck(enemyDeck), enemyHand, enemyField, enemyGraveyard, 100);
      const game = new Game(player, enemy);

      game.startGame();
      game.drawCards(player, 5);
      game.drawCards(enemy, 5);

      console.log('Player Hand:', playerHand);
      console.log('Enemy Hand:', enemyHand);

      function createCardElement(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.id = card.id;
        cardElement.style.backgroundImage = `url(${cardBackImgPath})`;
        cardElement.addEventListener('click', () => {
          if (playerHand.includes(card)) {
            player.playCard(card);
            playerHandElement.removeChild(cardElement);
            playerFieldElement.appendChild(cardElement);
          }
        });
        return cardElement;
      }

      function createCardBackElement() {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = `url(${cardBackImgPath})`;
        return cardElement;
      }

      function createCardFrontElement(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = `url(${card.image})`;
        return cardElement;
      }

      function createPlayerCardElement(card) {
        const cardElement = createCardElement(card);
        const cardFrontElement = createCardFrontElement(card);
        cardElement.appendChild(cardFrontElement);
        return cardElement;
      }

      function createEnemyCardElement(card) {
        const cardElement = createCardBackElement();
        return cardElement;
      }

      function renderPlayerHand() {
        playerHandElement.innerHTML = '';z=
        player.hand.forEach(card => {
          const cardElement = createPlayerCardElement(card);  
          playerHandElement.appendChild(cardElement);
        });
      }

      function renderEnemyHand() {
        enemyHandElement.innerHTML = '';
        enemy.hand.forEach(card => {
          const cardElement = createEnemyCardElement(card);
          enemyHandElement.appendChild(cardElement);
        });
      }

      function renderPlayerField() {
        playerFieldElement.innerHTML = '';
        player.field.forEach(card => {
          const cardElement = createPlayerCardElement(card);
          cardElement.addEventListener('click', () => {
            if (selectedCard) {
              player.attackCard(selectedCard, card);
              selectedCard = null;  
              renderPlayerField();
              renderEnemyField();
            }
          });
          playerFieldElement.appendChild(cardElement);
        });
      }

      function renderEnemyField() {                 
        enemyFieldElement.innerHTML = '';
        enemy.field.forEach(card => {
          const cardElement = createEnemyCardElement(card);
          cardElement.addEventListener('click', () => {
            if (selectedCard) {                       
              player.attackCard(selectedCard, card);
              selectedCard = null;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
              renderPlayerField();
              renderEnemyField();
            }

          });
          enemyFieldElement.appendChild(cardElement);
        });
      }

      function renderPlayerGraveyard() {
        playerGraveyardElement.innerHTML = '';
        player.graveyard.forEach(card => {
          const cardElement = createPlayerCardElement(card);
          playerGraveyardElement.appendChild(cardElement);
        });
      }

      function renderEnemyGraveyard() {
        enemyGraveyardElement.innerHTML = ''; 
        enemy.graveyard.forEach(card => {
          const cardElement = createEnemyCardElement(card);
          enemyGraveyardElement.appendChild(cardElement);
        });



      }                                                                                                                                                                                                                                                                                                   

      function renderPlayerHealth() {
        playerHealthElement.innerHTML = player.health;
      }

      function renderEnemyHealth() {
        enemyHealthElement.innerHTML = enemy.health;
      }

      function render() {
        renderPlayerHand();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        renderEnemyHand();
        renderPlayerField();
        renderEnemyField();
        renderPlayerGraveyard();
        renderEnemyGraveyard();
        renderPlayerHealth();
        renderEnemyHealth();
      }

      render();

      let selectedCard = null;

      function selectCard(card) {
        if (card.parentElement === playerFieldElement) {
          selectedCard = player.field.find(c => c.id === card.id);
        } else {
          selectedCard = enemy.field.find(c => c.id === card.id);
        }
      }



      function endTurn() {
        player.endTurn();
        render();
        enemy.playCard();
        render();
      }

      function reset() {
        player.reset();
        enemy.reset();
        render(); 
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
























































































































































































































































































































































































































































































































































































      


























                                                    z







              






















        

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


