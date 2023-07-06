import {Character} from "../main_classes/character.js";
export class Fighter extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name, attspe) {
    super(12, 12, 4, 40, 40, "Rocky", "Dark Vision");
    this.attspe = {manacost:20, dmg:5};
  }

  attackSpe(victim) {
    this.mana -= this.attspe.manacost;
    takeDamage(victim, this, true);
  }
}