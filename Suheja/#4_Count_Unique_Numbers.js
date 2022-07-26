//count unique numbers
//   i j
//[1,1,2,2,3,4,4,5,6,7,8,8]
//output ->8

//conditions
// i = 0 , j = 1
//array[i] !== array[j]
// 1. i++
//2. array[i] = array[j]

// function countunique(array) {
//   if (array.length) {
//     let i = 0;
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         i++;
//         array[i] = array[j]
//       }
//     }
//     return i + 1
//   }
// }
// const result = countunique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8])
// console.log(result)

function unx(array) {
  if(array.length){
let i = 0;
    for (let j = 1; i < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j]
      }
    }
   
  return i + 1
  }
}

const re = unx([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8])
console.log(re)
