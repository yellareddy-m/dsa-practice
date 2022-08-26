/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length -1;
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum === target) {
               return target;
            }
            if (Math.abs(target-currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum
                }
            // closestDiff = Math.min(closestDiff, Math.abs(target - currentSum));
            if (currentSum < target) {
                left++;
             } else  {
                right--;            
            }
        }
    }
    return closestSum;
};