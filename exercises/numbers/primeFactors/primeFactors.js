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
const Prime = [];
const PrimeFactor = [];
function primeFactors(num) {
  function isPrime(num) 
  {
    let i = 1;
    while(i < num)
    {i++; 
      if(num === 2)
      {Prime.push(num)}
      else if(num%i === 0)
      {return false}
      else {Prime.push(num) }
      }   
  }

  let j = 1;
  while(j < num)
  {j++;
    let factor = num/j;
    if(Prime.indexOf(factor) > -1)
    {PrimeFactor.push(factor)
    }
  }
  return PrimeFactor; 
  }
 

if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');
  console.log(primeFactors(14) === [2,7]);
  console.log(primeFactors(14) === [2,7]);
  console.log(primeFactors(917329) === [7, 7, 97, 193]);
}

module.exports = primeFactors;