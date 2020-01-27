let helpers = require('../printHelpers');

function printInvertedSolidRightTriangle(height) {

  for (let i = height; i >= 0; i-= 1) {
    let numChars = i;

    helpers.printCountTimes('#', numChars);
    helpers.printNewLine();
  }
}

function invertedSolidRightTriangleTest(height) {
  console.log('');
  console.log(`Printing a INVERTED SOLID RIGHT TRIANGLE of height ${height}:`);

  printInvertedSolidRightTriangle(height);
}

if (require.main === module) {
  invertedSolidRightTriangleTest(1);
  invertedSolidRightTriangleTest(2);
  invertedSolidRightTriangleTest(4);
  invertedSolidRightTriangleTest(6);
  invertedSolidRightTriangleTest(10);
}

module.exports = printInvertedSolidRightTriangle;
