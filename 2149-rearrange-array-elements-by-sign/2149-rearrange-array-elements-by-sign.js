/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let result = [];
    let m = 0, n = 1;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[m] = nums[i];
            m += 2;
        } else {
            result[n] = nums[i];
            n += 2;
        }
    }
    return result;
};