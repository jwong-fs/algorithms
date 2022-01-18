// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs1 = n => {
    let steps = [0, 1, 2];
    if (steps[n]) {
        return n;
    };
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2];
    };
    return steps[n];
};
// O(n) time; O(n) space;

const climbStairs2 = n => {
    let first = 1;
    let second = 2;
    let currSteps;
    if (n === 1 || n === 2) return n;
    for (let i = 3; i <= n; i++) {
        currSteps = first + second;
        first = second;
        second = currSteps;
    };
    return currSteps;
};
// O(n) time; O(1) space;

module.exports = { climbStairs1, climbStairs2 };