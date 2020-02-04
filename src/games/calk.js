import readlineSync from 'readline-sync';
import startGame from '..';

const rule = 'What is the result of the expression?';
const getRandomExpression = () => {
  const operands = ['+', '-', '*'];

  const firstNum = Math.floor(Math.random() * 11);

  const secondNum = Math.floor(Math.random() * 11);

  const randomeOperand = operands[Math.floor(Math.random() * operands.length)];

  let expression = '';
  let rightAnswer = 0;
  const arrWithExpressionAndRightAnswer = [];

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

  arrWithExpressionAndRightAnswer.push(expression, rightAnswer);

  return arrWithExpressionAndRightAnswer;
};

const askQuestion = () => {
  const [expression, rightAnswer] = getRandomExpression();
  const answers = [];
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  answers.push(Number(userAnswer), rightAnswer);
  return answers;
};

export default startGame(rule, askQuestion);
