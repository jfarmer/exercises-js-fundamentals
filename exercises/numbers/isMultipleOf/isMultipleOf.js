/**
 * Given two integers, n and d, returns true if n is is a multiple of d and false otherwise.
 *
 * "n is a multiple of d" means that d divides n without remainder. Equivalently:
 *
 * - n = d*k for some integer k
 * - d is a divisor of n
 * - d is a factor of n
 * - n is a multiple of d
 *
 * @param {number} n - The number to check the factors of
 * @param {number} d - The potential factor
 * @returns {boolean} True if n is a multiple of d and false otherwise
 */
function isMultipleOf(n, d) {
  if (n%d === 0){
    return true;
  }
  else {
    return false;
  }
  
}

if (require.main === module) {
  /*
    Do you feel like these tests are comically long? The function we're testing is a single line,
    but the tests are many, many lines. Even if the tests are necssary, one could argue that
    their presence here makes it harder, not easier to understand what's going on.

    Think of 1-3 ways you might address this.
    1) We could check the fuction for n and d that are extremes, so really low and high values
    2) Check for values we already know the answer to, i.e. take 200/10, we know that should be true 
  */
  console.log('Running sanity checks for isMultipleOf:');

  console.log('Checking 0:');
  console.log(isMultipleOf(0, 0) === false);
  console.log(isMultipleOf(0, 1) === false);
  console.log(isMultipleOf(0, 2) === false);
  console.log(isMultipleOf(0, 13) === false);

  console.log('');
  console.log('Checking multiples of 2:');

  let multiplesOf2 = [
    -13 * 2,
    -2 * 2,
    -1 * 2,
    0 * 2,
    1 * 2,
    2 * 2,
    19 * 2,
    1234 * 2,
  ];
  for (let num of multiplesOf2) {
    console.log(isMultipleOf(num, 2) === true);
    console.log(isMultipleOf(num + 1, 2) === false);
  }

  console.log('');
  console.log('Checking multiples of 3:');

  let multiplesOf3 = [
    -13 * 3,
    -2 * 3,
    -1 * 3,
    0 * 3,
    1 * 3,
    2 * 3,
    19 * 3,
    1234 * 3,
  ];

  for (let num of multiplesOf3) {
    console.log(isMultipleOf(num, 3) === true);
    console.log(isMultipleOf(num + 1, 3) === false);
    console.log(isMultipleOf(num + 2, 3) === false);
  }

  console.log('');
  console.log('Checking multiples of 17:');
  let multiplesOf17 = [
    -13 * 17,
    -2 * 17,
    -1 * 17,
    0 * 17,
    1 * 17,
    19 * 17,
    1234 * 17,
  ];

  for (let num of multiplesOf17) {
    console.log(isMultipleOf(num, 17) === true);
    console.log(isMultipleOf(num + 8, 17) === false);
  }
}

module.exports = isMultipleOf;
