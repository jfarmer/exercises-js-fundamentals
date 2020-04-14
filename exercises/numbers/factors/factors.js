/**
 * Given a positive integer, return an array consisting of all its factors
 * arranged from smallest to largest.
 *
 * @example
 * factors(2); // => [1, 2]
 * factors(4); // => [1, 2, 4]
 * factors(12); // => [1, 2, 3, 4, 6, 12]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the factors of the given integer
 */
function factors(num) {
  let results = [];

  for (let i = 1; i <= num; i++) {
    // Your code goes here. :)
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  }
  return results;
}

if (require.main === module) {
  console.log('Running sanity checks for factors:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = factors;
