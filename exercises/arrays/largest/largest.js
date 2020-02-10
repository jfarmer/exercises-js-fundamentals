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

  console.log(largest([1,2,3]));
  console.log(largest([3,2,1]));
  console.log(largest([1,3,2]));
   
  console.log(largest([-22, -11, -22]) === -11);
}

module.exports = largest;


/// so the way to  think about this problem is that the array[0] is the starting value.  
/// then that  the element is iterating through the  array 
/// what is still a lil confusing is why the return largestSoFar isn't array[0]??? what happens to global vs local variables etc? is it because we've defined largestSoFar within the for loop and that takes precedence?