class Card {
    constructor(name, health, damage, range, image, status = "ready") {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.range = range;
        this.image = image;
        this.status = status;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    updateHealth(health) {
        this.health = health;
    }

    isDead() {
        return this.health <= 0;
    }
}
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
    {"card_number": 40, "card_name": "Paladin", "health": 30, "damage": 15, "range": 1, "image": "card/paladin.jpg"}
  ]; 
  var enemyDeck = [{"card_number": 1, "card_name": "Swordsman", "health": 20, "damage": 15, "range": 1, "image": "card/swordsman.jpg"},
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
  
class Player {
    constructor(playerLife) {
        this.life = playerLife;
        this.deck = [];
        this.graveyard = [];
        this.hand = [];
        this.frontline = [];
        this.backline = [];
    }

    drawCard() {
        if (this.deck.length > 0) {
            return this.deck.pop();
        } else {
            console.log("No more cards in the deck!");
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

    addToBackline(card) {
        this.backline.push(card);
    }

    removeFromFrontline(card) {
        this.frontline.splice(this.frontline.indexOf(card), 1);
    }

    removeFromBackline(card) {
        this.backline.splice(this.backline.indexOf(card), 1);
    }

    addToGraveyard(card) {
        this.graveyard.push(card);
    }
}

class Enemy extends Player {
    constructor(enemyLife) {
        super(enemyLife);
    }
}

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

    drawCards(player, numCards) {
        for (let i = 0; i < numCards; i++) {
            const card = player.drawCard();
            if (card !== null) {
                player.addToHand(card);
            }
        }
    }

    playCard(card, player, position) {
        player.removeFromHand(card);
        if (position == "frontline") {
            player.addToFrontline(card);
        } else if (position == "backline") {
            player.addToBackline(card);
        }
    }

    attack(attacker, defender, player) {
        if (attacker.status == "ready") {
            if (attacker.range >= defender.range) {
                defender.health -= attacker.damage;
                if (defender.isDead()) {
                    defender.updateStatus("dead");
                    defender.updateHealth(0);
                    player.removeFromFrontline(defender);
                    player.removeFromBackline(defender);
                    player.addToGraveyard(defender);
                }
            } else {
                console.log("Defender is out of range!");
            }
        } else {
            console.log("Attacker is not ready!");
        }
    }
}
