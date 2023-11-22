// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//SOLUTION:
function XO(str) {
    let count1 = 0;
    let count2 = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x' || str[i] === 'X') {
        count1++;
      }
      else if (str[i] === 'o' || str[i] === 'O') {
        count2++;
      }
    }
    return count1 === count2;
  }
  console.log(XO("msxxyroop"));