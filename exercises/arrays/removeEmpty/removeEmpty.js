/**
 * Given an array of strings, return a new array with all the elements
 * of the original array except null, undefined, and the empty string ''.
 *
 *
 * @param {string[]} array - An array of strings
 * @returns {string[]} A new array consisting of all the non-empty values in the
 *   input array.
 */
function removeEmpty(array) {
  let finalArray = []
  
  for (char of array) {
    if (char !== undefined && char !== '' && char !== null) {
      finalArray.push(char)
    }
  }
  return finalArray
}

if (require.main === module) {
  console.log('Running sanity checks for removeEmpty:');

  console.log(removeEmpty([null, '', ''])); // => []
  console.log(removeEmpty(['Jesse', undefined, 'Farmer'])); // => ['Jesse', 'Farmer']
  console.log(removeEmpty(['one', '', 'two', '', 'three'])); // => ['one', 'two', 'three']
}

module.exports = removeEmpty;

