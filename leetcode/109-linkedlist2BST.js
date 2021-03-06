// 109. Convert Sorted List to Binary Search Tree

// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted linked list: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// const sortedListToBST = function(head) {
//     if (!head) return null;
//     if (!head.next) return new TreeNode(head.val);
    
//     let slow = head;
//     let fast = head;
//     let prev = null;
   
   
//     while (fast && fast.next) {
//         prev = slow;
//         slow = slow.next;
//         fast = fast.next.next;      
//     }
    
//     prev.next = null;
    
//     let root = new TreeNode(slow.val);
    
//     root.left = sortedListToBST(head);
//     root.right = sortedListToBST(slow.next);
    
//     return root;
// };

// Time complexity: Big O(NlogN);
// Space complexity: O(logN)


// Solution 2 (optimized): 
const sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
        
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    // subtrees are BSTs as well
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root; 
};

const sortedListToBST = function(head) {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val);   
    let arr = [head.val];

    while (head && head.next) {
        head = head.next;
        arr.push(head.val)
    }

    return sortedArrayToBST(arr);   
};

// Time complexity: Big O(N);
// Space complexity: Big O(N);