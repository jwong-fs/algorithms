// Write a function that accepts 2 parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a CONTIGUOUS subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

function minSubArrayLen(array, num) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < array.length) {
        // if the current window adds up to be < the given num, increase window to the right
        if (total < num && end < array.length) {
            total += array[end];
            end++;
        }
        // if the current window adds up to be >= the given num, shrink the window from the left
        else if (total >= num) {
            minLen = Math.min(minLen, end-start);
            total -= array[start];
            start++
        }
        // current total is less than the required total, but it is now the end! hop out to avoid infinite loop!
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

module.exports = minSubArrayLen;