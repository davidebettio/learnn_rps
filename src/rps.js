class RPS {
  static allowedMoves = [
    {
      name: "paper",
      symbol: "🖐",
      beats: ["rock"],
    },
    {
      name: "scissors",
      symbol: "✌️",
      beats: ["paper"],
    },
    {
      name: "rock",
      symbol: "👊",
      beats: ["scissors"],
    },
  ];

  // static allowedMoves = [
  //   {
  //     name: "paper",
  //     symbol: "🖐",
  //     beats: ["rock", "spock"],
  //   },
  //   {
  //     name: "scissors",
  //     symbol: "✌️",
  //     beats: ["paper", "lizard"],
  //   },
  //   {
  //     name: "rock",
  //     symbol: "👊",
  //     beats: ["scissors", "lizard"],
  //   },
  //   {
  //     name: "lizard",
  //     symbol: "🤏",
  //     beats: ["paper", "spock"],
  //   },
  //   {
  //     name: "spock",
  //     symbol: "🖖",
  //     beats: ["scissors", "rock"],
  //   },
  // ];

  constructor() {
    this.moves = [];
  }

  play(symbol) {
    if (this.moves.length === 2) {
      throw new Error("no more moves");
    }

    const move = RPS.allowedMoves.find((m) => m.symbol === symbol);
    if (!move) {
      throw new Error("move not allowed");
    }

    this.moves.push(move);
  }

  winner() {
    if (this.moves.length !== 2) {
      throw new Error("game not finished");
    }

    const points = [
      this.moves[0].beats.includes(this.moves[1].name),
      this.moves[1].beats.includes(this.moves[0].name),
    ];

    if (points.every((p) => !p)) {
      return 0;
    }

    return points[0] ? 1 : 2;
  }
}

module.exports = RPS;
