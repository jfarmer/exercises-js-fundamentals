
function smallest(array) {
  let smallestSoFar = array[0];

  for (let number of array) {
    if (number < smallestSoFar) {
      smallestSoFar = number;
    }
  }

  return smallestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for smallest:');

  console.log(smallest([1, 2, 3]) === 1);
  console.log(smallest([0, -100, 50, -200]) === -200);
  console.log(smallest([-200, -400, -100, -300]) === -400);
  console.log(smallest([0]) === 0);
  console.log(smallest([1]) === 1);
  console.log(smallest([-1]) === -1);
  console.log(smallest([11, 11, 11]) === 11);
  console.log(smallest([-22, -11, -22]) === -22);
}

module.exports = smallest;
