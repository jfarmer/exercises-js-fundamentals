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
 
 my logic
 1/ 
 */

function capitalize(num) {  
  let someString = num;
  let finalWord = someString.slice(0,1).toUpperCase() + someString.slice(1);
  return finalWord;
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
  console.log(capitalize('hello'), capitalize('hello') === 'Hello');
  console.log(capitalize('1234'), capitalize('1234') === '1234');
  console.log(capitalize('hOwDy'), capitalize('hOwDy') === 'HOwDy');
  
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;
