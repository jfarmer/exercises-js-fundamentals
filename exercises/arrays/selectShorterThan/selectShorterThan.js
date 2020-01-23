/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly less than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly less the given threshold
 */
function selectShorterThan(array, threshold) {
  let finalArray = [];

  for (string of array) {
    if (string.length < threshold) {
      finalArray.push(string)
    }
  }
  return finalArray
}

if (require.main === module) {
  console.log('Running sanity checks for selectShorterThan:');
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0)); // => []
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1)); // => ['']
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2)); // => ['', 'c']
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3)); // => ['', 'bb', 'c']
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4)); // => ['', 'aaa', 'bb', 'c']
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5)); // => ['', 'aaa', 'bb', 'c', 'dddd']
}

module.exports = selectShorterThan;
