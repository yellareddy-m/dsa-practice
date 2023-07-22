/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const left = [];
    const right = [];
    let min = newInterval[0], max = newInterval[1];
    for(const interval of intervals) {
        const [first, last] = interval;
        if (last < newInterval[0]) {
            left.push(interval);
        } else if (first > newInterval[1]) {
            right.push(interval)
        } else {
            min = Math.min(first, min);
            max = Math.max(last, max);
        }
    }
    
    return [...left,[min, max] , ...right];
};
