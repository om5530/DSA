//A function calls itself until it doesn't









///--------Call Stack
function funcThree() {
  console.log('Three')
}
  
function funcTwo() {
  funcThree()
  console.log('Two')
}
  
function funcOne() {
  funcTwo()
  console.log('One') 
}
  
// funcOne()



//-------------factorial
//4!
// 4* 3!
//    3 * 2!
//        2* 1!
//           1

function factorial(n){
  if(n === 1) return 1
  return n * factorial(n-1)
}
factorial(4)
// console.log(factorial(4))
 //   return   4 * factorial(3)
 //   return   3 * factorial(2)
 //   return   2 * factorial(1)
//    return   1