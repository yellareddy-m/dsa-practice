/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let nextNonDuplicate = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[nextNonDuplicate - 1] !== nums[i]) {
            nums[nextNonDuplicate] = nums[i];
            nextNonDuplicate++;
        }
    }
    return nextNonDuplicate;
};