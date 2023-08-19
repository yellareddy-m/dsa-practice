/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        result[i] = -1;
        let found = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                found = true;
            }
            if (found && nums2[j] > nums1[i]) {
                result[i] = nums2[j];
                break;
            }
        }
    }
    return result;
};