/**
 * Reverse Nodes in K-Group
 *
 * You are given the head of a singly linked list head and a positive integer k.
 *
 * You must reverse the first k nodes in the linked list, and then reverse the
 * next k nodes, and so on. If there are fewer than k nodes left, leave the
 * nodes as they are.
 *
 * Return the modified list after reversing the nodes in each group of k.
 *
 * You are only allowed to modify the nodes' next pointers, not the values of
 * the nodes.
 *
 * @example
 * // Example 1:
 * // Input: head = [1,2,3,4,5,6], k = 3
 * // Output: [3,2,1,6,5,4]
 *
 * @example
 * // Example 2:
 * // Input: head = [1,2,3,4,5], k = 3
 * // Output: [3,2,1,4,5]
 *
 * @constraints
 * - The length of the linked list is n.
 * - 1 <= k <= n <= 100
 * - 0 <= Node.val <= 100
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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        // TODO: Implement
    }

    /**
     * Helper function to get the kth node from current position
     * @param {ListNode} curr
     * @param {number} k
     * @return {ListNode}
     */
    getKth(curr, k) {
        // TODO: Implement
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

