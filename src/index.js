const io = require("console-read-write");
const RPS = require("./rps");

const randomItemFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const game = async () => {
  let choice;
  while (!["1", "2"].includes(choice)) {
    io.write("Choose game mode:");
    io.write("1) Human vs Computer");
    io.write("2) Computer vs Computer");
    choice = await io.read();
  }

  const allowedSymbols = RPS.allowedMoves.map((m) => m.symbol);

  let player1Move;
  let player1MoveChoice;
  if (choice === "1") {
    const allowedSymbolsChoices = allowedSymbols.map((s, i) =>
      (i + 1).toString()
    );

    while (!allowedSymbolsChoices.includes(player1MoveChoice)) {
      io.write("Make your move:");
      for (let i = 0; i < allowedSymbols.length; i++) {
        io.write(`${i + 1}) ${allowedSymbols[i]}`);
      }
      player1MoveChoice = await io.read();
    }
    player1Move = allowedSymbols[player1MoveChoice - 1];
  } else {
    player1Move = randomItemFromArray(allowedSymbols);
  }
  const player2Move = randomItemFromArray(allowedSymbols);

  const rps = new RPS();
  rps.play(player1Move);
  rps.play(player2Move);
  const winner = rps.winner();
  io.write(`Player 1 move: ${player1Move}`);
  io.write(`Player 2 move: ${player2Move}`);
  io.write(`Result: ${winner === 0 ? "PAIR 🤷‍♂️" : `PLAYER ${winner} WINS 🎉`}`);
};

(async () => {
  io.write("Welcome to Rock Paper Scissors Game MVP");
  let playAgain;
  do {
    playAgain = null;
    await game();
    while (!["y", "Y", "n", "N"].includes(playAgain)) {
      playAgain = await io.ask("Do you want to play another game? (y/n)");
    }
  } while (playAgain.toLowerCase() === "y");
  io.write("👋 Bye! 👋");
})();
