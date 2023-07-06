import {Character} from "../main_classes/character.js";
export class Fighter extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name, attspe) {
    super(12, 12, 4, 40, 40, "Rocky");
    this.attspe = {manacost:20, dmg:5, name:"Dark Vision"};
  }

  attackSpe(victim) {
    this.attspe.isUsed = true;
    console.log(`${this.name} utilise ${this.attspe.manacost} points de mana pour lancer ${this.attspe.name} !`);
    console.log(`De plus, ${this.name} subira 2 dégâts de moins jusqu'à son prochain tour.`);
    this.mana -= this.attspe.manacost;
    this.takeDamage(victim, this, 1);
  }
}