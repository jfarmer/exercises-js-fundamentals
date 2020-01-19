/**
 * Given an array of integers, returns the count of odd integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Odd_number
 *
 * @example
 * countOdds([1, 2, 3, 4, 5, 19]); // => 4
 * countOdds([10, 10, 10]); // => 0
 * countOdds([1, 1, 1, 2]); // => 3
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countOdds(array) {
  let odds = 0;
  //when I tried not to define this by saying "let odds;", it didn't work
  //how do I know when i NEED to define and when not?

  for (let i of array) {
    if (i % 2 !== 0) {
      odds += 1;
    }
  }
  return odds
}

if (require.main === module) {
  console.log('Running sanity checks for countOdds:');
}
 console.log(countOdds([1, 2, 3, 4, 5, 19])); // => 4
 console.log(countOdds([10, 10, 10])); // => 0
 console.log(countOdds([1, 1, 1, 2])); // => 3

module.exports = countOdds;

