// //String Anagram
// // 'hello' => 'llheo'

// //condition
// //length check (for both strings);


// //condition 2
// //string'hello'
// //{h:1,e:1,l:2,o:1}


// function isAnagram(string1, string2) {
//   if (string1.length != string2.length) {
//     return false;
//   }
//   let counter = {};
//   for (let letter of string1) {
//     counter[letter] = (counter[letter] || 0) + 1
//     // console.log(counter[letter])
//   }
//   // console.log(counter)
//   for (let items of string2) {
//     if (!counter[items]) {
//       return false
//     }
//     counter[items] -= 1
//   }
//   return true;
// }

// // let result = isAnagram('hello', 'llheo');
// // console.log(result)

// //linear time complexity 0(n)

// // console.log('om')

// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   let counter = {}
//   for (let letter of str1) {
//     console.log(letter);
//     counter[letter] = (counter[letter] || 0) + 1
//     console.log(counter[letter])
//   }
//   for (let item of str2) {
//     console.log(item)
//     console.log(counter[item])

//     if (!counter[item]) {
//       return false
//     }
//     console.log(counter[item])
//     counter[item] = counter[item] - 1
//     console.log(counter[item])

//   }
//   console.log(counter)

//   return true
// }

// let result = anagram('hello', 'llheo');
// console.log(result)

// function checkAnagram(str1,str2){
//     if(str1.length !== str2.length){
//       return false;
//     }
//     let counter = {};
//     for(let letter of str1){
//           counter[letter] = (counter[letter] || 0 ) + 1;
//           console.log(counter[letter])
//     }
//     console.log(counter)
//     for(let item of str2){
//       if(!counter[item]){
//         return false
//       }
//       counter[item] = counter[item] - 1
//     }

// return true
// }

// checkAnagram('om','mo')
// // console.log(checkAnagram('om','mo'))



function ana(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  counter = {};
  for (let letter of str1) {

    counter[letter] = (counter[letter] || 0) + 1
  }
  for (let item of str2) {
    if (!counter[item]) {
      return false
    }
    counter[item] = counter[item] - 1
  }
  return true
}

ana('om', 'mo')
console.log(ana('om','mo'))

function ox(arr){
  if(arr.length){
    let i=0;
    for(let j=1 ; j<arr.length ; j++){
      if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j]
      }
    }
    return i + 1
  }
}

let re = ox([1,2,3,4,5,5,6,6,7,7,7,8,8,8,9,9])
console.log(re);