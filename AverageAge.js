// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

function getAverageAge(list) {
    //  variable
    //  average:add up /divide by amount
    //   Math.round
        let sum = 0;
      for (let i=0; i < list.length; i++) {
    //     console.log(list[1])
        let person = list[i]
        console.log(person.age)
        sum = sum + person.age
      }
      
    let result = Math.round(sum / list.length);
      return result
     
    }