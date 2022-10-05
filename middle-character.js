// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
//   for (let i = 0; i<s.length; i++) {
//   If(Even)
    if (s.length % 2 === 0){
      // 6 => 3
//   'garage' 
// d[s.length/2] == 'a' 
// d[(s.length/2) - 1] == 'r'
  return s[s.length/2 -1] + s[s.length/2] 
//   If(odd)
//   'frame' => 'a'
//   s[Math.floor(s.length/2)]
      }else if (s.length % 2 !== 0)
        { return s[Math.floor(s.length/2)]
        }
}