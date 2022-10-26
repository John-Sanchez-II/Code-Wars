/*Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.*/
function howManyGifts(maxBudget, gifts){
let budgetCount = 0
let amount  = 0
gifts = gifts.sort((a,b) => {return a-b})
  for(let i=0;i<gifts.length;i++){
    if(amount + gifts[i] <= maxBudget) { 
    amount+=gifts[i]
    budgetCount++
    }
  }
console.log(budgetCount)
return budgetCount
}