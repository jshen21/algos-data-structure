// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701

const titleToNumber = function(s) { //Big O(n)
    let result = 0;
    for (let i = s.length -1; i >= 0; i--) {
        result += (s[i].charCodeAt(0)-64) * Math.pow(26, s.length - 1 - i)
    }
    return result
    
};


// const titleToNumber = function(s) { //Big O(n)
//     let obj = {}
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let count = 1;
//     let result = 0;
//     let t = 1
//     for (let i = 0; i < str.length; i++) {
//         obj[str[i]] = count;
//         count++;
//     }
//     for (let j = s.length - 1; j >= 0; j--) {
//         result += obj[s[j]] * t;
//         t *= 26     
//     }
//     return result  
// };
