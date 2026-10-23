#!/usr/bin/env node

import playGame from "../src/index.js";
import generateRound from "../src/games/calc.js";

playGame(generateRound);
