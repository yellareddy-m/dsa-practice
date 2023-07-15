/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // const set = new Set();
    // let temp = head;

    // while (temp) {
    //     if (set.has(temp)) {
    //         return true;
    //     }
    //     set.add(temp);
    //     temp = temp.next;
    // }
    // return false;

    // fast slow pointers
    // let slow = head, fast = head.next;
    // while (slow !== head) {
    //     slow = slow.next;
    //     fast = fast?.next?.next;
    //     if (fast === slow) {
    //         return true;
    //     }
    // }
    // return false;

    // using flag and modification of node structure 
    let temp = head;
    while (temp) {
        if (temp.flag === 1) {
            return true;
        }
        temp.flag = 1;
        temp = temp.next;
    }
    return false;
};