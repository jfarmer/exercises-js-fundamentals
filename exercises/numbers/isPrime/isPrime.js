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
function isPrime(num) {
  
  if (num === 1 || num === 2) {
    return true
  }
  if (num % 2 === 0) {
    return false
  }

  for (eachNumber = 3; eachNumber < num; eachNumber += 2); { 
   //console.log(eachNumber)
   if (num % eachNumber === 0)
     return false
   }
   return true
  } 

if (require.main === module) {
  console.log('Running sanity checks for isPrime:');

  console.log(isPrime(1) === true);
  console.log(isPrime(2) === true);
  console.log(isPrime(4) === false);
  console.log(isPrime(412) === false);
  console.log(isPrime(16) === false);
  console.log(isPrime(40447937) === false);
}

module.exports = isPrime;

