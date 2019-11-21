/**
 * Given an array and a value, returns the index of the first occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * firstIndexOf([10, 20, 30, 20], 20); // => 1
 * firstIndexOf([10, 20, 30, 20], 17); // => -1
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 0
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the first occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function firstIndexOf(haystack, needle) {
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for firstIndexOf:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = firstIndexOf;
