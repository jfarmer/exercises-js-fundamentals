/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */


function celsiusToFahrenheit(temp) {
  let far;
  far = (temp * 1.8 + 32);
  return far;
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');
  console.log(celsiusToFahrenheit(27) === 80.6);
  console.log(celsiusToFahrenheit(17) === 62.6);
  console.log(celsiusToFahrenheit(-2) === 28.4);
  console.log(celsiusToFahrenheit(0) === 32);
}

module.exports = celsiusToFahrenheit; 