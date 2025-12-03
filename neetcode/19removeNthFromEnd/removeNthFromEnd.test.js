// Import the solutions
const { Solution, ListNode, SOLUTION_COMPLEXITY } = require('./removeNthFromEnd.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)', // n = number of nodes, single pass through the list
        space: 'O(1)'  // constant extra space for pointers
    }
};

// Helper function to create a linked list from an array
function arrayToList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    const arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

// Test helper function
function runTest(testName, inputArr, n, expectedArr, solution) {
    let passed;
    let error = null;

    try {
        const head = arrayToList(inputArr);
        const resultHead = solution.removeNthFromEnd(head, n);
        const resultArr = listToArray(resultHead);
        passed = JSON.stringify(resultArr) === JSON.stringify(expectedArr);

        if (!passed) {
            error = {
                Input: `head = ${JSON.stringify(inputArr)}, n = ${n}`,
                Expected: JSON.stringify(expectedArr),
                Got: JSON.stringify(resultArr)
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `head = ${JSON.stringify(inputArr)}, n = ${n}`,
            Expected: JSON.stringify(expectedArr),
            Error: e.message,
            Stack: e.stack
        };
    }

    return {
        name: testName,
        passed,
        error
    };
}

// Run all tests
async function main() {
    const solution = new Solution();
    const testResults = [];

    // Test 1: Example 1 from problem description
    testResults.push(runTest(
        'Test 1: example 1',
        [1, 2, 3, 4],
        2,
        [1, 2, 4],
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2',
        [5],
        1,
        [],
        solution
    ));

    // Test 3: Example 3 from problem description
    testResults.push(runTest(
        'Test 3: example 3',
        [1, 2],
        2,
        [2],
        solution
    ));

    // Test 4: Remove last node (n = 1)
    testResults.push(runTest(
        'Test 4: remove last node',
        [1, 2, 3, 4, 5],
        1,
        [1, 2, 3, 4],
        solution
    ));

    // Test 5: Remove first node (n = length)
    testResults.push(runTest(
        'Test 5: remove first node',
        [1, 2, 3, 4, 5],
        5,
        [2, 3, 4, 5],
        solution
    ));

    // Test 6: Remove middle node
    testResults.push(runTest(
        'Test 6: remove middle node',
        [1, 2, 3, 4, 5],
        3,
        [1, 2, 4, 5],
        solution
    ));

    // Test 7: Three nodes, remove middle
    testResults.push(runTest(
        'Test 7: three nodes, remove middle',
        [1, 2, 3],
        2,
        [1, 3],
        solution
    ));

    // Test 8: Three nodes, remove last
    testResults.push(runTest(
        'Test 8: three nodes, remove last',
        [1, 2, 3],
        1,
        [1, 2],
        solution
    ));

    // Test 9: Three nodes, remove first
    testResults.push(runTest(
        'Test 9: three nodes, remove first',
        [1, 2, 3],
        3,
        [2, 3],
        solution
    ));

    // Test 10: Minimum constraints (single node, n = 1)
    testResults.push(runTest(
        'Test 10: minimum constraints (single node)',
        [1],
        1,
        [],
        solution
    ));

    // Test 11: Maximum length (30 nodes), remove from middle
    const maxLengthInput = Array.from({ length: 30 }, (_, i) => i + 1);
    const maxLengthExpected = Array.from({ length: 30 }, (_, i) => i + 1);
    maxLengthExpected.splice(15, 1); // Remove 16th node (15th index, 16th from start, 15th from end)
    testResults.push(runTest(
        'Test 11: maximum length (30 nodes), remove from middle',
        maxLengthInput,
        15,
        maxLengthExpected,
        solution
    ));

    // Test 12: Maximum length, remove first node
    const maxLengthInput2 = Array.from({ length: 30 }, (_, i) => i + 1);
    const maxLengthExpected2 = Array.from({ length: 29 }, (_, i) => i + 2);
    testResults.push(runTest(
        'Test 12: maximum length, remove first node',
        maxLengthInput2,
        30,
        maxLengthExpected2,
        solution
    ));

    // Test 13: Maximum length, remove last node
    const maxLengthInput3 = Array.from({ length: 30 }, (_, i) => i + 1);
    const maxLengthExpected3 = Array.from({ length: 29 }, (_, i) => i + 1);
    testResults.push(runTest(
        'Test 13: maximum length, remove last node',
        maxLengthInput3,
        1,
        maxLengthExpected3,
        solution
    ));

    // Test 14: All same values
    testResults.push(runTest(
        'Test 14: all same values',
        [5, 5, 5, 5, 5],
        3,
        [5, 5, 5, 5],
        solution
    ));

    // Test 15: Maximum value constraint
    testResults.push(runTest(
        'Test 15: maximum value constraint',
        [100, 99, 98, 97],
        2,
        [100, 99, 97],
        solution
    ));

    // Test 16: Sequential numbers
    testResults.push(runTest(
        'Test 16: sequential numbers',
        [10, 20, 30, 40, 50],
        4,
        [10, 30, 40, 50],
        solution
    ));

    // Test 17: Remove second from end
    testResults.push(runTest(
        'Test 17: remove second from end',
        [1, 2, 3, 4, 5, 6],
        2,
        [1, 2, 3, 4, 6],
        solution
    ));

    // Test 18: Remove third from end
    testResults.push(runTest(
        'Test 18: remove third from end',
        [1, 2, 3, 4, 5, 6, 7],
        3,
        [1, 2, 3, 4, 6, 7],
        solution
    ));

    // Big O Complexity Validation
    const complexityValidations = [];

    complexityValidations.push(validateComplexityResult(
        'Solution',
        SOLUTION_COMPLEXITY.time,
        CORRECT_COMPLEXITY.solution.time,
        'Time'
    ));

    complexityValidations.push(validateComplexityResult(
        'Solution',
        SOLUTION_COMPLEXITY.space,
        CORRECT_COMPLEXITY.solution.space,
        'Space'
    ));

    const complexityPassed = complexityValidations.filter(v => v.isCorrect).length;
    const complexityTotal = complexityValidations.length;

    // Render results with Ink
    await renderTestResults({
        title: 'Running Remove Nth Node From End Tests',
        subtitle: 'Testing Solution (two pointers approach)',
        tests: testResults,
        complexity: {
            validations: complexityValidations,
            passed: complexityPassed,
            total: complexityTotal
        }
    });

    // Exit with appropriate code
    const failed = testResults.filter(t => !t.passed).length;
    const allTestsPassed = failed === 0;
    const allComplexityCorrect = complexityPassed === complexityTotal;

    if (allTestsPassed && allComplexityCorrect) {
        process.exit(0);
    } else {
        process.exit(1);
    }
}

// Run the tests
main().catch(error => {
    console.error('Error running tests:', error);
    process.exit(1);
});

