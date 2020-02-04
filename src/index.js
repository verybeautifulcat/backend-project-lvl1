import readlineSync from 'readline-sync';

const startGame = (rule, askQoestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const [minNumberOfRounds, maxNumberOfRounds] = [1, 3];
  for (let round = minNumberOfRounds; round <= maxNumberOfRounds; round += 1) {
    const [userAnswer, rightAnswer] = askQoestion();
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      break;
    } if (userAnswer === rightAnswer && round === maxNumberOfRounds) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log('Correct!');
    }
  }
};

export default startGame;
