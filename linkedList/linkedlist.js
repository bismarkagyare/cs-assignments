class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  //insert node at the start of list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // insert a node at the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  //return the total number of nodes
  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  // return the head or first node item
  getHead() {
    return this.head;
  }
  // return the last item or node
  getTail() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // return the node at a given index
  getNodeAt(index) {
    if (index < 0 || this.head === null) return null;

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  //remove the last node or item
  pop() {
    if (this.head === null) return null;

    let currentNode = this.head;
    if (currentNode.next === null) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    }

    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    return currentNode.value;
  }
}

const linkedlist = new Linkedlist();
linkedlist.prepend('test1');
linkedlist.append('test2');
linkedlist.append('test3');
linkedlist.append('test4');
console.log(linkedlist);

console.log(linkedlist.size());
console.log(linkedlist.getHead());
console.log(linkedlist.getTail());
console.log(linkedlist.getNodeAt(2));
console.log(linkedlist.pop());
