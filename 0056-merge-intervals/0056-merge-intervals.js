/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0] );
    if (intervals.length < 2) {
        return intervals;
    }
    const result = [];
    // for (let i = 0; i < intervals.length - 1; i++) {
    //     const [start1, end1] = intervals[i];
    //     const [start2, end2] = intervals[i + 1];
    //     if (end1 >= start2) {
    //         intervals.splice(i, 2, [Math.min(start1, start2), Math.max(end1, end2)]);
    //         i--;
    //     }
    // }
    // return intervals;
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
       const [currentStart, currentEnd] = intervals[i];
        let lastInterval = result[result.length -1];
        if (lastInterval[1] >= currentStart) {
            lastInterval[1] = Math.max(lastInterval[1], currentEnd);
        } else {
            result.push(intervals[i])
        }
    }
    return result;
};
