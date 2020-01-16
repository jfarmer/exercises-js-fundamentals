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
  // This is your job. :)
  let len = string.length;
  //console.log(len);
  
  return string[0].toUpperCase()+string.slice(1,len);
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
  
  
  console.log(capitalize('hello')==='Hello');
  console.log(capitalize('fellow')==='fellow');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
