/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  // This is your job
  count = 0

  //for (let count = 0; count < countLetter.length; count += 1); {
   for (let i of string) {
     //console.log(i)
     //console.log(string)
     //console.log(letter)
     if (i == letter) {
       count += 1
     }
     //console.log(count) 
    } 
    return count
    }

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');
console.log(countLetter("hello", "l") === 2)
console.log(countLetter("vaccuum", "c") === 2)
console.log(countLetter('a', 'a') === 1)
console.log(countLetter('aaaa', 'a',) === 4)
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;
