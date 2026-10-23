const minimumNumber = 1;
const maximumNumber = 100;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * maximumNumber) + minimumNumber;
  const correctAnswer = isEven(number) ? "yes" : "no";

  return [number, correctAnswer];
};

export { gameDescription };
export default generateRound;
