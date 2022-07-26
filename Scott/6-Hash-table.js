class HashTable{
    constructor(size = 7){
        this.dataMap = new Array(size)
    }

    _hash(key){
        let hash = 0
        for (let i = 0 ; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key,value){
        let index = this._hash(key)
        if(!this.dataMap[index]) {
            this.dataMap[index] =[]
        }
        this.dataMap[index].push([key,value])
        return this
    }

    get(key){
        let index = this._hash(key)
        if(this.dataMap[index]){
            for(let i =0;i<this.dataMap[index].length; i++) {
               if(this.dataMap[index][i][0] === key ){
                   return this.dataMap[index][i][1]
               } 
            }
        }
        return undefined 
    }

    keys(){
        let allKeys = []
        for(let i = 0; i<this.dataMap.length ; i++){
            if(this.dataMap[i]){
            for(let j = 0 ; j< this.dataMap[i].length ; j++){
                allKeys.push(this.dataMap[i][j][0])
            }
            }
        }
        return allKeys
    }
} 

let myHashTable = new HashTable()
myHashTable.set('bolts',1400)
myHashTable.set('washers',50)
myHashTable.set('lumber',70)






//Hash Table interview question
function itemInCommon(arr1,arr2){
    let obj1 = {}
    for ( let i= 0 ; i< arr1.length ; i++){
        obj1[arr1[i]] = true
    }
    for(let j =0 ; j < arr2.length ; j++){
      if(obj1[arr2[j]]){ return true} 
    }
    return false
}

let array1 = [1,3,5]
let array2 = [2,4,4]

// itemInCommon(array1,array2)