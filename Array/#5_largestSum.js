//[1,2,3,4,5,6,7,8,1,2] // total element - 10
//count largest sum of consecutive digits
//num = 4
//sum => 25
//!conditions
//num >array -> error message
//10 - 2 + 1 => 9

function largestSum(arr, num) {
  if (num > arr.length) {
    throw new Error('number should be small than array')
  }
  let max = 0
  for (let i = 0; i < 3; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      console.log('inner loop  ' + j + " outer loop  " + i)
      temp += arr[i + j] // 1+0 = 2  1+1=3  1+2=4  1+3=5   //2+3+4+5
    }
    //  console.log(temp)

    if (temp > max) {
      max = temp
    }
  }
  return max
}

let result = largestSum([1, 2, 3, 4, 5, 6, 7, 8, 1, 2], 4)
console.log(result)