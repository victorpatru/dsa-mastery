/**
 * Koko Eating Bananas
 *
 * You are given an integer array piles where piles[i] is the number of bananas in the ith pile.
 * You are also given an integer h, which represents the number of hours you have to eat all the bananas.
 *
 * You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas
 * and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the
 * pile but you can not eat from another pile in the same hour.
 *
 * Return the minimum integer k such that you can eat all the bananas within h hours.
 *
 * @example
 * // Example 1:
 * // Input: piles = [1,4,3,2], h = 9
 * // Output: 2
 * // Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate
 * // of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.
 *
 * @example
 * // Example 2:
 * // Input: piles = [25,10,23,4], h = 4
 * // Output: 25
 *
 * @constraints
 * - 1 <= piles.length <= 1,000
 * - piles.length <= h <= 1,000,000
 * - 1 <= piles[i] <= 1,000,000,000
 *
 */

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // TODO: implement
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
