const func = require('./sortedSquaredArray');

test('Inputs I', () => {
    expect(func([1,2,3,4,5])).toStrictEqual([1,4,9,16,25]);
});

test('Inputs II', () => {
    expect(func([-2,-1,0,1,2])).toStrictEqual([0,1,1,4,4]);
});

test('Inputs III', () => {
    expect(func([-2,1])).toStrictEqual([1,4]);
});

test('Inputs IV', () => {
    expect(func([3])).toStrictEqual([9]);
});

test('Inputs V', () => {
    expect(func([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
});