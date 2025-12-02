// Import the solutions
const { Solution, ListNode, SOLUTION_COMPLEXITY } = require('./reverseLinkedList.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)', // n = number of nodes
        space: 'O(1)'  // constant extra space
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
function runTest(testName, inputArr, expectedArr, solution) {
    let result, passed;
    let error = null;

    try {
        const head = arrayToList(inputArr);
        const reversedHead = solution.reverseList(head);
        const resultArr = listToArray(reversedHead);
        passed = JSON.stringify(resultArr) === JSON.stringify(expectedArr);

        if (!passed) {
            error = {
                Input: `head = ${JSON.stringify(inputArr)}`,
                Expected: JSON.stringify(expectedArr),
                Got: JSON.stringify(resultArr)
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `head = ${JSON.stringify(inputArr)}`,
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
        [0, 1, 2, 3],
        [3, 2, 1, 0],
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2',
        [],
        [],
        solution
    ));

    // Test 3: Single node
    testResults.push(runTest(
        'Test 3: single node',
        [5],
        [5],
        solution
    ));

    // Test 4: Two nodes
    testResults.push(runTest(
        'Test 4: two nodes',
        [1, 2],
        [2, 1],
        solution
    ));

    // Test 5: Three nodes
    testResults.push(runTest(
        'Test 5: three nodes',
        [1, 2, 3],
        [3, 2, 1],
        solution
    ));

    // Test 6: Five nodes
    testResults.push(runTest(
        'Test 6: five nodes',
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
        solution
    ));

    // Test 7: Minimum constraints (empty list)
    testResults.push(runTest(
        'Test 7: minimum constraints (empty list)',
        [],
        [],
        solution
    ));

    // Test 8: Maximum length (1000 nodes)
    testResults.push(runTest(
        'Test 8: maximum length (1000 nodes)',
        Array.from({ length: 1000 }, (_, i) => i),
        Array.from({ length: 1000 }, (_, i) => 999 - i),
        solution
    ));

    // Test 9: All same values
    testResults.push(runTest(
        'Test 9: all same values',
        [7, 7, 7, 7],
        [7, 7, 7, 7],
        solution
    ));

    // Test 10: Negative values
    testResults.push(runTest(
        'Test 10: negative values',
        [-1, -2, -3],
        [-3, -2, -1],
        solution
    ));

    // Test 11: Mixed positive and negative
    testResults.push(runTest(
        'Test 11: mixed positive and negative',
        [-1, 2, -3, 4],
        [4, -3, 2, -1],
        solution
    ));

    // Test 12: Large values
    testResults.push(runTest(
        'Test 12: large values',
        [100, 200, 300],
        [300, 200, 100],
        solution
    ));

    // Test 13: Alternating pattern
    testResults.push(runTest(
        'Test 13: alternating pattern',
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        solution
    ));

    // Test 14: Sequential numbers
    testResults.push(runTest(
        'Test 14: sequential numbers',
        [10, 20, 30, 40, 50, 60],
        [60, 50, 40, 30, 20, 10],
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
        title: 'Running Reverse Linked List Tests',
        subtitle: 'Testing Solution (iterative approach)',
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

