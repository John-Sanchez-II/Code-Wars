/*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.*/

function findUniq(arr) {
    //   input: array
    //   output: integer 
    //   sort numbers
       arr.sort((a,b)=> a-b)
    //       console.log(arr)
        if(arr[0] === arr[1]){
          return arr[arr.length-1]
        }
        else if(arr[1] === arr[2]){
          return arr[0]
    
         }
} 
    //   indexOF
    //   dont want number to be array need integer
    //   return +arr.filter((value) => { 
    // //     console.log(value)
    //     return arr.indexOf(value) === arr.lastIndexOf(value) 
    //     console.log(value)
    //   } )