/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a hollow square `height` characters tall
 * consisting of `#` characters for the border.
 *
 * Note, this PRINTS a square, it does not RETURN a square.
 *
 * @example
 * printHollowSquare(3); // Prints the following:
 * ###
 * # #
 * ###
 *
 * @example
 * printHollowSquare(4); // Prints the following:
 * ####
 * #  #
 * #  #
 * ####
 *
 * @param {number} height - The height of the square to print
 */
function printHollowSquare(height) {
  for (let i = 0; i < height; i++) {
    // This is your job. :)

    helpers.printNewLine();
  }
}
/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowSquarePrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW SQUARE of height ${height}:`);

  printHollowSquare(height);
}

if (require.main === module) {
  /*
    Sanity checking console output is challenging. Think about how you might do it.

    For now, we simply print out a few example inputs and verify by sight that they're
    what we expect.
  */

  hollowSquarePrintTest(1);
  hollowSquarePrintTest(2);
  hollowSquarePrintTest(4);
  hollowSquarePrintTest(6);
  hollowSquarePrintTest(10);
}

module.exports = printHollowSquare;
