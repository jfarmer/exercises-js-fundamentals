
function shortest(array) {
  let shortestSoFar = array[0];

  for (let string of array) {
    if (string.length < shortestSoFar) {
      shortestSoFar = string;
    }
  }
  return shortestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');
  console.log(shortest(['hi', 'hello', 'mynameischloe']) === 'hi');
  console.log(shortest(['keith', 'christos', 'rachel']) === 'keith')
  console.log(shortest(['1', '2']))
  //Jesse I think it doesn't account for when the strings are the same length. How might I do this?
}

module.exports = shortest;

