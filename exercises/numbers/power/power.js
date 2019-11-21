/**
 * Given a base and an positive integer exponent, returns the base raised to the power of the exopnent.
 *
 * @example
 *   power(2, 3) // => 8 (i.e., 2 * 2 * 2)
 *   power(-2, 3) // => -4 (i.e., -2 * -2 * -2)
 *   power(5, 6) // => 15625 (i.e., 5 * 5 * 5 * 5 * 5 * 6)
 *
 * @param {number} base The base
 * @param {number} exponent The exponent (a positive integer)
 * @returns {number} The base raised to the power of the exopnent
 */
function power(base, exponent) {
  /*
    Your code goes here.

    Remember, exponent is a _positive integer_.

    JavaScript has a built-in Math.pow function; don't use it!
    Write your own version. Remember, exponent is guaranteed to be a positive integer.

    That means you don't have to deal with, e.g., power(2, 1.5).
  */
}

if (require.main === module) {
  console.log('Running sanity checks for power:');

  console.log(power(1, 1) === 1);
  console.log(power(1, 2) === 1);

  console.log(power(-1, 1) === -1);
  console.log(power(-1, 2) === 1);
  console.log(power(-1, 3) === -1);

  // Your sanity checks go here
  // What should happen if base is 0? If exponent is 0?
}

module.exports = power;
