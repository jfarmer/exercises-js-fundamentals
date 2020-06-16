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
  if (n <= 0) {
    return 1
  }
  else{
    return n * factorial(n-1)
  }
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for factorial:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(factorial(5) === 120);
  console.log(factorial(1) === 1);
  console.log(factorial(0) === 1);
  console.log(factorial(8)=== 40320);
  console.log(factorial(3)=== 6);
}

module.exports = factorial;
