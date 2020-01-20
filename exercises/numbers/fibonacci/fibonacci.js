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
  let fib = [0, 1, 1];
  let sum;
  if(n === 0)
    { sum = 0}
  else if (n === 1)
    { sum = 1}
  else
  { for(i=2;i<=n;i++)
     { fib.push(fib[i] + fib[i-1]);
     }
     sum = fib[n];
  }
 return sum;
}



if (require.main === module) {
  console.log('Running sanity checks for fibonacci:');
  console.log(fibonacci(0) === 0);
  console.log(fibonacci(1) === 1);
  console.log(fibonacci(10) === 55);
  console.log(fibonacci(12) === 144);
}

module.exports = fibonacci;
