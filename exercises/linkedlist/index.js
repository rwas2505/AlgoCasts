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

}

module.exports = { Node, LinkedList };
