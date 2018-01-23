function nextTwoRollsSum(rolls, currentFrame) {
  return (rolls[currentFrame] + rolls[currentFrame + 1]);
}
function isRollStrike(rolls, currentFrame) {
  return rolls[currentFrame] === 10;
}

function isRollSpare(rolls, currentFrame) {
  return nextTwoRollsSum(currentFrame) === 10;
}

function strikePoints(rolls, currentFrame) {
  return nextTwoRollsSum(rolls, currentFrame + 1);
}
function sparePoints(rolls, currentFrame) {
  return rolls[currentFrame + 2];
}
function verifyInput(rolls) {
  return Array.isArray(rolls);
}
function score(rolls) {
  if (verifyInput(rolls) === false) return null;
  if (rolls.length === 0) {
    return 0;
  }
  if (rolls.length < 20) {
    return null;
  }
  let totalScore = 0;
  let currentFrame = 0;
  for (let i = 0; i < 10; i += 1) {
    if (isRollStrike(rolls[currentFrame]) === true) {
      totalScore += 10 + strikePoints(rolls, currentFrame);
      currentFrame += 1;
    } else if (isRollSpare(rolls, currentFrame) === true) {
      totalScore += 10 + sparePoints(rolls, currentFrame);
      currentFrame += 2;
    } else {
      // Open Frame
      totalScore += nextTwoRollsSum(rolls, currentFrame);
      currentFrame += 2;
    }
  }
  if (rolls[currentFrame] !== undefined) {
    totalScore += rolls[currentFrame];
  }
  return totalScore;
}

module.exports = score;
