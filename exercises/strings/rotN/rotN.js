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

function rotN(string,num) {
  let original_abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //original_abc.split('');
  let target_abc = '';
  num = num%26;
  string = string.toUpperCase();
  
  target_abc += original_abc.slice(num,26)+original_abc.slice(0,num);//+original_abc[0,num];

  let output = '';

  for(i=0;i<string.length;i++){

    let char = string[i];
    let charIndex = original_abc.indexOf(char);
    if(charIndex === -1){
      output+=char;
    }
    else{
    output+=target_abc[charIndex];

  }
   }
  return output;
}

if (require.main === module) {
  console.log('Running sanity checks for rotN:');
  console.log(rotN('HELLO',15));
  console.log(rotN('Hello, world!', 13));
  console.log(rotN('Hello, world!', 9)); // => 'Qnuux, fxaum!')

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = rotN;
