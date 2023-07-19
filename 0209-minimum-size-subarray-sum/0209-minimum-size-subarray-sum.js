/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let minSubArrayLen = Infinity;
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        while (currentSum >= target) {
            minSubArrayLen = Math.min(minSubArrayLen, i - start + 1)      
            currentSum -= nums[start];
            start++;
        }
    }
    return minSubArrayLen === Infinity ? 0 : minSubArrayLen;
};