import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');
const sayHello = () => console.log(`Hello, ${getUserName()}!`);

export {sayHello};