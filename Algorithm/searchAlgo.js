//Linear search
//binary search


//*------------------------Linear Search 
//it can take both sorted and unsorted array
//Problem - Given an array of 'n' elements and a target element 't',find the index of 't' in the array. return -1 if the target ekement is not found
function lineaarSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(lineaarSearch([-5, 2, 10, 4, 6], 10)) //2
console.log(lineaarSearch([-5, 2, 10, 4, 6], 6))  //4
console.log(lineaarSearch([-5, 2, 10, 4, 6], 20))  //-1

// Big O is - o(n)


//*------------------------------------------------------Binary Search
//It need only sorted array
// Problem - Given a sorted array of 'n' element and a target element 't',find the index of 't' in the array. return -1 the target element is not found.

function binarySearch(arr, target){
  let leftIndex = 0
  let rightIndex = arr.length -1

  while(leftIndex <= rightIndex){
      let middleIndex = Math.floor(((leftIndex + rightIndex) / 2))
      if(target === arr[middleIndex]){
        return middleIndex
      }
      if(target < arr[middleIndex]){
        rightIndex = middleIndex -1
      }else{
        leftIndex = middleIndex + 1
      }
  }
  return -1
}

function binarySearch(arr,target){
  let leftIndex = 0;
  let rightIndex = arr.length -1

  while(leftIndex <= rightIndex){
     let middleIndex = math.floor(((leftIndex+rightIndex)/2))
     if(target === arr[middleIndex]){
      return middleIndex
     }
     if(target < arr[middleIndex]){
      rightIndex = middleIndex - 1
     }else{
       leftIndex = middleIndex + 1
     }
  }
  return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10],2))

//*Using recursion
function binarySearch(arr, start, end, num) {

  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == num) {
      return mid;
    } else if (num > arr[mid]) {
      //7 > 5   5 end  
      return binarySearch(arr, mid + 1, end, num);
    } else if (num < arr[mid]) {
      return binarySearch(arr, start, mid - 1, num);
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6))  //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20))  //-1

// input size reduces by half every iteration o(log n) - Logarithmic
//so Big O is o(log n)