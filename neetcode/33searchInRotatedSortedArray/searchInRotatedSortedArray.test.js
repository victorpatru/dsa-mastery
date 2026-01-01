const { Solution, SOLUTION_COMPLEXITY } = require('./searchInRotatedSortedArray.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(logn)',
        space: 'O(1)'
    }
};

// Test helper function
function runTest(testName, nums, target, expected, solution) {
    let result, passed;
    let error = null;

    try {
        result = solution.search(nums, target);
        passed = result === expected;

        if (!passed) {
            error = {
                Input: `nums = ${JSON.stringify(nums)}, target = ${target}`,
                Expected: expected,
                Got: result
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `nums = ${JSON.stringify(nums)}, target = ${target}`,
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
        'Test 1: example 1 - target found',
        [3, 4, 5, 6, 1, 2],
        1,
        4,
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2 - target not found',
        [3, 5, 6, 0, 1, 2],
        4,
        -1,
        solution
    ));

    // Test 3: Single element array - target found
    testResults.push(runTest(
        'Test 3: single element - target found',
        [1],
        1,
        0,
        solution
    ));

    // Test 4: Single element array - target not found
    testResults.push(runTest(
        'Test 4: single element - target not found',
        [1],
        0,
        -1,
        solution
    ));

    // Test 5: Two elements - rotated once
    testResults.push(runTest(
        'Test 5: two elements rotated - target found',
        [2, 1],
        1,
        1,
        solution
    ));

    // Test 6: Two elements - target not found
    testResults.push(runTest(
        'Test 6: two elements - target not found',
        [2, 1],
        3,
        -1,
        solution
    ));

    // Test 7: Not rotated (fully sorted)
    testResults.push(runTest(
        'Test 7: not rotated - target found',
        [1, 2, 3, 4, 5],
        3,
        2,
        solution
    ));

    // Test 8: Not rotated - target not found
    testResults.push(runTest(
        'Test 8: not rotated - target not found',
        [1, 2, 3, 4, 5],
        6,
        -1,
        solution
    ));

    // Test 9: Rotated once
    testResults.push(runTest(
        'Test 9: rotated once - target found',
        [5, 1, 2, 3, 4],
        1,
        1,
        solution
    ));

    // Test 10: Rotated multiple times - target at beginning
    testResults.push(runTest(
        'Test 10: rotated - target at beginning',
        [4, 5, 6, 7, 0, 1, 2],
        4,
        0,
        solution
    ));

    // Test 11: Rotated multiple times - target at end
    testResults.push(runTest(
        'Test 11: rotated - target at end',
        [4, 5, 6, 7, 0, 1, 2],
        2,
        6,
        solution
    ));

    // Test 12: Rotated multiple times - target in middle
    testResults.push(runTest(
        'Test 12: rotated - target in middle',
        [4, 5, 6, 7, 0, 1, 2],
        6,
        2,
        solution
    ));

    // Test 13: Rotated multiple times - target in rotated portion
    testResults.push(runTest(
        'Test 13: rotated - target in rotated portion',
        [4, 5, 6, 7, 0, 1, 2],
        0,
        4,
        solution
    ));

    // Test 14: Negative numbers
    testResults.push(runTest(
        'Test 14: negative numbers - target found',
        [5, 1, 2, 3, 4],
        1,
        1,
        solution
    ));

    // Test 15: Negative numbers rotated
    testResults.push(runTest(
        'Test 15: negative numbers rotated - target found',
        [-1, -2, -3, -4, -5],
        -3,
        2,
        solution
    ));

    // Test 16: Mixed positive and negative
    testResults.push(runTest(
        'Test 16: mixed positive and negative - target found',
        [3, 1],
        1,
        1,
        solution
    ));

    // Test 17: Large rotation
    testResults.push(runTest(
        'Test 17: large rotation - target found',
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        5,
        4,
        solution
    ));

    // Test 18: Target smaller than all elements
    testResults.push(runTest(
        'Test 18: target smaller than all elements',
        [4, 5, 6, 7, 0, 1, 2],
        -1,
        -1,
        solution
    ));

    // Test 19: Target larger than all elements
    testResults.push(runTest(
        'Test 19: target larger than all elements',
        [4, 5, 6, 7, 0, 1, 2],
        10,
        -1,
        solution
    ));

    // Test 20: Edge case - rotated n times (back to original)
    testResults.push(runTest(
        'Test 20: rotated n times (back to original)',
        [1, 2, 3, 4, 5, 6],
        4,
        3,
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
        title: 'Running Search in Rotated Sorted Array Tests',
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
