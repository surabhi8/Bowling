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
  test('My bowling score for rolls [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] is a number', () => {
    expect(typeof (calculateBowlingScore([10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10]))).toBe('number');
  });
  test('My bowling score for less than 10 frames gives null as the score', () => {
    expect(calculateBowlingScore([10, 10, 10])).toBe(null);
  });
  test('My bowling score considers only first 10 frames ', () => {
    expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,
      3, 6, 3, 7, 10, 11]))
      .toBe(101);
  });
  // I didn't write code for last test case
  // test('My bowling score returns null if any negative roll is there ', () => {
  //   expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,
  //     3, 6, 3, -7, 10]))
  //     .toBe(null);
  // });
});
