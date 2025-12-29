class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length, COLS = matrix[0].length;

        let bot = 0, top = ROWS - 1, row = null

        while (bot <= top) {
            const midRow = bot + Math.floor((top - bot) / 2);

            if (target > matrix[midRow].at(-1)) {
                bot = midRow + 1;
            } else if (target < matrix[midRow][0]) {
                top = midRow - 1;
            } else {
                row = midRow
                break;
            }
        }

        if (row === null) return false

        let l = 0, r = COLS - 1;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);

            if (target > matrix[row][m]) {
                l = m + 1;
            } else if (target < matrix[row][m]) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}

/**
 * Time Complexity: O(log(n * m)) where n is the number of rows and m is the number of columns.
 * We perform binary search twice: first to find the correct row (O(log n)), then to find the target
 * in that row (O(log m)). Overall O(log n + log m) = O(log(n * m)).
 * Space Complexity: O(1) as we only use a constant amount of extra space for variables.
 */
const SOLUTION_COMPLEXITY = {
    time: 'O(log(n*m))',
    space: 'O(1)'
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, SOLUTION_COMPLEXITY };
}
