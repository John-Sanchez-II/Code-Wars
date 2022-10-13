// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) {
    // Integer (budget) and array of intergers (prices)
    // Output: String of comma seperated numbers
    // loop or filter
    let affordableBeans = []
    for(let i=0; i < prices.length; i++){
      if(prices[i] <= budget){
         affordableBeans.push((prices[i]).toString()) 
      }
    }
    const sorted = affordableBeans.sort((a,b)=> a-b)
    const result = sorted.join(',')
    return result
   // 3, [6, 1, 2, 9, 2]
    //[1,2,2]
    // loop over each price and see if we can afford it
    // assending order .sort()
    // convert the numbers to strings .toString()
   // ["1","2","2"]
    // Convert the array of strings to a string .join()
    // ["1","2","2"] --> "1,2,2"
  
  }
  