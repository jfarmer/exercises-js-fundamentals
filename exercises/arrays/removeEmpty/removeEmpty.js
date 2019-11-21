/**
 * Given an array of strings, return a new array with all the elements
 * of the original array except null, undefined, and the empty string ''.
 *
 * @example
 * removeEmpty([null, '', '']); // => []
 * removeEmpty(['Jesse', undefined, 'Farmer']); // => ['Jesse', 'Farmer']
 * removeEmpty(['one', '', 'two', '', 'three']); // => ['one', 'two', 'three']
 *
 * @param {string[]} array - An array of strings
 * @returns {string[]} A new array consisting of all the non-empty values in the
 *   input array.
 */
function removeEmpty(array) {
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for removeEmpty:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = removeEmpty;
