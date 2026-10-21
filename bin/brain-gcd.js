#!/usr/bin/env node

import playGame from "../src/index.js";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

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

const playGcdGame = () =>
  playGame(generateRound, "Find the greatest common divisor of given numbers.");

playGcdGame();
