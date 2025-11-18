// Solution: Using hash map (one-pass approach)
class SolutionHashMap {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
    }
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SolutionHashMap };
}

