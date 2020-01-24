
function longestWord(string) {
  let splitString = string.split(' ')
  let longestWordSoFar = splitString[0].length

  for (element of splitString) {
    if (element.length > longestWordSoFar) {
      longestWordSoFar = element 
    }
  }
  return longestWordSoFar
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('this sentence is long') === 'sentence')
  console.log(longestWord('it took me long to find my example was wrong') === 'example')
  console.log(longestWord("I really need to get that in my head") === 'really')
}

module.exports = longestWord;

