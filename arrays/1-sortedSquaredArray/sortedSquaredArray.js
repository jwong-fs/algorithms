// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquaredArray = array => {

	// create a new array to store squared values
	let squaredArr = new Array(array.length).fill(0)
	
	// if array starts with 0, square each element in array
	if (array[0] >= 0) {
		for (let i=0; i < array.length; i++) {
			squaredArr[i] = array[i] ** 2
        }
    
    // else, set up two pointers
	} else {
		let left = 0
		let right = array.length-1
		let countdown = array.length-1
        
        while (left <= right) {
			let leftSquared = array[left] ** 2
            let rightSquared = array[right] ** 2
            
            // square the larger number
	        // insert squared num into the new array starting from the end
			if (leftSquared > rightSquared) {
				squaredArr[countdown] = leftSquared
				left++
			} else {
				squaredArr[countdown] = rightSquared
				right--
			}
			countdown--
		}
	}
  return squaredArr;
}

// O(n) time; O(n) space

module.exports = sortedSquaredArray;