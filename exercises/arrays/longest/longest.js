/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */

/**
 @arian's execution plan 
1/ return the array correctly (create a sanity check here) 
2/ iterate through every string/ word 
3/ determine the length of each string 
4/ do a comparison with the previous word and determine if current string being evaluated is bigger than the previous
5/ if it's bigger than the last iterate until the end and print out result 
 */



function longest(array) {
  longestString = array[0];

  for (let element of array) {
    if (element.length > longestString.length) {
      longestString = element;
    }
  }
  return longestString;


  
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(['this', 'word', 'is', 'biggest']));
  console.log(longest(['ok', 'ish', 'coming', 'live']));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
