import { getAnswer } from './common.js';

const ROUNDS_COUNT = 3;

const runGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = getGameData();

    console.log('Question:', question);

    const userAnswer = getAnswer('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
