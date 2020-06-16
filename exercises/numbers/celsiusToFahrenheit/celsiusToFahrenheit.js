/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  // This is your job. :).
  return (9/5 * (temp)) + 32
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');

  // Your sanity checks go here.
  console.log(celsiusToFahrenheit(32));
  console.log(celsiusToFahrenheit(0));
  console.log(celsiusToFahrenheit(10));
  
  
}

module.exports = celsiusToFahrenheit;
