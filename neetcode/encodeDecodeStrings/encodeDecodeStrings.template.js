/**
 * Encode and Decode Strings
 * 
 * Design an algorithm to encode a list of strings to a single string. 
 * The encoded string is then decoded back to the original list of strings.
 * 
 * Please implement encode and decode
 * 
 * @example
 * // Example 1:
 * // Input: ["neet","code","love","you"]
 * // Output: ["neet","code","love","you"]
 * 
 * @example
 * // Example 2:
 * // Input: ["we","say",":","yes"]
 * // Output: ["we","say",":","yes"]
 * 
 * @constraints
 * - 0 <= strs.length < 100
 * - 0 <= strs[i].length < 200
 * - strs[i] contains only UTF-8 characters.
 */

/**
 * Solution: Using length prefix with delimiter
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

