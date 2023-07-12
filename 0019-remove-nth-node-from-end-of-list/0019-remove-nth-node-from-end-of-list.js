/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function getLength(node) {
    let length = 1;
    while (node.next) {
        length++;
        node = node.next;
    }
    return length;
}
var removeNthFromEnd = function (head, n) {

    // Naive solution
    //     let temp = head;
    //     let length = getLength(head);
    //     if(n === length) {
    //         return head.next;
    //     }
    //     const prevNodeIndex = length - n;
    //    let curr = null;
    //     // 1 2 3 4 5 6          2
    //     for (let i = 0; i < prevNodeIndex; i++) {
    //         prev = temp;
    //         temp = temp.next;
    //     }
    //     prev.next = temp.next;

    //     return head;

    let left = head, right = head;

    for (let i = 0; i < n; i++) {
        right = right.next;
    }
    if (!right) {
        return head.next;
    }
    while (right.next) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return head;
};


























