function merge(arr1 , arr2){
    let combined = new Array()
    let i = 0 
    let j = 0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            combined.push(arr1[i])
            i++
        }else{
            combined.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        combined.push(arr1[i])
        i++
    }
        while(j<arr2.length){
        combined.push(arr2[j])
        j++
    }
    return combined
    
}

// merge([1,3,7,8] , [2,4,5,6])


function mergeSort(array){
    if(array.length === 1){
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

// mergeSort([3,4,5,2,1])