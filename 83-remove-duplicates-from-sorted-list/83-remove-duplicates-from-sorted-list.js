/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let currentNode = head;
    while(currentNode) {
        let distinctNode = currentNode.next;
        while(distinctNode !== null && distinctNode.val === currentNode.val) {
            distinctNode = distinctNode.next;
        }
        currentNode.next = distinctNode;
        currentNode = distinctNode;
    }
    return head;
};