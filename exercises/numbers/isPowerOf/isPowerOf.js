/**
 * Given two non-negative integers, `num` and `base`, return `true` of `num`
 * is a power of `base` and `false` otherwise.
 *
 * A number is a `num` power of `base` if it can be written as `base**k` for
 * some non-negative integer `k`, where "`**`" represents the exponentiation
 * operator.
 *
 * For example, `8` is a power of `2` since `8` equals `2 * 2 * 2 === 2**3`.
 * Conversely, `81` is not a power of `2` since there's no integer `k` such that
 * `81 === 2**k`.
 *
 * However, `81` _is_ a power of `3` since `81 === 3**4`.
 *
 * @example
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 *
 * @param {number} num - The input number
 * @param {number} base - The base
 * @returns {boolean} True if `num` is a power of `base` and false otherwise.
 */
function isPowerOf(num, base) {
  // Your code here
  // Remember, you can assume that num is a positive integer.
}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOf:');

  // Is 0 a power of two? Is 1?
  // console.log(isPowerOf(0, 2) === _____);
  // console.log(isPowerOf(1, 2) === _____);
  // console.log(isPowerOf(1, 3) === _____);

  console.log(isPowerOf(2 ** 4, 2) === true);
  console.log(isPowerOf(2 ** 4 + 1, 2) === false);
  console.log(isPowerOf(3 ** 5, 3) === true);
  console.log(isPowerOf(3 ** 5 + 1, 3) === false);

  // Add your own sanity checks.
}

module.exports = isPowerOf;
