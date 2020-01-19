/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  let largest = 0;
  let largestString;

  for (string of array) {
    if (string.length > largest) {
      largest = string.length //im asking for the length and i just made the variable a word
      largestString = string
    }
  }
  return largestString
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(['hey', 'hello', 'hithere']))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;

