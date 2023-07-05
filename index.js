import { Game } from "./game.js";

function startGame() {
  const game = new Game();
  game.startTurn();
  while (!game.isOver()) {
    game.playerTurn();
    game.skipTurn();
  }
  console.log("Le jeu est terminé !");
}

document.getElementById("start-game").addEventListener("click", startGame);
