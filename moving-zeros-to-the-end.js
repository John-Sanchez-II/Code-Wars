/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

function moveZeros(misplacedZeros) {
    console.log(misplacedZeros)
  //   input: array
  //   output:array
  //   need new variable to push new array order into
    let length = misplacedZeros.length
  //   for loop to iterate thru array and find all zeros
  //   need two .filters also an option to filter out all zeros
    for (let i = 0; length--; i++){
  //   need to relocate all zero's(0) to the end of the array
        if(misplacedZeros[i] === 0){
          misplacedZeros.push(misplacedZeros[i])
          misplacedZeros.splice(i, 1)
          i--
        }
    }
  //   .push the zero's(0) into end of array
  //   console.log(misplacedZeros)
    return misplacedZeros
  }