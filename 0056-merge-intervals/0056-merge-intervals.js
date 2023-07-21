/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0] )
    for (let i = 0; i < intervals.length - 1; i++) {
        const [start1, end1] = intervals[i];
        const [start2, end2] = intervals[i + 1];
        if (end1 >= start2) {
            intervals.splice(i, 2, [Math.min(start1, start2), Math.max(end1, end2)]);
            i--;
        }
    }
    return intervals;
};
