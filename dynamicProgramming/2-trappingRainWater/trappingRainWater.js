// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

const trappingRainWater = heights => {
    if (heights.length === 0) return 0;

    let leftIdx = 0;
    let rightIdx = heights.length - 1;
    let leftMax = heights[leftIdx];
    let rightMax = heights[rightIdx];
    let water = 0;

    while (leftIdx < rightIdx) {
        if (heights[leftIdx] < heights[rightIdx]) {
            leftIdx++;
            leftMax = Math.max(leftMax, heights[leftIdx]);
            water += leftMax - heights[leftIdx];
        } else {
            rightIdx--;
            rightMax = Math.max(rightMax, heights[rightIdx]);
            water += rightMax - heights[rightIdx];
        }
    }
    return water;
};

// O(n) time; O(1) space;

module.exports = trappingRainWater;