/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a solid square `height` characters tall
 * consisting of `#` characters.
 *
 * Note, this PRINTS a square, it does not RETURN a square.
 *
 * @example
 * printSolidSquare(3); // Prints the following:
 * ###
 * ###
 * ###
 *
 * @example
 * printSolidSquare(4); // Prints the following:
 * ####
 * ####
 * ####
 * ####
 *
 * @param {number} height - The height of the square to print
 */
function printSolidSquare(height) {
  /*
    Reflect: given `height`...
    1. How many lines to we want to print?
    2. How many characters should be on each line?
  */
  for (let i = 0; i < height; i++) {
    let numChars = height;

    helpers.printCountTimes('#', numChars);
    helpers.printNewLine();
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function solidSquarePrintTest(height) {
  console.log('');
  console.log(`Printing a SOLID SQUARE of height ${height}:`);

  printSolidSquare(height);
}

if (require.main === module) {
  /*
    Sanity checking console output is challenging. Think about how you might do it.

    For now, we simply print out a few example inputs and verify by sight that they're
    what we expect.
  */

  solidSquarePrintTest(1);
  solidSquarePrintTest(2);
  solidSquarePrintTest(4);
  solidSquarePrintTest(6);
  solidSquarePrintTest(10);
}

module.exports = printSolidSquare;
