const calculateBowlingScore = require('./scoring-bowling.js');

describe('Calculating bowling score', () => {
  test('My bowling score for rolls [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6] is 90', () => {
    expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
      .toBe(90);
  });
  test('My bowling score for rolls [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7,10] is 101', () => {
    expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 10]))
      .toBe(101);
  });
  test('My bowling score for no rolls is 0', () => {
    expect(calculateBowlingScore([]))
      .toBe(0);
  });
  test('My bowling score for rolls [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] is 210', () => {
    expect(calculateBowlingScore([10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10])).toBe(210);
  });
});
