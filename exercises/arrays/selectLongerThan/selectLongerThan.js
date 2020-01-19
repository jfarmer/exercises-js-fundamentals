/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly greater than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1); // => ['', 'aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => ['aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['aaa', 'bb', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['aaa', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => []
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly greater the given threshold
 */
function selectLongerThan(array, threshold) {
  let finalArray = [];

  for (string of array) {
    if (string.length > threshold) {
      finalArray.push(string)
    }
  }
  return finalArray
}

if (require.main === module) {
  console.log('Running sanity checks for selectLongerThan:');
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1) + "=== ['', 'aaa', 'bb', 'c', 'dddd']");
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0) + "=== ['aaa', 'bb', 'c', 'dddd']");
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1) + "=== ['aaa', 'bb', 'dddd']");
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 2) + "=== ['aaa', 'dddd']");
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3) + "=== ['dddd']");
  console.log(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 4) + "=== []");

}

module.exports = selectLongerThan;
