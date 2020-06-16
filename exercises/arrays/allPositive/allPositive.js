/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */

//  How do I make the User input the array?
function allPositive(array) {
  let result = true;
  for (let i = 0; i < array.length; i++){
    if (array[i] <= 0){
      result = false;
      break;
    }
  }
  console.log(result);
  }

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');
  allPositive([1, 2, -3, 4])
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = allPositive;
