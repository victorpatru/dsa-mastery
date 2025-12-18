// Solution: Two pointers
class Solution {
    maxProfit(prices) {
        let l = 0, r = 1;
        let maxP = 0;

        while (r < prices.length) {
            const profit = prices[r] - prices[l];

            if (profit > 0) {
                maxP = Math.max(maxP, profit);
            } else {
                l = r;
            }

            r++;
        }

        return maxP;
    }
}

/**
 * Time Complexity: O(n) where n is the length of the prices array.
 * Space Complexity: O(1) as we only use a constant amount of extra space.
 */

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution };
}

