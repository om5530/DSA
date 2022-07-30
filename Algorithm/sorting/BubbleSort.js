//Problem -Given an array of intergers, sort the array
// const arr = [-6,20,8,-2,4]
// bulleSort(arr) => Should return [-6,-2,4,8,20]

//compare adjacent element in the array and swap the postion if they are not in the intended order
//Repeat the instruction as you step through each element inthe array
// once you step through the whole array with no swaps, the array is sorted

function bubbleSort(array){
  for(let i=array.length - 1;i>0 ;i--){
    for(let j = 0 ; j<i; j++){
      if(array[j] > array[j+1]){
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
}

