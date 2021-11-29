import { getRandomNumber } from '../common.js';
import runGame from '../index.js';

const isNumberEven = (number) => !(number % 2);

const DESCRIPTION = 'Answer "yes" if given number is even. Otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(1, 99);
  const answer = isNumberEven(number) ? 'yes' : 'no';

  return [String(number), String(answer)];
};

const evenGame = () => runGame(DESCRIPTION, getGameData);

export default evenGame;
