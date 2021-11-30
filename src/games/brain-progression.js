import runGame from '../index.js';
import { getRandomNumber } from '../common.js';

const getProgression = () => {
  const progLength = getRandomNumber(5, 11);
  const start = getRandomNumber(0, 25);
  const step = getRandomNumber(0, 10);

  return Array.from({ length: progLength }, (item, idx) => start + idx * step);
};

const DESCRIPTION = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = getProgression();
  const hiddenIndex = getRandomNumber(0, progression.length);

  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), String(answer)];
};

const progressionGame = () => runGame(DESCRIPTION, getGameData);

export default progressionGame;
