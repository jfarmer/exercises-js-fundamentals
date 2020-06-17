/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function anyPositive(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 0) {
      return true;
    }
  }
  return false;
  // This is your job. :)
}

var base_array = [-1, -12, -33, -2314]
var ashwin = [-123,21312,43241]
var anusha = [23,4,5,5]
var work = [0,2,55,23,45,234,56,23,56]
var zeros = [0,0,0,0,0,0,]
var negatives = [-1,-4,-5,-10]
if (require.main === module) {
  console.log('Running sanity checks for anyPositive:');


  var val = anyPositive(base_array) ;
  var val2 = anyPositive(ashwin); 
  var val3 = anyPositive(anusha);
  var val4 = anyPositive(work);
  var val5 = anyPositive (zeros);
  var val6 = anyPositive (negatives);


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = anyPositive;
