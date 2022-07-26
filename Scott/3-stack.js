//LIFO last in first out

//Stack on array
//If you are goimng to do a stack with an array always do it on the end ,not the beginning
//because pop and push in array is o(1) which is constant

//stack  on linkedlist 
//If you are goimng to do a stack with an linklist always do it on the start,not the ending because null pointer is at the end.
//because shift and unshift in stack is o(1) which is constant


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        let newNode = new Node(value)
        this.top = newNode
        this.length = 1

    }
    push(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) {
            return undefined
        }
        let temp = this.top
        this.top = this.top.next
        temp.next = null
        this.length--
        return temp
    }

}


let myStack = new Stack(11)