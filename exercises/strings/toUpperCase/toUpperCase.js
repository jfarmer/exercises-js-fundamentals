function toUpperCase(string) {
  let upperCaseString = ''
  
  for (character of string) {  
    let newAscii = character.charCodeAt(string)
  
      if (character.charCodeAt(string) >= 97 && character.charCodeAt(string) <= 122) {
        newAscii = Number(character.charCodeAt(string)) - 32
        //have to do this as a number so it knows to subtract from the code number
        upperCaseString = upperCaseString + String.fromCharCode(newAscii)
        //use the string to know the string at that code
      }
      else {
        upperCaseString = upperCaseString + character
    }
  }
  console.log(upperCaseString)
  return upperCaseString
}

if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');
  console.log(toUpperCase('Hi tHeRe') === "HI THERE")
  console.log(toUpperCase('my name is chloe') === 'MY NAME IS CHLOE')
}

module.exports = toUpperCase;

