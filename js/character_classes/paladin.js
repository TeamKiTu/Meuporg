import {Character} from "../main_classes/character.js";
export class Paladin extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    super(16, 16, 3, 160, 160, "Uther");
    this.attspe = {manacost:40, dmg:4, heal:5, name:"Healing Lighting"};
  }

  attackSpe(victim) {
    console.log(`${this.name} utilise ${this.attspe.manacost} points de mana pour lancer ${this.attspe.name} !`);
    this.mana -= this.attspe.manacost;
    this.takeDamage(victim, this, 1);
    if (this.hp + this.attspe.heal > this.hpmax) {
      console.log(`${this.name} se soigne de ${this.hpmax - this.hp} point(s) de vie, il en a donc ${this.hp}.`);
      this.hp = this.hpmax;
    } else {
      this.hp += this.attspe.heal;
      console.log(`${this.name} se soigne de ${this.attspe.heal} points de vie, il en a donc ${this.hp}.`);
    }
  }
}