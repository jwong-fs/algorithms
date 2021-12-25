// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoNumberSum = (array, targetSum) => {
    let numsToFind = new Map()
    for (let i = 0; i < array.length; i++) {
        let currNum = array[i]
        if (numsToFind.has(currNum)) {
            return [i, numsToFind.get(currNum)]
        } else {
            numsToFind.set(targetSum-currNum, i)
        }
    }
  };

// O(n) time; O(n) space

module.exports = twoNumberSum;