let process = require('process');

/**
 * Prints a string to the console without a new line.
 *
 * @param {string} str - The string to print
 */
function print(str) {
  process.stdout.write(str);
}

/**
 * Given a string `str` and a `count`, prints `str` to the console `count` times without
 * a new line.
 *
 * @example
 * let helpers = require('../printHelpers');
 * // This prints '+' 4 times followed by a new line
 * helpers.printCountTimes('+', 4);
 * helpers.printNewLine();
 *
 * @param {string} str - The string to print
 * @param {number} count - The number of times to print the string
 */
function printCountTimes(str, count) {
  for (let i = 0; i < count; i++) {
    print(str);
  }
}

/**
 * Prints a newline character.
 */
function printNewLine() {
  print('\n');
}

module.exports = {
  print: print,
  printCountTimes: printCountTimes,
  printNewLine: printNewLine,
};
