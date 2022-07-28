/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let charIndexMap = {};
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        const endChar = s[i];
        if (endChar in charIndexMap) {
            start = Math.max(start, charIndexMap[endChar]);
        }
        charIndexMap[endChar] = i + 1;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength
};