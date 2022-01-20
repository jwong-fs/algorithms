const func = require('./trappingRainWater');

test('Inputs I', () => {
    expect(func([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
});

test('Inputs II', () => {
    expect(func([4,2,0,3,2,5])).toBe(9);
});

test('Inputs III', () => {
    expect(func([])).toBe(0);
});