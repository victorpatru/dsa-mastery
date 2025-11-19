/**
 * Solution 1: Using length prefix with delimiter
 */
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // For each string, append its length followed by '#' delimiter and the string itself
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // something to store results
        // a pointer/index into the string

        // WHILE (/* pointer not at end */)
        // figure out the length of the next string
        // use that length to extract the next string
        // move the pointer forward past what you just processed

        // return the result
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

