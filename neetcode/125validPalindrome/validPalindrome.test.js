// Import the solutions
const {
    Solution,
    SOLUTION_COMPLEXITY
} = require('./validPalindrome.solution.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    time: 'O(n)',   // Single pass through string
    space: 'O(1)'   // Only using pointers
};

// Test helper function
function runTest(testName, s, expected, solution) {
    let result, passed;
    let error = null;

    try {
        result = solution.isPalindrome(s);
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

    // Test Solution
    testResults.push(runTest('Solution - Test 1: example 1 - "Was it a car or a cat I saw?"', 'Was it a car or a cat I saw?', true, solution));
    testResults.push(runTest('Solution - Test 2: example 2 - "tab a cat"', 'tab a cat', false, solution));
    testResults.push(runTest('Solution - Test 3: simple palindrome', 'racecar', true, solution));
    testResults.push(runTest('Solution - Test 4: not a palindrome', 'hello', false, solution));
    testResults.push(runTest('Solution - Test 5: single character', 'a', true, solution));
    testResults.push(runTest('Solution - Test 6: two characters - palindrome', 'aa', true, solution));
    testResults.push(runTest('Solution - Test 7: two characters - not palindrome', 'ab', false, solution));
    testResults.push(runTest('Solution - Test 8: palindrome with numbers', 'a1b2b1a', true, solution));
    testResults.push(runTest('Solution - Test 9: not palindrome with numbers', 'a1b2c3', false, solution));
    testResults.push(runTest('Solution - Test 10: palindrome with spaces and punctuation', 'A man, a plan, a canal: Panama', true, solution));
    testResults.push(runTest('Solution - Test 11: case insensitive', 'RaceCar', true, solution));
    testResults.push(runTest('Solution - Test 12: only numbers - palindrome', '12321', true, solution));
    testResults.push(runTest('Solution - Test 13: only numbers - not palindrome', '12345', false, solution));
    testResults.push(runTest('Solution - Test 14: mixed alphanumeric with special characters', 'Madam, I\'m Adam', true, solution));
    testResults.push(runTest('Solution - Test 15: all special characters', '!@#$%^&*()', true, solution));

    // Big O Complexity Validation
    const complexityValidations = [];

    complexityValidations.push(validateComplexityResult(
        'Solution',
        SOLUTION_COMPLEXITY.time,
        CORRECT_COMPLEXITY.time,
        'Time'
    ));

    complexityValidations.push(validateComplexityResult(
        'Solution',
        SOLUTION_COMPLEXITY.space,
        CORRECT_COMPLEXITY.space,
        'Space'
    ));

    const complexityPassed = complexityValidations.filter(v => v.isCorrect).length;
    const complexityTotal = complexityValidations.length;

    // Render results with Ink
    await renderTestResults({
        title: 'Running Valid Palindrome Tests',
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

