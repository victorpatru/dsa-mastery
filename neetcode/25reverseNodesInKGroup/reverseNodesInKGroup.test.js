// Import the solution
const { Solution, ListNode, SOLUTION_COMPLEXITY } = require('./reverseNodesInKGroup.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)',
        space: 'O(1)'
    }
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    const result = [];
    let current = head;
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

// Helper function to compare arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Test helper function
function runTest(testName, arr, k, expected, solution) {
    let result, passed;
    let error = null;
    
    try {
        const head = createLinkedList(arr);
        const resultHead = solution.reverseKGroup(head, k);
        result = linkedListToArray(resultHead);
        passed = arraysEqual(result, expected);
        
        if (!passed) {
            error = {
                Input: { list: arr, k: k },
                Expected: expected,
                Got: result
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: { list: arr, k: k },
            Expected: expected,
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
        'Test 1: [1,2,3,4,5,6], k=3',
        [1, 2, 3, 4, 5, 6],
        3,
        [3, 2, 1, 6, 5, 4],
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: [1,2,3,4,5], k=3',
        [1, 2, 3, 4, 5],
        3,
        [3, 2, 1, 4, 5],
        solution
    ));

    // Test 3: k = 1 (no reversal)
    testResults.push(runTest(
        'Test 3: k=1 (no reversal)',
        [1, 2, 3, 4, 5],
        1,
        [1, 2, 3, 4, 5],
        solution
    ));

    // Test 4: k = 2
    testResults.push(runTest(
        'Test 4: [1,2,3,4], k=2',
        [1, 2, 3, 4],
        2,
        [2, 1, 4, 3],
        solution
    ));

    // Test 5: k equals list length
    testResults.push(runTest(
        'Test 5: k equals list length',
        [1, 2, 3, 4, 5],
        5,
        [5, 4, 3, 2, 1],
        solution
    ));

    // Test 6: Single node
    testResults.push(runTest(
        'Test 6: single node',
        [1],
        1,
        [1],
        solution
    ));

    // Test 7: Two nodes, k=2
    testResults.push(runTest(
        'Test 7: two nodes, k=2',
        [1, 2],
        2,
        [2, 1],
        solution
    ));

    // Test 8: List length not divisible by k
    testResults.push(runTest(
        'Test 8: [1,2,3,4,5,6,7,8], k=3',
        [1, 2, 3, 4, 5, 6, 7, 8],
        3,
        [3, 2, 1, 6, 5, 4, 7, 8],
        solution
    ));

    // Test 9: k = 4, list length = 10
    testResults.push(runTest(
        'Test 9: [1,2,3,4,5,6,7,8,9,10], k=4',
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        4,
        [4, 3, 2, 1, 8, 7, 6, 5, 9, 10],
        solution
    ));

    // Test 10: k greater than remaining nodes
    testResults.push(runTest(
        'Test 10: [1,2], k=3',
        [1, 2],
        3,
        [1, 2],
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
        title: 'Running Reverse Nodes in K-Group Tests',
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

