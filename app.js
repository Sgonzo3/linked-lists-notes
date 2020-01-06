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
  push = (item) => {
    if(this.count === 0) return insertHead(item);

    let newNode = new Node(item);
    this.tail.next = newNode;
    this.tail = newNode;
    ++this.count;
    return this.count;
  }

  // remove node from back of list
  pop = () => {
    // using length as counter would guard against lops in linked list
    let current = this.head;
    if(!this.tail) return;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
      --this.length;
      return current;
    }
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

  //find node at index, return node
  get(index) {
    if(index < 0 || index >= this.length) {
      return 'Invalid Index';
    }
    let counter = index;
    let current = this.head;
    while (counter) {
      counter--;
      current = current.next;
    }
    return current;
  }

  // find node at index, alter node value to new value
  set(index, newVal) {
    if(index < 0 || index >= this.length) {
      return 'Invalid Index';
    }
    let counter = index;
    let current = this.head;
    while (counter) {
      counter--;
      current = current.next;
    }
    current.val = newVal;
    return current.val;
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

  // print nodes as statement of node values and pointers
  print() {
    let statement = ``;
    let current = this.head;
    while(current){
      statement += `${current.val} -> `;
      current = current.next;
    }
    return statement + `NULL length: ${this.count}`;
  }

  // reverses order of each node in LinkedList, resets head and tail
  reverseLinkedList() {
    if(!this.head || !this.head.next) return this.head;

    let current = this.head;
    let temp = null;
    let prev = null;
    let tailIsSet = false;

    while(current){
      // sets tail to first node in reversal loop
      if(!tailIsSet){
        this.tail = current;
        tailIsSet = true;
      }
      //holds the initial pointer to next node
      temp = current.next;
      //sets current next pointer to the last node, or initial null
      current.next = prev;

      // move prev pointer to the current node
      prev = current;
      // move current pointer to initial next node
      current = temp;
    }
    // set new head
    this.head = prev;
    return this.head;
  }

  findCycle() {
    if(!this.head || !this.head.next) return false;

    let fast = this.head;
    let slow = this.head;

    while(fast && fast !== slow) {
      fast = fast.next;
      fast = fast.next;
      slow = slow.next;
    }
    if(fast === slow) return true;
    return false;
  }

  //remove node at position
  // removeNodeAt(index){
  //   let current = this.get(index);
  //   if(!current.next) {
  //     return this.pop();
  //   } else if(current === this.head) {
  //     return this.shift();
  //   } else {
  //     current.next = current.next.next;
  //     this.length--;
  //   }
  // }

  // removeDuplicates(){
  //   // hash might be better
  //   let storage = {};
  //   let current = this.head;
  //   while(current){
  //     storage[current.val] = true;
  //     current = current.next;
  //   }
  // }

  // find  nTH node from the back
  findFromBack(index) {
    if(index < 0 || index >= this.length) {
      return 'Invalid Index';
    }

    // assumes no length or tail property
    let fast = this.head;
    let slow = this.head;
    let count = index;

    while(count){
      fast = fast.next;
      count--;
    }
    while(fast){
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
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
myList.push(45);
myList.push(33);
myList.push(44);
console.log(myList.set(3, 99), myList.print(), myList.peekHead(), myList.peekTail(), )
console.log(myList.reverseLinkedList(), myList.peekTail())
console.log(myList.print())
console.log(myList.reverseLinkedList(), myList.peekTail())
console.log(myList.print(), myList.findFromBack(5))
