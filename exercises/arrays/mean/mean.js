/**
 * Given an array of numbers, return their mean. We use "mean" instead of
 * average because "average" can mean many things — mean, median, or mode —
 * while mean only ever means one thing.
 *
 * The mean of three numbers a,b,c is (a + b + c) / 3.
 *
 * The mean of four numbers a,b,c,d is (a + b + c + d) / 4.
 *
 * etc.
 *
 * See https://en.wikipedia.org/wiki/Arithmetic_mean
 *
 * @example
 * mean([30, 10, 20]); // => 20 (i.e., (30 + 10 + 20) / 3)
 * mean([-10, 10]); // => 0 (i.e., (-10 + 10) / 2)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The mean of the numbers in the array
 */
function mean(array) {
  console.log (array.length);
  let count = array[0];
  for (i = 0; i < array.length ; i++) {
    let numbers = array[i];
    let meanNumbers= ( (numbers + count ) / (array.length));
    console.log ("this is the answer to" + " " + meanNumbers);
    ;
  }
}

/**
 * this is the output in my terminal 
 * Running sanity checks for mean:
3
this is the answer to 6.666666666666667
this is the answer to 10
this is the answer to 13.333333333333334
false

@ARIAN so i see the divison is working
the loop seems to working 
the addition is not. i feel like something is happening where i know i should take a value and save it, then iterate to the next value and add it to the saved value and then add the third... but this is where im getting stuck.
 * 
 */



if (require.main === module) {
  console.log('Running sanity checks for mean:');
  console.log (mean([10,20,30]) == 20) ;

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = mean;
