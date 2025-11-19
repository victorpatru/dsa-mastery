/**
 * Solution 1: Using length prefix with delimiter
 */
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // 1. For each string, append its length followed by '#' delimiter and the string itself
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 1. Parse the encoded string by reading length prefix before each '#'
        
        // 2. Extract the string of that length after the '#'
        
        // 3. Repeat until the entire encoded string is processed
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

