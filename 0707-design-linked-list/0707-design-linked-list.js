var Node = function(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let currNode = this.head;
    let i = 0;
    while(currNode) {
        if (i === index) {
            return currNode.val;
        }
        currNode = currNode.next;
        i++;
    }
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const tempNode = new Node(val);
    tempNode.next = this.head;
    this.head = tempNode;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const tempNode = new Node(val);
    let currNode = this.head;
    if (currNode === null) {
        this.head = tempNode;
        return;
    }
    while(currNode.next) {
        currNode = currNode.next       
    };
    currNode.next = tempNode;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const tempNode = new Node(val);
    let currNode = this.head;
    if(index === 0) {
       this.addAtHead(val);
        return;
    }
    let i = 0;
    while (currNode) {
        if (index === i + 1) {
            let temp = currNode.next;
            currNode.next = tempNode;
            tempNode.next = temp;
            return this;
        }
        currNode = currNode.next;
        i++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    let i = 0;
    let currNode = this.head;
    while (currNode) {
        // for deleting at index, we need index - 1 element to changes its next;
        if (index === i + 1) {
            currNode.next = currNode.next?.next;
            return
        }
        currNode = currNode.next;
        i++;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */