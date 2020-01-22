/**
 * @example
 * median([900, 10, 20]); // => 20 since 20 is the middle element
 * mean([-10, 20, 400, 10]); // => 15 since 10,20 are the middle elements
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The median of the numbers in the array
 */
function median(array) {
  
  for (number of array) {
    if (array.length % 2 === 0) {
      halfPoint = array.length / 2
      median = (array[halfPoint -1] + array[halfPoint]) / 2
      //has to be -1 because the way index works and starts at 0
    }
    else {
      halfPoint = array.length / 2
      halfPoint = (array.length - 1) / 2
      median = array[halfPoint]
      //console.log(halfPoint)
    }
  }
  return median
}

if (require.main === module) {
  console.log('Running sanity checks for median:');
  console.log(median([1, 2, 3, 4, 5]));
  console.log(median([1, 2, 3, 4]))
  
}

module.exports = median;

