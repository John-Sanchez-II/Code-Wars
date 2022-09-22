// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
function toAcronym(inp){
const acro = inp.split(' ');
  
  let firstLetters = ''
  
  for(let i=0; i<acro.length; i++){
    let word = acro[i]
//  console.log(acro[i])
  let firstL = word[0].toUpperCase()
  console.log(firstL)
  firstLetters = firstLetters + firstL

  }
  return firstLetters
}