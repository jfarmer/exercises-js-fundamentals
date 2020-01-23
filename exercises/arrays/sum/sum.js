
function sum(array) {
  let totalSum = 0
  
  for (number of array) {
    totalSum += number
  }
  return totalSum
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  console.log(sum([1, 2, 3])); // => 6 (i.e., 1 + 2 + 3)
  console.log(sum([-10, 10])); // => 0 (i.e., -10 + 10)
}

module.exports = sum;

