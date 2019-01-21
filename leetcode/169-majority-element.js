// 169. Majority Element

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2


const majorityElement = function(nums) { // Big O(nlogn)
    return nums.sort()[Math.floor(nums.length/2)]   
};



// const majorityElement = function(nums) { // Big O(n)
//     let map = {};
//     let maxNum;
//     let max = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = map[nums[i]] + 1 || 1;
//     }
//     for (let key in map) {
//         if (map[key] > max) {
//             max = map[key]
//             maxNum = key
//         }    
//     }
//     return maxNum 
// };