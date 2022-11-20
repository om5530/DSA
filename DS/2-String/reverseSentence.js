
// function reverseStr(str){
//   str = str.split('');
//   let left = 0;
//   let right = str.length - 1;
//   while(left < right){
//       [str[left],str[right]] = [str[right], str[left]]
//       left++;
//       right--;
//   }
//   return str.join('')
// }

// let str3 = 'i am doing the work'

// function sentence(str){
//     str = str.split(' ')
//     let newStr = ''
//     for (let i = 0; i< str.length ; i++){
//       newStr = newStr +' '+ reverseStr(str[i])
//     }
//     return newStr
// }
// console.log(sentence(str3));


let s = 'omkar'

function reverse(str){
   str = str.split('')
   let left = 0
   let right = str.length - 1
   while(left < right){
     [str[left], str[right]] = [str[right], str[left]]
     left++
     right--
   }
  //  for(let i=0;i<str.length;i++){
  //   [str[i], str[i+1]] = [str[i+1],str[i]]
  //  }
  return str.join('')
  }


  console.log(reverse(s))

  