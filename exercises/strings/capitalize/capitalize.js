/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(num) {
  return string = num,
  string.charAt(0).toUpperCase() + string.slice(1,7);
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  console.log(capitalize('tindall'));
}

module.exports = capitalize;
