let helpers = require('../printHelpers');

function printPlus(height) {
  // If height is not an odd integer, throw an error.
  if (!Number.isInteger(height) || height % 2 !== 1) {
    throw new Error(`height must be an odd integer, received: ${height}`);
  }

  for (let i = 0; i < height; i++) {
    if (i === Math.floor(height/2)) {
      helpers.printCountTimes('#', height);
    }
    else {
      let numSpaces = Math.floor(height / 2)
      helpers.printCountTimes(' ', numSpaces);
      helpers.printCountTimes('#', 1);
    }

    helpers.printNewLine();
  }
}

function plusPrintTest(height) {
  console.log('');
  console.log(`Printing a PLUS SYMBOL of height ${height}:`);

  printPlus(height);
}

if (require.main === module) {
  plusPrintTest(1);
  plusPrintTest(3);
  plusPrintTest(5);
  plusPrintTest(7);
  plusPrintTest(9);
}

module.exports = printPlus;
