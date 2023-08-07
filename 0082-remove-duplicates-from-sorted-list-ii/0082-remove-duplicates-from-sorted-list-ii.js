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
    let dummy = new ListNode(null);
    dummy.next = head;
    let prev = dummy;
    
    while(head) {
        if (head.next && head.val === head.next.val) {
            // in the if only deletion happens previous is not updated coz 
            // still we need to find next unique value
            while(head.next && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next;
        } else {
            // update previous only when unique number is there
            prev = prev.next;
        }
        // update everytime
        head = head.next;
    }
    return dummy.next;
};