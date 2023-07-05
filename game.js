import { Monk } from "./monk.js";
import { Fighter } from "./fighter.js";
import { Paladin } from "./paladin.js";
import { Berserker } from "./berserker.js";
import { Assassin } from "./assassin.js";

export class Game {
  constructor() {
    this.players = this.initializeCharacters();
    console.log("Bienvenue dans le MORTAAAAAAL KOMBAAAAAAAAT !");
    console.log(
      `Ordre des personnages : ${this.players[0].name}, ${this.players[1].name}, ${this.players[2].name}, ${this.players[3].name}, ${this.players[4].name}`
    );
    this.turnLeft = 10;
    this.turn = 1;
  }

  initializeCharacters() {
    const order = [
      new Assassin(),
      new Berserker(),
      new Monk(),
      new Paladin(),
      new Fighter(),
    ];
    const shuffledOrder = order.sort(() => Math.random() - 0.5);
    return shuffledOrder;
  }

  startTurn() {
    console.log(`Début du tour ${this.turn}.`);
  }

  playerTurn() {
    for (let i = 0; i < this.players.length - 1; i++) {
      if (this.players[i].isAlive) {
        console.log(`C'est à toi de jouer, ${this.players[i].name} !`);
        let potentialVictim = this.players.filter(
          (player) => player.status === "playing"
        );
        potentialVictim = potentialVictim.filter(
          (player) => player.name !== this.players[i].name
        );
        console.log(
          "Voici tes cibles, appuie sur le chiffre correspondant pour les attaquer :"
        );
        for (let player = 0; player < potentialVictim.length; player++) {
          console.log(`${player + 1} - ${potentialVictim[player].name}`);
        }
        let ask = prompt(
          `Choisis ta cible, ${this.players[i].name} ! (entrez le chiffre correspondant)`
        );
        while (
          parseInt(ask) <= 0 ||
          parseInt(ask) > potentialVictim.length ||
          isNaN(parseInt(ask))
        ) {
          console.log("Merci de choisir un choix valide !");
          ask = prompt(
            `Choisis ta cible, ${this.players[i].name} ! (entrez le chiffre correspondant)`
          );
        }
        const victimIndex = parseInt(ask) - 1;
        this.players[i].dealDamage(potentialVictim[victimIndex]);
        console.log(
          `${this.players[i].name} attaque ${potentialVictim[victimIndex].name} !`
        );
      }
    }
  }

  skipTurn() {
    console.log(`Tour ${this.turn} terminé.`);
    if (this.turnLeft > 0) {
      this.turnLeft -= 1;
      this.turn++;
    }
  }

  isOver() {
    const playingPlayers = this.players.filter(player => player.status === "playing");
    return playingPlayers.length === 1 || this.turnLeft === 0;
  }
  
}
