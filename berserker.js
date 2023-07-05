import {Character} from "./character.js";
export class Berserker extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    super(8, 8, 4, 0, 0, "Guts");
  }
}