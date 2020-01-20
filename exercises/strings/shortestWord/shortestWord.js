/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  let test = string.split(' ');
  let shortest = test[0];
  let count = test[0].length;
  //console.log(count);
  for(let i of test){
    //console.log(i);
    if(i.length < count){
      count = i.length;
      shortest = i;
      

    }

  }
  return shortest;
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');
  console.log(shortestWord('Hello Word my')=='my');
  console.log(shortestWord('you need some help in')=='in');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortestWord;
