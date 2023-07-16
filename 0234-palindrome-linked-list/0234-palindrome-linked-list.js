/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // using array solution
    // let temp = head;
    // const array = [];
    // while(temp) {
    //     array.push(temp.val);
    //     temp = temp.next;
    // }
    // let left = 0, right = array.length - 1;
    // while (left < right) {
    //     if (array[left] !== array[right]) {
    //         return false;
    //     }
    //     left++;
    //     right--;
    // }
    // return true;

    // Using fast and slow pointers

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // reached middle of linked list
    // reverse the second part of linked list
    let prev = null;
    let curr = slow;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    // now slow has reched null , which is now previous variable (prev = slow)
    // compare from head and prev 
    while (prev && head) {
        if (prev.val !== head.val) {
            return false;
        }
        prev = prev.next;
        head = head.next
    }
    return true;
};





