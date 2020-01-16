/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  // This is your job. :).
  fahrenheit = (temp * 9/5) + 32
  console.log(temp)
  return fahrenheit
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');
console.log(celsiusToFahrenheit(23) === 73.4)
console.log(celsiusToFahrenheit(100) === 212)

  // Your sanity checks go here.
}

module.exports = celsiusToFahrenheit;
