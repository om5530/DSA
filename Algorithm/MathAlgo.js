//Fibonacci sequence 
//Factorial of a number
//Prime number
//Power of two 
//recursion
//Fibonacci sequence with recursion
//factorial of a number with recursion



//-------------------------------------------------------------------------------------------------------------------------------------------------------1.//Fibonacci sequence 
// prollem -Give a number 'n'. find the first 'n' elements of the fibonacci sequence
//In mathematics, the fiionacci sequence is a sequence in which each number is the sum of the two preceding ones.

//The first two number in the sequence are 0 and 1.
//fibonacci(2) = [0,1]
//fibonacci(3) = [0,1,1]
//fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

function fibonacci(n) {
  const fib = [0,1]
  for(let i=2; i<n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return  fib
}
console.log(fibonacci(5))

console.log(fibonacci(7))
console.log(fibonacci(6))
console.log(fibonacci(0))
console.log(fibonacci(1))

//Big-O for fibonacci O(n)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------2.factorial of number
//Problem: Give an integer 'n'.find the factorial of that integer
//In mathematics the factorial of a non-negative integer 'n',denoted n!,is the product of all positive integers less than or equal to 'n'.


//factorial of zero is 1
//factorial (4) = 4*3*2*1 = 24
//factorial(5) = 5*4*3*2*1 = 120 

function factorial(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(0)) //1
console.log(factorial(1)) //1
console.log(factorial(5)) //120

//Big -O for factorial O(n)


//------------------------------------------------------------------------------------------------------------------------------------------------------------Prime Number
//Problem - Give a natural number 'n' ,determine if the number s prime or not 
//A prime number is a natural number greater than 1 that us not a product of two smaller natural number
//isPrime(5) = true (1*5 or 5*1)
//isPrime(4)  = false (1*4 or 2*2 or 4*1)

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
    return true
  }
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true
console.log(isPrime(4)) //false


//Big - O is o(n)


//----------------------------------------------------------------------------------------------------------------------------------------------------Power of two
//problem - Give a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exist an integer 'x' such that 'n' === 2^x
// isPowerOfTwo(1) = true(2 ^ 0)
// isPowerOfTwo(2) = true(2 ^ 1)
// isPowerOfTwo(5) = false 

//power of two - pseudocode
//n= 8
//8/2 = 4 (reminder 0)
//4/2 = 2 (remider 0)
// 2/2 = 1 (reminder 0)
//if reminder is not 0 any step ,'n is not power of two
//if reminder is 0 and 'n' comes down to 1 eventualy , n us a power of two

function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  
  while (n > 1) {
       console.log(n);
    if (n % 2 !== 0) {
      return false
    }
    console.log(n);

    n = n / 2
  }
  return true
}

// console.log(isPowerOfTwo(1)) //true
// console.log(isPowerOfTwo(2)) //true
// console.log(isPowerOfTwo(5))  //false
console.log(isPowerOfTwo(46))
console.log(isPowerOfTwo(8))

// input size reduced by half - O(logn)