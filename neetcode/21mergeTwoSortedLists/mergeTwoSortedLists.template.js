/**
 * Merge Two Sorted Linked Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
 *
 * The new list should be made up of nodes from list1 and list2.
 *
 * @example
 * // Example 1:
 * // Input: list1 = [1,2,4], list2 = [1,3,5]
 * // Output: [1,1,2,3,4,5]
 *
 * // Example 2:
 * // Input: list1 = [], list2 = [1,2]
 * // Output: [1,2]
 *
 * // Example 3:
 * // Input: list1 = [], list2 = []
 * // Output: []
 *
 * @constraints
 * - 0 <= The length of the each list <= 100
 * - -100 <= Node.val <= 100
 * 
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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
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

