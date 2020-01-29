/**
 * Returns true if the given positive integer is prime and false otherwise.
 *
 * A positive integer is prime if it its only factors are 1 and itself.
 *
 * See https://en.wikipedia.org/wiki/Prime_number
 *
 * Primes: 2, 3, 5, 7, 11, 13, 17, ...
 *
 * @param {number} num - The positive integer whose primality we want to check
 * @returns {boolean} True if num is prime and false otherwise
 */
function isPrime(n) {
  if (n % 2 === 0 && n !== 2)
    { return false; }
      
  for(let d = 3; d < n; d += 2)
    {if (n % d === 0)
        { return false;}
    }
    return true;
}

if(require.main === module) {
  console.log('Running sanity checks for isPrime:');

  console.log(isPrime(5));

  
  console.log(isPrime(2) === true);
  console.log(isPrime(4) === false);
  console.log(isPrime(5) === true);
  console.log(isPrime(7) === true);
}

module.exports = isPrime;
