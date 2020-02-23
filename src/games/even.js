import getRandomInteger from '../utils';
import playGame from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getExpressionAndRightAnswer = () => {
  const expression = getRandomInteger(-100, 100);
  const rightAnswer = (expression % 2 === 0 ? 'yes' : 'no');

  const expressionAndRightAnswer = [];
  expressionAndRightAnswer.push(expression, rightAnswer);

  return expressionAndRightAnswer;
};

playGame(rule, getExpressionAndRightAnswer);
