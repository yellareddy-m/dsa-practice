/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // NAIVE
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    
    // SORTING SOLUTION
    // nums.sort((a, b) => a -b);
    // let left = 0;
    // let right = nums.length - 1;
    // let sum = 0;
    // while(left < right) {
    //     sum = nums[left] + nums[right];
    //     if (sum < target) {
    //         left++;
    //     } else if (sum > target) {
    //         right--;
    //     } else {
    //         return [left, right];
    //     }
    // }
    
    // USING HASHTABLE
    let numbersObj = {};
    for (let i = 0; i < nums.length; i++) {
        const potentialMatch = target - nums[i];
        if (numbersObj[potentialMatch] !== undefined) {
            return [i, numbersObj[potentialMatch]]
        }
        numbersObj[nums[i]] = i;
    }
};


