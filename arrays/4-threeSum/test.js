const func = require('./threeSum');

test('Inputs I', () => {
    expect(func([12,3,1,2,-6,5,-8,6])).toStrictEqual([[-8,2,6],[-8,3,5],[-6,1,5]]);
});

test('Inputs II', () => {
    expect(func([])).toStrictEqual([]);
});

test('Inputs III', () => {
    expect(func([0])).toStrictEqual([]);
});

test('Inputs IV', () => {
    expect(func([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
});