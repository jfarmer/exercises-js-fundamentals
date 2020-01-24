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
  // take the string
  //find the ascii codes
  //find where they need to be + what number??
  let finalString = '';
  let newAscii = 0;
  
  for (let element of num) {
    if (element.charCodeAt(num) >= 97 && element.charCodeAt(num) <= 122) {
      newAscii = Number(element.charCodeAt(num)) - 32;
      finalString = finalString + String.fromCharCode(newAscii);
    }
    else {
      finalString = finalString + element
    }
  }
  return finalString
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
  console.log(capitalize('I am listening to SZA') === 'I AM LISTENING TO SZA')
  console.log(capitalize('WORDS') === 'WORDS')
  console.log(capitalize('lowercase string') === 'LOWERCASE STRING')
}

module.exports = capitalize;

