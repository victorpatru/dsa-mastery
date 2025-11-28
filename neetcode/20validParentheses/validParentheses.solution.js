// Solution 1: Using stack approach
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let c of s) {
            if (closeToOpen[c]) {
                if (
                    stack.length > 0 &&
                    stack[stack.length - 1] === closeToOpen[c]
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}

/**
 * Time Complexity: O(n) where n is the length of the string.
 * Space Complexity: O(n) as we may need to store all opening brackets in the stack.
 */
const SOLUTION_COMPLEXITY = {
    time: 'O(n)',
    space: 'O(n)'
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, SOLUTION_COMPLEXITY };
}

