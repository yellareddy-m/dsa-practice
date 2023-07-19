/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let longest = 0;
    let i = 0;
    const lastSeenAt = {};
    for(; i < s.length; i++) {
        const endChar = s[i];
        if (endChar in lastSeenAt && lastSeenAt[endChar] >= start) {
            longest = Math.max(i - start, longest)
            start = lastSeenAt[endChar] + 1;
        }
        lastSeenAt[endChar] = i;
    }
    longest = Math.max(i - start, longest)
    return longest
};