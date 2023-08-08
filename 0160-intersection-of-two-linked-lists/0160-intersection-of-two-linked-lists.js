/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var obj = new Map();
    while(headA) {
        obj.set(headA, 1);
        headA = headA.next;
    }
    
    while(headB) {
        if (obj.get(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};