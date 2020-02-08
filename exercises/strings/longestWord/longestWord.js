/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

/** arian's plan
 * i'm not sure if i need to turn a string into an array in order to fit with the case jesse put
 * go through the string and essentially every word
 * determine the length of each word
 * select the word with the highest number of characters
 * return such word 
 */


function longestWord(string) {
  let stringToArray = string.split(' '); // doing this based on google searching... split string on space space
  let longestSoFar = stringToArray; 
  // i tested this and it works as expected, returned first word... but what i'm not understanding is how am i going to tell the program to iterate through the length of the string i put in as the parameter!! i see that there is a for loop below 
  /* now i write a loop that checks the length of each array... I looked at jesse tutorial but not sure why he has this "  for (let string of array) {
" https://github.com/jfarmer/intro-javascript/blob/master/Functions/Example-Functions.md

  */

  for (let string of longestSoFar) { //i'm not sure why the array is not defined in jesse's example... this i think is where the issue is based on my console.logs//
    if (string.length > longestSoFar.length) {
      longestSoFar = string //i don't really understand this other than because i followed a tutorial from jesse//
    }
  }
  return longestSoFar;
  
}

//hypothesis1: in my terminal i'm getting the first word of the examples below which i know is an issue because for the third console.log "a" is not the shortest, thus i know the issue might have to be with the for loop not working or because i put the stringToArray[0]
// what i did: changed the stringToArray[0] to now just stringToArray so not to index  


if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('largest should be right'))
  console.log(longestWord('fantastic it works'))
  console.log(longestWord('a should not be chosen'))
  console.log(longestWord('a should not be chosen'))


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;


//total time it took me to solve this: about 1.5 hrs!!! WTF//