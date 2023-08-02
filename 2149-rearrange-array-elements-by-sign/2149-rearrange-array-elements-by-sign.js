/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let result = [];
    let i = 0, j =1;
    for (let n of nums) {
        if (n > 0){
            result[i] = n;
            i += 2;
        } else {
            result[j] = n;
            j += 2;
        }
    }
    return result;
};