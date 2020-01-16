/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {

  let count = 100
  let newString = string.split(' ');
  //length is now the length of index
 // console.log(string.length)

  for (let i of newString) {
    //console.log(i)
    //if (string.length < wordLength)
    if (i.length < count) {
      count = i
    }
  }
  return count
}
if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');
console.log(shortestWord("Hi my name is Bobby"))
  console.log(shortestWord("aaaaa aa a"))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortestWord;

