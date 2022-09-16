let arr = [ 2,1,4,3,5,6,7,8,10,6]

function partition(arr,left,right){
  let i = left
  let j = right
  let pivot = arr[Math.floor((left+right )/2)]
  while(i <= j){
    while(arr[i] < pivot){
            i++
    }
    while(arr[j] > pivot){
      j--
    }
    if(i <= j ){
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return i
}

function quickSort(arr,left=0,right=arr.length -1 ){

  if(right > left){ 
     let pivot = partition(arr,left,right)
     quickSort(arr,left,pivot-1)
     quickSort(arr,pivot+1,right)
  }
  return arr
}
console.log(quickSort(arr))