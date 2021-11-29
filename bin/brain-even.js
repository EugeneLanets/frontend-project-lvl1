#!/usr/bin/env node
import { getAnswer, getRandomNumber } from '../src/common.js';

const ROUNDS_TO_WIN = 3;

const evenGameRound = () => {
  const number = getRandomNumber(1, 99);
  const isNumberEven = !(number % 2);
  const rightAnswer = isNumberEven ? 'yes' : 'no';

  console.log('Question:', number);
  const answer = getAnswer('Your answer: ').toLowerCase();

  return answer === rightAnswer;
};

const evenGame = () => {
  let roundNumber = 0;
  while (ROUNDS_TO_WIN - roundNumber) {
    const result = evenGameRound();
    if (!result) {
      console.log('Incorrect. You lose.');
      return;
    }

    console.log('Correct!');
    roundNumber += 1;
  }

  console.log();
};

evenGame();
