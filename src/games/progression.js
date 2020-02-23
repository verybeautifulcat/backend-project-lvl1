import getRandomInteger from '../utils';
import playGame from '..';

const rule = 'What is the result of the expression?';

const maxLengthProgression = 10;

const getExpressionAndRightAnswer = () => {
  const progression = [];
  const step = getRandomInteger(-5, 5);

  const startProgression = getRandomInteger(-100, 100);
  for (let index = 0; index < maxLengthProgression; index += 1) {
    progression[index] = startProgression + step * index;
  }

  const randomeIndex = getRandomInteger(0, progression.length - 1);

  progression[randomeIndex] = '..';

  const rightAnswer = startProgression + step * randomeIndex;

  const expression = progression.join(' ');

  const expressionAndRightAnswer = [];
  expressionAndRightAnswer.push(expression, String(rightAnswer));

  return expressionAndRightAnswer;
};

playGame(rule, getExpressionAndRightAnswer);
