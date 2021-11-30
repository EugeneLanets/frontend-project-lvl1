import runGame from '../index.js';
import { getRandomNumber } from '../common.js';

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const multiply = (a, b) => a * b;

const OPERATIONS = [
  {
    func: sum,
    sign: '+',
  },
  {
    func: diff,
    sign: '-',
  },
  {
    func: multiply,
    sign: '*',
  },
];

const DESCRIPTION = 'What is the result of the expression?';

const getGameData = () => {
  const first = getRandomNumber(1, 99);
  const second = getRandomNumber(1, 99);
  const operation = OPERATIONS[getRandomNumber(0, OPERATIONS.length)];

  const answer = operation.func(first, second);

  return [`${first} ${operation.sign} ${second}`, String(answer)];
};

const calcGame = () => runGame(DESCRIPTION, getGameData);

export default calcGame;
