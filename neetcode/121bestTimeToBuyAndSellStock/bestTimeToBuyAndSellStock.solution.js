// Solution: Two pointers
class Solution {
    maxProfit(prices) {
        let l = 0, r = 1;
        let maxProfit = 0;

        while (r < prices.length) {
            const currentProfit = prices[r] - prices[l];

            if (currentProfit > 0) {
                maxProfit = Math.max(maxProfit, currentProfit);
            } else {
                l = r;
            }

            r++;
        }

        return maxProfit;
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

