/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  let words = string.split(" ");
  console.log(words);
  let runningShortest = words[0];
  for(let word of words)
  {
    if(runningShortest.length > word.length)
    { 
      runningShortest = word;
    }
  }
  return runningShortest;
  console.log(runningShortest);
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');

  console.log(shortestWord('Donde esta mi chaqueta?')  === 'mi');
  console.log(shortestWord('Donde esta mi chaqueta?'));
  console.log(shortestWord('Si hace frio, no voy al parque') === 'Si');
  console.log(shortestWord('Lo paso bien') === 'Lo');
  console.log(shortestWord('Lo paso bien'));
  console.log(shortestWord('Como es el taco') === 'el' || 'es');
  console.log(shortestWord('Como es el taco'));
  console.log(shortestWord('tu cosa mas valuable es tu mentalidad') === 'tu');
  console.log(shortestWord('tu cosa mas valuable es tu mentalidad'));
}

module.exports = shortestWord;
