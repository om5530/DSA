class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinklist {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    let NewNode = new Node(value)
    if (this.length === 0) {
      this.head = NewNode
      this.tail = NewNode
    } else {
      this.tail.next = NewNode
      this.tail = NewNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) {
      return console.log('LinkList Is empty')
    }
    let temp = this.head
    let pre = temp
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      while (temp.next != null) {
        pre = temp
        temp = temp.next
      }
      this.tail = pre
      this.tail.next = null
    }
    this.length--
    return temp
  }

  unshift(value) {
    let NewNode = new Node(value)
    if (this.length === 0) {
      this.head = NewNode
      this.tail = NewNode
    } else {
      NewNode.next = this.head
      this.head = NewNode
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
    }else{

      this.head = this.head.next
      temp.next = null
    }
    this.length--
    return temp
  }

  get(index){
if(index < 0 || index >= this.length){
    return console.log('Enter valid index')
  }
  let temp = this.head
  for(let i=0 ; i<index ; i++){
     temp = temp.next
  }
  return temp
}
set(index, value){
  if(index < 0 || index >= this.length){
    return console.log('Enter valid index')
  }
  let temp = this.get(index)
  if(temp){
    this.value = value
    return true
  }
  return this || false
}

insert(index,value){
  if(index === 0) { return this.unshift(value)}
  if(index === this.length) return this.push(value)
  if(index < 0 || index >= this.length){
    return console.log('Enter valid index')
  }
  let NewNode = new Node(value)
  let beforeIndex = this.get(index - 1)
  NewNode.next = beforeIndex.next
  beforeIndex.next = NewNode
this.length++
return this

  }

remove(index){
  if(index === 0){
      return this.shift()
  }
  if(index === this.length - 1){
    return this.pop()
  }
  if(index < 0 || index >= this.length){
    return console.log('Enter valid index')
  }
  let beforeIndex = this.get(index - 1)
  let temp = this.get(index)
  beforeIndex.next = temp.next
  temp.next = null

  this.length--
  return temp
}  
reverse(){
  let temp = this.head
  this.head = this.tail
  this.tail = temp
  let next = temp.next
  let pre = null
  for(let i = 0 ; i<this.length ; i++){
    next = temp.next
    temp.next = pre
    pre = temp
    temp = next
  }
  return this
}

}

let mySinglyLinklist = new SinglyLinklist()

mySinglyLinklist.push(1)
mySinglyLinklist.push(2)
mySinglyLinklist.push(3)
mySinglyLinklist.push(4)
mySinglyLinklist.push(5)
// console.log(mySinglyLinklist.pop())
// console.log(mySinglyLinklist.unshift(0))
// mySinglyLinklist.shift()
// console.log(mySinglyLinklist)
// mySinglyLinklist.set(4,10)
mySinglyLinklist.remove(4)
console.log(mySinglyLinklist)

