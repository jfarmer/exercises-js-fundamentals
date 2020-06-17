/**
 * Returns true if the given number is even false otherwise.
 *
 * An integer is odd if the remainder is 1 after dividing
 * by 2. Equivalently, an integer is odd if it can be written
 * as 2*k + 1 for some integer k.
 *
 * If an integer is not odd we call it "even".
 *
 * Even: -10, -12, -104, 0, 16, 18, 2
 * Odd: -11, -13, -103, -1, 1, 17, 19, 3
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function isOdd(num) {
  // Hint: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
  // The _____ is meant to be "fill in the blank"
  // Look at isZero and compare; what makes sense here?

  return _____;
}

if (require.main === module) {
  let oddInputs = [1, 19, 99, 767];

  console.log('Running sanity checks for isOdd');

  console.log(isOdd(0) === false);

  // These should all be odd
  for (let num of oddInputs) {
    console.log(isOdd(num) === true);
  }

  // If num is odd then num + 1 is even
  for (let num of oddInputs) {
    console.log(isOdd(num + 1) === false);
  }
}

module.exports = isOdd;
