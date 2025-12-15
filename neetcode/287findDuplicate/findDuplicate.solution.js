// Solution: Floyd's Cycle Detection (Tortoise and Hare)
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Phase 1: Find intersection point in the cycle
        let slow = 0, fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) {
                break;
            }
        }

        // Phase 2: Find the entrance to the cycle (duplicate number)
        let slow2 = 0;
        while (true) {
            slow = nums[slow];
            slow2 = nums[slow2];
            if (slow === slow2) {
                return slow;
            }
        }
    }
}

/**
 * Time Complexity: O(n) where n is the length of the array.
 * - Phase 1: O(n) to find the intersection point
 * - Phase 2: O(n) to find the entrance to the cycle
 * 
 * Space Complexity: O(1) only using a few pointer variables.
 */
const SOLUTION_COMPLEXITY = {
    time: 'O(n)',
    space: 'O(1)'
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, SOLUTION_COMPLEXITY };
}


