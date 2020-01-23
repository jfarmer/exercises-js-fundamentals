/**
 * Given an array of numbers and a treshold value, returns a new array
 * consisting of only those numbers strictly less than the threshold.
 *
 * Return an empty array if no such numbers exist.
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for selecting
 * @returns {number[]} A new array consisting of all the numbers in input array
 *  strictly less than the threshold
 */
function selectLessThan(array, threshold) {
  let finalArray = []

  for (number of array) {
    if (number < threshold) {
      finalArray.push(number)
    }
  }
  return finalArray
}

if (require.main === module) {
  console.log('Running sanity checks for selectLessThan:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectLessThan;
