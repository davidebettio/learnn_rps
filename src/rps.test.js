const RPS = require("./rps");

beforeEach(() => {
  rps = new RPS();
});

test("moves should be 0 at start", () => {
  expect(rps.moves.length).toBe(0);
});

test("can play with symbol 🖐", () => {
  rps.play("🖐");
  expect(rps.moves.length).toBe(1);
});

test("cannot play with symbol ⚽", () => {
  expect(() => rps.play("⚽")).toThrow(Error);
});

test("cannot play with symbol ⚽", () => {
  expect(() => rps.play("⚽")).toThrow(Error);
});

test("cannot move more than 2 times", () => {
  expect(() => {
    rps.play("🖐");
    rps.play("🖐");
    rps.play("🖐");
  }).toThrow(Error);
});

test("cannot check winner if not played 2 times", () => {
  rps.play("🖐");
  expect(() => rps.winner()).toThrow(Error);
});

test("same symbol played result in a pair game", () => {
  rps.play("🖐");
  rps.play("🖐");
  expect(rps.winner()).toBe(0);
});

test("paper vs rock player 1 wins", () => {
  rps.play("🖐");
  rps.play("👊");
  expect(rps.winner()).toBe(1);
});

test("rock vs paper player 2 wins", () => {
  rps.play("👊");
  rps.play("🖐");
  expect(rps.winner()).toBe(2);
});
