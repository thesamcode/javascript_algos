/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 * 
 * USING 0 index
 * - parent is located at: Math.floor((i - 1) / 2);
 * - left child is located at: (i * 2) + 1
 * - right child is located at: (i * 2) + 2
 */
 class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    if (!this.heap[1]){
      return null
    }
    else {
      return this.heap[1]
    }
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */

  // if the top parent value is present, then continue
  // if the top value parent is greater than the inserted number, then move it down.

  // insert(num) {

  //   this.heap.push(num)
  //   var iMax = this.heap.length-1
  //   var iParent = Math.floor(iMax/2)

  //   while (this.heap[iParent] > this.heap[iMax]){
  //     if (this.heap[iParent] > this.heap[iMax]){
  //       var temp = this.heap[iParent]
  //       this.heap[iParent] = this.heap[iMax]
  //       this.heap[iMax] = temp;
  //     }
  //     return this.heap;
  // }

  insert(num){
    this.heap.push(num)
    var lastIndex = this.heap.leangth-1;
    var parentIndex = Math.floor((lastIndex)/2)
    var tempParent
    var tempLast
    var counter = 0
    while (parentIndex != 0){
      counter ++;
      if(this.heap[lastIndex]<this.heap[parentIndex]){
        tempParent = this.heap[parentIndex]
        tempLast = this.heap[lastIndex]
        this.heap[lastIndex]=tempParent
        this.heap[parentIndex]=tempLast
      }
      else break;
      lastIndex = parentIndexparentIndex = Math.floor((lastIndex-1)/2)
    }
    console.log(counter)
  }


  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }

  // /**
  //  * Inserts a new number into the heap and reorders heap to maintain order.
  //  * 1. Push new num to back.
  //  * 2. Iteratively swap the new num with it's parent while it is smaller than
  //  *    it's parent.
  //  * - Time: O(log n) logarithmic due to shiftUp.
  //  * - Space: O(1) constant.
  //  * @param {number} num The num to add.
  //  */
  //  insert(num) {
  //   this.heap.push(num);
  //   this.shiftUp();
  //   // .push on array returns the new length
  //   return this.size();
  // }

  // // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
  // shiftUp() {
  //   let idxOfNodeToShiftUp = this.heap.length - 1;

  //   while (idxOfNodeToShiftUp > 1) {
  //     const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

  //     const isParentSmallerOrEqual =
  //       this.heap[idxOfParent] <= this.heap[idxOfNodeToShiftUp];

  //     // Parent is supposed to be smaller so ordering is complete.
  //     if (isParentSmallerOrEqual) {
  //       break;
  //     }

  //     this.swap(idxOfNodeToShiftUp, idxOfParent);
  //     // after swapping the node is at idxOfParent now.
  //     idxOfNodeToShiftUp = idxOfParent;
  //   }
  // }


  

}

var myHeap = new MinHeap()
myHeap.insert(9,4,5);
console.log(myHeap);
console.log(myHeap.top());




