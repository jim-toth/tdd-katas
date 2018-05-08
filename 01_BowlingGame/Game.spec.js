'use strict';

const common = require('../config/common');
const Game = require('./Game');

describe('Game', () => {
  let game, rollMany, rollSpare, rollStrike;

  rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  };

  rollSpare = () => {
    game.roll(5);
    game.roll(5);
  };

  rollStrike = () => {
    game.roll(10);
  };

  beforeEach(() => {
    game = new Game();
  });

  it('should score a Gutter Game as 0', () => {
    rollMany(20, 0);
    game.score.should.equal(0);
  });

  it('should score a Game of all ones as 20', () => {
    rollMany(20, 1);
    game.score.should.equal(20);
  });

  it('should score a spare, then 3 pins, then all gutter as 16', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    game.score.should.equal(16);
  });

  it('should score a strike, then 3 pins, then 4 pins, then all gutter as 24', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    game.score.should.equal(24);
  });

  it('should score a perfect game (all strikes) as 300', () => {
    rollMany(12, 10);
    game.score.should.equal(300);
  });
});
