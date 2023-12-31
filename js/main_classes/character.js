export class Character {
  constructor(hp, hpmax, dmg, mana, manamax, name, attspe) {
    this.hp = hp;
    this.hpmax = hpmax;
    this.dmg = dmg;
    this.mana = mana;
    this.manamax = manamax;
    this.status = "playing";
    this.name = name;
    this.attspe = {manacost:0, dmg:0, heal:0, isUsed:false};
  }

  takeDamage(victim, attacker, type) {
    if (type == 1) {
      if (victim.constructor.name === "Fighter" && victim.attspe.isUsed) {
        victim.hp -= (attacker.attspe.dmg - 2);
        console.log(`${attacker.name} inflige ${attacker.attspe.dmg - 2} dégâts à ${victim.name} !`);
      } else if (victim.constructor.name === "Assassin" && victim.attspe.isUsed) {
        console.log(`${attacker.name} essaye d'attaquer ${victim.name} qui est invincible ce tour-ci !`)
      } else {      
        victim.hp -= attacker.attspe.dmg;
        console.log(`${attacker.name} inflige ${attacker.attspe.dmg} dégâts à ${victim.name} !`);
      }
    } else {
      if (victim.constructor.name === "Fighter" && victim.attspe.isUsed) {
        victim.hp -= attacker.dmg - 2;
        console.log(`${attacker.name} inflige ${attacker.dmg - 2} dégâts à ${victim.name} !`);
      } else if (victim.constructor.name === "Assassin" && victim.attspe.isUsed) {
        console.log(`${attacker.name} essaye d'attaquer ${victim.name} qui est invincible ce tour-ci !`);
      } else {
        victim.hp -= attacker.dmg;
        console.log(`${attacker.name} inflige ${attacker.dmg} dégâts à ${victim.name} !`);
      }
    }
    victim.isAlive() ? console.log(`${victim.name} à ${victim.hp} point(s) de vie.`) : victim.isDead(attacker, victim);
  }

  dealDamage(victim) {
    this.attspe.isUsed = false;
    if (this.mana >= this.attspe.manacost) {
      let choice = prompt("Veux tu utiliser ton attaque spéciale [1] ou attaquer directement [2] ?");
      switch(choice) {
        case '1' : 
          this.attackSpe(victim);
          break;
        case '2' : 
          this.takeDamage(victim, this, 0);
          break;
        default :
          alert("Erreur de saisie");
          choice = prompt("Veux tu utiliser ton attaque spéciale [1] ou attaquer directement [2] ?");
      }
    } else {
      alert(`Tu n'as pas assez de mana ${this.mana} / ${this.attspe.manacost}, tu utilises donc ton attaque de base pauvre con !`);
      this.takeDamage(victim, this, 0);
    }
  }

  attackSpe(victim) {
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
    victim.hp = 0;
  }
}