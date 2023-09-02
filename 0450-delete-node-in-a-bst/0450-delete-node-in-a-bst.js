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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) {
        return root;
    }
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        // we found the node
        if (!root.left) {
            return root.right;
        }
        if (!root.right) {
            return root.left;
        }
        // Node has both children
        // you can use either of the below statements , if or else
        if (root.left && root.right) {
        // else {
            // minimum of right subtree
            let minNode = root.right;
            while(minNode.left) {
                  minNode = minNode.left
            }
            // minimum of right subtree is available in minNode
            root.val = minNode.val;
            // delete the node that we took as minNode, since it is available in right subtree
            root.right = deleteNode(root.right, root.val);
        }
    }
    return root;
};