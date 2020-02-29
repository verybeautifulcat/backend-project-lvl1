import readlineSync from 'readline-sync';

const minNumberOfRounds = 1;
const maxNumberOfRounds = 3;

export default (rule, getExpressionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rule);

  for (let round = minNumberOfRounds; round <= maxNumberOfRounds; round += 1) {
    const [expression, rightAnswer] = getExpressionAndRightAnswer();

    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
