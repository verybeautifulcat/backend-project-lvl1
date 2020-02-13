import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getExpressionAndRightAnswer = () => {
  const expression = getRandomInteger(-5, 100);

  const smallDivider = (num) => {
    let divider = 2;
    while (num % divider !== 0) {
      divider += 1;
    }
    return divider;
  };

  let rightAnswer = '';
  if (expression < 2) {
    rightAnswer = 'no';
  }

  rightAnswer = (expression === smallDivider(expression) ? 'yes' : 'no');

  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, rightAnswer);

  return arrWithExpressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
