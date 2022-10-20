// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here  // input: String  
    // output: Boolean  // loop over string and count X's and O's  
    // If using an array method first turn string into array (.split())  
    // 2 counter variables  
    // check to see if they are the same number 
    // x === y
    let xNumber = '';
    let oNumber = '';
    for (let i = 0; i < str.length; i++ ){
      if(str[i].toLowerCase() === 'x') {
      xNumber += str[i] 
    }else if(str[i].toLowerCase() === 'o'){
      oNumber += str[i]
       }
    }
      return xNumber.length === oNumber.length
    }
  