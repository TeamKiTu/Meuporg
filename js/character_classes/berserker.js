import {Character} from "../main_classes/character.js";
export class Berserker extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    super(8, 8, 4, 0, 0, "Guts");
    this.attspe = {manacost:0, dmg:1, heal:-1, name:"Rage !"};
  }

  attackSpe() {
    console.log(`${this.name} utilise sa ${this.attspe.name} pour gagner en puissance !`);
    console.log(`${this.name} a maintenant ${this.dmg} dégâts d'attaque et ${this.hp} point(s) de vie !`);
    this.dmg += this.attspe.dmg;
    this.hp += this.attspe.heal;
  }
}