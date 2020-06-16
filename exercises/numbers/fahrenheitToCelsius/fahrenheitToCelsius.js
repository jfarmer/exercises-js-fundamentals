/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  // This is your job. :).
  return (temp - 32)*(5/9)
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');

  // Your sanity checks go here.
  console.log(fahrenheitToCelsius(32));
  console.log(fahrenheitToCelsius(0));
  console.log(fahrenheitToCelsius(5));
  console.log(fahrenheitToCelsius(70));
}

module.exports = fahrenheitToCelsius;
