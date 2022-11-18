/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0*/

function checkExam(answerSheet, studentPapers) {
    // input: 2 arrays
 //   1st - answer key
   // 2nd - student answers
 //   output: integer (score)
   // make score variable
   // compare both arrays and check for correct answers
   // correct answer = +4
   // incorrect answer = -1
   // blank answer = 0  ('')
   // Loop over array 
   ["a", "a", "b", "b"]
   ["a", "c", "b", "d"]
    // i = 1
     // array1[1] // a
     // array2[1] // c  
   let score = 0;
   
   for(let i = 0; i < answerSheet.length; i++){
     if(answerSheet[i] === studentPapers[i]){
       score += 4;
 } 
   else if(studentPapers[i] === ""){
   score -= 0;
 }
   else{
     score -= 1;
   }
     }
 if(score < 0){
   score = 0;
   };
 return score;
 };