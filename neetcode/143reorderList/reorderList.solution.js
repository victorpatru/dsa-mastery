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
        // 1. Find middle (slow = mid)
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse second half
        let second = slow.next;
        slow.next = null; // break the list
        let prev = null;
        while (second) {
            const next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        // 3. Merge two halves
        let first = head;
        second = prev;
        while (second) {
            const next1 = first.next;
            const next2 = second.next;
            first.next = second;
            second.next = next1;
            first = next1;
            second = next2;
        }
    }
}

/**
 * Time Complexity: O(n) where n is the number of nodes in the linked list.
 * Finding the middle takes O(n/2) = O(n), reversing the second half takes O(n/2) = O(n),
 * and merging takes O(n/2) = O(n). Overall O(n).
 * Space Complexity: O(1) as we only use a constant amount of extra space for pointers.
 */
const SOLUTION_COMPLEXITY = {
    time: 'O(n)',
    space: 'O(1)'
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, ListNode, SOLUTION_COMPLEXITY };
}

