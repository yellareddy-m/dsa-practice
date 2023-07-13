/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0, middle = 0, high = nums.length - 1;
    while (middle <= high) {
        const middleValue = nums[middle];
        if (middleValue === 0) {
            [nums[low], nums[middle]] = [nums[middle], nums[low]];
            low++;
            middle++;
        } else if (middleValue === 1) {
            middle++;
        } else if (middleValue === 2) {
            [nums[high], nums[middle]] = [nums[middle], nums[high]];
            high--;
        }
    }
    return nums;
};