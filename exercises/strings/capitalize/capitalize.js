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

function capitalize(string) {
  string1 = string.slice(0,1);
  string2 = string1.toUpperCase();
  string3 = string.slice(1);
  string4 = string2 + string3;
  return string4
}

if (require.main === module) {
  console.log(capitalize('Running sanity checks for capitalize:'));
  console.log(capitalize('on my way'));
  console.log(capitalize('running now'));
  console.log(capitalize('string'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
