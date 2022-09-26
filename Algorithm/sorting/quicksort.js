function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
    }
  }
  [array[pivotIndex], array[swapIndex]] = [array[swapIndex], array[pivotIndex]];
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  while (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array
}

console.log(pivot([4, 6, 1, 7, 3, 2, 5]));
console.log(quickSort([4, 6, 1, 7, 3, 2, 5]));