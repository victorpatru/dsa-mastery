/**
 * Doubly Linked List Node
 */
class Node {
    /**
     * @param {number} value The value to be stored in the node
     */
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * Linked List implementation of Double Ended Queue
 */
class Deque {
    constructor() {
        // Initialize with dummy head and tail nodes
        this.dummyHead = new Node(-1);
        this.dummyTail = new Node(-1);
        // Connect dummy head and tail nodes
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * Checks if the deque is empty
     * @returns {boolean} True if the deque is empty, otherwise false
     */
    isEmpty() {
        return this.dummyHead.next === this.dummyTail;
    }

    /**
     * Appends a value to the end of the deque
     * @param {number} value The value to append
     */
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.dummyTail.prev;
        newNode.next = this.dummyTail;
        this.dummyTail.prev.next = newNode;
        this.dummyTail.prev = newNode;
    }

    /**
     * Appends a value to the front of the deque
     * @param {number} value The value to append
     */
    appendleft(value) {
        const newNode = new Node(value);
        newNode.next = this.dummyHead.next;
        newNode.prev = this.dummyHead;
        this.dummyHead.next.prev = newNode;
        this.dummyHead.next = newNode;
    }

    /**
     * Removes and returns the value from the end of the deque
     * @returns {number} The value at the end of the deque or -1 if the deque is empty
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        const targetNode = this.dummyTail.prev;
        const prevNode = targetNode.prev;
        const value = targetNode.value;
        this.dummyTail.prev = prevNode;
        prevNode.next = this.dummyTail;
        return value;
    }

    /**
     * Removes and returns the value from the front of the deque
     * @returns {number} The value at the front of the deque or -1 if the deque is empty
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }
        const targetNode = this.dummyHead.next;
        const nextNode = targetNode.next;
        const value = targetNode.value;
        this.dummyHead.next = nextNode;
        nextNode.prev = this.dummyHead;
        return value;
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Node, Deque };
}

