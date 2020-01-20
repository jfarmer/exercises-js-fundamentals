/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  if(percentGrade<60){
    return "F";}

  if(percentGrade>73 & percentGrade < 77){
    return "C";}


  if(percentGrade>76 & percentGrade < 80){
    return "C+";}

  if(percentGrade>80 & percentGrade < 83){
    return 'B-';

  }
  if(percentGrade>82 & percentGrade < 87){
    return "B";}

if(percentGrade>86 & percentGrade < 90){
  return "B+";}

if(percentGrade>89 & percentGrade < 95){
  return "A-";}
if(percentGrade>94 & percentGrade < 101){
  return "A+";}
}
if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
  console.log(letterGrade(50)=='F');
  console.log(letterGrade(85)=='B');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = letterGrade;
