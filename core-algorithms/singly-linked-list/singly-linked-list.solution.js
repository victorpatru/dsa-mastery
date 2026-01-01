class ListNode {
    constructor(val = -1, nextNode = null) {
        this.val = val
        this.next = nextNode
    }
}

class LinkedList {
    constructor() {
        this.dummyHead = new ListNode()
        this.dummyTail = this.dummyHead
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.dummyHead.next
        while (curr && index > 0) {
            curr = curr.next
            index--
        }
        return curr ? curr.val : -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val)
        newNode.next = this.dummyHead.next
        this.dummyHead.next = newNode
        if (!newNode.next) {
            this.dummyTail = newNode
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.dummyTail.next = new ListNode(val)
        this.dummyTail = this.dummyTail.next
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.dummyHead

        while (curr && index > 0) {
            curr = curr.next
            index--
        }

        if (curr && curr.next) {
            if (curr.next === this.dummyTail) {
                this.dummyTail = curr
            }
            curr.next = curr.next.next
            return true
        }

        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.dummyHead.next
        let res = []
        while (curr) {
            res.push(curr.val)
            curr = curr.next
        }
        return res
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ListNode, LinkedList };
}

