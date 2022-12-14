/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false*/

function generateHashtag (str) {
    //   input: string
    //   output: string 
    //   make condition if the final result is longer than 140 characters will return false
      if(str === "" || !str.trim()){
        return false;
      }
      //   need new variable to store new string with hashtag in it
      let hashGen = "#"
    //   for loop to iterate thru string
      let words = str.split(" ")
    //   console.log(words, str)
      for (let i = 0; i < words.length; i++){
        if(!words[i]){
          continue
        }
    //   need to iterate thru array and capitalize the first letter in words
    //     .slice
    //    console.log(words[i][0].toUpperCase(), words[i].slice(1).toLowerCase())
    //     console.log(words[i])
        hashGen += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    //     console.log(hashGen)
      }
      if(hashGen.length > 140){
        return false
      }
      return hashGen
    }