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
    
// USING EXTRA SPACE
    
//     var obj = new Map();
//     while(headA) {
//         obj.set(headA, 1);
//         headA = headA.next;
//     }
    
//     while(headB) {
//         if (obj.get(headB)) {
//             return headB;
//         }
//         headB = headB.next;
//     }
    let currA = headA;
    let currB = headB;
    
    if (currA === currB) {
        return currA
    }
    
    while(currA !== currB) {
        currA = !currA ? headB : currA.next;
        currB = !currB ? headA : currB.next;
        // we can remove this step , coz while breaks if they are equal 
        // in that case we can just return currA || currB
        // if (currA === currB) {
        //     return currA;
        // }
    }
    return currA;
};