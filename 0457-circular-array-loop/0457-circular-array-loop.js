/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        let slowIndex = i, fastIndex = i;
        let forward = nums[i] > 0;
        while(true) {
            slowIndex = getNextStepIndex(slowIndex, nums[slowIndex], size);
            // pass newIndex, array, and previous direction to see direction changed or 
            // new value is equal to length of array so no loop is NOT possible
            if (isNotLoop(nums, forward, slowIndex)) {
                break;
            }
            fastIndex = getNextStepIndex(fastIndex, nums[fastIndex], size);
            if (isNotLoop(nums, forward, fastIndex)) {
                break;
            }
            fastIndex = getNextStepIndex(fastIndex, nums[fastIndex], size);
            if (isNotLoop(nums, forward, fastIndex)) {
                break;
            }
            if (slowIndex === fastIndex) {
                return true;
            }
        }
    }
    return false;
};

// index, you can get array and then find value and size or take them separately as inputs
function getNextStepIndex(currentIndex, currentValue, arraySize) {
    let result = (currentIndex + currentValue) % arraySize;
    // we only need the next index, doesn't matter if we go forward or backward
    // so we are computing where would the contrl be if we go backwards it would be size + (-ve value)
    // we get the required index, since we can't make the for loop go back again
    if (result < 0) {
        result = result + arraySize;
    }
    return result;
}

function isNotLoop(array, prevDirection, newIndex) {
    const currentDirection = array[newIndex] > 0;
    if (currentDirection !== prevDirection || Math.abs(array[newIndex] % array.length) === 0) {
        return true;
    } else {
        return false;
    }
}