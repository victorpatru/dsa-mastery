/**
 * Remove Nth Node From End of List
 *
 * You are given the beginning of a linked list head, and an integer n.
 *
 * Remove the nth node from the end of the list and return the beginning of the list.
 *
 * @example
 * // Example 1:
 * // Input: head = [1,2,3,4], n = 2
 * // Output: [1,2,4]
 * // Explanation: The 2nd node from the end (node with value 3) is removed.
 *
 * @example
 * // Example 2:
 * // Input: head = [5], n = 1
 * // Output: []
 * // Explanation: The only node is removed, resulting in an empty list.
 *
 * @example
 * // Example 3:
 * // Input: head = [1,2], n = 2
 * // Output: [2]
 * // Explanation: The first node (2nd from end) is removed.
 *
 * @constraints
 * - The number of nodes in the list is sz
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 *

/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
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
    module.exports = { Solution, ListNode, SOLUTION_COMPLEXITY };
}

