function isSquareCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        isSquare = true;
      }
      if (j === array2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
}
//Time complexity  0(n^2)
console.log(isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]));


//arr1 = [ 1,2,3,4] ,arr2 = [1,9,4,16] -case 1
//arr1 = [ 1,2,4,2] ,arr2 = [1,4,4,16] -case 2

//map1 = {1:1 ,2:2,4:1}
//map2 = {1:1 ,4:2,16:1}

function checkSquare(array1, array2) {
  let map1 = {};
  let map2 = {};
  for (item of array1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  for (item of array2) {
    map2[item] = (map2[item] || 0) + 1;
  }
  for (let key in map1) {
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
}
//complexity is o(n)
console.log(checkSquare([1, 2, 4, 2], [1, 4, 4, 16]));
