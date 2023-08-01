/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const numbersArray = [];
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            numbersArray.push(Number(s[i]));    
        }
    }
    let largest = -1;
    // for (let i = 0; i < numbersArray.length; i++) {
    //     largest = Math.max(largest, numbersArray[i])
    // }
    let secondLargest = -1;
    // for (let j = 0; j < numbersArray.length; j++) {
    //     if (numbersArray[j] !== largest) {
    //         secondLargest = Math.max(secondLargest, numbersArray[j]);
    //     }
    // }
    
    // USING ONLY ONE FOR LOOP
    
    for (let i = 0; i < numbersArray.length; i++) {
        const currentNum = numbersArray[i];
        if (currentNum > largest) {
            secondLargest = largest;
            largest = currentNum;
        } else if (currentNum > secondLargest && currentNum !== largest) {
               secondLargest = currentNum;
        }
    }
    return secondLargest;
};