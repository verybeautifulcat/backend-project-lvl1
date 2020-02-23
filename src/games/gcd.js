import getRandomInteger from '../utils';
import playGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivider = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGreatestCommonDivider(num2, num1 % num2);
};

const getExpressionAndRightAnswer = () => {
  const firstNumber = getRandomInteger(1, 100);
  const secondNumber = getRandomInteger(1, 100);

  const expression = `${firstNumber} ${secondNumber}`;

  const rightAnswer = getGreatestCommonDivider(firstNumber, secondNumber);

  const expressionAndRightAnswer = [];
  expressionAndRightAnswer.push(expression, String(rightAnswer));

  return expressionAndRightAnswer;
};

playGame(rule, getExpressionAndRightAnswer);
