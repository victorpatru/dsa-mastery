/**
 * Product of Array Except Self
 * 
 * Given an integer array nums, return an array output where output[i] is the product 
 * of all the elements of nums except nums[i].
 * 
 * Each product is guaranteed to fit in a 32-bit integer.
 * 
 * Follow-up: Could you solve it in O(n) time without using the division operation?
 * 
 * @example
 * // Example 1:
 * // Input: nums = [1,2,4,6]
 * // Output: [48,24,12,8]
 * 
 * @example
 * // Example 2:
 * // Input: nums = [-1,0,1,2,3]
 * // Output: [0,-6,0,0,0]
 * 
 * @constraints
 * - 2 <= nums.length <= 1000
 * - -20 <= nums[i] <= 20
 */

/**
 * Solution 1: Using prefix and postfix products
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // 1) Calculate left products (prefix) - store in result array

        // 2) Calculate right products (postfix) - multiply into result array

        // Return the result
    }
}

/**
 * Time Complexity: TODO:
 * Space Complexity: TODO:
 */

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution };
}

