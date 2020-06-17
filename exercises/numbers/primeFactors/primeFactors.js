/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */
function primeFactors(num) {
  /*pranjal's code
  for (l = 0; l <= num; l++) {
    
    if (l <= 1 ) {
      return false
    }
    for (i = 2; i < l; i++) {
      if (num%i === 0){
        return false }
      
    }
    return true
  }
  */
  let primearray =[];
    for (let i=2;i<=num;i++) {
      while (num%i === 0) {
        if(ifPrime(i))  {
          primearray.push(i);
          num = num/i;
        } 
      }
    }
  //if num can be only divided by 1 and itself, add to the array
  return primearray;
}

function ifPrime(num) {
  if (num==1) {
    return false;
  }
  for (let i=2;i<num;i++) {
    if (num%i === 0){
      return false }
  }
  return true;
}

if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');
  console.log(primeFactors(2*3*5*7*13));
  console.log(primeFactors(2*2*2*2*2*5));
}

module.exports = primeFactors;
