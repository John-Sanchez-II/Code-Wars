/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.*/

function expandedForm(num) {
    //   input: integer
    //   output: string
    
    //   make a new variable to convert integer to string- String()
      num = String(num);
    //   need a empty array variable
      let result = [];
    //   for of loop
      let numOfZeros = 0
      for (let nums of num){
    //     console.log(nums)
    //   if else
        numOfZeros++
        if (nums === "0") continue;
        else result.push(nums + "0".repeat(num.length - numOfZeros)) 
    //   .push
    //   .repeat 
    //   .join
      } 
      console.log(result)
      return result.join(" + ")
    }