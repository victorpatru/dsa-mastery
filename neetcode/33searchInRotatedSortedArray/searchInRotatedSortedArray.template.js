/**
 * Search in Rotated Sorted Array
 *
 * You are given an array of length n which was originally sorted in ascending order.
 * It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
 *
 * [3,4,5,6,1,2] if it was rotated 4 times.
 * [1,2,3,4,5,6] if it was rotated 6 times.
 *
 * Given the rotated sorted array nums and an integer target, return the index of target within nums,
 * or -1 if it is not present.
 *
 * You may assume all elements in the sorted rotated array nums are unique.
 *
 * A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?
 *
 * @example
 * // Example 1:
 * // Input: nums = [3,4,5,6,1,2], target = 1
 * // Output: 4
 *
 * @example
 * // Example 2:
 * // Input: nums = [3,5,6,0,1,2], target = 4
 * // Output: -1
 *
 * @constraints
 * - 1 <= nums.length <= 1000
 * - -1000 <= nums[i] <= 1000
 * - -1000 <= target <= 1000
 * - All values of nums are unique.
 * - nums is an ascending array that is possibly rotated.
 */
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // TODO: Implement
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
