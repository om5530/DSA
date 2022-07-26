function searchAlog(array, number) {
  let min = 0;
  let max = array.length - 1;
  console.log(max)
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);  //(0+16)/2 = 8 //(0+7)/2= 3  //(4+7)/2=5
    console.log(midIndex)
    if (array[midIndex] < number) {
      min = midIndex + 1 // 8<7 no   //3<7 yes min = 3+1 = 4  // 5<7 yes min = 5+1 = 6
      console.log(min)
    } else if (array[midIndex] > number) {
      max = midIndex - 1 //8>7  yes  max = 8-1 =  7 
      console.log(max)
    } else {
      console.log(midIndex)
      return midIndex

    }
  }

  return 'number is not present in the array'
}

let result = searchAlog([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 17)
console.log(result)


function sal(arr, num) {
  // left = 0;
  // right = arr.length - 1
  // midIndex = (min + max) / 2
  //  arr[midIndex] < num  8<7 false
  //  min = midIndex + 1
  // arr[midIndex] > num
  // max = minIndex -1
  let left = 0
  let right = arr.length - 1
  while (left <= right) {

    let midIndex = Math.floor((left + right) / 2)
    if (arr[midIndex] < num) {
      left = midIndex + 1
    } else if (arr[midIndex] > num) {
      right = midIndex - 1
    }else{
    return midIndex
    }
  }
  return 'Number is Not Present in the array'
}




let re = sal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 7)
console.log(re)



































function search(array, number) {
  let min = 0
  let max = array.length - 1
  max
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2)
    console.log('midIndex ' + midIndex + " min " + min + " max " + max)
    midIndex
    console.log(array[midIndex])
    if (array[midIndex] < number) {
      min = midIndex + 1
      min
      midIndex
    }
    else if (array[midIndex] > number) {
      max = midIndex - 1
      max
      midIndex
    } else {
      return midIndex
    }
  }
  return 'Number is Not Present'
}

let result1 = search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 17)
result1