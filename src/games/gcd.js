/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import startGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const getRandomExpression = () => Math.floor(Math.random() * 100);

const maxDivider = (num1, num2) => {
  const smallerArgument = (num1 > num2 ? num2 : num1);

  for (let divider = smallerArgument; divider > 0; divider -= 1) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return divider;
    }
  }
};

const askQuestion = () => {
  const firstNumber = getRandomExpression();
  const secondNumber = getRandomExpression();
  const expression = `${firstNumber} ${secondNumber}`;

  const rightAnswer = maxDivider(firstNumber, secondNumber);
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

  const answers = [];

  if (!isNaN(Number(userAnswer))) {
    answers.push(Number(userAnswer), rightAnswer);
  } else {
    answers.push(userAnswer, rightAnswer);
  }

  return answers;
};

export default startGame(rule, askQuestion);
