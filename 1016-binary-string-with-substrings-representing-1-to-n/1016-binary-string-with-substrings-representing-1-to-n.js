/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    for (let i = 1; i <= n; i++) {
        const binary = i.toString(2);
        if (!s.includes(binary)) {
            return false;
        }
    }
     return true;
};
