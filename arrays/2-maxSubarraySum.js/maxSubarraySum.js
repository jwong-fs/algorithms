// Implement a function that accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr, num) => {
    let maxSum = 0
    let tempSum = 0
    if (num > arr.length) {
        return null
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i=num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

// O(n) time; O(1) space

module.exports = maxSubarraySum;