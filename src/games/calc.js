import getRandomInteger from '../utils';
import playGame from '..';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getExpressionAndRightAnswer = () => {
  const firstNum = getRandomInteger(0, 11);
  // в getRandomInteger беру от 0 до 11, чтобы выражения были не такими сложными
  const secondNum = getRandomInteger(0, 11);
  const randomeOperand = operators[getRandomInteger(0, operators.length - 1)];

  const expression = `${firstNum} ${randomeOperand} ${secondNum}`;

  let rightAnswer;
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

  const expressionAndRightAnswer = [];
  expressionAndRightAnswer.push(expression, String(rightAnswer));

  return expressionAndRightAnswer;
};

playGame(rule, getExpressionAndRightAnswer);
