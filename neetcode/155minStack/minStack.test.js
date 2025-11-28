// Import the solutions
const { MinStack, SOLUTION_COMPLEXITY } = require('./minStack.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(1)', // all operations are O(1)
        space: 'O(n)'  // need to store all elements and min values
    }
};

// Test helper function for sequence-based tests
function runTest(testName, operations, expectedResults, MinStackClass) {
    let passed = true;
    let error = null;
    const results = [];

    try {
        const minStack = new MinStackClass();
        
        for (let i = 0; i < operations.length; i++) {
            const op = operations[i];
            let result = null;

            if (op === 'push') {
                const val = operations[++i];
                minStack.push(val);
            } else if (op === 'pop') {
                minStack.pop();
            } else if (op === 'top') {
                result = minStack.top();
            } else if (op === 'getMin') {
                result = minStack.getMin();
            }

            if (result !== null) {
                results.push(result);
            }
        }

        // Compare results
        if (results.length !== expectedResults.length) {
            passed = false;
            error = {
                Operations: JSON.stringify(operations),
                Expected: expectedResults,
                Got: results,
                Message: 'Result length mismatch'
            };
        } else {
            for (let i = 0; i < results.length; i++) {
                if (results[i] !== expectedResults[i]) {
                    passed = false;
                    error = {
                        Operations: JSON.stringify(operations),
                        Expected: expectedResults,
                        Got: results,
                        Message: `Mismatch at index ${i}: expected ${expectedResults[i]}, got ${results[i]}`
                    };
                    break;
                }
            }
        }
    } catch (e) {
        passed = false;
        error = {
            Operations: JSON.stringify(operations),
            Expected: expectedResults,
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
    const testResults = [];

    // Test 1: Example 1 from problem description
    testResults.push(runTest(
        'Test 1: example 1',
        ['push', 1, 'push', 2, 'push', 0, 'getMin', 'pop', 'top', 'getMin'],
        [0, 2, 1],
        MinStack
    ));

    // Test 2: Single element
    testResults.push(runTest(
        'Test 2: single element',
        ['push', 5, 'getMin', 'top'],
        [5, 5],
        MinStack
    ));

    // Test 3: Ascending order
    testResults.push(runTest(
        'Test 3: ascending order',
        ['push', 1, 'push', 2, 'push', 3, 'getMin', 'top'],
        [1, 3],
        MinStack
    ));

    // Test 4: Descending order
    testResults.push(runTest(
        'Test 4: descending order',
        ['push', 3, 'push', 2, 'push', 1, 'getMin', 'top'],
        [1, 1],
        MinStack
    ));

    // Test 5: Pop and check min
    testResults.push(runTest(
        'Test 5: pop and check min',
        ['push', 2, 'push', 1, 'push', 3, 'getMin', 'pop', 'getMin', 'pop', 'getMin'],
        [1, 1, 2],
        MinStack
    ));

    // Test 6: Negative numbers
    testResults.push(runTest(
        'Test 6: negative numbers',
        ['push', -2, 'push', 0, 'push', -3, 'getMin', 'pop', 'top', 'getMin'],
        [-3, 0, -2],
        MinStack
    ));

    // Test 7: Duplicate minimums
    testResults.push(runTest(
        'Test 7: duplicate minimums',
        ['push', 5, 'push', 2, 'push', 2, 'push', 3, 'getMin', 'pop', 'getMin', 'pop', 'getMin'],
        [2, 2, 2],
        MinStack
    ));

    // Test 8: Large numbers
    testResults.push(runTest(
        'Test 8: large numbers',
        ['push', 2147483647, 'push', -2147483648, 'getMin', 'top'],
        [-2147483648, -2147483648],
        MinStack
    ));

    // Test 9: Multiple pops
    testResults.push(runTest(
        'Test 9: multiple pops',
        ['push', 10, 'push', 5, 'push', 7, 'push', 3, 'getMin', 'pop', 'getMin', 'pop', 'getMin', 'pop', 'getMin'],
        [3, 5, 5, 10],
        MinStack
    ));

    // Test 10: Zero values
    testResults.push(runTest(
        'Test 10: zero values',
        ['push', 0, 'push', -1, 'push', 0, 'getMin', 'top', 'pop', 'getMin'],
        [-1, 0, -1],
        MinStack
    ));

    // Test 11: Complex sequence
    testResults.push(runTest(
        'Test 11: complex sequence',
        ['push', 1, 'push', 3, 'push', 2, 'getMin', 'top', 'pop', 'getMin', 'push', 0, 'getMin', 'pop', 'getMin'],
        [1, 2, 1, 0, 1],
        MinStack
    ));

    // Test 12: All same values
    testResults.push(runTest(
        'Test 12: all same values',
        ['push', 5, 'push', 5, 'push', 5, 'getMin', 'top', 'pop', 'getMin', 'top'],
        [5, 5, 5, 5],
        MinStack
    ));

    // Test 13: Alternating min
    testResults.push(runTest(
        'Test 13: alternating min',
        ['push', 10, 'push', 1, 'push', 20, 'push', 1, 'getMin', 'pop', 'getMin', 'pop', 'getMin'],
        [1, 1, 1],
        MinStack
    ));

    // Test 14: Edge case - minimum at bottom
    testResults.push(runTest(
        'Test 14: minimum at bottom',
        ['push', 1, 'push', 2, 'push', 3, 'getMin', 'pop', 'pop', 'getMin'],
        [1, 1],
        MinStack
    ));

    // Test 15: Edge case - minimum at top
    testResults.push(runTest(
        'Test 15: minimum at top',
        ['push', 3, 'push', 2, 'push', 1, 'getMin', 'pop', 'getMin'],
        [1, 2],
        MinStack
    ));

    // Test 16: Multiple operations sequence
    testResults.push(runTest(
        'Test 16: multiple operations sequence',
        ['push', 4, 'push', 2, 'push', 3, 'push', 1, 'getMin', 'top', 'pop', 'getMin', 'top', 'pop', 'getMin', 'top'],
        [1, 1, 2, 3, 2, 2],
        MinStack
    ));

    // Test 17: Single push and getMin
    testResults.push(runTest(
        'Test 17: single push and getMin',
        ['push', 42, 'getMin'],
        [42],
        MinStack
    ));

    // Test 18: Push, pop, push sequence
    testResults.push(runTest(
        'Test 18: push, pop, push sequence',
        ['push', 5, 'push', 1, 'pop', 'push', 2, 'getMin', 'top'],
        [2, 2],
        MinStack
    ));

    // Test 19: Large sequence
    testResults.push(runTest(
        'Test 19: large sequence',
        ['push', 10, 'push', 5, 'push', 8, 'push', 3, 'push', 7, 'getMin', 'pop', 'getMin', 'pop', 'getMin', 'pop', 'getMin'],
        [3, 3, 5, 5],
        MinStack
    ));

    // Test 20: Verify all operations
    testResults.push(runTest(
        'Test 20: verify all operations',
        ['push', 6, 'push', 4, 'push', 5, 'top', 'getMin', 'pop', 'top', 'getMin', 'pop', 'top', 'getMin'],
        [5, 4, 4, 4, 6, 6],
        MinStack
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
        title: 'Running Min Stack Tests',
        subtitle: 'Testing Solution (two stacks approach)',
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

