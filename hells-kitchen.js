/*Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.*/

function gordon(a){
//   input : string 
//   output : string
// Loop over the string
// Check each character and decide what to do with it
// need empty sting to store characters
// conditional statements to check character  
// beware the !!! at end
//   return new string
  const vowels = 'AEIOU';
  let result = '';
  
  for (let letter of a){
    if(vowels.includes(letter.toUpperCase()) && letter.toUpperCase() === 'A'){
      result += '@';
    } else if(vowels.includes(letter.toUpperCase())){
      result += '*';
    }else if (letter === ' '){
      result += '!!!! '
    }else {
      result += letter.toUpperCase();
    }
  } 
  result += '!!!!';
  console.log(result)
  return result
}