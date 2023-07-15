/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let start = 0, end = s.length - 1;
    // let skippedChars = 0;

    // while (start < end) {
    //     if (s[start] === s[end]) {
    //         start++;
    //         end--;
    //     } else if (skippedChars !== 1 && s[start + 1] === s[end]) {
    //         skippedChars = 1;
    //         start++;
    //     } else if (skippedChars !== 1 && s[start] === s[end - 1]) {
    //         skippedChars = 1;
    //         end--; 
    //     } else {
    //         return false;
    //     }
    // }
    // return true;

    while (start < end) {
        if (s[start] !== s[end]) {
            return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
};

function isPalindrome(str, start, end) {
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++; end--;
    }
    return true;
}