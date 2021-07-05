const game = require("./game");

(() => {
  const game = new Game();
  // game.play("🖐"); // paper
  // game.play("👊"); // rock
  // game.play("✌️"); // scissors
  // game.play("🤏"); // lizard
  // game.play("🖖"); // spock

  game.play("🤏"); // lizard
  game.play("🤏"); // lizard

  const winner = game.winner();
  console.log(`result: ${winner === 0 ? "pair" : `player ${winner} wins`}`);
})();
