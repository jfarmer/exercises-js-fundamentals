/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  // This is your job. :)
  count = 0
   string = string.split(' ')

   for (i in string) {
     count += 1
   }
   return count
  ///count = 0 //the count of words
}
if (require.main === module) {
  console.log('Running sanity checks for countWords:');
console.log(countWords("hi there"))
console.log(countWords("My name is Chloe"))
console.log(countWords(' ')) 
//@jfarmer how do I ensure something works when it is a blank string?
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countWords;
