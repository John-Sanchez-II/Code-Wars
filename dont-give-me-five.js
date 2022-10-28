/*Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12*/

function dontGiveMeFive(s, e)
// starting index at index 4 any number divisable by 5 are not wanted
//inputs : starting and ending indexes  
// output: count of numbers that dont have a 5 in it  
// create a loop  
// let i = start  
// i <= end  
// number to a string using toString()  
// so we can use the includes string method  
// create a variable to count numbers  
// create condition/ if statement  
// check to see if there isnt a "5" in it and then count it  
// return the count 
{
  let count = 0
  for(let i = s; i <= e; i++){
    let numArray = i.toString().split('')
//     console.log(numArray)
    let fives = numArray.filter(digit => digit === "5").length
//     console.log(fives)
    if(!fives){
//       increment count
      count++
    }
  } 
    console.log(count)
  return count
}