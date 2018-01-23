const calculateBowlingScore = require('./scoring-bowling.js');

describe('Calculating bowling score', () => {
  test('My bowling score is ', () => {
    expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
      .toBe(90);
  });
});
