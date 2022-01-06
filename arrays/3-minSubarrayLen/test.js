const func = require('./minSubArrayLen');

test('Inputs I', () => {
    expect(func([2,3,1,2,4,3], 7)).toBe(2);
});

test('Inputs II', () => {
    expect(func([2,1,6,5,4],9)).toBe(2);
});

test('Inputs III', () => {
    expect(func([1,4,16,22,5,7,8,9,10],55)).toBe(5);
});

test('Inputs IV', () => {
    expect(func([4,3,3,8,1,2,3],11)).toBe(2);
});

test('Inputs V', () => {
    expect(func([1,4,16,22,5,7,8,9,10],95)).toBe(0);
});