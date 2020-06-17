/**
 * Returns true if the given number is positive (greater than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is positive and false otherwise
 */
function isPositive(num) {
  // The _____ is meant to be "fill in the blank"
  // Look at isZero and compare; what makes sense here?

  return _____;
}

if (require.main === module) {
  console.log('Running sanity checks for isPositive:');

  console.log(isPositive(0) === false);
  console.log(isPositive(1) === true);
  console.log(isPositive(-1) === false);
  console.log(isPositive(-100.201) === false);
}

module.exports = isPositive;
