import readlineSync from 'readline-sync';

export default (rule, getExpressionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rule);

  const [minNumberOfRounds, maxNumberOfRounds] = [1, 3];

  for (let round = minNumberOfRounds; round <= maxNumberOfRounds; round += 1) {
    const [expression, rightAnswer] = getExpressionAndRightAnswer();

    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

    if (userAnswer !== rightAnswer) {
      return (console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`));
    }
    console.log('Correct!');
  }
  return (console.log(`Congratulations, ${name}!`));
};
