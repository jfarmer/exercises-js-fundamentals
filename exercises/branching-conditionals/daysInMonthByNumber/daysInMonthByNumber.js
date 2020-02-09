/**
 * Given a month (represented as a number between 1 and 12), return the number
 * of days in that month.
 *
 * For example, January is an inpt of 1, February is an input of 2, March is an
 * input of 3, and so on.
 *
 * Assume February has 29 days (no leap years).
 *
 * @example
 * daysInMonthByNumber(1); // => 31
 * daysInMonthByNumber(9); // => 30
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */


/**
 * @ariansThoughts 
 * 1/ find out how many days are in each month 1-12
 *  Jan	31
    Feb 29 
    Mar	31
    Apr	30
    May	31
    Jun	30
    Jul	31
    Aug	31
    Sep	30
    Oct	31
    Nov	30
    Dec	31
 * 2/create an object with a key and value for each month
 * 3/determine if the data inputed is valid within the parameters we have
 * 4/have some conditionals to execute or else provide some info  
 * 5/  
 */



function daysInMonthByNumber(monthNum) {
  let monthDays = { 1: 31, 2: 29, 3: 31, 4: 30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};

  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    throw new Error(`Expected a month number from 1-12, received: ${monthNum}`);
  }
  else {
    return monthDays[monthNum];
    }
  }

if (require.main === module) {
  console.log('Running sanity checks for isZero:');
  console.log(daysInMonthByNumber(1));
  console.log(daysInMonthByNumber(2));
  console.log(daysInMonthByNumber(1) === 31);
  console.log(daysInMonthByNumber(2) === 29);
  console.log(daysInMonthByNumber(3) === 31);
  console.log(daysInMonthByNumber(0))
}

module.exports = daysInMonthByNumber;
