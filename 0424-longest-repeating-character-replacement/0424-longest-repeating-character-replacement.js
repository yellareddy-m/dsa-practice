/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let start = 0;
    const charObj ={};
    let maxRepeatingCharCount = 0;
    let longestSubstr = 0;
    for (let end = 0; end < s.length; end++) {
        const endChar = s[end];
        if (!charObj[endChar]) {
            charObj[endChar] = 0;
        }
        charObj[endChar] += 1;
        maxRepeatingCharCount = Math.max(maxRepeatingCharCount, charObj[endChar]);
        if (end - start + 1 - maxRepeatingCharCount > k) {
            charObj[s[start]] -= 1;
            start++;
        }
        longestSubstr= Math.max(longestSubstr, end - start + 1)
    }
    return longestSubstr;
};
