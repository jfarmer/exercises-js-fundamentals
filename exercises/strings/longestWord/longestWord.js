/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  let counter = 0
  let longestWord = ''
  for (i = 0; i < string.length;){
    counter = ++
   if (string[i] === ' '){
      longestWord = string.slice(string[i - counter], string)
      if (longestWord.length() < counter){
        longestWord = string.slice(string[i - counter], string) 
        counter = 0
      }
   }
  }
  return longestWord
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');

  console.log(longestWord('My name is Jaelyn') === 'Jaelyn')
  console.log(longestWord('progress without perfection is still progress') === 'perfection')
  console.log(longestWord('cat dog bear dinosaur') === 'dinosaur')
  console.log(longestWord('orlando florida davidson north carolina california') === 'california')
}

module.exports = longestWord;
