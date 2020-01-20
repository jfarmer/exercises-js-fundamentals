/**
 * Given two non-negative integers, `n` and `b`, return `true` of `n` is a power of `b`
 * and `false` otherwise.
 *
 * A number is a `n` power of `b` if it can be written as `b**k` for some positive integer `k`,
 * where "`**`" represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `9` is not a power of `2` since there's no integer `k` such that `9 === 2**k`.
 *
 * @example
 * isPowerOf(2) // => true
 * isPowerOf(3) // => false
 * isPowerOf(4) // => true
 * isPowerOf(2**20) // => true
 * isPowerOf(2**20 + 1) // => false
 *
 * @param {number} num - The input number
 * @returns {boolean} True if input is a power of 2 and false otherwise.
 */
function isPowerOf(n, b) {
let i = 1;
while(i<n)
{
if(n = b**i)
  {return true}
else
  i = i + 1;
}

if(n === 0)
{return false}
else if(n === 1)
{return false}
else if(n === b)
{return true}
else {return false}
}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOf:');

  // Is 0 a power of two? Is 1?
  console.log(isPowerOf(0,2) === false);
  console.log(isPowerOf(1,2) === false);

  console.log(isPowerOf(8,2) === true);
  console.log(isPowerOf(9,3) === true);
  console.log(isPowerOf(9,4) === true);
  console.log(isPowerOf(144,12) === true);
}

module.exports = isPowerOf;
