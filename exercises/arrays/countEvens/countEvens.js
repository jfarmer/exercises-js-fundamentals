/**
 * Given an array of integers, returns the count of even integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Even_number
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countEvens(array) {
  let count = 0;
  for(let i in array){
    //console.log(array[i]);
    if (array[i]%2==0){
      count++;
      //console.log(count);
  }
}
return count;
}


if (require.main === module) {
  console.log('Running sanity checks for countEvens:');
  console.log(countEvens([2,4,5,6,7,10])==4);
  console.log(countEvens([1,4,5,9,7,8])==2);


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countEvens;
