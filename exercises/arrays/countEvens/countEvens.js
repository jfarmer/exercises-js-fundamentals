/**
 * Given an array of integers, returns the count of even integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Even_number
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countEvens(array) {
  let evenCount = 0;
  
  for (let number of array) {
    if (number % 2 === 0) {
      evenCount += 1
    }
  }
  return evenCount
}

if (require.main === module) {
  console.log('Running sanity checks for countEvens:');

  console.log(countEvens([1, 2, 3, 4, 5]) === 2); // => 2
  console.log(countEvens([10, 10, 10]) === 3); // => 3
  console.log(countEvens([1, 1, 1, 2]) === 1); // => 1
}

module.exports = countEvens;

