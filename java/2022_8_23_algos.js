/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * TODO: implement this method
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    this.items.push(item);
    return this.size();
  }

  /**
   * TODO: implement this method
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.items.shift()
    return this.items[0]
  }

  /**
   * TODO: implement this method
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  /**
   * TODO: implement this method
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items[0] == null;
  }

  /**
   * TODO: implement this method
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }

}

class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    // In order to maintain an O(1) enqueue time complexity like .push with an array
    // We add a tail to our linked list so we can go directly to the last node
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * TODO: implement this method
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    const newTail = new QueueNode(item)
    if (this.isEmpty()) {
      this.head = newTail
      this.tail = newTail
      // return this.qSize()
    }
    else {
      this.tail.next = newTail
      this.tail = newTail
    }
    this.size++;
    return this.qSize()
  }

  /**
   * TODO: implement this method
   * Notice how this Time Complexity of this algo is O(1) not O(n) like the array version
   * Removes and returns the first item of this queue.
   * - Time: O(1) constant.
  * - Space: O(1) constant.
  * @returns {any} The removed item.
  */
  dequeue() {
    if (this.head == null) return undefined
    const newHead = this.head
    this.head = this.head.next;
    this.size--;
    return newHead.data;
    }

  /**
   * TODO: implement this method
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    if(this.head == null) return undefined
    return this.head.data
  }

  /**
   * TODO: implement this method
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.qSize() === 0;
  }

  /**
   * TODO: implement this method
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  qSize() {
    return this.size;
  }

}

// var queue1 = new Queue();

// queue1.enqueue(1)
// queue1.enqueue(2)
// queue1.enqueue(3)
// queue1.enqueue(4)
// queue1.enqueue(5)
// console.log(queue1);
// console.log(queue1.dequeue());
// console.log(queue1.front());
// console.log(queue1.isEmpty());
// console.log(queue1.size());


var queue2 = new LinkedListQueue();

queue2.enqueue(1)
queue2.enqueue(2)
queue2.enqueue(3)
queue2.enqueue(4)
queue2.enqueue(5)
console.log(queue2.qSize());
console.log(queue2.dequeue());
console.log(queue2.front());
console.log(queue2.isEmpty());
console.log(queue2.qSize());