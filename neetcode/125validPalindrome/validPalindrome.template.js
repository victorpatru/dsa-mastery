/**
 * Valid Palindrome
 *
 * Given a string s, return true if it is a palindrome, otherwise return false.
 *
 * A palindrome is a string that reads the same forward and backward. It is also
 * case-insensitive and ignores all non-alphanumeric characters.
 *
 * Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
 *
 * @example
 * // Example 1:
 * // Input: s = "Was it a car or a cat I saw?"
 * // Output: true
 * // Explanation: After considering only alphanumerical characters we have
 * // "wasitacaroracatisaw", which is a palindrome.
 *
 * @example
 * // Example 2:
 * // Input: s = "tab a cat"
 * // Output: false
 * // Explanation: "tabacat" is not a palindrome.
 *
 * @constraints
 * - 1 <= s.length <= 1000
 * - s is made up of only printable ASCII characters.
 *
 * Solution 1: Reverse String approach
 */
class SolutionReverseString {
    /**
     * Check if a character is alphanumeric
     * @param {char} c
     * @return {boolean}
     */
    isAlphanumeric(c) {
        // TODO: Implement
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // TODO: Implement
    }
}

/**
 * TODO: Fill in your Big O analysis below
 */
const SOLUTION_REVERSE_STRING_COMPLEXITY = {
    time: '',
    space: ''
};

/**
 * Solution 2: Two Pointers approach
 */
class SolutionTwoPointers {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // TODO: Implement
    }

    /**
     * @param {char} c
     * @return {boolean}
     */
    isAlphanumeric(c) {
        // TODO: Implement
    }
}

/**
 * TODO: Fill in your Big O analysis below
 */
const SOLUTION_TWO_POINTERS_COMPLEXITY = {
    time: '',
    space: ''
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SolutionReverseString,
        SolutionTwoPointers,
        SOLUTION_REVERSE_STRING_COMPLEXITY,
        SOLUTION_TWO_POINTERS_COMPLEXITY
    };
}

