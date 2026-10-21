import readlineSync from "readline-sync";
import greet from "./cli.js";

const roundsCount = 3;

const playGame = (game) => {
  const name = greet();

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = game();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
