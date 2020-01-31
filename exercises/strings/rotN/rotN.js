/**
 * Given an input string and positive integer N, returns a ROT-N
 * copy of the string.
 *
 * ROT-N is just like ROT-13 except that we specify the number
 * instead of only using 13.
 *
 * Play with https://rot13.com/, you can change the N.
 *
 * @example
 * rotN('Hello, world!', 13); // => 'Uryyb, jbeyq!'
 * rotN('Hello, world!', 9); // => 'Qnuux, fxaum!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */
let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let conversion = {};

 
 conversion[" "] = " ";
 conversion["!"] = "!";
 conversion[","] = ",";
 conversion["'"] = "'";
 conversion["."] = ".";
 
 

function rotN(string, n) 
{
  let newAlphabet = "";
  let characters = string.split("");
  for(z=0;z<=n;z++)
  {
    newAlphabet = alphabet + alphabet[z];
  }

  for(i=0;i<newAlphabet.length-n;i++)
  {
   
    conversion[ newAlphabet[i] ] = newAlphabet[i+n];
  }

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
  console.log(rotN("ain't nothin' but a g thang", 1) === "bjo'u opuijo' cvu b h uiboh");
  console.log(rotN("cookies and cream!", 7) === "jvvrplz huk jylht!");
  
}

module.exports = rotN;
