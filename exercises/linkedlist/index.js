// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  };

  insertFirst(data){
    const existingHead = this.head;

    const newNode = new Node(data, existingHead);

    this.head = newNode;

    // oneLiner would be this.head = new Node(data, this.head);
  };

  size(){
    if(!this.head){
      return 0;
    };

    let counter = 1;
    let currentNode = this.head;

    while(currentNode.next){
      counter += 1;

      currentNode = currentNode.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }

    if(index === 0){
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();

    const newNode = new Node(data, previous.next);

    previous.next = newNode;

    // const newNode = new Node(data);

    // if (!this.head || index === 0){
    //   this.insertFirst(data);
    //   return;
    // }
    
    // const previous = this.getAt(index - 1);
  
    // if (!previous){
    //   this.insertLast(data);
    //   return;
    // }

    // const next = previous.next;

    // previous.next = newNode;

    // newNode.next = next;

    // return;
  }

  forEach(func){
    if(!this.head){
      return;
    }

    let currentNode = this.head;
    let index = 0;

    while(currentNode){
      func(currentNode, index);
      index++;
      currentNode = currentNode.next;
    }
  }

  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };