import readlineSync from 'readline-sync';
import startGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomExpression = () => Math.floor(Math.random() * 100);

const askQuestion = () => {
  const primeNumbers = ['2', '3', '5', '7', '11', '13', '17', '19', '23', '29', '31', '37',
    '41', '43', '47', '53', '59', '61', '67', '71', '73', '79', '83', '89', '97'];

  const expression = getRandomExpression();
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  const rightAnswer = (primeNumbers.includes(expression) ? 'yes' : 'no');

  const answers = [];
  answers.push(userAnswer, rightAnswer);

  return answers;
};

export default startGame(rule, askQuestion);
