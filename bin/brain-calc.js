#!/usr/bin/env node

import playGame from "../src/index.js";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
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

const playCalcGame = () => playGame(generateRound);

playCalcGame();
