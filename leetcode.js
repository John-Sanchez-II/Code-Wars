var kidsWithCandies = function(candies, extraCandies) {
    //   Math.max
        let results = []
        let greatest = Math.max(...candies)
        // console.log(greatest)
    //   iterate threw the array
        for(let i = 0; i < candies.length; i++){
            let newCandies = candies[i] + extraCandies
            // console.log(newCandies)   
    //    check newcandies is greater than or equal to variable greatest
            if(newCandies >= greatest){
                results.push(true)
            }else {
                results.push(false)
            }
        } 
          return results
    }
    //   add candies[i] to extracandies 
    //   compare largest number in candies to extracandies and check if it is greater or less than
        
        



  
// array numbers -> array booleans
// var kidsWithCandies = function(candies, extraCandies) {
    // maxCandy to get the person with the most candy - reduce
    // loop through candies add extracandy and check if thats biggest than maxCandy
        // - REDUCE (*)
        // - map - transform number of candy to is bigger than max
    // const maxCandy = candies.reduce((prev, curr) => {
    //     if(prev > curr) {
    //         return prev;
    //     } else {
    //         return curr;
    //     }
    // });
    const maxCandy = candies.reduce((prev, curr) => prev > curr ? prev : curr);
    return candies.map(count => count + extraCandies >= maxCandy);
