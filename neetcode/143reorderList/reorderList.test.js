// Import the solutions
const { Solution, ListNode, SOLUTION_COMPLEXITY } = require('./reorderList.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)', // n = number of nodes, we traverse the list multiple times but each is O(n)
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
function runTest(testName, inputArr, expectedArr, solution) {
    let passed;
    let error = null;

    try {
        const head = arrayToList(inputArr);
        solution.reorderList(head);
        const resultArr = listToArray(head);
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
        [2, 4, 6, 8],
        [2, 8, 4, 6],
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2',
        [2, 4, 6, 8, 10],
        [2, 10, 4, 8, 6],
        solution
    ));

    // Test 3: Single node
    testResults.push(runTest(
        'Test 3: single node',
        [1],
        [1],
        solution
    ));

    // Test 4: Two nodes
    testResults.push(runTest(
        'Test 4: two nodes',
        [1, 2],
        [1, 2],
        solution
    ));

    // Test 5: Three nodes
    testResults.push(runTest(
        'Test 5: three nodes',
        [1, 2, 3],
        [1, 3, 2],
        solution
    ));

    // Test 6: Five nodes
    testResults.push(runTest(
        'Test 6: five nodes',
        [1, 2, 3, 4, 5],
        [1, 5, 2, 4, 3],
        solution
    ));

    // Test 7: Six nodes
    testResults.push(runTest(
        'Test 7: six nodes',
        [1, 2, 3, 4, 5, 6],
        [1, 6, 2, 5, 3, 4],
        solution
    ));

    // Test 8: Seven nodes (as mentioned in problem description)
    testResults.push(runTest(
        'Test 8: seven nodes',
        [0, 1, 2, 3, 4, 5, 6],
        [0, 6, 1, 5, 2, 4, 3],
        solution
    ));

    // Test 9: Minimum constraints (single node)
    testResults.push(runTest(
        'Test 9: minimum constraints (single node)',
        [1],
        [1],
        solution
    ));

    // Test 10: Maximum length (1000 nodes)
    const maxLengthInput = Array.from({ length: 1000 }, (_, i) => i);
    const maxLengthExpected = [];
    for (let i = 0; i < 500; i++) {
        maxLengthExpected.push(i);
        maxLengthExpected.push(999 - i);
    }
    testResults.push(runTest(
        'Test 10: maximum length (1000 nodes)',
        maxLengthInput,
        maxLengthExpected,
        solution
    ));

    // Test 11: All same values
    testResults.push(runTest(
        'Test 11: all same values',
        [5, 5, 5, 5],
        [5, 5, 5, 5],
        solution
    ));

    // Test 12: Sequential numbers starting from 1
    testResults.push(runTest(
        'Test 12: sequential numbers',
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 8, 2, 7, 3, 6, 4, 5],
        solution
    ));

    // Test 13: Large values
    testResults.push(runTest(
        'Test 13: large values',
        [100, 200, 300, 400],
        [100, 400, 200, 300],
        solution
    ));

    // Test 14: Minimum value constraint
    testResults.push(runTest(
        'Test 14: minimum value constraint',
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        solution
    ));

    // Test 15: Maximum value constraint
    testResults.push(runTest(
        'Test 15: maximum value constraint',
        [1000, 999, 998, 997],
        [1000, 997, 999, 998],
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
        title: 'Running Reorder List Tests',
        subtitle: 'Testing Solution (find middle, reverse, merge approach)',
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

