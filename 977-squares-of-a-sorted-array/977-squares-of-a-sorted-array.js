/**
 * @param {number[]} nums
 * @return {number[]}
 */
// function sortedSquares(nums) {
//     let start = 0;
//     let end = nums.length - 1;
//     const sortedArray = new Array(nums.length).fill(0);
//     for (let idx = nums.length - 1; idx >= 0; idx--) {
//         const smallValue = nums[start];
//         const largeValue = nums[end];
//         if (Math.abs(smallValue) > Math.abs(largeValue)) {
//             sortedArray[idx] = smallValue * smallValue;
//             start++;
//             } else {
//                 sortedArray[idx] = largeValue * largeValue;
//                 end--;
//             }
//     }
//     return sortedArray;
// }

function sortedSquares(nums) {
  let squares = [],
      left = 0,
      right = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      const rightNum = nums[right];
      const leftNum = nums[left];
      if (Math.abs(leftNum) > Math.abs(rightNum)) {
        squares[i] = leftNum * leftNum;
        left++;
      } else {
        squares[i] = rightNum * rightNum;
        right--;
      }

    }
  
  // TODO: Write your code here
  return squares;
};
