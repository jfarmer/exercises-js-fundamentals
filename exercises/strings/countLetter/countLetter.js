/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} targetLetter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

  function countLetter(string, targetLetter) {
    let i = 0;
    let counter = 0;
    while (i < string.length) {
      if (string[i] === targetLetter) {
        counter += 1;
      } else {
        counter += 0;
      }
      i += 1;
    }
    return counter;
  }

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  console.log(countLetter('Mississippi', 's') === 4);
  console.log(countLetter('a', 'a') === 1);
  console.log(countLetter('aaaa', 'Q') === 0);
  console.log(countLetter('bQb', 'b') === 2);

  console.log(countLetter('aAaAa', 'a') === 3)
  console.log(countLetter('aAaAa', 'A') === 2)


}

module.exports = countLetter;
