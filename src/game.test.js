const Game = require("./game");

beforeEach(() => {
  game = new Game();
});

test("game moves should be 0 at start", () => {
  expect(game.moves.length).toBe(0);
});

test("can play with symbol 🖐", () => {
  game.play("🖐");
  expect(game.moves.length).toBe(1);
});

test("cannot play with symbol ⚽", () => {
  expect(() => game.play("⚽")).toThrow(Error);
});

test("cannot play with symbol ⚽", () => {
  expect(() => game.play("⚽")).toThrow(Error);
});

test("cannot move more than 2 times", () => {
  expect(() => {
    game.play("🖐");
    game.play("🖐");
    game.play("🖐");
  }).toThrow(Error);
});

test("cannot check winner if not played 2 times", () => {
  game.play("🖐");
  expect(() => game.winner()).toThrow(Error);
});

test("same symbol played result in a pair game", () => {
  game.play("🖐");
  game.play("🖐");
  expect(game.winner()).toBe(0);
});

test("paper vs rock player 1 wins", () => {
  game.play("🖐");
  game.play("👊");
  expect(game.winner()).toBe(1);
});

test("rock vs paper player 2 wins", () => {
  game.play("👊");
  game.play("🖐");
  expect(game.winner()).toBe(2);
});
