import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) return false;
  }
  return true;
};

const getExpressionAndRightAnswer = () => {
  const expression = getRandomInteger(-5, 100);

  const rightAnswer = (isPrime(expression) ? 'yes' : 'no');

  const expressionAndRightAnswer = [];
  expressionAndRightAnswer.push(expression, rightAnswer);

  return expressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
