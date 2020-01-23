/**
 * Given an array of numbers, returns a new array consisting of every
 * number in the input array strictly greater than the mean.
 *
 * Return an empty array if no such numbers exist.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all numbers in the input array
 *   greater than the mean.
 */
function selectAboveMean(array) {
  let finalArray = [];
  let meanCount = 0;
  let meanNumber = 0;
  
  for (number of array) {
    meanCount += number
  }
  meanNumber = meanCount / array.length
  
  for (number of array) {
    if (number > meanNumber) {
      finalArray.push(number)
    }
  }
  return finalArray
}

if (require.main === module) {
  console.log('Running sanity checks for selectAboveMean:');

  console.log(selectAboveMean([1, 1, 1])); // => []
  console.log(selectAboveMean([-10, -10, 0, 10])); // => [0, 10]
  console.log(selectAboveMean([1, 2, 3, 4, 5])); // => [4, 5]
  console.log(selectAboveMean([100, 0, 100, 200, 100, 0])); // => [100, 100, 200, 100]
}

module.exports = selectAboveMean;
