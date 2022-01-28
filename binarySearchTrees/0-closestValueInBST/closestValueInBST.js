// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

const findClosestValueInBST = (tree, target) => {
	let currNode = tree.root
	let closestDiff = Infinity
	let closestVal = Infinity
	while (currNode !== null) {
		let currDiff = Math.abs(currNode.val - target)
		if (currDiff <  closestDiff) {
			closestVal = currNode.val
			closestDiff = currDiff
		}
		if (target < currNode.val) {
			currNode = currNode.left
		} else if (target > currNode.val) {
			currNode = currNode.right
		} else {
			break
		}
	}
	return closestVal
}
// Avg O(logn) time; Worst case O(n) time; O(1) space

module.exports = findClosestValueInBST