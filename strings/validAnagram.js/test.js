const func = require('./validAnagram');

test('Inputs I', () => {
    expect(func("", "")).toBe(true);
});

test('Inputs II', () => {
    expect(func("aaz", "zza")).toBe(false);
});

test('Inputs III', () => {
    expect(func("anagram", "nagaram")).toBe(true);
});