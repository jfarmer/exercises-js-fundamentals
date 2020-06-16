/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

const countLetter = require("../countLetter/countLetter");

function countWords(string) {
  counter = 1 //start with 1 because it won't count the last word
  for (let i of string) {
    if (i === " "){
      counter += 1
    }
  }
  return counter
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');
  console.log(countWords("This is a sentence") === 4)
  console.log(countWords("Wow, this works. But will it work with two sentences?") === 10)
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countWords;
