import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'What is the result of the expression?';

const getExpressionAndRightAnswer = () => {
  const progression = [];
  const maxLengthProgression = 10;
  const step = getRandomInteger(-5, 5);

  let num = getRandomInteger(-100, 100);
  for (let index = 0; index < maxLengthProgression; index += 1) {
    progression.push(num);
    num += step;
  }

  const randomeIndex = getRandomInteger(0, progression.length - 1);

  const rightAnswer = progression[randomeIndex];

  progression[randomeIndex] = '..';

  const expression = progression.join(' ');

  const expressionAndRightAnswer = [];
  expressionAndRightAnswer.push(expression, String(rightAnswer));

  return expressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
