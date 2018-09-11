

//SUM OF TWO LOWEST POSITIVE INTEGERS

//Create a funciton that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed. 

// ex: 
//[19, 5, 42, 2, 77]
// returns 7 which is the sum of the two lowest integers 5 and 2


let nums = [19, 5, 42, 2, 77];

function sumOfTwoLowestPositiveInts(arr){
  let sum = 0;
  // order the numbers from least to greatest
  let orderdedNums = arr.sort(function(a, b){
    return a - b;
  });

  for(let i = 0; i < orderdedNums.length; i++){
    if(i === 0){
      sum =+ orderdedNums[0];
    }
    if(i === 1){
      sum += orderdedNums[1]
    }
  }
  // return sum of two lowest positive numbers
  return sum;
}
