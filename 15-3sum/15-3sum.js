/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        if (i > 0 && nums[i] === nums[i - 1]) {
               continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const leftNum = nums[left];
            const rightNum = nums[right];
            const currentSum = firstNum + leftNum + rightNum;
            if (currentSum === 0) {
                triplets.push([firstNum, leftNum, rightNum]);
                while(nums[left] === nums[left + 1]) {
                      left++;
                }
                while(nums[right] === nums[right - 1]) {
                    right--;      
                }
                left++;
                right--;
            } else if (currentSum < 0) {
                       left++;
            } else {
                right--;
            }
        }
    }
    
    return triplets;
};