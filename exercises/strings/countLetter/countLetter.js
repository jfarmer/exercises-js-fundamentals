/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
    let count = 0;
  for(let char of string)
    {if(char == letter)
    {count = count+1}}
    return count;
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');
  console.log(countLetter('Patagonia', 'a') === 3);
  console.log(countLetter('a', 'a') === 1);
  console.log(countLetter('aaa', 'a') === 3);
  console.log(countLetter('Q', 'a') === 0);
  console.log(countLetter('0000', 'a') === 0);
  console.log(countLetter('B0000000L', 'L') === 1);
  console.log(countLetter('AaAaA', 'a') === 2);
  console.log(countLetter('AaAaA', 'A') === 3);
  console.log(countLetter('', 'a') === 0);
  console.log(countLetter(' ', ' ') === 1);
}

module.exports = countLetter;
