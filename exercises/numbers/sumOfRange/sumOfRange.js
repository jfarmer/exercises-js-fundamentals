/**
 * Given two integers, returns the sum of all integers between those two integers, inclusive.
 *
 * For example:
 *
 * @example
 * sumOfRange(1, 5) // => 15 (i.e., 1 + 2 + 3 + 4 + 5)
 * sumOfRange(-3, 4) // => 4 (i.e., 3 + -2 + -1 + 0 + 1 + 2 + 3 + 4)
 *
 * @param {number} leftSummand - The left integer of the range to sum
 * @param {number} rightSummand - The right integer of the range of sum
 * @returns {boolean} The sum of every integer between the two input integers, inclusive
 */

function sumOfRange(leftSummand, rightSummand) {
  // This is your job. :)
  while (leftSummand < rightSummand) {
    return leftSummand + sumOfRange(leftSummand +1 , rightSummand)
  }
  return leftSummand
}

if (require.main === module) {
  console.log('Running sanity checks for sumOfRange:');

  // Your sanity checks go here
  console.log(sumOfRange(1,9)=== 45)
  console.log(sumOfRange(-5,3) === -9)
  console.log(sumOfRange(0,8)=== 36)
  console.log(sumOfRange(1,5) === 15)
  console.log(sumOfRange(-3,4)=== 4)
}

module.exports = sumOfRange;
