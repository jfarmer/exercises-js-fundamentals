/**
 * Given an array of numbers, return their product.
 *
 * @example
 * product([2, 4, 6]); // => 48 (i.e., 2 * 4 * 6)
 * product([-10, 10]); // => -100 (i.e., -10 * 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The product of the numbers in the array
 */
function product(array) {
  let productOfNumbers = 1;

  for (let number of array) {
   productOfNumbers = productOfNumbers * number 
  }
  return productOfNumbers
}

if (require.main === module) {
  console.log('Running sanity checks for product:');
  console.log(product([2, 2, 2]) === 8);
  console.log(product([0, 2, 3]) === 0);
  console.log(product([1, 5, 10]) === 50);
  //make sure to put the parantheses BEFORE the equal sign!!!
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = product;

