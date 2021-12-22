const func = require('./solution');

test('Inputs I', () => {
    expect(func([2,7,11,15], 9) === [0,1] || func([2,7,11,15], 9) === [1,0]).toBeTruthy;
});

test('Inputs II', () => {
    expect(func([3,2,4], 6) === [1,2] || func([3,2,4], 6) === [2,1] ).toBeTruthy;
});

test('Inputs III', () => {
    expect(func([3,3], 6) === [0,1] || func([3,3], 6) === [1,0] ).toBeTruthy;
});