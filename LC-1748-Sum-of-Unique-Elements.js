var sumOfUnique = function (nums) {
  // input : array of numbers
  // output : number (sum of the unique numbers)
  // loop through the array
  // Create counter Object
  // [1,2,3,2]
  // ex.
  // const obj = {
  // 1: 1,
  // 2: 2,
  // 3: 1
  // }
  // filter out only the unique numbers
  // Object.keys() [1,2,3].filter()
  // if the value at that key = 1 then allow it in my array
  // [1,3]
  // variable to track the sum
  // .reduce to get sum
  //Counter Obj
  // filter
  // reduce / count sum
  let sum = 0;
  let uniqueEl = {};
  for (let num of nums) {
    //         if uniqueEl is not in num
    if (!uniqueEl[num]) {
      //             add 1 to uniqeEl
      uniqueEl[num] = 1;
    } else {
      uniqueEl[num]++;
    }
  }
  /*  const filtered uniqueEl.keys(obj)filter(key => {
             return uniqueEl[key] === 1
         })
     const total = filtered.reduce((prev, curr)=> parseInt(prev) + parseInt(curr))
         return total
    loop through the properties of an Object: for in*/
  for (let key in uniqueEl) {
    //         if uniqueEl has a key value of 1
    if (uniqueEl[key] === 1) {
      // sum += plus integer key
      sum += +key;
      // console.log(sum)
    }
  }
  return sum;
};
