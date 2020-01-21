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
  let sumOfNumber = 0
  let averageOfNumber = 0

  if (array.length <= 1) {
    return array[0]
    //Jesse, I tried to set this up for situations where array is not iterable
    //but it still did not work, how else would I look at this scenario?
  }
  
  for (number of array) {
    sumOfNumber += number
  }
  averageOfNumber = sumOfNumber / array.length
  
  if (averageOfNumber === 0) {
    return 0
  }
  return averageOfNumber 
}

if (require.main === module) {
  console.log('Running sanity checks for mean:');
  console.log(mean([30, 10, 20]) === 20)
  console.log(mean([-10, 10]) === 0)
  console.log(mean([1] === 1))
  
}

module.exports = mean;
