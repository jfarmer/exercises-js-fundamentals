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
  let firstLetter = string.slice(0,1)
  firstLetter = firstLetter.toUpperCase()
  let newstring = firstLetter + string.slice(1, string.length)
  return newstring
  
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  console.log(capitalize('i am a cat') === 'I am a cat')
  console.log(capitalize('this is a sentence') === 'This is a sentence')
  console.log(capitalize('i hate everything') === 'I hate everything')
  console.log(capitalize('i spent three days on this only to realize all I was missing was a pair of parantheses'))
}
module.exports = capitalize;
