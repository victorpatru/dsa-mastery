/**
 * Search a 2D Matrix
 *
 * You are given an m x n 2-D integer array matrix and an integer target.
 *
 * Each row in matrix is sorted in non-decreasing order.
 * The first integer of every row is greater than the last integer of the previous row.
 * Return true if target exists within matrix or false otherwise.
 *
 * Can you write a solution that runs in O(log(m * n)) time?
 *
 * @example
 * // Example 1:
 * // Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
 * // Output: true
 *
 * @example
 * // Example 2:
 * // Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
 * // Output: false
 *
 * @constraints
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 100
 * - -10000 <= matrix[i][j], target <= 10000
 *
 */

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // TODO: implement
    }
}

/**
 * TODO: Fill in your Big O analysis below
 */
const SOLUTION_COMPLEXITY = {
    time: '',
    space: ''
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, SOLUTION_COMPLEXITY };
}
