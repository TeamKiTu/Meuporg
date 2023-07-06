import {Game} from "./main_classes/game.js";

const game = new Game;
while (!game.isOver()) {
  game.startTurn();
  game.playerTurn();
  game.skipTurn();
}
game.endOfGame();