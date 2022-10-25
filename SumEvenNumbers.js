/*let evenS = input.filter(input => input % 2 === 0)
//   console.log(evenS)
  let sumEven = evenS.reduce((a,b)=> {
  return a + b 
})
//     console.log(sumEven)
  return sumEven
  
}
function sumEvenNumbers(input) {
  // [...]
    let sum = 0;
   for(let i = 0; i < input.length;i++) {
     if(input[i] % 2 === 0) 
       sum += input[i];
   }
  return sum;

}*/