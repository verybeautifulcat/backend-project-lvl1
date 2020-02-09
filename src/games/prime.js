import readlineSync from 'readline-sync';
import { getRandomInteger } from './even';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const askQuestion = () => {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  const expression = getRandomInteger(0, 100);
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  const rightAnswer = (primeNumbers.includes(expression) ? 'yes' : 'no');

  const answers = [];
  answers.push(userAnswer, rightAnswer);
  return answers;
};
