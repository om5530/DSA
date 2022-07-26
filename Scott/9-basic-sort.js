//bubble Sort

function bubbleSort(array){
    for(let i = 5 ; i>0 ; i--){
         for( let j = 0 ; j<5 ;){
             if(array[j] >array[j+1]){
                 let temp = array[j]
                 array[j] = array[j+1]
                 array[j+1] = temp
             }else{j++}
                 
             
         }
    }
    return array
}

// bubbleSort([4,2,6,5,1,3])


//Selection Sort

function selectionSort(array){
    let min 
    for(let i = 0 ; i<array.length -1 ;i++){
        min = i
        for(let j = i+1 ; j < 1.; j++){
             if(array[j] < array[min]) { min = j}
            console.log(min)
        }
        if(i !== min){
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
        }
        }
    return array
}

// selectionSort([4,2,6,5,1,3])


//Insertion Sort 
function insertionSort(array){
    let temp 
    for(let i = 1 ; i<array.length ; i++){
        temp = array[i]
        for(var j =i -1 ;array[j] > temp && j>-1 ; j--){
            array[j+1] = array[j]
         }
        array[j+1] = temp
    }
    return array
}

// insertionSort([4,2,6,5,1,3])