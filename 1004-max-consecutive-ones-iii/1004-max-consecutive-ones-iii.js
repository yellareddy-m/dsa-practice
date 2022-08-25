/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0,
        longestSubArrayLength = 0,
        maxOnesCount = 0;
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 1) {
            maxOnesCount += 1;    
        }
        if ((end - start + 1 - maxOnesCount) > k) {
            if (nums[start] === 1) {
                maxOnesCount -= 1;
            }
            start += 1;
        }
        longestSubArrayLength = Math.max(longestSubArrayLength, end - start + 1);
    }
    return longestSubArrayLength;
};