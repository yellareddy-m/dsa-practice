/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const maxArray = [];
    // for (let i= 0; i <= nums.length - k; i++) {
    //     const subArray = nums.slice(i, k + i);
    //     subArray.sort((a, b) => b - a);
    //     maxArray[i] = subArray[0];
    // }
    
    
    // using deque and removing the sorting part
    
    let q =[];
    
    for (let i = 0; i < nums.length; i++) {
        while(q.length !== 0 && nums[i] >= nums[q[q.length - 1]]) {
              q.pop();
        }
        q.push(i);
        if (q[0] === i - k) {
            q.shift();
        }
        if (i >= k -1) {
            maxArray.push(nums[q[0]]);
        }
    }
    return maxArray;
};