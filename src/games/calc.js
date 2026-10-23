const minimumNumber = 1;
const maximumNumber = 100;
const operators = ["+", "-", "*"];

const getRandomNumber = () => Math.floor(Math.random() * maximumNumber) + minimumNumber;

const getRandomOperator = () => {
  const index = Math.floor(Math.random() * operators.length);

  return operators[index];
};

const calculate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, operator, secondNumber);

  return [question, correctAnswer];
};

export default generateRound;
