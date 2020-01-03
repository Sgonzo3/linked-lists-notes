// Linked Lists
// ALGORITHM	AVERAGE	WORST CASE
// Space	0(n)	0(n)
// Search	0(n)	0(n)
// Insert	0(1)	0(1)
// Delete	0(1)	0(1)

// Stack time complexity
// ALGORITHM	AVERAGE	WORST CASE
// Space	0(n)	0(n)
// Search	0(n)	0(n)
// Insert	0(1)	0(1)
// Delete	0(1)	0(1)

// Queue time complexity
// ALGORITHM	AVERAGE	WORST CASE
// Space	0(n)	0(n)
// Search	0(n)	0(n)
// Insert	0(1)	0(1)
// Delete	0(1)	0(1)


class Node {
  constructor(item) {
    this.val = item;
    this.next = null;
  }
}
// probably need a way to create linkedList without initial value
// add method to detect if empty
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  size = () => {
    return this.count;
  }
  peekHead = () => {
    return this.head;
  }
  peekTail = () => {
    return this.tail;
  }
  insertHead = (item) => {
    let newNode = new Node(item);
    if(this.count === 0) {
      this.tail = newNode;
      this.head = newNode;
      this.count += 1;
      return this.count;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.count += 1;
    return this.count;
  }
  // enqueue, insert at back for queues
  insertTail = (item) => {
    if(this.count === 0) return insertHead(item);

    let newNode = new Node(item);
    this.tail.next = newNode;
    this.tail = newNode;
    ++this.count;
    return this.count;
  }
  // remove from back
  pop = () => {
    if(!this.tail) return;
    let current = this.head;
    while(current){
      if(!current.next.next){
        let popped = current.next;
        current.next = null;
        this.tail = current;
        --this.count;
        return popped;
      }
      current = current.next;
    }
  }
  // remove from top, for queues and stacks
  shift = () => {
    if(this.count === 0){
      return;
    }
    let shifted = this.head;
    this.head = shifted.next;
    --this.count;

    shifted.next = null;
    return shifted;
  }
  print() {
    let arr = [];
    let current = this.head;

    if(this.count === 0) return "NULL";

    while(current){
      arr.push(current.val);
      current = current.next;
    }

    return arr.join(' -> ');
  }

}

// Tests
const myList = new LinkedList();
console.log(myList.print())
myList.insertHead(5);
myList.insertHead(10);
myList.insertHead(2);
myList.insertHead(12);
console.log(myList.print(), myList.peekHead(), myList.peekTail())
myList.insertTail(45);
myList.insertTail(33);
myList.insertTail(44);
console.log(myList.pop(), myList.print(), myList.peekHead(), myList.peekTail())
