
const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);





class ListNode {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    
    constructor() {
        this.head = null;
    }

    isEmpty(data) {
        return this.head == null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data)
        let runner = this.head;
        if(this.head == null){
            this.head = newNode;
        }
        while(runner != null){
            if(runner.next == null){
                runner.next = newNode;
            }
            runner = runner.next
        }
    }

    insertAtBackRecursive(data, runner = this.head) {
        if (this.isEmpty()) {
            this.head = new ListNode(data);
            return this;
        }
    
        if (runner.next === null) {
            runner.next = new ListNode(data);
            return this;
        }
        return this.insertAtBackRecursive(data, runner.next);
        }

    insertAtBackMany(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
        }

    removeHead() {
        const temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    insertAtFront(data) {
        const temp = this.head;
        this.head = new ListNode(data);
        this.head.next = temp;
    }
    
    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
            }
            return arr;
        }
    
    average() {
        // if(this.isEmpty()){
        //     return 0;
        // }
        let runner = this.head;
        let sum = runner.data;
        let count = 1;
        if(runner === null){
            return 0;
        }
        
        while (runner.next != null){
            runner = runner.next;
            sum += runner.data;
            count++;
        }
        return sum/count;
    }    



}


singleNodeList.removeHead();
console.log(singleNodeList);

singleNodeList.insertAtFront(5);
console.log(singleNodeList.toArr());

console.log(testNodeList.insertAtBack(1));