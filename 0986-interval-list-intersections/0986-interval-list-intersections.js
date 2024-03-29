/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let result = [];
    // for (let i = 0; i < firstList.length; i++) {
    //     const [start1, end1] = firstList[i];
    //     for (let j = 0; j < secondList.length; j++) {
    //         const [start2, end2] = secondList[j];
    //         // maximum of starts [0,2] and  [1,5]  = ([1,2]) is the overlapping start.
    //         const overlappingStart = Math.max(start1, start2);
    //         // minimum of starts [0,2] and  [1,5]   =  ([1,2]) is the overlapping end.
    //         const overlappingEnd = Math.min(end1,end2);
    //         // not a valid interval
    //         if (overlappingStart > overlappingEnd) {
    //             continue;
    //         }
    //         result.push([overlappingStart, overlappingEnd]);
    //     }
    // }
    let i = 0, j= 0;
    while (i < firstList.length && j < secondList.length) {
        const [start1, end1] = firstList[i];
        const [start2, end2] = secondList[j];
        let overlappingStart = Math.max(start1, start2);
        let overlappingEnd = Math.min(end1, end2);
        if (overlappingStart <= overlappingEnd) {
            result.push([overlappingStart, overlappingEnd])
        }
        if (end1 < end2) {
            i++;
        } else{
            j++;
        }
    }
    return result;
};
