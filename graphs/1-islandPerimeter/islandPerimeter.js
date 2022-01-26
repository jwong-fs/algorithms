// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

const islandPerimeter = grid => {
    let perimeter = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let currCell = grid[i][j]
            
            if (currCell === 1) {
                // top neighbor
                if (!(grid[i-1] && grid[i-1][j])) {
                    perimeter++
                }
                // left neighbor
                if (!(grid[i][j-1])) {
                    perimeter++
                }
                // right neighbor
                if (!(grid[i][j+1])) {
                    perimeter++
                }
                // bottom neighbor
                if (!(grid[i+1] && grid[i+1][j])) {
                    perimeter++
                }
            }
        }
    }
    
    return perimeter
};

// O(n^2) time; O(1) space

module.exports = islandPerimeter