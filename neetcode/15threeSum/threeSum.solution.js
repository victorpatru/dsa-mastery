// Solution: Using sorting + two pointers
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;

            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}

/**
 * Time Complexity: O(n²)
 * Space Complexity: O (1) or O(n) extra space depending on the sorting algorithm.
 *                   O (m) space for the output list.
 */

/**
 * 
 * while (l < r && nums[l] === nums[l - 1]) {
        l++;
    }
    Your understanding is **correct**, and you summarized it well.

    Concise confirmation:

    ### ✔ What the inner `while` does (2 things)

    1. **Prevents duplicate triplets**
    By skipping all duplicate `nums[l]` values after a match, it ensures we never build the same value-triplet again.

    2. **Saves extra work**
    It jumps over redundant values immediately, instead of letting the main loop recompute sums with the same `l` value multiple times.

    ### ✔ Your interpretation is right

    * Yes: skipping left-pointer duplicates avoids generating repeated results.
    * Yes: it also avoids unnecessary pointer movements and sum checks.
    * Yes: the “twofold” effect you described is exactly what this loop achieves.

    You're on point.

 */

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution };
}

