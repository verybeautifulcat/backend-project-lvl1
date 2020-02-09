/* eslint-disable no-restricted-globals */
import readlineSync from 'readline-sync';

const checkNaN = (str) => {
  if (!isNaN(Number(str))) {
    return Number(str);
  }
  return str;
};

export default (rule, askQoestion) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rule);

  const [minNumberOfRounds, maxNumberOfRounds] = [1, 3];

  for (let round = minNumberOfRounds; round <= maxNumberOfRounds; round += 1) {
    const [userAnswer, rightAnswer] = askQoestion();

    if (checkNaN(userAnswer) !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      break;
    } if (checkNaN(userAnswer) === rightAnswer && round === maxNumberOfRounds) {
      console.log(`Correct!\nCongratulations, ${name}!`);
      break;
    }
    console.log('Correct!');
  }
};
