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
}

const linkedlist = new Linkedlist();
linkedlist.prepend('test1');
console.log(linkedlist);
