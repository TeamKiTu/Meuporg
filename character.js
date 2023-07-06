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

  takeDamage(victim, attacker) {
    victim.hp -= attacker.dmg;
    console.log(`${attacker.name} inflige ${attacker.dmg} dégâts à ${victim.name}`);
    victim.isAlive() ? console.log(`${victim.name} à ${victim.hp} point(s) de vie.`) : victim.isDead(attacker, victim);
  }

  dealDamage(victim, attacker) {
    this.takeDamage(victim, attacker);
  }

  isAlive() {
    return this.hp > 0;
  }

  isDead(killer, victim) {
    victim.status = "loser";
    console.log(`${victim.name} est mort !`);
    if (killer.mana + 20 > killer.manamax) {
      killer.mana = killer.manamax;
    } else {
      killer.mana += 20;
    };
  }
}