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
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for selectLongerThan:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectLongerThan;
