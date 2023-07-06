import {Character} from "../main_classes/character.js";
export class Assassin extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    super(6, 6, 6, 20, 20, "Bob");
    this.attspe = {manacost:20, dmg:7, name:"Shadow Hit"};
  }

  attackSpe(victim) {
    this.attspe.isUsed = true;
    console.log(`${this.name} utilise ${this.attspe.manacost} points de mana pour lancer ${this.attspe.name} !`);
    console.log(`De plus, ${this.name} sera invincible jusqu'à son prochain tour.`);
    this.mana -= this.attspe.manacost;
    this.takeDamage(victim, this, 1);
    if (victim.hp > 0) {
      this.hp -= 6;
      console.log("L'assassin ne tue pas sa cible, il se suicide.");
      this.status = "loser";
    }
  }
}