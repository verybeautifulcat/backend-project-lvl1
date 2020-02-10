import readlineSync from 'readline-sync';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getRandomInteger = (min, max) => {
  const randNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randNum);
};// чем больше диапазон между min и max, тем сложнее игра.

export const askQuestion = () => {
  const expression = getRandomInteger(-100, 100);
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  const rightAnswer = (expression % 2 === 0 ? 'yes' : 'no');

  const answers = [];
  answers.push(userAnswer, rightAnswer);


  return answers;
};
