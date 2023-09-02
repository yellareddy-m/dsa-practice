/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) {
        return root;
    }
    let arr = [];
    traverse(root, arr);
    // we can stop traversing after k nodes and return , pass k to function traverse
    // return arr[k - 1];    
    return arr[k - 1];

};

function traverse(node, arr) {
    // stop traversing after k nodes reached, for this pass k 
    // if (node && arr.length < k) {    
    if (node) {
        traverse(node.left, arr);
        arr.push(node.val);
        traverse(node.right, arr);
    }
}