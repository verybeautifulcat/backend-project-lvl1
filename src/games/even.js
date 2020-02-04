import readlineSync from 'readline-sync';
import startGame from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomExpression = () => Math.floor(Math.random() * 100);

const askQuestion = () => {
  const answers = [];
  const expression = getRandomExpression();
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  const rightAnswer = (expression % 2 === 0 ? 'yes' : 'no');
  answers.push(userAnswer, rightAnswer);
  return answers;
};

export default startGame(rule, askQuestion);
