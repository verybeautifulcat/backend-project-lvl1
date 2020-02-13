import getRandomInteger from '../utils';
import startGame from '..';

const rule = 'What is the result of the expression?';

const getExpressionAndRightAnswer = () => {
  const operands = ['+', '-', '*'];
  const firstNum = getRandomInteger(0, 11);
  // в getRandomInteger беру от 0 до 11, чтобы выражения были не такими сложными
  const secondNum = getRandomInteger(0, 11);
  const randomeOperand = operands[getRandomInteger(0, operands.length - 1)];

  const expression = `${firstNum} ${randomeOperand} ${secondNum}`;

  let rightAnswer = 0;
  switch (randomeOperand) {
    case '-':
      rightAnswer = (firstNum - secondNum);
      break;
    case '+':
      rightAnswer = (firstNum + secondNum);
      break;
    case '*':
      rightAnswer = (firstNum * secondNum);
      break;
    default:
  }

  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, String(rightAnswer));

  return arrWithExpressionAndRightAnswer;
};

startGame(rule, getExpressionAndRightAnswer);
