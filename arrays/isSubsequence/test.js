const func = require('./isSubsequence');

test('Inputs I', () => {
    expect(func("abc", "ahbgdc")).toBe(true);
});

test('Inputs II', () => {
    expect(func("axc", "ahbgdc")).toBe(false);
});

test('Inputs III', () => {
    expect(func("","")).toBe(true);
});

test('Inputs IV', () => {
    expect(func("bahhumbug", "bahhum")).toBe(false);
});