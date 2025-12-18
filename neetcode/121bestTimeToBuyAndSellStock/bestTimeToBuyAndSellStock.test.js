// Import the solutions
const { Solution, SOLUTION_COMPLEXITY } = require('./bestTimeToBuyAndSellStock.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)', // n = length of prices array
        space: 'O(1)'  // constant space
    }
};

// Test helper function
function runTest(testName, prices, expected, solution) {
    let result, passed;
    let error = null;

    try {
        result = solution.maxProfit(prices);
        passed = result === expected;

        if (!passed) {
            error = {
                Input: `prices = ${JSON.stringify(prices)}`,
                Expected: expected,
                Got: result
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `prices = ${JSON.stringify(prices)}`,
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
        'Test 1: example 1 - buy at 1, sell at 7',
        [10, 1, 5, 6, 7, 1],
        6,
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2 - no profit',
        [10, 8, 7, 5, 2],
        0,
        solution
    ));

    // Test 3: Single element
    testResults.push(runTest(
        'Test 3: single element',
        [5],
        0,
        solution
    ));

    // Test 4: Two elements - profit available
    testResults.push(runTest(
        'Test 4: two elements - profit available',
        [1, 5],
        4,
        solution
    ));

    // Test 5: Two elements - no profit
    testResults.push(runTest(
        'Test 5: two elements - no profit',
        [5, 1],
        0,
        solution
    ));

    // Test 6: Strictly increasing
    testResults.push(runTest(
        'Test 6: strictly increasing',
        [1, 2, 3, 4, 5],
        4,
        solution
    ));

    // Test 7: Strictly decreasing
    testResults.push(runTest(
        'Test 7: strictly decreasing',
        [5, 4, 3, 2, 1],
        0,
        solution
    ));

    // Test 8: Minimum at end
    testResults.push(runTest(
        'Test 8: minimum at end',
        [7, 6, 4, 3, 1],
        0,
        solution
    ));

    // Test 9: Maximum profit in middle
    testResults.push(runTest(
        'Test 9: maximum profit in middle',
        [3, 2, 6, 5, 0, 3],
        4,
        solution
    ));

    // Test 10: All same prices
    testResults.push(runTest(
        'Test 10: all same prices',
        [5, 5, 5, 5, 5],
        0,
        solution
    ));

    // Test 11: Large profit
    testResults.push(runTest(
        'Test 11: large profit',
        [1, 100],
        99,
        solution
    ));

    // Test 12: Zero prices
    testResults.push(runTest(
        'Test 12: zero prices',
        [0, 0, 0],
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
        title: 'Running Best Time to Buy and Sell Stock Tests',
        subtitle: 'Testing Solution (one pass tracking minimum)',
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

