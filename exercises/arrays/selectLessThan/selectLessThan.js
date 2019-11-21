/**
 * Given an array of numbers and a treshold value, returns a new array
 * consisting of only those numbers strictly less than the threshold.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectLessThan([1, 2, 3, 4, 5], 2); // => [1]
 * selectLessThan([1, 2, 3, 4, 5], 17); // => [1, 2, 3, 4, 5]
 * selectLessThan([-20, 2, 1, 0, 1, 2, 1, 2], 1); // => [-20, 0];
 * selectLessThan([10, 4, 10, -10, 15], 10); // => [4, -10]
 * selectLessThan([10, 20, 30, 40], -100); // => []
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for selecting
 * @returns {number[]} A new array consisting of all the numbers in input array
 *  strictly less than the threshold
 */
function selectLessThan(array, threshold) {
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for selectLessThan:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectLessThan;
