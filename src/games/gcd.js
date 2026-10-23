const minimumNumber = 1;
const maximumNumber = 100;

const gameDescription = "Find the greatest common divisor of given numbers.";

const getRandomNumber = () => Math.floor(Math.random() * maximumNumber) + minimumNumber;

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;

  while (second !== 0) {
    const remainder = first % second;
    first = second;
    second = remainder;
  }

  return first;
};

const generateRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);

  return [question, correctAnswer];
};

export { gameDescription };
export default generateRound;
