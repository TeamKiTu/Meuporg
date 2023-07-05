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