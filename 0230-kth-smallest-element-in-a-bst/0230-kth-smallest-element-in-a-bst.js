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
    return arr[k - 1];
};

function traverse(node, arr) {
    if (node) {
        traverse(node.left, arr);
        arr.push(node.val);
        traverse(node.right, arr);
    }
}