//Given a string, find the longest palindromic substring in s
//--Example
//longestPalindromic('cbbd')--> 'bb'
//longestPalindromic('abba')--> 'abba'
//longestPalindromic('a) -->'a'

function longestPalindromic(s) {
  let startIndex = 0;
  let maxLength = 1;
  //helperFunction
  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalindromeLength = right - left + 1;
      if (currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }
  return s.slice(startIndex, startIndex + maxLength);
}



//Time complexity is o(n^2) Since expanding a palindrome around its center could take up to o(n),and we do this each character
//space complexity:o(1)

console.log(longestPalindromic('abba'))