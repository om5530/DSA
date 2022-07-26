//Checking sum zero-Problem 1

//[-5,-4,-3,-2,0,2,4,6,8] => input

//[-4,-4] => output

//what is traversing =>to visit each element of array
function getSum(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]]
      }
    }
  }
}
let result = getSum([-5, -4, -3, -2, 0, 2, 4, 6, 8])
// console.log(result);
//o(n^2) quadratric time complexity



function getSum2(arrray) {
  for (let i = 0; i < arrray.length; i++) {
    for (let j = 1; j < arrray.length; j++) {
      if (arrray[i] + arrray[j] === 0) {
        return [arrray[i], arrray[j]]
      }
    }
  }
}

let result1 = getSum2([-5, -4, -3, -2, 0, 2, 4, 6, 8])
// console.log(result1);

function getSum3(array) {
  let left = 0
  let right = array.length - 1;

  while (left <= right) {
    sum = array[left] + array[right]
    if (sum === 0) {
      return [array[left] ,array[right]]
    }
    else if(sum < 0 ){
      left++;
  }else{
    right--
  }
  }
}
let result2 = getSum3([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(result2)
