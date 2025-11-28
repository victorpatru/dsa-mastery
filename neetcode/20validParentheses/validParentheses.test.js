// Import the solutions
const { Solution, SOLUTION_COMPLEXITY } = require('./validParentheses.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)', // n = length of string
        space: 'O(n)'  // stack may store all opening brackets
    }
};

// Test helper function
function runTest(testName, s, expected, solution) {
    let result, passed;
    let error = null;

    try {
        result = solution.isValid(s);
        passed = result === expected;

        if (!passed) {
            error = {
                Input: `s = "${s}"`,
                Expected: expected,
                Got: result
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `s = "${s}"`,
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
        'Test 1: example 1 - simple brackets',
        '[]',
        true,
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2 - nested brackets',
        '([{}])',
        true,
        solution
    ));

    // Test 3: Example 3 from problem description
    testResults.push(runTest(
        'Test 3: example 3 - invalid order',
        '[(])',
        false,
        solution
    ));

    // Test 4: Simple parentheses
    testResults.push(runTest(
        'Test 4: simple parentheses',
        '()',
        true,
        solution
    ));

    // Test 5: Simple curly braces
    testResults.push(runTest(
        'Test 5: simple curly braces',
        '{}',
        true,
        solution
    ));

    // Test 6: Multiple pairs
    testResults.push(runTest(
        'Test 6: multiple pairs',
        '()[]{}',
        true,
        solution
    ));

    // Test 7: Nested valid brackets
    testResults.push(runTest(
        'Test 7: nested valid brackets',
        '([{}])',
        true,
        solution
    ));

    // Test 8: Single opening bracket
    testResults.push(runTest(
        'Test 8: single opening bracket',
        '(',
        false,
        solution
    ));

    // Test 9: Single closing bracket
    testResults.push(runTest(
        'Test 9: single closing bracket',
        ')',
        false,
        solution
    ));

    // Test 10: Mismatched brackets
    testResults.push(runTest(
        'Test 10: mismatched brackets',
        '(]',
        false,
        solution
    ));

    // Test 11: Wrong order
    testResults.push(runTest(
        'Test 11: wrong order',
        '([)]',
        false,
        solution
    ));

    // Test 12: Empty string
    testResults.push(runTest(
        'Test 12: empty string',
        '',
        true,
        solution
    ));

    // Test 13: Complex valid case
    testResults.push(runTest(
        'Test 13: complex valid case',
        '{[()]}',
        true,
        solution
    ));

    // Test 14: Multiple nested levels
    testResults.push(runTest(
        'Test 14: multiple nested levels',
        '({[()]})',
        true,
        solution
    ));

    // Test 15: Adjacent valid pairs
    testResults.push(runTest(
        'Test 15: adjacent valid pairs',
        '(){}[]',
        true,
        solution
    ));

    // Test 16: Unclosed opening bracket
    testResults.push(runTest(
        'Test 16: unclosed opening bracket',
        '(((',
        false,
        solution
    ));

    // Test 17: Extra closing bracket
    testResults.push(runTest(
        'Test 17: extra closing bracket',
        '())',
        false,
        solution
    ));

    // Test 18: Long valid string
    testResults.push(runTest(
        'Test 18: long valid string',
        '(((((((((())))))))))',
        true,
        solution
    ));

    // Test 19: Mixed valid brackets
    testResults.push(runTest(
        'Test 19: mixed valid brackets',
        '({[]})',
        true,
        solution
    ));

    // Test 20: Invalid nested structure
    testResults.push(runTest(
        'Test 20: invalid nested structure',
        '([{)]}',
        false,
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
        title: 'Running Valid Parentheses Tests',
        subtitle: 'Testing Solution (stack approach)',
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

