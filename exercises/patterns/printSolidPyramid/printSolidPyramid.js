/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a solid pyramid `height` characters tall
 * consisting of `#` characters.
 *
 *
 * Note, this PRINTS a pyramid, it does not RETURN a pyramid.
 *
 * @example
 * printSolidPyramid(2); // Prints the following:
 *  #
 * ###
 *
 * @example
 * printSolidPyramid(4); // Prints the following:
 *     #
 *    ###
 *   #####
 *  #######
 * #########
 *
 * @param {number} height - The height of the pyramid to print
 */
function printSolidPyramid(height) {
  /*
    Reflect: given `height`...
    1. How many lines to we want to print?
    2. How many spaces are start a given line, followed by how many # characters?

    Work through 3-4 examples by hand and try to notice a pattern.
  */
  for (let i = 0; i < height; i++) {
    let numSpaces = _____;
    let numChars = _____;

    helpers.printCountTimes(' ', numSpaces);
    helpers.printCountTimes('#', numChars);
    helpers.printNewLine();
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function solidPyramidPrintTest(height) {
  console.log('');
  console.log(`Printing a SOLID PYRAMID of height ${height}:`);

  printSolidPyramid(height);
}

if (require.main === module) {
  solidPyramidPrintTest(1);
  solidPyramidPrintTest(2);
  solidPyramidPrintTest(3);
  solidPyramidPrintTest(6);
  solidPyramidPrintTest(10);
}

module.exports = printSolidPyramid;
