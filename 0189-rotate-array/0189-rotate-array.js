/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    // USNG EXTRA SPACE
    // let rotatedArray = [];
    // for (let i = nums.length - k; i < nums.length; i++) {
    //     rotatedArray.push(nums[i]);
    // }
    // for(let i = 0; i < nums.length - k; i++) {
    //     rotatedArray.push(nums[i]);
    // }
    // nums = rotatedArray;
    
    // (nums.splice(nums.length - k)).concat(nums.splice(0, nums.length))
    k = k % nums.length;
    const details = nums.splice(nums.length - k);
    nums.unshift(...details);
};