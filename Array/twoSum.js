//You may assume that eacch input would have exactly one solution, and
//You may not use the same element twice
//--Example ([2,7,11,15],9) --> [0,1]
//twoSum([3,2,4],9)  --> [1,2]

function twoSum(arr, target) {
  const numsVisited = {}; //lookup time on object is o(1)  //on array its o(n)   //{2:0, 7:1}

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    numsVisited[arr[i]] = i;
    if (numsVisited[complement] !== undefined) {
      res.push(i);
      console.log(i)
      res.push(numsVisited[complement]);
    }
  }
  return res;
}

// console.log(twoSum([2, 3, 6], 9));
console.log(twoSum([2, 7, 11, 15], 9));
