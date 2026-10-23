#!/usr/bin/env node

import playGame from "../src/index.js";
import generateRound, { gameDescription } from "../src/games/progression.js";

playGame(generateRound, gameDescription);
