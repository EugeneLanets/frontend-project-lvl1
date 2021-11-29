import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getAnswer = (question) => readlineSync.question(question);

export { getRandomNumber, getAnswer };
