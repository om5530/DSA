function palindrome(string) {
  string = string.toLowerCase();
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(palindrome('Able was I ere I saw Elba'));
console.log(palindrome('madam'));
