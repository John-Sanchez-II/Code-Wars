// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){
    var vowelCount = 0;
  
    var arrVowel = ['a', 'e', 'i', 'o', 'u'];
  
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < arrVowel.length; j++){
        if(str[i] === arrVowel[j]){
          vowelCount = vowelCount + 1;
        }
      }
    }
  
    return vowelCount;
  }

  function getCount(str) {
    let vowelsNum = 0;
    
    for (let vow of str) {
      if (vow === 'a' || vow === 'e' || vow === 'i' || vow === 'o' || vow === 'u') {
        vowelsNum++
      }
    }
  //   console.log(vowelsNum)
    return vowelsNum;
  }