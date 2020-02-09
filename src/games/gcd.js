/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import { getRandomInteger } from './even';

export const rule = 'Find the greatest common divisor of given numbers.';

const maxDivider = (num1, num2) => {
  const smallerArgument = (num1 > num2 ? num2 : num1);
  for (let divider = smallerArgument; divider > 0; divider -= 1) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return divider;
    }
  }
};

export const askQuestion = () => {
  const firstNumber = getRandomInteger(0, 100);
  const secondNumber = getRandomInteger(0, 100);
  const expression = `${firstNumber} ${secondNumber}`;

  const rightAnswer = maxDivider(firstNumber, secondNumber);
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

  const answers = [];
  answers.push(userAnswer, rightAnswer);
  return answers;
};
