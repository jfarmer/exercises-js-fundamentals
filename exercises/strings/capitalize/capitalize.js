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
  // This is your job. :)
  return num[0].toUpperCase() + num.slice(1)
  
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(capitalize("hello"))
  console.log(capitalize("yay"))
  console.log(capitalize("this works!"))

}

module.exports = capitalize;
