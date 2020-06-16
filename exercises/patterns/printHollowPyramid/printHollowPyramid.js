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
 * printHollowPyramid(2); // Prints the following:
 *  #
 * ###
 *
 * @example
 * printHollowPyramid(5); // Prints the following:
 *     #
 *    # #
 *   #   #
 *  #     #
 * #########
 *
 * @param {number} height - The height of the pyramid to print
 */
function printHollowPyramid(height) {
  for (let i = 0; i < height; i++) {
    //i is current height
    let widthhash= 2*(height-1)+1; //width of last line
    let currenthash = 2*i+1; //number of # in current line
    let emptyhash = (widthhash-currenthash)/2;
    if (i===0) {
      //if first line, only one #
      for (let j=0;j<emptyhash;j++) {
        helpers.print(' ');
      } 
      helpers.print('#');
      for (let j=0;j<emptyhash;j++) {
        helpers.print(' ');
      } 
    } else if (i===(height-1)) {
      //if last line, fill all
      for (let j=0;j<widthhash;j++) {
        helpers.print('#');
      } 
    } else {
      //if in between lines
      for (let j=0;j<emptyhash;j++) {
        helpers.print(' ');
      } 
      helpers.print('#');
      for (let j=0;j<(currenthash-2);j++) {
        helpers.print(' ');
      }
      helpers.print('#');
      for (let j=0;j<emptyhash;j++) {
        helpers.print(' ');
      } 
    }
    //start new line
    helpers.printNewLine();
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowPyramidPrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW PYRAMID of height ${height}:`);

  printHollowPyramid(height);
}

if (require.main === module) {
  hollowPyramidPrintTest(1);
  hollowPyramidPrintTest(2);
  hollowPyramidPrintTest(3);
  hollowPyramidPrintTest(6);
  hollowPyramidPrintTest(8);
}

module.exports = printHollowPyramid;
