// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

const isAnagram = function(s, t) {//big O(m + n)
    let s1 = s.split('').sort().join('');
    let t1 = t.split('').sort().join('');
    return s1 === t1;
}
