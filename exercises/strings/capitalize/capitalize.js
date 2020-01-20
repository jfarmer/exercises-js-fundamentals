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

function capitalize(word) {

    return word.charAt(0).toUpperCase() + word.slice(1);
}


if (require.main === module) {
  console.log('Running sanity checks for capitalize:'); 
  console.log(capitalize('world') == 'World');
  console.log(capitalize('dog') == 'Dog');
  console.log(capitalize('oops') == 'Oops');
  console.log(capitalize('w') == 'W');
}

module.exports = capitalize;
