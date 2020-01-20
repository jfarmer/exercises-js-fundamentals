/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  var words = string.split('');
  console.log(words);
  const compare = [];
  for(j=0;j<length.words;j++)
  {
  let i = words.findIndex(' ')
  j++;
   let word = array.slice(i);

  }
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('It is complicated') === 'complicated')
  console.log(longestWord('Video killed the radio star') === 'killed')
}

module.exports = longestWord;
