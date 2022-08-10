function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    console.log(i);
    for (let j = 0; j < i; j++) {
      console.log(j)
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array
}

bubbleSort([2, 7, 4, 1, 5, 3]);
console.log(bubbleSort([2, 7, 4, 1, 5, 3]))