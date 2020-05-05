/**
 * Returns true if the given number is 0 and false otherwise
 *
 * @param {number} num - The input number
 * @returns {boolean} True if num is 0 and false otherwise
 */
function isZero(num) {
  return num === 0;
}

if (require.main === module) {
  console.log('Running sanity checks for isZero:');

  console.log(isZero(0) === true);
  console.log(isZero(1) === false);
  console.log(isZero(-1) === false);
  console.log(isZero(-100.201) === false);
}

module.exports = isZero;
