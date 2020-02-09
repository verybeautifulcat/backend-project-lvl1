import readlineSync from 'readline-sync';
import { getRandomInteger } from './even';

export const rule = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operands = ['+', '-', '*'];
  const firstNum = getRandomInteger(0, 11);
  const secondNum = getRandomInteger(0, 11);
  const randomeOperand = operands[Math.floor(Math.random() * operands.length)];

  let expression = '';
  let rightAnswer = 0;

  switch (randomeOperand) {
    case '-':
      expression = (`${firstNum} - ${secondNum}`);
      rightAnswer = (firstNum - secondNum);
      break;
    case '+':
      expression = (`${firstNum} + ${secondNum}`);
      rightAnswer = (firstNum + secondNum);
      break;
    case '*':
      expression = (`${firstNum} * ${secondNum}`);
      rightAnswer = (firstNum * secondNum);
      break;
    default:
  }

  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, rightAnswer);

  return arrWithExpressionAndRightAnswer;
};

export const askQuestion = () => {
  const [expression, rightAnswer] = getRandomExpression();
  const answers = [];
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

  answers.push(userAnswer, rightAnswer);
  return answers;
};
