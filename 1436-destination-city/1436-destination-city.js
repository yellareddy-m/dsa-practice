/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let obj = {};
    for (let path of paths) {
        const start = path[0];
        const end = path[1];
        obj[start] = end;
    }
    for (let path of paths) {
        if (obj[path[1]] === undefined) {
            return path[1];
        }
    }
};