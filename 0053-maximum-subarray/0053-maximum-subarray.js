/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    // NAIVE SOLUTION USING NESTED LOOPS
    // THIS TIMES OUT FOR VERY LARGE ARRAYS
    // let maxSum = Number.NEGATIVE_INFINITY;
    // for (let i = 0; i < nums.length; i++) {
    //     let currentSum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         currentSum += nums[j];
    //         maxSum = Math.max(maxSum, currentSum);
    //     }
    // }
    // return maxSum;
    
    let currentSum = Number.NEGATIVE_INFINITY;
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};