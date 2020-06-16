/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function remainderOf(n, d) {
  while (n >= d){
    return remainderOf(n-d,d)
  }
  return n
  /*
    This is your job. :)

    If you're not sure, step out of the code and use pen + paper. Start
    with simple examples and pay attention to the process you carry out.
  */
}

if (require.main === module) {
  console.log('Running sanity checks for remainderOf');
  console.log(remainderOf(10, 1)=== 0);
  console.log(remainderOf(129, 17)=== 10);
  console.log(remainderOf(118, 5)=== 3);
}

module.exports = remainderOf;
