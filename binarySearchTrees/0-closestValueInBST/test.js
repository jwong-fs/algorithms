const findClosestValueInBST = require('./closestValueInBST')
const { BinarySearchTree } = require('../bst')

test('Inputs I', () => {
    let newBST = new BinarySearchTree()
    newBST.insert(10)
    newBST.insert(15)
    newBST.insert(22)
    newBST.insert(13)
    newBST.insert(14)
    newBST.insert(5)
    newBST.insert(5)
    newBST.insert(2)
    newBST.insert(1)
    expect(findClosestValueInBST(newBST, 13)).toBe(13);
});

test('Inputs II', () => {
    let newBST = new BinarySearchTree()
    newBST.insert(131)
    newBST.insert(16)
    newBST.insert(22)
    newBST.insert(112)
    newBST.insert(114)
    newBST.insert(53)
    newBST.insert(92)
    newBST.insert(2)
    newBST.insert(61)
    expect(findClosestValueInBST(newBST, 115)).toBe(114);
});

// test('Inputs III', () => {
//     expect(func([0])).toStrictEqual([]);
// });

// test('Inputs IV', () => {
//     expect(func([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
// });