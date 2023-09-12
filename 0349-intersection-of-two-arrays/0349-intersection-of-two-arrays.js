/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    let obj = {};
    for (let ele of nums1) {
        obj[ele] = ele;
    }
    
    for (let ele of nums2) {
        if (obj[ele] !== undefined) {
            result.push(ele);
            delete obj[ele];
        }
    }
    return result;
};
