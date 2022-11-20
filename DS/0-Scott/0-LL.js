// What is linked list?
//. LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array. 


// What Is linked list why is it used?
//Linked lists are linear data structures that hold data in individual objects called nodes. These nodes hold both the data and a reference to the next node in the list. Linked lists are often used because of their efficient insertion and deletion.


//Where we are using linked list?
// Linked Lists are very useful in dynamic memory allocation. These lists are used in operating systems. insertion and deletion in linked lists are very useful. Complex data structures like tree and graphs are implemented using linked lists.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {//to check LL is empty
            //null is false
            this.head = newNode
            this.tail = newNode
        } else {//to insert the node if it is not empty
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        //edge case
        //1.LL does not have anything
        //2.LL have one item  
        //3.LL if have multiple item then remove last item and return that removed item and move tail over to prev


        //if we have 0 item in LL
        if (!this.head) {
            return undefined
        }

        //if we have two or more items
        let temp = this.head
        let pre = temp
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        //only having one item
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this

    }
    shift() {
        if (!this.head) {
            return undefined
        }
        let temp = this.head
        this.head = this.head.next

        this.length--
        if (this.length === 0) {
            // this.head = null //   this.head = this.head.next this line works for this 
            this.tail = null
        }
        temp.next = null
        return temp
    }
    get(index){
        if(index<0 || index>=this.length){
          return  undefined
        }
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
          }
     
       return temp 
    }

    insert(index,value){
        if(index === 0) { return this.unshift(value)}
        if(index === this.length) return this.push(value)
           if(index<0 || index>=this.length){
          return  false
        }
        const newNode = new Node(value)
         let temp = this.get(index - 1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }
    remove(index){
        if(index === 0){
            return this.shift()
        }
         if(index === this.length -1){
            return this.pop()
        }
        if(index < 0 || index >= this.length) return undefined
        
        let before = this.get(index - 1)
        let temp = before.next //Or you can also write let temp = this.get(index)
        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for(let i=0 ;i<this.length ; i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
    set(index,value){
        if(index<0 || index>=this.length){
        return  undefined
      }
      let temp = this.get(index)
      if(temp){
          temp.value = value
          return true
      }
      return false
  
}
}
let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
// console.log(myLinkedList.get(4))