/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */

/**
 * arian's thoughts
 * 1. return a value for a number in an array
 * 2. ensure that you can add 2 numbers consistenly
 * 3. ensure that you return the correct final answer through sanity checks
 * 
 * 
 */

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i ++) {
    let totalSum = sum + array[i]; 
    console.log (totalSum);  
} 
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([1,2,3]));
  console.log(sum([1,2,3])=== 6);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
