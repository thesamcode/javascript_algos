/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
 class Stack {
  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor() {
    this.items = [];
  }

  /**
   * TODO: implement this method
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
   push(item) {
    var node = new StackNode(item);
    var currHead = this.head;
    this.head = node;
    node.next = currHead;
    return this.size();
   }

   /**
    * TODO: implement this method
    * Removes the top / last item from this stack.
    * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @returns {any} The removed item or undefined if this stack was empty.
    */
   pop() {
    if (this.head == null) return undefined
    var curr = this.head;
    this.head = this.head.next;
    return curr;
   }
 
   /**
    * TODO: implement this method
    * Retrieves the top / last item from this stack without removing it.
    * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @returns {any} The top / last item of this stack.
    */
   peek() {
    if(this.head == null) return undefined
    return this.head
   }
 
   /**
    * TODO: implement this method
    * Returns whether or not this stack is empty.
    * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @returns {boolean}
    */
   isEmpty() {
    if(this.head == null) return true;
    return false;
   }
 
   /**
    * TODO: implement this method
    * Returns the size of this stack.
    * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @returns {number} The length.
    */
   size() {
    if(this.head == null) return 0;
    var runner = this.head;
    var size = 1;
    while(runner.next != null){
      runner = runner.next
      size++
    }
    return size;
   }

}

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  /**
   * TODO: implement this method
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
   push(item) { 
    this.items.push(item);

    return this.items.length;
}

/**
 * TODO: implement this method
 * Removes the top / last item from this stack.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {any} The removed item or undefined if this stack was empty.
 */
pop() { 
    if(this.isEmpty()) return null;
    else {
        return this.items.pop();
    }
}

/**
 * TODO: implement this method
 * Retrieves the top / last item from this stack without removing it.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {any} The top / last item of this stack.
 */
peek() { 
    return this.items[this.items.length - 1];
}

/**
 * TODO: implement this method
 * Returns whether or not this stack is empty.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {boolean}
 */
isEmpty() { 
    return this.items[0] == null;
}

/**
 * TODO: implement this method
 * Returns the size of this stack.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {number} The length.
 */
size() { 
    return this.items.length;
}

}


var stack1 = new Stack()
var llStack1 = new LinkedListStack()

stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
stack1.push(5)
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.size());

llStack1.push(1)
llStack1.push(2)
llStack1.push(3)
llStack1.push(4)
llStack1.push(5)
console.log(llStack1.pop());
console.log(llStack1.peek());
console.log(llStack1.size());

