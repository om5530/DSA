//Checking sum zero - problem 1
//[-5,-4,-3,-2,0,2,4,6,8] => input
//[?,?] => output

function findSumpair(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right]
    if (sum === 0) {
      return [array[left], array[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// let result = findSumpair([-5, -4, -3, -2, 0, 2, 4, 6, 8])
// console.log(result)


//o(n)  linear time complexity
function sumOfTwo(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    }
    else if (sum < 0) {
      left++
    }
  }
}

let result = sumOfTwo([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(result)