/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
 
const n = string.split(' ');
const ordered = n.sort(function(a,b)  {
  return b.length - a.length;
});
//return ordered;
let arr = [];
let max = ordered[0].length;
for(let i in ordered){
  if (ordered[i].length === max){
  arr.push(ordered[i])
  }

}
return arr;
}

//This is another way of solving the problem by just finding the first word of that length
// let max = n[0].length;
// let word;


// for(let i in n){
//    if (n[i].length > max){
//     max = n[i].length;
//     word = n[i];
//    // console.log(word);
    
//   }
  
// }

// return word;

  
// }

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('my cat has great hands'));
  // console.log(longestWord('you are cool dude')=== 'cool');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;
