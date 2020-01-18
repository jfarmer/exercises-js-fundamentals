/**
 * Given a non-negative integer as input, returns `true` if input is a power of `2` and `false` otherwise.
 *
 * A number is a power of `2` if it can be written as `2**k` for some positive integer `k`, where "`**`"
 * represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `81` is not a power of `2` since there's no integer `k` such that `81 === 2**k`.
 *
 * However, `81` _is_ a power of `3` since `81 === 3**4`.
 *
 * @example
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 *
 * @param {number} n - The number
 * @param {number} b - The base
 * @returns {boolean} True if the number is a power of the base, false otherwise.
 */
function isPowerOfTwo(num) {
  // Your code here
  let power = 2;
  let exp=0;
  let number = power**exp;
  while (number <= num){
 
  if(power**exp===num){
    return true;
  }
  else{
    number = power**exp
    exp++;
  }
  
    
  
 
}
return false;
}


if (require.main === module) {
  console.log('Running sanity checks for isPowerOfTwo:');

  console.log(isPowerOfTwo(8));
  console.log(isPowerOfTwo(32));
  

   console.log(isPowerOfTwo(49) === false);
   console.log(isPowerOfTwo(36) === false);
   console.log(isPowerOfTwo(64) === true);
}

module.exports = isPowerOfTwo;
