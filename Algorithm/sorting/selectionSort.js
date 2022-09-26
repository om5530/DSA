function selectionSort(array){
  let min 
  for(let i = 0 ; i<array.length -1 ;i++){
      min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
          //  console.log('indexJ ' +array[j] ,'indexMin ' +array[min] ,'min ' + min , 'inner ' + j) 
      }
      if (i !== min) {
        [array[i], array[min]] = [array[min], array[i]];
      }
      }
  return array
}

console.log(selectionSort([4,2,6,5,1,3,8,7]))
