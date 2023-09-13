/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // NAIVE SOLUTION
    // let result = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = nums[i];
    //     if (sum === k) {
    //         result++;
    //     }
    //     for (let j = i + 1; j < nums.length; j++) {
    //         sum += nums[j];
    //         if (sum === k) {
    //             result++;
    //         }
    //     }
    // }
    
    // HASH TABLE SOLUTION (EFFICIENT)
    let sum = 0;
    let obj = {};
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === k) {
            result++;
        }
        // when a sum is reached again in the iteration
        // it means that sum increased and decreased to come back to previous
        // so somewhere in this array elements are summing upto 0
        // same logic is extended to sum is k
        // if there exists a value whose diff is sum - k then there exists a subarray
        if (obj[sum - k] !== undefined) {
            result += obj[sum - k];
        }
        obj[sum] = (obj[sum] || 0 ) + 1;
    }
    return result;
};