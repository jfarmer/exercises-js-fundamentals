/**
 * Given a base and an positive integer exponent, returns the base raised to the power of the exopnent.
 *
 * @example
 *   power(2, 3) // => 8 (i.e., 2 * 2 * 2)
 *   power(-2, 3) // => -4 (i.e., -2 * -2 * -2)
 *   power(5, 6) // => 15625 (i.e., 5 * 5 * 5 * 5 * 5 * 6)
 *
 * @param {number} base The base
 * @param {number} exponent The exponent (a positive integer)
 * @returns {number} The base raised to the power of the exopnent
 */
function power(base, exponent) {
  let number = 1;
  for(i = 1; i <= exponent; i++)
  { number *= base;
  }
  return number;
}

if (require.main === module) {
  console.log('Running sanity checks for power:');

  console.log(power(1, 1) === 1);
  console.log(power(1, 2) === 1);

  console.log(power(-1, 1) === -1);
  console.log(power(-1, 2) === 1);
  console.log(power(-1, 3) === -1);

  console.log(power(2, 3) === 8);
  console.log(power(5, 6) === 15625);
}

module.exports = power;
