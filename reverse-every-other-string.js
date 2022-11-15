/*Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.*/

function reverse(str){
    // input: string "Reverse this string, please!"
    // output : string
    // .split() turn string into an array of words
    let arr = str.split(" ")
    console.log(arr)
    // ["Reverse", "this", "string", "please!"]
    // loop over words array
    for(let i = 1; i < arr.length; i+= 2){
      arr[i] = arr[i].split('').reverse().join("")
  //     console.log(arr)
    // reverse every other word
    // reverse odd indexs
    }
    return arr.join(" ").trim()
    // other way - start i = 1 and i+=2
    //reverse string #1
    // .split() to create an array of characters
    // .reverse()
    // turn back into a string
    
    //2nd Way reverse
    // loop over the word
    // start from end of the word 
    // ["w","o","r","d"]
    // array.length = 4
    // array.length - 1 = 3
    // add each character to a new string
    //   let str = 'drow'
    //   'word'
    // return String with every other word reversed
  }
  