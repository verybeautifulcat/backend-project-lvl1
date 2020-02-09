import readlineSync from 'readline-sync';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomExpression = () => Math.floor(Math.random() * 100);

export const askQuestion = () => {
  const expression = getRandomExpression();
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  const rightAnswer = (expression % 2 === 0 ? 'yes' : 'no');

  const answers = [];
  answers.push(userAnswer, rightAnswer);


  return answers;
};
