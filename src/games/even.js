import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getExpressionAndRightAnswer = () => {
  const expression = getRandomInteger(-100, 100);
  const rightAnswer = (expression % 2 === 0 ? 'yes' : 'no');

  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, rightAnswer);

  return arrWithExpressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
