/**
 * Given a non-negative integer, returns its factorial.
 *
 * Is `n` is a non-negative integer, its factorial is defined as
 * `n * (n - 1) * (n - 2) * ... * 2 * 1`. For example, the factorial
 * of `5` is `5 * 4 * 3 * 2 * 1` or `120`.
 *
 * On paper, we write `5!` to mean `5` factorial, but in code we would
 * instead define a function like `factorial(5)`.
 *
 * See https://en.wikipedia.org/wiki/Factorial
 *
 * The factorial function grows _very fast_.
 *
 * @example
 * factorial(1); // => 1
 * factorial(2); // => 2
 * factorial(3); // => 6
 * factorial(5); // => 120
 * factorial(10); // => 3628800
 *
 * @param {number} n - A non-negative integer `n`
 * @returns {number} The factorial of `n`
 */
function factorial(n) {
  let product = 1;
  for(i=n;i>0;i--)
  { if(n === 1)
    {
      product = 1;
    }
  else
  { product = product * i}
  }

  return product;
}

if (require.main === module) {
  console.log('Running sanity checks for factorial:');
  console.log(factorial(1) === 1);
  console.log(factorial(2) === 2);
  console.log(factorial(3) === 6);
  console.log(factorial(5) === 120);
  console.log(factorial(10) === 3628800);
  console.log(factorial(19) === 121645100408832000);
}

module.exports = factorial;
