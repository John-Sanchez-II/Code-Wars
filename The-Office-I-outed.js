/*Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).*/

function outed(meet, boss){
    //   input: Object key: name and value is score
    //   output: String
    // variables (total score) and (rating avg) and people count
      let totalScore = 0
    // for in loop
    // loop over the meet obj
      for(let key in meet){
    // conditional statments
        if(key==boss){
          totalScore += meet[key] * 2
        }else{
          totalScore += meet[key]
        }
    //     console.log(totalScore)
      }
    // Object.keys ["john","tim"]
    // use the person's name / key to referece the meet object to get their score
    // total score / amount of people 
    //   Object.keys() to get individual names in object
    //   divide the score by the amount of people in the meeting
        const ratingAvg = totalScore/Object.keys(meet).length
    //   console.log(Object.keys(meet))
        if (ratingAvg <= 5){
    // return which string we need
          return 'Get Out Now!'
        }else{
          return 'Nice Work Champ!'
        }
    
    }