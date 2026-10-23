#!/usr/bin/env node

import playGame from "../src/index.js";
import generateRound, { gameDescription } from "../src/games/gcd.js";

playGame(generateRound, gameDescription);
