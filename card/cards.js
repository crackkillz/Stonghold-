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
  