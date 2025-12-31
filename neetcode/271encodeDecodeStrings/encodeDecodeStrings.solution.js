// Solution 1: Using length prefix with delimiter
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}

/**
 * Time Complexity: O(m) where m is the total length of all strings combined.
 * - encode(): O(m) to iterate through all characters in all strings
 * - decode(): O(m) to parse through the encoded string
 * 
 * Space Complexity: O(1) auxiliary space (not counting input/output).
 * - We only use a few variables (i, j, length) for tracking positions
 * - Note: The output (encoded string or decoded array) is not counted as auxiliary space
 */
const SOLUTION_COMPLEXITY = {
    time: 'O(m)',
    space: 'O(1)'
};

// Export for testing
if (typeof module !== "undefined" && module.exports) {
    module.exports = { Solution, SOLUTION_COMPLEXITY };
}

