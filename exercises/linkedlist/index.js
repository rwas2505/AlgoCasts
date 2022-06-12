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

  getFirst(){
    return this.head;
  }

  getLast(){
    if(!this.head){
      return null;
    };

    let currentNode = this.head;

    while(currentNode.next){
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return;
    }

    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head){
      return;
    }

    if(!this.head.next){
      this.head = null;
      return;
    }

    let currentNode = this.head;
    let nextNode = currentNode.next;

    while(nextNode.next){
      currentNode = nextNode;
      nextNode = currentNode.next;
    }

    currentNode.next = null;
  }

  insertLast(data){
    const newLastNode = new Node(data);

    if(!this.head){
      this.head = newLastNode;
    }

    let currentLastNode = this.getLast();
    
    currentLastNode.next = newLastNode;
  }

  getAt(index){
    if(!this.head){
      return null;
    }

    let counter = 0;
    let node = this.head;

    while(node){
      if (counter === index){
        return node;
      }

      counter++;
      node = node.next;
    }
    
    // my solution but not sure if works bc test hangs
    // while(counter < index){
    //   if(!node.next){
    //     return null;
    //   }

    //   counter +=1;
    //   node = node.next;
    // }

    return null;
  }
}

module.exports = { Node, LinkedList };
