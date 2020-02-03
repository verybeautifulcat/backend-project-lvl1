import readlineSync from 'readline-sync';

const startGame = (rule) => {
  console.log(`Welcome to the Brain Games!\n${rule}`);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
};

export default startGame;
