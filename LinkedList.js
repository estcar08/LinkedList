class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  printLL() {
    var n = this.head;
    while (n != null) {
      console.log(n.data + " ");
      n = n.next;
    }
  }

  getSize() {
    var temp = this.head;
    var count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  push(new_data) {
    var new_node = new ListNode(new_data);
    new_node.next = this.head;
    this.head = new_node;
  }

  append(new_data) {
    var new_node = new ListNode(new_data);
    if (this.head == null) {
      this.head = new ListNode(new_data);
      return;
    }

    new_node.next = null;

    var last = this.head;
    while (last.next != null) last = last.next;

    last.next = new_node;
    return;
  }

  appendMid(new_data) {
    var new_node = new ListNode(new_data);
    if (this.head == null) {
      this.head = new ListNode(new_data);
      return;
    }
    const size = this.getSize();
    const count = size % 2 === 0 ? size / 2 : size + 1 / 2;
    var temp = this.head;
    var current = null;
    for (var i = 0; i < count; i++) {
      current = temp;
      temp = temp.next;
    }
    current.next = new_node;
    new_node.next = temp;
  }

  removeFirstNode() {
    if (this.head == null) return null;
    this.head = this.head.next;
    return this.head;
  }

  removeLastNode() {
    if (this.head == null) return null;

    if (this.head.next == null) {
      return null;
    }

    var second_last = this.head;
    while (second_last.next.next != null) second_last = second_last.next;

    second_last.next = null;

    return this.head;
  }

  removeMidNode(){
    if (this.head == null) return null;

    if (this.head.next == null) {
      return null;
    }
    var copyHead = this.head;
    const count = this.getSize();
  }
}

let head = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(3);

head.next = node2;
node2.next = node3;

let list = new LinkedList(head);

list.push(8);

list.appendMid(7);

list.printLL();
