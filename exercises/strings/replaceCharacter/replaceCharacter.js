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

function replaceCharacter(string, replace, replaceWith) {
  let stringArray = [];
  stringArray = string.split("");

  for(let i = 0;i < string.length; i++)
  {
    if(stringArray[i] ===  replace)
    {
          stringArray.splice(i, 1, replaceWith);
    }
  }
  editedWord = stringArray.join("");
  return editedWord;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');

  console.log(replaceCharacter("word","r","o") === "wood");
  console.log(replaceCharacter("weep","e","E") === "wEEp");
  console.log(replaceCharacter("weep","p","d") === "weed");
  console.log(replaceCharacter("weep","e","l") === "wllp");
}

module.exports = replaceCharacter;
