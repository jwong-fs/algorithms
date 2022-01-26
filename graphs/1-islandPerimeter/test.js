const func = require('./islandPerimeter');

test('Inputs I', () => {
    expect(func([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])).toBe(16);
});

test('Inputs II', () => {
    expect(func([[1]])).toBe(4);
});

test('Inputs III', () => {
    expect(func([[1,0]])).toBe(4);
});