// Solution 1: Two pointers approach
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;
        while (l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            res = Math.max(res, area);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}

/**
 * Time Complexity: O(n) where n is the length of the heights array.
 * Space Complexity: O(1) as we only use a constant amount of extra space.
 */

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution };
}

