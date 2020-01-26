function toLowerCase(string) {
  let lowerCaseString = ''
  
  for (character of string) {  
    let newAscii = character.charCodeAt(string)
  
      if (character.charCodeAt(string) >= 65 && character.charCodeAt(string) <= 90) {
        newAscii = Number(character.charCodeAt(string)) + 32
        //have to do this as a number so it knows to subtract from the code number
        lowerCaseString = lowerCaseString + String.fromCharCode(newAscii)
        //use the string to know the string at that code
      }
      else {
        lowerCaseString = lowerCaseString + character
    }
  }
  //console.log(lowerCaseString)
  return lowerCaseString
}

if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');
  console.log(toLowerCase('Hi tHeRe') === "hi there")
  console.log(toLowerCase('MY NAME IS CHLOE') === 'my name is chloe')
}

module.exports = toLowerCase;
