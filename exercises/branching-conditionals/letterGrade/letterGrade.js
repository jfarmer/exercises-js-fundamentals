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

/**
 * 
 * @ARIANS devised plan 
 * 1/ ensure that the number we put into the function is actually an integer
 * 2/ create some condition that for anything below 60 equals F
 * 3/ create conditions for "-" which is a minus grade, for non-plus or non-minus grade, and for "+"" grades
 * 4/ i'm not sure if i should create multiple else ifs or if i should  create an array and access the key  values
 * 5/ return  the value of the percentGrade with a value "letter" and a minus/plus cuttoff

 */

function letterGrade(percentGrade) {
  let gradePluses = [67,68,69,77,78,79,87,88,89,97,98,99];
  let gradeMinus = [60,61,62,70,71,72,80,81,82,90,91,92];
  let gradeNormal = [63,64,65,73,74,75,83,84,85,93,94,95];  
  
  if (percentGrade < 60 ) {
    return "F" ;
  }
  else if ( percentGrade >= 60 && percentGrade <= 62) {
  return "D-";
  } 
    else if ( percentGrade >= 63 && percentGrade <= 66) {
      return "D";
      }
      else if ( percentGrade >= 67 && percentGrade <= 69) {
        return "D+";
        }

  else if ( percentGrade >= 70 && percentGrade <= 72) {
  return "C-";
  } 
    else if ( percentGrade >= 73 && percentGrade <= 76) {
      return "C";
      }
      else if ( percentGrade >= 77 && percentGrade <= 79) {
        return "C+";
        }
   else if ( percentGrade >= 80 && percentGrade <= 82) {
  return "B-";
  } 
    else if ( percentGrade >= 83 && percentGrade <= 86) {
      return "B";
      }
      else if ( percentGrade >= 87 && percentGrade <= 89) {
        return "B+";
        }
  else if ( percentGrade >= 90 && percentGrade <= 92) {
  return "A-";
  } 
    else if ( percentGrade >= 93 && percentGrade <= 96) {
      return "A";
      }
      else if ( percentGrade >= 97 && percentGrade <= 99) {
        return "A+";
        }

  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
  console.log(letterGrade(55));
  console.log(letterGrade(69));
  console.log(letterGrade(99));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = letterGrade;
