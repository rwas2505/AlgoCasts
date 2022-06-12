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

}

module.exports = { Node, LinkedList };
