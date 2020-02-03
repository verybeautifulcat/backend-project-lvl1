
const rule = 'What is the result of the expression?';

const outputRandomExpression = () => {
  const operands = ['+', '-', '*'];

  const firstNum = Math.floor(Math.random() * 100);

  const secondNum = Math.floor(Math.random() * 100);

  const randomeoOperand = operands[Math.floor(Math.random() * operands.length)];

  let rightAnswer = 0;
  switch (randomeoOperand) {
    case '-':
      console.log(`${firstNum} - ${secondNum}`);
      rightAnswer += (firstNum - secondNum);
      break;
    case '+':
      console.log(`${firstNum} + ${secondNum}`);
      rightAnswer += (firstNum + secondNum);
      break;
    case '*':
      console.log(`${firstNum} * ${secondNum}`);
      rightAnswer += (firstNum * secondNum);
      break;
    default:
  }
  return rightAnswer;
};
outputRandomExpression();
const щпределитьправильность = (answer, rightAnswer) => {

}



const randomNumber = Math.floor(Math.random() * 100);

const askQuestion = () => {
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  if (answer === 'yes' && randomNumber % 2 !== 0) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
  } else if (answer === 'no' && randomNumber % 2 === 0) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
  } else if (answer !== 'yes' && randomNumber % 2 === 0) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
  } else if (answer !== 'no' && randomNumber % 2 !== 0) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
  } else {
    console.log('Correct!');
  }
};