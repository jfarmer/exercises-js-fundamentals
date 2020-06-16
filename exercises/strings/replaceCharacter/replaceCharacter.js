/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  newWord = ""
  startindex = 0
  let targetindex = []
  for (i in string){
    if (string[i] === target){
      targetindex.push(i)
    }
  }
  for (i of targetindex) {
    newWord = newWord.slice(startindex, i) //+ replaceWith
    startindex = i
  }

  return newWord
  //newWord.push(newWord.slice(0,i+1))
  //newWord.push("target")


    
  
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');
  console.log(replaceCharacter('Hello','l','8'))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacter;
