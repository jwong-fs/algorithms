const binaryTreePaths = require('./binaryTreePaths')
const { BinarySearchTree } = require('../../binarySearchTrees/bst')

test('Inputs I', () => {
    let newBST = new BinarySearchTree()
    newBST.insert(1)
    newBST.insert(2)
    newBST.insert(3)
    newBST.insert(5)
    expect(binaryTreePaths(newBST)).toEqual(["1->2->5","1->3"]);
});

test('Inputs II', () => {
    let newBST = new BinarySearchTree()
    newBST.insert(1)
    expect(binaryTreePaths(newBST)).toEqual(["1"]);
});