/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    // for(let i = 0; i < nums.length; i++) {
    //     let product = 1;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i !== j) {
    //             product *= nums[j];
    //         }
    //     }
    //     result.push(product);
    // }
    
    // ANOTHER WAY COMPUTING LEFT AND RIGHT IN NESTED LOOPS
//     let left = 1;
//     for(let i = 0; i < nums.length; i++) {
//         let product = 1;
        
//         for (let j = i + 1; j < nums.length; j++) {
//             product *= nums[j];
//         }
//         result.push(product * left);
//         left = left * nums[i];
//     }
    
    // USING O(n) timeCOMPUTING LET AND RIGHT PRODUCTS AND MERGING THEN
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }
    product = 1; // RESET
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= product;
        product *= nums[j];
    }
    
    return result;
};