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
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            const kth = this.getKth(groupPrev, k);
            if (!kth) {
                break;
            }
            const groupNext = kth.next;

            // Reverse group
            let prev = kth.next;
            let curr = groupPrev.next;
            while (curr !== groupNext) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            const tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }
        return dummy.next;
    }

    /**
     * Helper function to get the kth node from current position
     * @param {ListNode} curr
     * @param {number} k
     * @return {ListNode}
     */
    getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}

/**
 * Time Complexity: O(n) - We visit each node once
 * Space Complexity: O(1) - Only using constant extra space
 */

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, ListNode };
}

