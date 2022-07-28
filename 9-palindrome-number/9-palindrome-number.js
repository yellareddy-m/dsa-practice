/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let reverseNum = 0;
    let num = x;
    while (num) {
        const lastDigit = num % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        num = Math.floor( num / 10)
     }
    return x === reverseNum;
};