//Given a string the length of the longest substring without
//repeat characters
//!---Example
//length of longestSubString('abcabcbb) --> 3 since length of 'abc'
//lengthOdLongestSubstring('bbbbb') --> 1 since length of 'b'

const lengthOfLongestSubstring = (s) => {
  let wordMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

    if (wordMap[endChar] >= windowStart) {
      windowStart = wordMap[endChar] + 1;
    }
    console.log(wordMap);
    wordMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

const lengthOf = (s) => {
  let map = new Map()
  for (let el of s) {
    if (!map.has(el)) {
      map.set(el, 1)
    }
  }
  return map.size
}

console.log(lengthOf('abcabcbb'));
console.log(lengthOf('bbbbbb'));