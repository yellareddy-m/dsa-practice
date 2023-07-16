/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const size = 10;
    const obj = {};
    const sequences = [];
    for (let i = 0; i < s.length; i++) {
        const sub = s.substr(i, size)
        if(obj[sub]) {
         obj[sub] = obj[sub] +1;   
        } else {
            obj[sub] = 1;
        }
    }
    for (const key in obj) {
        if (obj[key] > 1) {
            sequences.push(key)
        }
    }
    return sequences;
};