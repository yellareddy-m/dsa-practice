/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowList = new Array(matrix.length);
    const columnList = new Array(matrix[0].length);
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                rowList[i] = 1;;
                columnList[j] = 1;
            }
        }
    }
    for (let i = 0; i < rowList.length; i++) {
        if (rowList[i]) {
            for (let j = 0; j < columnList.length; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    for (let i = 0; i < columnList.length; i++) {
        if (columnList[i]){
            for(let j = 0; j <rowList.length; j++) {
                matrix[j][i] = 0;
            }
        }
    }
};