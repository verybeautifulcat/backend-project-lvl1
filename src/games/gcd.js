import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const getExpressionAndRightAnswer = () => {
  const firstNumber = getRandomInteger(0, 100);
  const secondNumber = getRandomInteger(0, 100);

  const expression = `${firstNumber} ${secondNumber}`;

  const smallerArgument = (firstNumber > secondNumber ? secondNumber : firstNumber);
  let rightAnswer = 0;
  for (let divider = smallerArgument; divider > 0; divider -= 1) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      rightAnswer = divider;
      break;
    }
  }

  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, String(rightAnswer));

  return arrWithExpressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
