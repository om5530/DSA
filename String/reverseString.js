let str1 = 'sssssdddddkkkkahhdbhbjdndkdskvhkudfb';
// function reverseStr(str){
//     str = str.split('');
//     let left = 0;
//     let right = str.length - 1;
//     while(left < right){
//         [str[left],str[right]] = [str[right], str[left]]
//         left++;
//         right--;
//     }
//     return str.join('')
// }

// console.log(reverseStr(str));
function reverseStr1(str) {
  str = str.split(' ');
  console.log(str);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++
    right--
  }
  return str.join()
}
console.log(reverseStr1(str1));
