// Import the solution
const { StaticArray } = require('./static-array.template.js');

// Test helper function
function runTest(testName, testFn) {
    try {
        testFn();
        console.log(`✓ ${testName}`);
        return true;
    } catch (error) {
        console.log(`✗ ${testName}`);
        console.log(`  Error: ${error.message}`);
        return false;
    }
}

// Helper to compare arrays
function arraysEqual(arr1, arr2, length) {
    for (let i = 0; i < length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Run all tests
console.log('Running StaticArray Tests...\n');

let passed = 0;
let failed = 0;

const staticArray = new StaticArray();

// Test 1: insertEnd with capacity
if (runTest(
    'Test 1: insertEnd within capacity',
    () => {
        const arr = new Array(5).fill(0);
        let length = 0;
        staticArray.insertEnd(arr, 10, length, 5);
        length++;
        staticArray.insertEnd(arr, 20, length, 5);
        length++;
        staticArray.insertEnd(arr, 30, length, 5);
        length++;
        const expected = [10, 20, 30, 0, 0];
        if (!arraysEqual(arr, expected, 5)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
    }
)) passed++; else failed++;

// Test 2: insertEnd at full capacity (should not insert)
if (runTest(
    'Test 2: insertEnd at full capacity',
    () => {
        const arr = [1, 2, 3];
        const length = 3;
        staticArray.insertEnd(arr, 99, length, 3);
        const expected = [1, 2, 3];
        if (!arraysEqual(arr, expected, 3)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
    }
)) passed++; else failed++;

// Test 3: removeEnd
if (runTest(
    'Test 3: removeEnd from array',
    () => {
        const arr = [10, 20, 30, 0, 0];
        let length = 3;
        length = staticArray.removeEnd(arr, length);
        if (length !== 2) {
            throw new Error(`Expected length 2, got ${length}`);
        }
        if (arr[2] !== 0) {
            throw new Error(`Expected arr[2] to be 0, got ${arr[2]}`);
        }
    }
)) passed++; else failed++;

// Test 4: removeEnd on empty array
if (runTest(
    'Test 4: removeEnd on empty array',
    () => {
        const arr = [0, 0, 0];
        let length = 0;
        length = staticArray.removeEnd(arr, length);
        if (length !== 0) {
            throw new Error(`Expected length 0, got ${length}`);
        }
    }
)) passed++; else failed++;

// Test 5: insertMiddle
if (runTest(
    'Test 5: insertMiddle at index 1',
    () => {
        const arr = [1, 2, 3, 0, 0];
        let length = 3;
        staticArray.insertMiddle(arr, 1, 99, length);
        length++;
        const expected = [1, 99, 2, 3, 0];
        if (!arraysEqual(arr, expected, 5)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
    }
)) passed++; else failed++;

// Test 6: insertMiddle at index 0
if (runTest(
    'Test 6: insertMiddle at index 0',
    () => {
        const arr = [5, 10, 15, 0, 0];
        let length = 3;
        staticArray.insertMiddle(arr, 0, 1, length);
        length++;
        const expected = [1, 5, 10, 15, 0];
        if (!arraysEqual(arr, expected, 5)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
    }
)) passed++; else failed++;

// Test 7: removeMiddle
if (runTest(
    'Test 7: removeMiddle at index 1',
    () => {
        const arr = [10, 20, 30, 40, 0];
        let length = 4;
        staticArray.removeMiddle(arr, 1, length);
        length--;
        const expected = [10, 30, 40, 40, 0];
        if (!arraysEqual(arr, expected, 5)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
        if (length !== 3) {
            throw new Error(`Expected length 3, got ${length}`);
        }
    }
)) passed++; else failed++;

// Test 8: removeMiddle at index 0
if (runTest(
    'Test 8: removeMiddle at index 0',
    () => {
        const arr = [1, 2, 3, 4, 5];
        let length = 5;
        staticArray.removeMiddle(arr, 0, length);
        length--;
        const expected = [2, 3, 4, 5, 5];
        if (!arraysEqual(arr, expected, 5)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
    }
)) passed++; else failed++;

// Test 9: printArr
if (runTest(
    'Test 9: printArr',
    () => {
        const arr = [10, 20, 30, 0, 0];
        const length = 3;
        const result = staticArray.printArr(arr, length);
        const expected = "10 20 30 ";
        if (result !== expected) {
            throw new Error(`Expected "${expected}", got "${result}"`);
        }
    }
)) passed++; else failed++;

// Test 10: printArr empty array
if (runTest(
    'Test 10: printArr empty array',
    () => {
        const arr = [0, 0, 0];
        const length = 0;
        const result = staticArray.printArr(arr, length);
        const expected = "";
        if (result !== expected) {
            throw new Error(`Expected "${expected}", got "${result}"`);
        }
    }
)) passed++; else failed++;

// Test 11: Complex sequence of operations
if (runTest(
    'Test 11: complex sequence of operations',
    () => {
        const arr = new Array(10).fill(0);
        let length = 0;

        // Insert at end: [1, 2, 3]
        staticArray.insertEnd(arr, 1, length, 10);
        length++;
        staticArray.insertEnd(arr, 2, length, 10);
        length++;
        staticArray.insertEnd(arr, 3, length, 10);
        length++;

        // Insert 99 at index 1: [1, 99, 2, 3]
        staticArray.insertMiddle(arr, 1, 99, length);
        length++;

        // Remove from middle at index 2: [1, 99, 3] but 3 is still at index 3
        staticArray.removeMiddle(arr, 2, length);
        length--;

        // Remove from end: [1, 99] and arr[2] gets set to 0
        length = staticArray.removeEnd(arr, length);

        // After removeMiddle, the last element (at old position) remains until overwritten
        // After removeEnd, arr[2] (the old length-1 position) is set to 0
        const expected = [1, 99, 0, 3, 0, 0, 0, 0, 0, 0];
        if (!arraysEqual(arr, expected, 10)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
        if (length !== 2) {
            throw new Error(`Expected length 2, got ${length}`);
        }
    }
)) passed++; else failed++;

// Test 12: insertMiddle at last position
if (runTest(
    'Test 12: insertMiddle at last valid position',
    () => {
        const arr = [1, 2, 3, 0, 0];
        let length = 3;
        staticArray.insertMiddle(arr, 2, 99, length);
        length++;
        const expected = [1, 2, 99, 3, 0];
        if (!arraysEqual(arr, expected, 5)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
    }
)) passed++; else failed++;

// Test 13: removeMiddle at last position
if (runTest(
    'Test 13: removeMiddle at last valid position',
    () => {
        const arr = [1, 2, 3, 4, 5];
        let length = 5;
        staticArray.removeMiddle(arr, 4, length);
        length--;
        // After removing index 4, nothing shifts (it's the last element)
        const expected = [1, 2, 3, 4, 5];
        if (!arraysEqual(arr, expected, 5)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
    }
)) passed++; else failed++;

// Test 14: Multiple insertEnd until full
if (runTest(
    'Test 14: fill array completely with insertEnd',
    () => {
        const arr = new Array(3).fill(0);
        let length = 0;
        staticArray.insertEnd(arr, 10, length, 3);
        length++;
        staticArray.insertEnd(arr, 20, length, 3);
        length++;
        staticArray.insertEnd(arr, 30, length, 3);
        length++;
        staticArray.insertEnd(arr, 40, length, 3); // Should not insert

        const expected = [10, 20, 30];
        if (!arraysEqual(arr, expected, 3)) {
            throw new Error(`Expected [${expected}], got [${arr}]`);
        }
        if (length !== 3) {
            throw new Error(`Expected length 3, got ${length}`);
        }
    }
)) passed++; else failed++;

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Tests Passed: ${passed}/${passed + failed}`);
console.log(`Tests Failed: ${failed}/${passed + failed}`);
if (failed === 0) {
    console.log('✓ All tests passed!');
    process.exit(0);
} else {
    console.log('✗ Some tests failed');
    process.exit(1);
}

