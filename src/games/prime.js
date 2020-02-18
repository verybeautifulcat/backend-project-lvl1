import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const smallDivider = (num) => {
  let divider = 2;
  while (num % divider !== 0) {
    divider += 1;
  }
  return divider;
};

const getExpressionAndRightAnswer = () => {
  const expression = getRandomInteger(-5, 100);

  let rightAnswer;
  if (expression < 2) {
    rightAnswer = 'no';
  }
  rightAnswer = (expression === smallDivider(expression) ? 'yes' : 'no');

  const expressionAndRightAnswer = [];
  expressionAndRightAnswer.push(expression, rightAnswer);

  return expressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
