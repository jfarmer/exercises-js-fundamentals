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
//  * isPowerOf(2) // => true
//  * isPowerOf(3) // => false
//  * isPowerOf(4) // => true
//  * isPowerOf(2**20) // => true
//  * isPowerOf(2**20 + 1) // => false
 *
//  * @param {number}- The input number
//  * @returns {boolean} True if input is a power of 2 and false otherwise.
 */
function isPowerOf(num,power) {
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
  console.log('Running sanity checks for isPowerOf:');

  // Is 0 a power of two? Is 1?
  console.log(isPowerOf(8,3));
  console.log(isPowerOf(81,3));
  

   console.log(isPowerOf(49,7) === true);
   console.log(isPowerOf(36,6) === true);
   console.log(isPowerOf(35,6) === false);
}

module.exports = isPowerOf;

