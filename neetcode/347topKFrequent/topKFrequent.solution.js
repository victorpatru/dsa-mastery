// Solution 1: Using bucket sort approach
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Count how many times each number appears
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        // 2. Create bucket array where index = frequency
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        // 3. Put each number into the bucket matching its frequency
        for (const key in count) {
            freq[count[key]].push(parseInt(key));
        }

        // 4. Traverse buckets from highest frequency downward
        //    and collect k most frequent numbers
        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const item of freq[i]) {
                res.push(item);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}

/**
 * Time Complexity: O(n) where n is the number of elements in nums.
 * Space Complexity: O(n) where n is the number of elements in nums.
 */



// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution };
}

