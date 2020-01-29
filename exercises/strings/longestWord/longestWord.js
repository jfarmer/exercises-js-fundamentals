/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  let words = string.split(' ');
  console.log(words);
  let runningLongest = words[0];
  for(let word of words)
  {
    if(word.length > runningLongest.length)
    { runningLongest = word; }
  }
   
  return runningLongest;
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('It is complicated') === 'complicated')
  console.log(longestWord('Video killed the radio star') === 'killed')
}

module.exports = longestWord;
