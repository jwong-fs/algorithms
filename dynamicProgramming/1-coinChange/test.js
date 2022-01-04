const func = require('./coinChange');

test('Inputs I', () => {
    expect(func(10, [1,5,10,25])).toBe(4);
});

test('Inputs II', () => {
    expect(func(6, [1,5])).toBe(2);
});

test('Inputs III', () => {
    expect(func(0, [1,5,10])).toBe(1);
});

test('Inputs IV', () => {
    expect(func(5, [1,2,5])).toBe(4);
});