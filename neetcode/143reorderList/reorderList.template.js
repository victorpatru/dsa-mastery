/**
 * Reorder List
 *
 * You are given the head of a singly linked-list.
 *
 * The positions of a linked list of length = 7 for example, can initially be represented as:
 * [0, 1, 2, 3, 4, 5, 6]
 *
 * Reorder the nodes of the linked list to be in the following order:
 * [0, 6, 1, 5, 2, 4, 3]
 *
 * Notice that in the general case for a list of length = n the nodes are reordered to be in the
 * following order:
 * [0, n-1, 1, n-2, 2, n-3, ...]
 *
 * You may not modify the values in the list's nodes, but instead you must reorder the nodes
 * themselves.
 *
 * @example
 * // Example 1:
 * // Input: head = [2,4,6,8]
 * // Output: [2,8,4,6]
 * // Explanation: The list is reordered: 0th node (2) -> 3rd node (8) -> 1st node (4) -> 2nd node (6)
 *
 * @example
 * // Example 2:
 * // Input: head = [2,4,6,8,10]
 * // Output: [2,10,4,8,6]
 * // Explanation: The list is reordered: 0th node (2) -> 4th node (10) -> 1st node (4) -> 3rd node (8) -> 2nd node (6)
 *
 * @constraints
 * - 1 <= Length of the list <= 1000
 * - 1 <= Node.val <= 1000
 *
 * Solution approach:
 * 1. Find the middle of the list using slow/fast pointers
 * 2. Reverse the second half of the list
 * 3. Merge the first half with the reversed second half alternately
 */

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
     * @return {void}
     */
    reorderList(head) {
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

