/**
 * Given an array, returns the largest element in the array.
 *
 * Assume the array contains only numbers.
 *
 * @param {number[]} array - The input array
 * @returns {number} The largest element in the array
 */
function largest(array) {
  let largestSoFar = array[0];

  for (let element of array) {
    if (element > largestSoFar) {
      largestSoFar = element;
    }
  }

  return largestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for largest:');

  console.log(largest([1, 2, 3]) === 3);
  console.log(largest([0, -100, 50, -200]) === 50);
  console.log(largest([-200, -400, -100, -300]) === -100);
  console.log(largest([0]) === 0);
  console.log(largest([1]) === 1);
  console.log(largest([-1]) === -1);
  console.log(largest([11, 11, 11]) === 11);
  console.log(largest([-22, -11, -22]) === -11);
}

module.exports = largest;
