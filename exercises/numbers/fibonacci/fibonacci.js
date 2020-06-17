/**
 * Given a non-negative integer n, returns the n-th Fibonacci numbers.
 *
 * The Fibonacci numbers are defined thus:
 *
 * fib(n): 0  1  1  2  3  5  8  13  21  34  55  ...
 *      n: 0  1  2  3  4  5  6   7   8   9  10  ...
 *
 * That is, starting with 0 and 1, the next Fibonacci number is the sum
 * of the previous two. The "0-th" Fibonacci number is 0 and the first
 * Fibonacci number is 1.
 *
 * See https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @example
 * fibonacci(0); // => 0
 * fibonacci(1); // => 1
 * fibonacci(10); // => 55
 * fibonacci(12); // => 144
 *
 * @param {number} n - A non-negative integer
 * @returns {number} The fibonacci of num
 */
function fibonacci(n) {
  /*pranjal
  let prev = 0
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum = i + prev
    prev = i
    return sum
  }
  */
  if (n===0) {
    return 0;
  } else if (n===1) {
    return 1;
  } 
  return fibonacci(n-2)+fibonacci(n-1);
}

if (require.main === module) {
  console.log('Running sanity checks for fibonacci:');
  console.log(fibonacci(10))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = fibonacci;
