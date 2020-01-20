/**
 * Given an array and a value, return true if the value is found in the array
 * and false otherwise.
 *
 * The array doesn't need to contain a single type of data.
 *
 * When searching an array for something, it's common to refer to the array as
 * the "haystack" and the thing being searched for as the "needle", as in, "Looking
 * for a needle in a haystack."
 *
 * @example
 * includes([1, 2, 30, -10], 480); // => false
 * includes([1, 2, 30, -10], 30); // => true
 * includes(['waffle', 'giraffe', 'banana'], 'giraffe'); // => true
 * includes(['waffle', 'giraffe', 'banana'], 'lemons'); // => false
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} True if the array contains the value, false otherwise.
 */
function includes(haystack, needle) {
  for (hay of haystack) {
    if (hay === needle) {
      return true;
    }
    
  }
  return false
}

if (require.main === module) {
  console.log('Running sanity checks for includes:');
  console.log(includes([1, 2, 30, -10], 480)); // => false
  console.log(includes([1, 2, 30, -10], 30)); // => true
  console.log(includes(['waffle', 'giraffe', 'banana'], 'giraffe')); // => true
  console.log(includes(['waffle', 'giraffe', 'banana'], 'lemons')); // => false
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = includes;
