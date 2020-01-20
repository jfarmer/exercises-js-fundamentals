/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
    let celsius;
    celsius = (temp - 32 / 1.8);
    return celsius;
  }
  
  if (require.main === module) {
    console.log('Running sanity checks for celsiusToFahrenheit:');
    console.log(celsiusToFahrenheit(80.6) === 27);
    console.log(celsiusToFahrenheit(62.6) === 17);
    console.log(celsiusToFahrenheit(28.4) === -2);
    console.log(celsiusToFahrenheit(32) === 0);
  }
module.exports = fahrenheitToCelsius;
