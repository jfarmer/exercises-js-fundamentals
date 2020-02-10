/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */


function longest(array) {
  shortestString = array[0];

  for (let element of array) {
    if (element.length < shortestString.length) {
      shortestString = element;
    }
  }
  return shortestString;


  
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(['this', 'word', 'is', 'biggest']));
  console.log(longest(['ok', 'ish', 'coming', 'live']));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
