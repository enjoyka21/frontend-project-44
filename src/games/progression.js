const minimumNumber = 1;
const maximumStartNumber = 100;
const maximumStep = 10;
const progressionLength = 10;

const gameDescription = "What number is missing in the progression?";

const getRandomNumber = (maximumNumber) =>
  Math.floor(Math.random() * maximumNumber) + minimumNumber;

const createProgression = (start, step) =>
  Array.from({ length: progressionLength }, (_, index) => start + index * step);

const generateRound = () => {
  const start = getRandomNumber(maximumStartNumber);
  const step = getRandomNumber(maximumStep);
  const progression = createProgression(start, step);
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const question = progression
    .map((number, index) => (index === hiddenIndex ? ".." : number))
    .join(" ");
  const correctAnswer = progression[hiddenIndex];

  return [question, correctAnswer];
};

export { gameDescription };
export default generateRound;
