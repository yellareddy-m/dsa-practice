/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let start = 0,
        longestSubstrLength = 0,
        maxRepeatCharCount = 0,
        charObj ={};
    for (let end = 0; end < s.length; end++) {
        const endChar = s[end];
        if (!(endChar in charObj)) {
            charObj[endChar] = 0;
        }
        charObj[endChar] += 1;
        maxRepeatCharCount = Math.max(maxRepeatCharCount, charObj[endChar]);
        if ((end - start + 1 -maxRepeatCharCount) > k) {
            const startChar = s[start];
            charObj[startChar] -= 1;
            start += 1;
        }
        longestSubstrLength = Math.max(longestSubstrLength, end - start + 1);
    }
    return longestSubstrLength
        
};