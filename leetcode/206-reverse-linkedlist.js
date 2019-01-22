// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

const reverseList = function(head) {
    if (!head || !head.next) return head;
    let prev = null;
    let cur = head;
    while (cur) {    // 1 -> 2 -> 3  cur===2
        let temp = cur.next;  //temp === 3
        cur.next = prev;  // prev === 1, cur.next === 1
        prev = cur;   // prev === 2
        cur = temp;  // cur.next ===1 !== 3
    }
    return prev
    
};
