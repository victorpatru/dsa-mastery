// Solution: Binary search with rotation detection
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            if (target === nums[mid]) {
                return mid;
            }

            if (nums[l] <= nums[mid]) {
                if (target > nums[mid] || target < nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return -1;
    }
}

/**
 * Time Complexity: O(log n) where n is the length of the array.
 * - Binary search approach that halves the search space in each iteration
 * - Even with rotation, we can determine which half to search based on the sorted portion
 * 
 * Space Complexity: O(1) constant space.
 * - Only using a few variables (l, r, mid) regardless of input size
 */
const SOLUTION_COMPLEXITY = {
    time: 'O(logn)',
    space: 'O(1)'
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, SOLUTION_COMPLEXITY };
}
