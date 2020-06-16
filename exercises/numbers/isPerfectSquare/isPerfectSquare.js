/**
 * Determine whether the given integer is a perfect square.
 *
 * An integer `n` is a perfect square if there is some other integer `k`
 * such that `k * k === n`. That is, if the square root of `n` is also an
 * integer.
 *
 * Warning: If you use Math.sqrt, you will get incorrect answers. Try to
 * find another way.
 *
 * @example
 * isPerfectSquare(-1); // => false (no integer squared can be negative)
 * isPerfectSquare(0); // => true
 * isPerfectSquare(1); // => true
 * isPerfectSquare(2); // => false
 * isPerfectSquare(9); // => true (since 3*3 is 9)
 *
 * @param {number} num - An integer
 * @returns {boolean} True if `num` is a perfect square and false otherwise.
 */

function isPerfectSauare(num) {
  // A negative number can't be a perfect square, so immediately return false.
  var hasSquare = false
  if (num <= 0) {
    return false;
  }
  for (let i = 0; i <= num/2; i++) {
    if (i**2 === num) {
      hasSquare = true
    }
  }
  return hasSquare
  // The rest is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for isPerfectSquare:');
  console.log(isPerfectSauare(4) === true)
  console.log(isPerfectSauare(9) === true)
  console.log(isPerfectSauare(7) === false)
  console.log(isPerfectSauare(49) === true)
  console.log(isPerfectSauare(0) === false)
  // Your sanity checks go here
}

module.exports = isPerfectSauare;
