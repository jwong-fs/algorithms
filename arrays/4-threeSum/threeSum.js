// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

function threeNumberSum(array) {
    let result = []
    
    if (array.length < 3) return result
    
    array.sort((a, b) => a - b)
    for (let i = 0; i < array.length - 2; i++) {
        if (i > 0 && array[i] === array[i - 1]) continue
        let leftIdx = i + 1
        let rightIdx = array.length - 1
        while (leftIdx < rightIdx) {
            let curr = array[i] + array[leftIdx] + array[rightIdx]
            if (curr === 0) {
                result.push([array[i], array[leftIdx], array[rightIdx]])
                while (array[rightIdx] === array[rightIdx-1]) {
                    rightIdx--
                }
                while (array[leftIdx] === array[leftIdx+1]) {
                    leftIdx++
                }
                leftIdx++
                rightIdx--
            } else if (curr < 0) {
                leftIdx++
            } else {
                rightIdx--
            }
        }
    }
  return result
}

module.exports = threeNumberSum