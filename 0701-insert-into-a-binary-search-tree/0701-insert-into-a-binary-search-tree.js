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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    // let currentNode = root;
    // if (!root) {
    //     return new TreeNode(val);
    //     }
    // while(true) {
    //       if (val > currentNode.val) {
    //           if (currentNode.right === null) {
    //               currentNode.right = new TreeNode(val);
    //               break;
    //               } else {
    //                   currentNode = currentNode.right;
    //               }
    //           }
    //     else {
    //         if (currentNode.left === null) {
    //             currentNode.left = new TreeNode(val);
    //             break;
    //             } else{
    //                 currentNode = currentNode.left;
    //             }
    //     }
    // }
    // return root;
    
    
    if (!root) {
        return new TreeNode(val);
    }
    let currentNode = root;
    
    while(currentNode) {
        if (val > currentNode.val) {
            if (currentNode.right) {
                currentNode = currentNode.right;
                continue;
            }
            currentNode.right = new TreeNode(val);
            return root;
        } else {
            if (currentNode.left) {
                currentNode = currentNode.left;
                continue;
            }
            currentNode.left = new TreeNode(val);
           return root;
        }
    }
    return root;
};






























