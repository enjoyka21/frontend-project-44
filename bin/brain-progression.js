#!/usr/bin/env node

import playGame from "../src/index.js";

const progressionLength = 10;

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const createProgression = (start, step) =>
  Array.from({ length: progressionLength }, (_, index) => start + index * step);

const generateRound = () => {
  const start = getRandomNumber(100);
  const step = getRandomNumber(10);
  const progression = createProgression(start, step);
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const question = progression
    .map((number, index) => (index === hiddenIndex ? ".." : number))
    .join(" ");
  const correctAnswer = progression[hiddenIndex];

  return [question, correctAnswer];
};

const playProgressionGame = () =>
  playGame(generateRound, "What number is missing in the progression?");

playProgressionGame();
