/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.replace(/  +/g, ' ');
    let newStr = '';
    const arr = s.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
        newStr += arr[i] + ' ';
    }
    return newStr.trim();
};