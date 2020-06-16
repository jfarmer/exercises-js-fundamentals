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
function allPositive(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] <= 0) {
      return false;
    }
  }
  return true;

  //if (array[0] > 0) {
  //  return true;
  //}
  //else {
  //  return false;
  //}
  // return array >= 1;
  // This is your job. :)
}


var base_array = [1, 12, -33, 2314]
var ashwin = [-123,21312,43241]
var anusha = [23,4,5,5]
var work = [0,2,55,23,45,234,56,23,56]
if (require.main === module) {
  console.log('Running sanity checks for allPositive:');

  var val = allPositive(base_array);
  var val2 = allPositive(ashwin); 
  var val3 = allPositive(anusha);
  var val4 = allPositive(work)
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = allPositive;