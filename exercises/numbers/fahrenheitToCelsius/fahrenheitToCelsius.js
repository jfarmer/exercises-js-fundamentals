/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  // This is your job. :).

  return (temp-32)/1.8;
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');
  console.log(fahrenheitToCelsius(122));

  // Your sanity checks go here.
}

module.exports = fahrenheitToCelsius;
