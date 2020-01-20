/**
 * Given an array and a value, returns the index of the first occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the first occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function firstIndexOf(haystack, needle) {
  for (let object of haystack) {
    if (object === needle) {
      return haystack.indexOf(object);
    }
  }
    return -1
}

if (require.main === module) {
  console.log('Running sanity checks for firstIndexOf:');
  console.log(firstIndexOf([10, 20, 30, 20], 20)); // => 1
  console.log(firstIndexOf([10, 20, 30, 20], 17)); // => -1
  console.log(firstIndexOf(['giraffe', 'giraffe', 'banana'], 'giraffe')); // => 0
  console.log(firstIndexOf(['giraffe', 'giraffe', 'banana'], 'banana')); // => 2
}

module.exports = firstIndexOf;

