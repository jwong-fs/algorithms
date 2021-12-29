const func = require('./maxSubarraySum');

test('Inputs I', () => {
    expect(func([1,2,5,2,8,1,5],2)).toBe(10);
});

test('Inputs II', () => {
    expect(func([1,2,5,2,8,1,5],4)).toBe(17);
});

test('Inputs III', () => {
    expect(func([4,2,1,6],1)).toBe(6);
});

test('Inputs IV', () => {
    expect(func([4,2,1,6,2],4)).toBe(13);
});

test('Inputs V', () => {
    expect(func([],4)).toBe(null);
});