import {Monk} from "../character_classes/monk.js";
import {Fighter} from "../character_classes/fighter.js";
import {Paladin} from "../character_classes/paladin.js";
import {Berserker} from "../character_classes/berserker.js";
import {Assassin} from "../character_classes/assassin.js";

export class Game {

  constructor() {
    this.players = this.initializeCharacters();
    console.log(`Bienvenue dans le MꝌⱤTAAAAAAL ꝀꝌMBAAAAAAAAT !`);
    console.log(`Ordre des personnages : ${this.players[0].name}, ${this.players[1].name}, ${this.players[2].name}, ${this.players[3].name}, ${this.players[4].name}`);
    this.turnLeft = 10;
    this.turn = 1;
  }

  initializeCharacters() {
    const order = [new Assassin(), new Berserker(), new Monk(), new Paladin(), new Fighter()];
    const shuffledOrder = order.sort((a, b) => 0.5 - Math.random());
    return shuffledOrder
  }

  startTurn() {
    console.log(` ╔══════════════════╗`);
    console.log(`﴿║ Début du tour ${this.turn}. ║﴾`);
    console.log(` ╚══════════════════╝`);
  }

  playerTurn() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].isAlive()) {
        let allCharacters = this.players;
        console.log(`C'est à toi de jouer, ${this.players[i].name} !`);
        let potentialVictim = allCharacters.filter(player => player.status == "playing");
        potentialVictim = potentialVictim.filter(player => player.name != this.players[i].name);
        console.log("Voici tes cibles, appuye sur la touche correspondante pour les faire souffrir !")
        for (let player = 0; player < potentialVictim.length; player++) {
          console.log(`${player + 1} - ${potentialVictim[player].name}`);
        }

        let ask = prompt(`choisi ta cible, ${this.players[i].name} ! entrez le chiffre correspondant)`);

        while (parseInt(ask) <= 0 || parseInt(ask) > potentialVictim.length) {
          alert("Merci de choisir un choix valable !");  
          ask = prompt(`choisi ta cible, ${this.players[i].name} !`);
          console.log(ask);
        }
        console.log(`${this.players[i].name} attaque ${potentialVictim[ask - 1].name} !`);
        this.players[i].dealDamage(potentialVictim[ask - 1], this.players[i]);
        console.log(`﴾════════════════════════════﴿`);
      }
    }
  }

  skipTurn() {
    if (this.turnLeft > 0) {
      this.turnLeft -= 1;
      this.turn++;
    }
  }

  isOver() {
    if (this.players.filter(player => player.status == "playing").length > 1 && this.turnLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

}
