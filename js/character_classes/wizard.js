import {Character} from "../main_classes/character.js";
export class Wizard extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    super(10, 10, 2, 200, 200, "Fôdrè KilHauz");
    this.attspe = {manacost:25, dmg:7, name:"Fireball"};
  }

  attackSpe(victim) {
    console.log(`${this.name} utilise ${this.attspe.manacost} points de mana pour lancer ${this.attspe.name} !`);
    this.mana -= this.attspe.manacost;
    this.takeDamage(victim, this, 1);
  }
}