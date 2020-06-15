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

string = []
let x;

function countLetter(string, letter) {
let count = 0
for (x of string) {
  if (x === letter) {
      count++;
      return count;
    }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');
  console.log(countLetter('hello', 'l')); // => 2
  console.log(countLetter('Mississippi', 's')); // => 4
  console.log(countLetter('Mississippi', 'x')); // => 0
  console.log(countLetter('Mississippi', 'M')); // => 0


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;
