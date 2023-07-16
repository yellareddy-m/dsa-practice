/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // using hashMap
    // let set = new Set();
    // for (let i = 0; i < nums.length; i++) {
    //     if (set.has(nums[i])) {
    //         return nums[i];
    //     }
    //     set.add(nums[i]);
    // }
    
    // using Floyd's Cycle Detection algorithm
    
    let slow = nums[0];
    let fast = nums[0];
    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (fast === slow) {
            break;    
        }
    }
    let secondSlow = nums[0];
    while (secondSlow !== slow) {
        slow = nums[slow];
        secondSlow = nums[secondSlow];
    }
    return slow;
};