//FIFO first in first out

//queue on array
//adding from start is o(n) and removing from end is o(1) 
//or adding from end is o(1) and removing from start is o(n) 
//whatever we do one end is going to be o(n)


//queue on stack
//adding from start is o(1) and removing from end is o(n) 
//or adding from end is o(1) and removing from start is o(1)  
//we will do enqueue from last and dequeue from start and they both are o(1)

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    enqueue(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }



    dequeue() {
        if (this.length === 0) {
            return undefined
        }
        let temp = this.first
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return temp

    }
}
let myQueue = new Queue(11)
myQueue.enqueue(3)
myQueue.enqueue(23) 