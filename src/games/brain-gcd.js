import runGame from '../index.js';
import { getRandomNumber } from '../common.js';

const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

const DESCRIPTION = 'Find the greatest common divisor of given numbers';

const getGameData = () => {
  const first = getRandomNumber(1, 99);
  const second = getRandomNumber(1, 99);

  const answer = gcd(first, second);

  return [`${first} ${second}`, String(answer)];
};

const gcdGame = () => runGame(DESCRIPTION, getGameData);

export default gcdGame;
