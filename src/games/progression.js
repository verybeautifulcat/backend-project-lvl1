import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'What is the result of the expression?';

const getExpressionAndRightAnswer = () => {
  const arrProgression = [];
  const randomFirstNumber = getRandomInteger(-100, 100);
  const maxLengthProgression = 10;
  const step = getRandomInteger(-5, 5);
  // беру от -5 до 5, чтобы шаг между числами в прогрессии был небольшим
  let nextNumber = randomFirstNumber;
  for (let lengthProgressoin = 1; lengthProgressoin <= maxLengthProgression;
    lengthProgressoin += 1) {
    arrProgression.push(nextNumber);
    nextNumber += step;
  }

  const randomElementFromArrProgression = getRandomInteger(0, arrProgression.length - 1);

  const rightAnswer = arrProgression[randomElementFromArrProgression];

  arrProgression[randomElementFromArrProgression] = '..';

  const expression = arrProgression.join(' ');

  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, String(rightAnswer));

  return arrWithExpressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
