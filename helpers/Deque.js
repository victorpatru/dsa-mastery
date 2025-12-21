/**
 * Deque (Double-Ended Queue) implementation using JavaScript object
 * Provides O(1) operations for adding/removing from both ends
 */
class Deque {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    /**
     * Add element to the back of the deque
     * @param {*} value 
     */
    pushBack(value) {
        this.items[this.backIndex] = value;
        this.backIndex++;
    }

    /**
     * Add element to the front of the deque
     * @param {*} value 
     */
    pushFront(value) {
        this.frontIndex--;
        this.items[this.frontIndex] = value;
    }

    /**
     * Remove and return element from the back
     * @returns {*}
     */
    popBack() {
        if (this.isEmpty()) return undefined;
        this.backIndex--;
        const value = this.items[this.backIndex];
        delete this.items[this.backIndex];
        return value;
    }

    /**
     * Remove and return element from the front
     * @returns {*}
     */
    popFront() {
        if (this.isEmpty()) return undefined;
        const value = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return value;
    }

    /**
     * Get the front element without removing it
     * @returns {*}
     */
    front() {
        if (this.isEmpty()) return undefined;
        return this.items[this.frontIndex];
    }

    /**
     * Get the back element without removing it
     * @returns {*}
     */
    back() {
        if (this.isEmpty()) return undefined;
        return this.items[this.backIndex - 1];
    }

    /**
     * Check if deque is empty
     * @returns {boolean}
     */
    isEmpty() {
        return this.backIndex === this.frontIndex;
    }

    /**
     * Get the size of the deque
     * @returns {number}
     */
    size() {
        return this.backIndex - this.frontIndex;
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Deque };
}

