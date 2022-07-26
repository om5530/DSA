class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else
            this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return this
    }
    unshift(value) {
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            let newNode = new Node(value)
            let temp = this.head
            this.head = newNode
            temp.prev = newNode

            //line 36 to 38 can alse return like this
            //     this.head.prev = newNode
            // this.head = newNode
        }
        this.length++
        return this
    }
    unshift(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }
    
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    insert(index, value) {
        if (index === 0) { return this.unshift(value) }
        if (index === this.length) return this.push(value)
        if (index < 0 || index >= this.length) {
            return false
        }
        const newNode = new Node(value)
        let before = this.get(index - 1)
        let after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return true

    }

    pop() {
        //if we have 0 item in LL
        if (!this.head) { //we can also say !this.tail  or this.length === 0
            return undefined
        }

        // //if we have two or more items   
        // let temp = this.tail
        //  this.tail = this.tail.prev
        //  this.tail.next = null
        //  temp.prev = null
        //  this.length--
        //  //only having one item
        //  if(this.length === 0){
        //      this.head = null
        //      this.tail = null
        //  }

        //we can also (from line 35 to 44) rearrage code like this for more readability 

        let temp = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }
    remove(index) {
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }
        if (index < 0 || index >= this.length) return undefined
        let temp = this.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null
        this.length--
        return temp
    }
    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }
    shift() {
        if(this.length === 0) return undefined
        let temp = this.head
        if(this.length === 1) {
             this.head = null 
             this.tail = null
         } else {
             this.head = this.head.next
             this.head.prev = null
             temp.next = null
         }
        this.length--
        return temp
    }
}

let MyDoublyLinkedList = new DoublyLinkedList(1)
MyDoublyLinkedList.push(2)