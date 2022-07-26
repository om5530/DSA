class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}


class DLL {
  constructor(value) {
    let newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
  push(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }


  pop() {
    if (this.length === 0) {
      return undefined
    }
    let temp = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      temp.prev = null
      this.tail.next = null
    }
    this.length--
    return temp
  }

  unshift(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if (this.length === 0) {
      return undefined
    }
    let temp = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      temp.next = null
      this.head.prev = null
    }
    this.length--
    return temp
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

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false
    }
    if (index === 0) {
      return this.unshift(value)
    }
    if (index === this.length) {
      return this.push(value)
    }
    let newNode = new Node(value)
    let before = this.get(index - 1)
    let after = this.get()
    before.next = newNode
    after.prev = newNode
    newNode.next = after
    newNode.prev = before
    this.length++
    return true


  }

  remove(index) {

    if (index < 0 || index >= this.length) {
      return false
    }
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    let temp = this.get(index)
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.prev = null
    temp.next = null
    this.length--
    return temp

    // let before = this.get(index - 1)
    // let after = this.get(index + 1)
    // before.next = null
    // after.prev = null
    // before.next = after
    // after.pre = before

  }

}

let myDLL = new DLL(8)
myDLL.push(9)
myDLL.push(10)
myDLL.push(11)

console.log(myDLL.shift())