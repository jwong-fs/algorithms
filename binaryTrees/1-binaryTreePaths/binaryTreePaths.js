// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

const binaryTreePaths = root => {
    
    // create an array to store root-to-leaf paths
    let paths = []
    let currPath = ""
   
    const binaryTreePathsHelper = (currNode, currPath) => {
        if (currPath === "") {
            currPath += currNode.val
        } else {
            currPath += ("->"+ currNode.val)
        }
        
        // check if currNode is a leaf
        if (currNode.left || currNode.right) {
            if (currNode.left) {
                binaryTreePathsHelper(currNode.left, currPath)
            }
            if (currNode.right) {
                binaryTreePathsHelper(currNode.right, currPath)
            }
        } else {
            // it is a leaf!
            paths.push(currPath)
        }
    }

    binaryTreePathsHelper(root, currPath)

    // return results array
    return paths 
};

// Worst case scenario O(N) time; O(N) space

module.exports = binaryTreePaths