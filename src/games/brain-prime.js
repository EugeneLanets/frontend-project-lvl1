import { getRandomNumber } from '../common.js';
import runGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(0, 99);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [String(number), String(answer)];
};

const primeGame = () => runGame(DESCRIPTION, getGameData);

export default primeGame;
