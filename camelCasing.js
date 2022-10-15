// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    // .join(' ') to add a space
    //   .map
    // charCodeAt?
    //   .replace(' ')
    //   toUpperCase .toLowerCase
       let spaces = ('')
    //    start at second word instead of first
      for (let i = 0; i < string.length; i++){
       if(string[i] === string[i].toUpperCase()){
    //      string[i] += string.join(' ')
         spaces += ' '
       }
        spaces += string[i]
      }
     return spaces
    }