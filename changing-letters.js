/*When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.*/

function swap (string) {
    // input: string
    // output: sting with capital vowels
    // Loop over string or turn into Array and use array method (map, join, split)
    // check to see its a vowel and then capitalize them
    // create variable for new string
    // return new string 
    
    let vowel = "aeiou";
    let vowelCaps = '';
    for(let letters of string){
      if(vowel.includes(letters)){
        vowelCaps += letters.toUpperCase()
      }else {
        vowelCaps += letters
      }
    }
    return vowelCaps
  }

  const vowels = ["a", "e", "i", "o", "u"];
const swapOut = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');