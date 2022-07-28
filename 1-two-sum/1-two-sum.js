/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numbersObj = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let potentialMatch = target - currentNum;
        if (numbersObj.hasOwnProperty(potentialMatch)) {
            return [numbersObj[potentialMatch], i];
        } else {
            numbersObj[currentNum] = i;
        }
    }
    return [];

};

