// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

const maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// const maxDepth = function(root) {
//     let arr = [root, 's'];
//     let counter = 0
//     while(arr.length > 1) {
//         let node = arr.shift()
//         if (node === 's') {
//             counter++;
//             arr.push('s')
//         } else {
//             if (node.left) arr.push(node.left);
//             if (node.right) arr.push(node.right); 
//         }   
//     }
//     return counter + 1;
// };