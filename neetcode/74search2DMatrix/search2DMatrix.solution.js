class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;
        while (top <= bot) {
            const midRow = Math.floor((top + bot) / 2);
            if (target > matrix[midRow][COLS - 1]) {
                top = midRow + 1;
            } else if (target < matrix[midRow][0]) {
                bot = midRow - 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }
        const row = Math.floor((top + bot) / 2);
        let l = 0;
        let r = COLS - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
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
 * Time Complexity: O(log(m * n)) where m is the number of rows and n is the number of columns.
 * We perform binary search twice: first to find the correct row (O(log m)), then to find the target
 * in that row (O(log n)). Overall O(log m + log n) = O(log(m * n)).
 * Space Complexity: O(1) as we only use a constant amount of extra space for variables.
 */
const SOLUTION_COMPLEXITY = {
    time: 'O(log(m*n))',
    space: 'O(1)'
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, SOLUTION_COMPLEXITY };
}
