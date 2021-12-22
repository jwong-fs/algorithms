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