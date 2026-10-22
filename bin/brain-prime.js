#!/usr/bin/env node

import playGame from "../src/index.js";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomNumber();
  const question = number;
  const correctAnswer = isPrime(number) ? "yes" : "no";

  return [question, correctAnswer];
};

const playPrimeGame = () =>
  playGame(generateRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');

playPrimeGame();
