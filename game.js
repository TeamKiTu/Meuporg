import {Monk} from "./monk.js";
import {Fighter} from "./fighter.js";
import {Paladin} from "./paladin.js";
import {Berserker} from "./berserker.js";
import {Assassin} from "./assassin.js";
export class Game {
  constructor() {
    this.players = this.initializeCharacters();
    console.log(`Bienvenue dans le MORTAAAAAAL KOMBAAAAAAAAT !`);
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
    console.log(`Début du tour ${this.turn}.`);
  }

  playerTurn() {
    for (let i=0; i < this.players.length - 1; i++) {
      if (this.players[i].isAlive) {
        console.log(`C'est à toi de jouer, ${this.players[i].name} !`);
        let potentialVictim = this.players.filter(player => player.status == "playing");
        potentialVictim = potentialVictim.filter(player => player.name != this.players[i].name);
        console.log("Voici tes cibles, appuye sur la touche correspondante pour les faire souffrir !")
        for (let player = 0; player < potentialVictim.length; player++) {
          console.log(`${player + 1} - ${potentialVictim[player].name}`);
        }
        let ask = "0";
        while (parseInt(ask) <= 0 || parseInt(ask) > potentialVictim.length) {
          console.log("Merci de choisir un choix valable !");  
          ask = prompt(`choisi ta cible, ${this.players[i].name} !`);
        }
        // this.players[i].dealDamage(potentialVictim[ask - 1]);
        console.log(`${this.players[i].name} attaque ${potentialVictim[ask - 1].name} !`);
      }
    }
  }

  skipTurn() {
    console.log(this.turn);
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