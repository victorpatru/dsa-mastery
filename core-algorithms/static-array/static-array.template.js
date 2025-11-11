/**
 * Static Array Class
 * This class demonstrates operations on a fixed-size array.
 * Unlike dynamic arrays, static arrays have a fixed capacity.
 */
class StaticArray {
    /**
     * Insert n into arr at the next open position.
     * Length is the number of 'real' values in arr, and capacity
     * is the size (aka memory allocated for the fixed size array).
     * @param {Array<number>} arr - The array to insert into.
     * @param {number} n - The value to insert.
     * @param {number} length - Current number of elements.
     * @param {number} capacity - Maximum capacity of the array.
     * @returns {void}
     */
    insertEnd(arr, n, length, capacity) {
        // TODO: implement
    }

    /**
     * Remove from the last position in the array if the array
     * is not empty (i.e. length is non-zero).
     * @param {Array<number>} arr - The array to remove from.
     * @param {number} length - Current number of elements.
     * @returns {number} - The new length after removal.
     */
    removeEnd(arr, length) {
        // TODO: implement
    }

    /**
     * Insert n into index i after shifting elements to the right.
     * Assuming i is a valid index and arr is not full.
     * @param {Array<number>} arr - The array to insert into.
     * @param {number} i - The index to insert at.
     * @param {number} n - The value to insert.
     * @param {number} length - Current number of elements.
     * @returns {void}
     */
    insertMiddle(arr, i, n, length) {
        // TODO: implement
    }

    /**
     * Remove value at index i before shifting elements to the left.
     * Assuming i is a valid index.
     * @param {Array<number>} arr - The array to remove from.
     * @param {number} i - The index to remove at.
     * @param {number} length - Current number of elements.
     * @returns {void}
     */
    removeMiddle(arr, i, length) {
        // TODO: implement
    }

    /**
     * Print the array.
     * @param {Array<number>} arr - The array to print.
     * @param {number} length - Current number of elements.
     * @returns {string} - String representation of the array.
     */
    printArr(arr, length) {
        // TODO: implement
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StaticArray };
}

