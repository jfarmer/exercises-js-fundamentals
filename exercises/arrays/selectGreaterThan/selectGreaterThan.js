/**
 * Given an array of numbers and a treshold value, returns a new array
 * consisting of only those numbers strictly greater than the threshold.
 *
 * Return an empty array if no such numbers exist.
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for selecting
 * @returns {number[]} A new array consisting of all the numbers in input array
 *  strictly greater than the threshold
 */
function selectGreaterThan(array, threshold) {
  let finalArray = []

  for (number of array) {
    if (number > threshold) {
      finalArray.push(number)
    }
  }
  return finalArray
}

if (require.main === module) {
  console.log('Running sanity checks for selectGreaterThan:');

  console.log(selectGreaterThan([1, 2, 3, 4, 5], 2)); // => [3, 4, 5]
  console.log(selectGreaterThan([1, 2, 3, 4, 5], 17)); // => []
  console.log(selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)); // => [2, 2, 3, 4, 2];
  console.log(selectGreaterThan([10, 10, 10, -10, 15], 10)); // => [15]
  console.log(selectGreaterThan([10, 20, 30, 40], 100)); // => []

}

module.exports = selectGreaterThan;

