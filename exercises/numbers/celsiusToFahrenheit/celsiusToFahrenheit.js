/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */


function celsiusToFahrenheit(temp) {
  let far = temp * 1.8 + 32
  console.log(far);
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');
    if(far < -459.67) { console.log('Temperature too low!');}
    else {console.log('Temperature is: ');}
}

module.exports = celsiusToFahrenheit;