//What ?
// Recursion is a problem solving technique where the solution depends on solution to smaller instances of the sma problem

//Recursion is when a function call itself

//Why?
// A great technique to simplify your solution

//if you find yourself breaking down your prblem into smaller versions of the same problem recursion is very useful

//-------------------------Recursive Fibonacci sequence
// prollem -Give a number 'n'. find the first 'n' elements of the fibonacci sequence
//In mathematics, the fiionacci sequence is a sequence in which each number is the sum of the two preceding ones.

//The first two number in the sequence are 0 and 1.
//fibonacci(2) = [0,1]
//fibonacci(3) = [0,1,1]
//fibonacci(7) = [0,1,1,2,3,5,8]

function recursionFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2)
}

console.log(recursionFibonacci(7))
console.log(recursionFibonacci(6))
console.log(recursionFibonacci(0))
console.log(recursionFibonacci(1))

// Big o  is o(2^n)

// --------------------Recursive factorial of  a number
//Problem: Give an integer 'n'.find the factorial of that integer
//In mathematics the factorial of a non-negative integer 'n',denoted n!,is the product of all positive integers less than or equal to 'n'.


//factorial of zero is 1
//factorial (4) = 4*3*2*1 = 24
//factorial(5) = 5*4*3*2*1 = 120 

// n! = n * (n-1)!

function recursionFactorial(n){
  if(n === 0){
    return 1
  }
return n * recursionFactorial(n - 1)
}

console.log(recursionFactorial(0)) //1
console.log(recursionFactorial(1)) //1
console.log(recursionFactorial(5))

//Big -O = o(n  )