/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

let replace = {};
  replace['h'] = "y";
  replace['l'] = "8";
  replace['b'] = "g";

function replaceCharacters(string, replacementDict) {

  let characters = string.split("");

  for(j=0;j<characters.length;j++)
  {
    if(replacementDict[ characters[j] ])
    { characters[j] = replacementDict[ characters[j] ];
    }
  }
  return characters.join("");
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');

  console.log(replaceCharacters("hello", replace) === "ye88o");
  console.log(replaceCharacters("jello", replace) === "je88o");
  console.log(replaceCharacters("breen", replace) === "green");
}

module.export = replaceCharacters;
