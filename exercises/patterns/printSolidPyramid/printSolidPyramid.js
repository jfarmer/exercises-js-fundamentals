let helpers = require('../printHelpers');

function printSolidPyramid(height) {

 let counter = 1
  
 for (let i = 1; i <= height; i++) {
    let numSpaces = height - i;
    let numChars = counter 
    counter += 2


    helpers.printCountTimes(' ', numSpaces);
    helpers.printCountTimes('#', numChars);
    helpers.printNewLine();
  }
}

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
