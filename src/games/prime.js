const minimumNumber = 1;
const maximumNumber = 100;
const smallestPrimeNumber = 2;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < smallestPrimeNumber) {
    return false;
  }

  for (let divisor = smallestPrimeNumber; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * maximumNumber) + minimumNumber;
  const correctAnswer = isPrime(number) ? "yes" : "no";

  return [number, correctAnswer];
};

export { gameDescription };
export default generateRound;
