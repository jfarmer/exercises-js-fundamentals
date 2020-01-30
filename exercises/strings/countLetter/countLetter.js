/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * Note:
 * 1. You can use a `for...of` loop to iterate through the characters
 *    of a string one letter at a time.
 * 2. You can access a specific character using string[i], as
 *    if the string were an array.
 *
 * Both of these are enough to complete this exercise.
 *
 * @example
 * countLetter('hello', 'l'); // => 2
 * countLetter('Mississippi', 's'); // => 4
 * countLetter('Mississippi', 'x'); // => 0
 * countLetter('Mississippi', 'm'); // => 0 (no lower-case m's)
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */


// Arian's thoughts://
 /** 
  * Ok i remember that to look through a string we need a for loop
  * Dont remember how that is made so look it up
  * Great, now that i have looked through the array, how do i count up what the param i'm giving it? 
  * I think you can just make it a variable and if that variable is equal to it do a simple add fucn
  * I'm having a hard time conceptualize where to add the letter into the function 
*/

function countLetter(string, letter) {

  totalCount = 0 

  for (i = 0; i < string.length ; i++) {
    if (letter == string[i] ) {
      totalCount++;
    }
  }
  return totalCount
  
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  console.log(countLetter("fuck", "k"))
  console.log(countLetter("Wow this was crazy wow","w"))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;
