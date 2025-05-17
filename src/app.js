'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question(
  'Guess randomly generates a number of 4 different digits? ',
  (userInput) => {
    const numberToGuess = generateRandomNumber();

    if (checkIsValidUserInput(userInput)) {
      // eslint-disable-next-line no-console
      console.log(getBullsAndCows(userInput, numberToGuess));
    } else {
      throw new Error('Invali input');
    }
    terminal.close();
  },
);
