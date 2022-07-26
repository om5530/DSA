// function isSquareCheck(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {

//     let isSquare = false;

//     for (let j = 0; j < array2.length; j++) {

//       if (array1[i] * array1[i] === array2[j]) {

//         isSquare = true;

//       }
//       if (j === array2.length - 1) {
//         https://youtu.be/sfCRXvaf6Iw     if (!isSquare) {

//           return false;

//         }

//       } // if(j=== array2.length-1){

//     } // for(let j=0;j<array.length; j++){

//   } // for(let i=0;i<array.length;i++){

//   return true;

// }
// const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);

// console.log(result)

//Time complexity  0(n^2)
//Linear 0(n)=>next video


// function check(array1, array2) {

//   for (let i = 0 ; i<array1.length ;i++) {
//     let isSquare =false;
//     for(let j=0 ; j<array2.length ; j++){
//       if(array1[i] * array1[i] === array2[j]  ){
//       isSquare = true
//       }
//       if(j === array2.length -1 ){
//        if(!isSquare){
//         return false
//        }
//       }
//     }

//   }
//   return true
// }

//  let result = check([1,2,3,4], [1,9,4,16])
// console.log(result) 

function check(arr1, arr2) {

  let map1 = {};
  let map2 = {};
  for (let item of arr1) {
    map1[item] = (map1[item] || 0) + 1
  }
  for (let item of arr2) {
    map2[item] = (map2[item] || 0) + 1
  }
  console.log(map1)
  console.log(map2)
  for (let key in map1) {
    console.log(key)
    if (!map2[key * key]) {
      return false
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true
}

console.log(check([1, 2, 3, 4], [1, 9, 4, 16]))


function cs(arr1, arr2) {
  let map1 = {};
  let map2 = {};

  for (let num of arr1) {
    console.log(num)
    map1[num] = (map1[num] || 0) + 1
    map1
  }

  for (let num of arr2) {
    console.log(num)
    map2[num] = (map2[num] || 0) + 1
  }

  for (let key in map1) {
    if (!map2[key * key]) {
      return false
    }
    if (map1[key] !== map2[key * key]) {
      return false
    }
  }
  return true


}

console.log(cs([1, 2, 3, 4], [1, 4, 9, 16]))