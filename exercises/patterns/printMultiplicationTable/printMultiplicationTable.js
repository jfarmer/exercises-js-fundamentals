let helpers = require('../printHelpers');

/**
 * Given an integer `n`, print out an `n`-by-`n` times/multiplication table.
 *
 * Note, this PRINTS a table, it does not RETURN a table as a string.
 *
 * @example
 * multiplicationTable(2); // Prints the following:
 * 1 2
 * 2 4
 *
 * @example
 * multiplicationTable(5); // Prints the following:
 *  1  2  3  4  5
 *  2  4  6  8 10
 *  3  6  9 12 15
 *  4  8 12 16 20
 *  5 10 15 20 25
 *
 * @param {number} n - The size of the multiplication table to print
 */
function printMultiplicationTable(n) {
  for (let i=1;i<=n;i++) {
    for (let j=1;j<=n;j++) {
      helpers.print(i*j);
    }
    helpers.printNewLine();
  }
  helpers.printNewLine();
}

/**
 * For testing purposes, prints a diagram of the given height.
 */

function multiplicationTablePrintTest(n) {
  console.log('');
  console.log(`Printing a ${n}-by-${n} MULTIPLICATION TABLE:`);

  printMultiplicationTable(n);
}

if (require.main === module) {
  multiplicationTablePrintTest(1);
  multiplicationTablePrintTest(2);
  multiplicationTablePrintTest(5);
  multiplicationTablePrintTest(8);
}


module.exports = printMultiplicationTable;
