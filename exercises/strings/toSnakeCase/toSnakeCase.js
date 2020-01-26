/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  let finalString = ''
  
  for (character of string) {  
    let newAscii = character.charCodeAt(string)
    //console.log('here we are: ', ' '.charCodeAt())
      if (character.charCodeAt(string) >= 65 && character.charCodeAt(string) <= 90) {
        newAscii = Number(character.charCodeAt(string)) + 32
      finalString =finalString + String.fromCharCode(newAscii)
      }
      if (character.charCodeAt(string) === 32) {
        finalString = finalString + String.fromCharCode(95)
      }
      else {
      finalString =finalString + character
    }
  }
  //console.log(finalString)
  return finalString
}

if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');
  console.log(toSnakeCase('hi there we are spaces') === 'hi_there_we_are_spaces')
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toSnakeCase;
