import {Character} from "../main_classes/character.js";
export class Monk extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    super(8, 8, 2, 200, 200, "Moana");
    this.attspe = {manacost:25, heal:8, name:"Heal Salh Öp-vah !"};
  }

  attackSpe() {
    console.log(`${this.name} utilise ${this.attspe.manacost} points de mana pour lancer ${this.attspe.name} !`);
    this.hp = this.hpmax;
    console.log(`${this.name} récupère toute sa vie, essaye encore !`)
  }
}