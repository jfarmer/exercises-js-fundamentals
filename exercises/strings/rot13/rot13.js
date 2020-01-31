/**
 * Given an input string, returns a ROT13 copy of the string.
 *
 * A substitution cipher is a method of encrypting an input string
 * by replacing each letter of the input with some other letter.
 *
 * ROT13 is a substitution cipher where each letter is replaced by
 * the letter that is 13 letters after it in the alphabet, wrapping
 * back to the start of the alphabet if necessary.
 *
 * For example, every instance of 'A' is replaced with 'N', 'M' with 'Z',
 * 'R' with 'E', and so on.
 *
 * See https://en.wikipedia.org/wiki/ROT13
 *
 * Play with: https://rot13.com/
 *
 * Because there are 26 letters in the alphabet, we can "decrypt" a
 * rot13-encrypted string by applying rot13 again.
 *
 * (No, this isn't particularly secure.)
 *
 * @example
 * rot13('Hello, world!'); // => 'Uryyb, jbeyq!'
 * rot13('Uryyb, jbeyq!'); // => 'Hello, world!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */
  let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

  let conversion = {};

 for(i=0;i<alphabet.length-13;i++)
 {
   
    conversion[ alphabet[i] ] = alphabet[i+13];
 }
 conversion[" "] = " ";
 conversion["!"] = "!";
 conversion[","] = ",";
 conversion["."] = ".";
 
 console.log(alphabet);
 console.log(conversion);

function rot13(string) 
{
  let characters = string.split("");

  for(q=0;q<string.length;q++)
  {
    characters[q] = conversion[ characters[q] ];
  }
  
  let finalWord = characters.join("");
  console.log(finalWord);
  return finalWord;
}

if (require.main === module) {
  console.log('Running sanity checks for rot13:');
  console.log(rot13("aint nothin but a g thang") === "nvag abguva ohg n t gunat");
  console.log(rot13("cookies and cream") === "pbbxvrf naq pernz");
  
}


module.exports = rot13;
