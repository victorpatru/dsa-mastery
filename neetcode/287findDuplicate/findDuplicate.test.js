// Import the solutions
const { Solution, SOLUTION_COMPLEXITY } = require('./findDuplicate.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)',     // Floyd's Cycle Detection is O(n)
        space: 'O(1)'     // Only using pointer variables
    }
};

// Test helper function
function runTest(testName, nums, expected, solution) {
    let result, passed;
    let error = null;

    try {
        // Create a copy to ensure we don't modify the original
        const numsCopy = [...nums];
        result = solution.findDuplicate(numsCopy);

        passed = result === expected;

        if (!passed) {
            error = {
                Input: `nums = ${JSON.stringify(nums)}`,
                Expected: expected,
                Got: result
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `nums = ${JSON.stringify(nums)}`,
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
        'Test 1: example 1 (duplicate is 2)',
        [1, 2, 3, 2, 2],
        2,
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2 (duplicate is 4)',
        [1, 2, 3, 4, 4],
        4,
        solution
    ));

    // Test 3: Small array with duplicate at start
    testResults.push(runTest(
        'Test 3: duplicate at start',
        [1, 1],
        1,
        solution
    ));

    // Test 4: Duplicate appears twice
    testResults.push(runTest(
        'Test 4: duplicate appears exactly twice',
        [1, 3, 4, 2, 2],
        2,
        solution
    ));

    // Test 5: Duplicate appears many times
    testResults.push(runTest(
        'Test 5: duplicate appears many times',
        [3, 1, 3, 4, 3, 3],
        3,
        solution
    ));

    // Test 6: Large duplicate value
    testResults.push(runTest(
        'Test 6: large duplicate value',
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 9],
        9,
        solution
    ));

    // Test 7: Duplicate is 1
    testResults.push(runTest(
        'Test 7: duplicate is 1',
        [1, 1, 2, 3, 4],
        1,
        solution
    ));

    // Test 8: Consecutive numbers with one duplicate
    testResults.push(runTest(
        'Test 8: consecutive sequence',
        [1, 2, 3, 4, 5, 6, 7, 7],
        7,
        solution
    ));

    // Test 9: Non-consecutive numbers
    testResults.push(runTest(
        'Test 9: non-consecutive numbers',
        [2, 5, 9, 6, 9, 3, 8, 9, 7, 1],
        9,
        solution
    ));

    // Test 10: Duplicate in middle
    testResults.push(runTest(
        'Test 10: duplicate in middle of range',
        [1, 2, 4, 5, 6, 4, 3],
        4,
        solution
    ));

    // Test 11: All same except one
    testResults.push(runTest(
        'Test 11: all same except one',
        [4, 4, 4, 4, 1],
        4,
        solution
    ));

    // Test 12: Larger array
    testResults.push(runTest(
        'Test 12: larger array',
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 8],
        8,
        solution
    ));

    // Test 13: Duplicate is smallest
    testResults.push(runTest(
        'Test 13: duplicate is smallest value',
        [1, 1, 2, 3, 4, 5],
        1,
        solution
    ));

    // Test 14: Duplicate is largest
    testResults.push(runTest(
        'Test 14: duplicate is largest value',
        [1, 2, 3, 4, 5, 5],
        5,
        solution
    ));

    // Test 15: Random order with duplicate
    testResults.push(runTest(
        'Test 15: random order',
        [4, 3, 1, 2, 2],
        2,
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
        title: 'Running Find the Duplicate Number Tests',
        subtitle: "Testing Solution (Floyd's Cycle Detection)",
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


