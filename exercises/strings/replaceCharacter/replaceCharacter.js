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


/* arian's plan
1. obtain string
2. define the target letter you want to id
3. iterate through the whole word to find that target letter
4. store that target letter into something so we can keep count
3. replace every letter that we targeted from the string 
4. return that new word variable as a result 
*/

function replaceCharacter(string, target, replaceWith) {  
  let newWord=''
  for (let i=0; i<string.length; i++) {
    if (string.charAt(i) !== target) {
      newWord= newWord + string.charAt(i);
    }
    else ( newWord = newWord + replaceWith);
    }
    return newWord;
  }

//@jesse this was so fucking hard. i spent 3 hrs on this with the help of lucas // so technically didn't solve  on my own. 


if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');
  console.log( replaceCharacter( 'missy','s','l'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacter;


/*missy

s ==> 8

m = s no 
i = s no 
s = s yes 
s = s yes 
*/