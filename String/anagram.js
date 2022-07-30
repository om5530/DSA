//String Anagram
// 'hello' => 'llheo'

//condition
//length check (for both strings);

//condition 2
//string'hello'
//{h:1,e:1,l:2,o:1}

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

console.log(isAnagram('om', 'mo'));
