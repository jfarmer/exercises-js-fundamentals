/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  let largestStringSoFar = ' ';
  
  if (array.length === 0) {
    return undefined }
  
  for (string of array) {
    if (string.length > largestStringSoFar.length) {
      largestStringSoFar = string;
    }
  }
  return largestStringSoFar
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(['hey', 'hello', 'hithere']) === 'hithere')
}

module.exports = longest;

