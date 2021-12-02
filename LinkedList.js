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

  removeMidNode() {
    if (this.head == null) return null;

    if (this.head.next == null) {
      return null;
    }

    var slow_ptr = this.head;
    var fast_ptr = this.head;

    var prev = null;

    while (fast_ptr != null && fast_ptr.next != null) {
      fast_ptr = fast_ptr.next.next;
      prev = slow_ptr;
      slow_ptr = slow_ptr.next;
    }

    prev.next = slow_ptr.next;

    return this.head;
  }

  removeNodeByPosition(position) {
    if (this.head == null || position < 0) return;

    var temp = this.head;

    if (position == 0) {
      this.head = temp.next;
      return;
    }

    for (let i = 0; temp != null && i < position - 1; i++) temp = temp.next;

    if (temp == null || temp.next == null) return;

    var next = temp.next.next;

    temp.next = next;
  }

  searchInNode(x) {
    var current = this.head;
    while (current != null) {
      if (current.data == x) return true;
      current = current.next;
    }
    return false;
  }

  startSort(reverse) {
    this.mergeSort(this.head, reverse);
  }
  mergeSort(head, reverse) {
    if (head.next == null) return head;

    var mid = this.findMid(head);
    var head2 = mid.next;
    mid.next = null;
    var newHead1 = this.mergeSort(head, reverse);
    var newHead2 = this.mergeSort(head2, reverse);
    var finalHead = this.merge(newHead1, newHead2, reverse);
    return (this.head = finalHead);
  }

  merge(head1, head2, reverse) {
    var merged = new ListNode(-1);
    var temp = merged;

    while (head1 != null && head2 != null) {
      if (reverse) {
        if (head1.data > head2.data) {
          temp.next = head1;
          head1 = head1.next;
        } else {
          temp.next = head2;
          head2 = head2.next;
        }
      } else {
        if (head1.data < head2.data) {
          temp.next = head1;
          head1 = head1.next;
        } else {
          temp.next = head2;
          head2 = head2.next;
        }
      }

      temp = temp.next;
    }

    while (head1 != null) {
      temp.next = head1;
      head1 = head1.next;
      temp = temp.next;
    }

    while (head2 != null) {
      temp.next = head2;
      head2 = head2.next;
      temp = temp.next;
    }
    return merged.next;
  }

  mergeRev(head1, head2) {
    var merged = new ListNode(-1);
    var temp = merged;

    while (head1 != null && head2 != null) {
      if (head1.data > head2.data) {
        temp.next = head1;
        head1 = head1.next;
      } else {
        temp.next = head2;
        head2 = head2.next;
      }
      temp = temp.next;
    }

    while (head1 != null) {
      temp.next = head1;
      head1 = head1.next;
      temp = temp.next;
    }

    while (head2 != null) {
      temp.next = head2;
      head2 = head2.next;
      temp = temp.next;
    }
    return merged.next;
  }

  findMid(head) {
    var slow = head,
      fast = head.next;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
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

//console.log(list.searchInNode(8));

list.printLL();
