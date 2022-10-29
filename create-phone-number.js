/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"*/

//   input:array

//   output: string

//   need variable to input answer

//  what output should look like  returns "(123) 456-7890"

  let phoneNumber = ('')

//   for loop

  for(let i = 0; i < numbers.length;i++){

//   pull a string of numbers .splice?

//   first 3 numbers are area which need in parenthesis

    if( i === 0 ){

      phoneNumber += '('
    }

    if(i === 3){

      phoneNumber += ') '

    }

    if(i === 6){

      phoneNumber += '-'

    }

    phoneNumber += numbers[i]

  } 

  return phoneNumber
}