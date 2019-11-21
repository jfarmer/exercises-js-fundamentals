/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a hollow right triangle `height` characters tall
 * consisting of `#` characters.
 *
 * Note, this PRINTS a triangle, it does not RETURN a triangle.
 *
 * @example
 * printHollowRightTriangle(2); // Prints the following:
 * #
 * ##
 *
 * @example
 * printHollowRightTriangle(3); // Prints the following:
 * #
 * ##
 * ###
 *
 * @example
 * printHollowRightTriangle(6); // Prints the following:
 * #
 * ##
 * # #
 * #  #
 * #   #
 * ######
 *
 * @param {number} height - The height of the triangle to print
 */
function printHollowRightTriangle(height) {
  for (let i = 0; i < height; i++) {
    /*
      This is your job. :)

      Play with iterating from 1, 2, ..., height instead of 0, 1, 2, ..., height-1.
      Depending on your approach, it might simplify the logic.
    */

    helpers.printNewLine();
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowRightTrianglePrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW RIGHT TRIANGLE of height ${height}:`);

  printHollowRightTriangle(height);
}

if (require.main === module) {
  hollowRightTrianglePrintTest(1);
  hollowRightTrianglePrintTest(2);
  hollowRightTrianglePrintTest(4);
  hollowRightTrianglePrintTest(6);
  hollowRightTrianglePrintTest(10);
}

module.exports = printHollowRightTriangle;
