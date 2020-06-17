/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a solid right triangle `height` characters tall
 * consisting of `#` characters.
 *
 * Note, this PRINTS a triangle, it does not RETURN a triangle.
 *
 * @example
 * printSolidRightTriangle(3); // Prints the following:
 * #
 * ##
 * ###
 *
 * @example
 * printSolidRightTriangle(4); // Prints the following:
 * #
 * ##
 * ###
 * ####
 *
 * @param {number} height - The height of the triangle to print
 */
function printSolidRightTriangle(height) {
  /*
    Reflect: given `height`...
    1. How many lines to we want to print?
    2. How many characters should be on each line?
  */
  for (let i = 0; i < height; i++) {
    // The _____ is meant to be "fill in the blank"

    let numChars = _____;

    helpers.printCountTimes('#', numChars);
    helpers.printNewLine();
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function solidRightTrianglePrintTest(height) {
  console.log('');
  console.log(`Printing a SOLID RIGHT TRIANGLE of height ${height}:`);

  printSolidRightTriangle(height);
}

if (require.main === module) {
  /*
    Sanity checking console output is challenging. Think about how you might do it.

    For now, we simply print out a few example inputs and verify by sight that they're
    what we expect.
  */

  solidRightTrianglePrintTest(1);
  solidRightTrianglePrintTest(2);
  solidRightTrianglePrintTest(4);
  solidRightTrianglePrintTest(6);
  solidRightTrianglePrintTest(10);
}

module.exports = printSolidRightTriangle;
