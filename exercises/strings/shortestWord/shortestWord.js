/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  // This is your job. :)
  let words = []
  let endIndex = 0
  let startIndex = 0
  for (i in string) {
    if (string[i] === " " || string[i] === ".") {
      endIndex = Number(i)
      words.push(string.slice(startIndex,endIndex))
      startIndex = Number(endIndex) + 1
    }
  }
  words.sort( function(a,b) {
    return a.length - b.length
  })
  return words[0]
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');
  console.log(shortestWord("This is a sentence."))
  console.log(shortestWord("There are two apples."))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortestWord;
