export class Character {
  constructor(hp, hpmax, dmg, mana, manamax, name) {
    this.hp = hp;
    this.hpmax = hpmax;
    this.dmg = dmg;
    this.mana = mana;
    this.manamax = manamax;
    this.status = "playing";
    this.name = name;
  }

  takeDamage(attacker, dmg) {
    this.hp -= dmg;
    this.isAlive() ? 0 : this.isDead(attacker);
  }

  dealDamage(victim) {
    victim.hp -= this.dmg;
    // victim.takeDamage(this, this.dmg)
  }

  isAlive() {
    return (this.hp <= 0) ? false : true;
  }

  isDead(killer) {
    this.status = "loser";
    if (killer.mana + 20 > killer.manamax) {
      killer.mana = killer.manamax;
    } else {
      killer.mana += 20;
    };
  }
}