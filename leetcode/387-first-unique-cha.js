// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

const firstUniqChar = function(s) { //Big O(n)
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
    }
     
    return -1
     
 };


// const firstUniqChar = function(s) { //Big O(n)
//     let map = {};
//     for (let i = 0; i < s.length; i++) {
//         map[s[i]] = map[s[i]] + 1 || 1
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] === 1) return i
//     }
    
//     return -1;
    
// };

