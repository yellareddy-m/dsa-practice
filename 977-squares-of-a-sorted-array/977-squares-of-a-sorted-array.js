/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    let start = 0;
    let end = nums.length - 1;
    const sortedArray = new Array(nums.length).fill(0);
    for (let idx = nums.length - 1; idx >= 0; idx--) {
        const smallValue = nums[start];
        const largeValue = nums[end];
        if (Math.abs(smallValue) > Math.abs(largeValue)) {
            sortedArray[idx] = smallValue * smallValue;
            start++;
            } else {
                sortedArray[idx] = largeValue * largeValue;
                end--;
            }
    }
    return sortedArray;
}