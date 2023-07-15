/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    // let set = new Set();
    // let squaredSum = 0, num = n;
    // while (squaredSum !== 1 ) {
    //     squaredSum = sumOfDigitSquares(num);
    //     if (set.has(squaredSum)) {
    //         return false;
    //     }
    //     num = squaredSum
    //     set.add(squaredSum);
    // }
    // return true;

    let slow = n, fast = sumOfDigitSquares(n);
    while (slow !== fast) {
        slow = sumOfDigitSquares(slow)
        fast = sumOfDigitSquares(sumOfDigitSquares(fast));
        
    }
    return (slow === 1) || (fast === 1);
};

function sumOfDigitSquares(num) {
    let sum = 0;
    while (num) {
        sum += (num % 10) * (num % 10);
        num = Math.trunc(num / 10);
    }
    return sum;
}