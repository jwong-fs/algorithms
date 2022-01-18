const { climbStairs1, climbStairs2 } = require('./climbingStairs');

test('Inputs I', () => {
    expect(climbStairs1(2)).toBe(2);
    expect(climbStairs2(2)).toBe(2);
});

test('Inputs II', () => {
    expect(climbStairs1(1)).toBe(1);
    expect(climbStairs2(1)).toBe(1);
});

test('Inputs III', () => {
    expect(climbStairs1(6)).toBe(13);
    expect(climbStairs2(6)).toBe(13);
});