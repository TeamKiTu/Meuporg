import {Character} from "./character";
class Fighter extends Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    super(12, 12, 4, 40, 40, "Rocky");
  }

  darkVision(victim) {
    if (this.mana <= 0) {
      "Alors oui... mais non!"
    };
    victim.hp -= 5;
    this.mana -= 20;
  }
}