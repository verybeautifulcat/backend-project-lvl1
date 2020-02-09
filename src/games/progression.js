import readlineSync from 'readline-sync';
import { getRandomInteger } from './even';

export const rule = 'What is the result of the expression?';

const getRandomExpression = () => {
  const arProgression = [];
  const randomFirstNumber = getRandomInteger(-100, 100);
  const maxLengthProgression = 10;
  const operands = ['+', '-'];
  const randomeOperand = operands[Math.floor(Math.random() * operands.length)];
  const step = Math.floor(Math.random() * 6);

  let nextNumber = randomFirstNumber;
  for (let lengthProgressoin = 1; lengthProgressoin <= maxLengthProgression;
    lengthProgressoin += 1) {
    arProgression.push(nextNumber);

    switch (randomeOperand) {
      case '+':
        nextNumber += step;
        break;
      case '-':
        nextNumber -= step;
        break;
      default:
    }
  }

  const randomElementFromArProgression = Math.floor(Math.random() * arProgression.length);
  const rightAnswer = arProgression[randomElementFromArProgression];

  arProgression[randomElementFromArProgression] = '..';
  const expression = arProgression.join(' ');
  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, rightAnswer);

  return arrWithExpressionAndRightAnswer;
};

export const askQuestion = () => {
  const [expression, rightAnswer] = getRandomExpression();
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

  const answers = [];
  answers.push(userAnswer, rightAnswer);
  return answers;
};
