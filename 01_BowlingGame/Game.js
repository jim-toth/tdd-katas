'use strict';

class Game {
  constructor() {
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }

  get score() {
    let score = 0, frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score = score + 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score = score + 10 + this.spareBonus(frameIndex);
        frameIndex = frameIndex + 2;
      } else {
        score = score + this.sumFrameScore(frameIndex);
        frameIndex = frameIndex + 2;
      }
    }

    return score;
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2];
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }

  strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  sumFrameScore(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }
}

module.exports = Game;
