let arr = [9, 8, 5,4,2,3,1,6,10,6];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[] , arr[j])
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let sorted = sort(arr);

console.log(sorted);

function binarySearch(arr, start, end, num) {

  if (end >= start) {
    // console.log((arr.length /2))
    // console.log(((start + end )/2)).
    let mid = Math.floor((start + end)/2);
    if (arr[mid] == num) {
      return mid;
    } else if (num > arr[mid]) {
      //7 > 5   5 end  
      return binarySearch(arr, mid +1 , end, num);
    } else if (num < arr[mid]) {
      return binarySearch(arr, start, mid-1, num);
    }
  }
  return -1;
}

console.log(binarySearch(sorted, 0, arr.length - 1, 4));
