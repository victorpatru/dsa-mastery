// Import the solutions
const { Solution, SOLUTION_COMPLEXITY } = require('./containerWithMostWater.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)', // n = length of heights array
        space: 'O(1)'  // constant space
    }
};

// Test helper function
function runTest(testName, heights, expected, solution) {
    let result, passed;
    let error = null;

    try {
        result = solution.maxArea(heights);
        passed = result === expected;

        if (!passed) {
            error = {
                Input: `height = ${JSON.stringify(heights)}`,
                Expected: expected,
                Got: result
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `height = ${JSON.stringify(heights)}`,
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
        'Test 1: example 1',
        [1, 7, 2, 5, 4, 7, 3, 6],
        36,
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2 - all same height',
        [2, 2, 2],
        4,
        solution
    ));

    // Test 3: Two elements
    testResults.push(runTest(
        'Test 3: two elements',
        [1, 1],
        1,
        solution
    ));

    // Test 4: Increasing heights
    testResults.push(runTest(
        'Test 4: increasing heights',
        [1, 2, 3, 4, 5],
        6,
        solution
    ));

    // Test 5: Decreasing heights
    testResults.push(runTest(
        'Test 5: decreasing heights',
        [5, 4, 3, 2, 1],
        6,
        solution
    ));

    // Test 6: Maximum area in middle
    testResults.push(runTest(
        'Test 6: maximum area in middle',
        [1, 8, 6, 2, 5, 4, 8, 3, 7],
        49,
        solution
    ));

    // Test 7: Tall bars at ends
    testResults.push(runTest(
        'Test 7: tall bars at ends',
        [8, 1, 1, 1, 1, 1, 1, 8],
        56,
        solution
    ));

    // Test 8: Single tall bar
    testResults.push(runTest(
        'Test 8: single tall bar',
        [1, 2, 1],
        2,
        solution
    ));

    // Test 9: Minimum constraints
    testResults.push(runTest(
        'Test 9: minimum constraints',
        [1, 2],
        1,
        solution
    ));

    // Test 10: Zero heights
    testResults.push(runTest(
        'Test 10: zero heights',
        [0, 2, 0],
        0,
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
        title: 'Running Container With Most Water Tests',
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

