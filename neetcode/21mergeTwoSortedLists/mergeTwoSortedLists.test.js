// Import the solutions
const { Solution, ListNode, SOLUTION_COMPLEXITY } = require('./mergeTwoSortedLists.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n + m)', // n = length of list1, m = length of list2
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
function runTest(testName, list1Arr, list2Arr, expectedArr, solution) {
    let result, passed;
    let error = null;

    try {
        const list1 = arrayToList(list1Arr);
        const list2 = arrayToList(list2Arr);
        const mergedHead = solution.mergeTwoLists(list1, list2);
        const resultArr = listToArray(mergedHead);
        passed = JSON.stringify(resultArr) === JSON.stringify(expectedArr);

        if (!passed) {
            error = {
                Input: `list1 = ${JSON.stringify(list1Arr)}, list2 = ${JSON.stringify(list2Arr)}`,
                Expected: JSON.stringify(expectedArr),
                Got: JSON.stringify(resultArr)
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `list1 = ${JSON.stringify(list1Arr)}, list2 = ${JSON.stringify(list2Arr)}`,
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
        [1, 2, 4],
        [1, 3, 5],
        [1, 1, 2, 3, 4, 5],
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2',
        [],
        [1, 2],
        [1, 2],
        solution
    ));

    // Test 3: Example 3 from problem description
    testResults.push(runTest(
        'Test 3: example 3',
        [],
        [],
        [],
        solution
    ));

    // Test 4: list1 empty, list2 has values
    testResults.push(runTest(
        'Test 4: list1 empty, list2 has values',
        [],
        [1, 2, 3],
        [1, 2, 3],
        solution
    ));

    // Test 5: list1 has values, list2 empty
    testResults.push(runTest(
        'Test 5: list1 has values, list2 empty',
        [1, 2, 3],
        [],
        [1, 2, 3],
        solution
    ));

    // Test 6: Single node in each list
    testResults.push(runTest(
        'Test 6: single node in each list',
        [1],
        [2],
        [1, 2],
        solution
    ));

    // Test 7: Single node in list1, multiple in list2
    testResults.push(runTest(
        'Test 7: single node in list1, multiple in list2',
        [2],
        [1, 3, 4],
        [1, 2, 3, 4],
        solution
    ));

    // Test 8: All values in list1 smaller than list2
    testResults.push(runTest(
        'Test 8: all values in list1 smaller than list2',
        [1, 2, 3],
        [4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        solution
    ));

    // Test 9: All values in list2 smaller than list1
    testResults.push(runTest(
        'Test 9: all values in list2 smaller than list1',
        [4, 5, 6],
        [1, 2, 3],
        [1, 2, 3, 4, 5, 6],
        solution
    ));

    // Test 10: Interleaved values
    testResults.push(runTest(
        'Test 10: interleaved values',
        [1, 3, 5],
        [2, 4, 6],
        [1, 2, 3, 4, 5, 6],
        solution
    ));

    // Test 11: Duplicate values
    testResults.push(runTest(
        'Test 11: duplicate values',
        [1, 1, 2],
        [1, 2, 2],
        [1, 1, 1, 2, 2, 2],
        solution
    ));

    // Test 12: Negative values
    testResults.push(runTest(
        'Test 12: negative values',
        [-3, -1],
        [-2, 0],
        [-3, -2, -1, 0],
        solution
    ));

    // Test 13: Mixed positive and negative
    testResults.push(runTest(
        'Test 13: mixed positive and negative',
        [-1, 2],
        [-2, 1, 3],
        [-2, -1, 1, 2, 3],
        solution
    ));

    // Test 14: Minimum constraint values
    testResults.push(runTest(
        'Test 14: minimum constraint values',
        [-100],
        [-100],
        [-100, -100],
        solution
    ));

    // Test 15: Maximum constraint values
    testResults.push(runTest(
        'Test 15: maximum constraint values',
        [100],
        [100],
        [100, 100],
        solution
    ));

    // Test 16: Different lengths
    testResults.push(runTest(
        'Test 16: different lengths',
        [1, 5],
        [2, 3, 4, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
        solution
    ));

    // Test 17: Maximum length (100 nodes each)
    testResults.push(runTest(
        'Test 17: maximum length (100 nodes each)',
        Array.from({ length: 100 }, (_, i) => i * 2),
        Array.from({ length: 100 }, (_, i) => i * 2 + 1),
        Array.from({ length: 200 }, (_, i) => i),
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
        title: 'Running Merge Two Sorted Lists Tests',
        subtitle: 'Testing Solution (dummy node approach)',
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

