// Import the solutions
const { Solution, SOLUTION_COMPLEXITY } = require('./carFleet.template.js');

// Import shared Big O validation utilities
const { validateComplexityResult } = require('../../utils/bigOValidator.js');
const { renderTestResults } = require('../../utils/testRenderer.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n log n)', // n = number of cars, sorting takes O(n log n)
        space: 'O(n)'  // pair array and stack can grow up to n elements
    }
};

// Test helper function
function runTest(testName, target, position, speed, expected, solution) {
    let result, passed;
    let error = null;

    try {
        result = solution.carFleet(target, position, speed);
        passed = result === expected;

        if (!passed) {
            error = {
                Input: `target = ${target}, position = ${JSON.stringify(position)}, speed = ${JSON.stringify(speed)}`,
                Expected: expected,
                Got: result
            };
        }
    } catch (e) {
        passed = false;
        error = {
            Input: `target = ${target}, position = ${JSON.stringify(position)}, speed = ${JSON.stringify(speed)}`,
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
        10,
        [1, 4],
        [3, 2],
        1,
        solution
    ));

    // Test 2: Example 2 from problem description
    testResults.push(runTest(
        'Test 2: example 2',
        10,
        [4, 1, 0, 7],
        [2, 2, 1, 1],
        3,
        solution
    ));

    // Test 3: Single car
    testResults.push(runTest(
        'Test 3: single car',
        10,
        [5],
        [2],
        1,
        solution
    ));

    // Test 4: Two cars - same speed, different positions
    testResults.push(runTest(
        'Test 4: two cars - same speed',
        10,
        [1, 5],
        [2, 2],
        2,
        solution
    ));

    // Test 5: Two cars - faster car behind catches up
    testResults.push(runTest(
        'Test 5: faster car behind catches up',
        10,
        [1, 5],
        [5, 2],
        1,
        solution
    ));

    // Test 6: Two cars - faster car behind catches up
    testResults.push(runTest(
        'Test 6: faster car behind catches up',
        10,
        [1, 5],
        [5, 1],
        1,
        solution
    ));

    // Test 7: Three cars - all form one fleet
    testResults.push(runTest(
        'Test 7: three cars form one fleet',
        10,
        [1, 3, 5],
        [3, 2, 1],
        1,
        solution
    ));

    // Test 8: Three cars - all catch up to form one fleet
    testResults.push(runTest(
        'Test 8: three cars form one fleet',
        10,
        [1, 3, 5],
        [5, 2, 1],
        1,
        solution
    ));

    // Test 9: Three cars - all catch up to form one fleet
    testResults.push(runTest(
        'Test 9: three cars form one fleet',
        10,
        [1, 3, 5],
        [5, 3, 1],
        1,
        solution
    ));

    // Test 10: Cars at same position (edge case - but constraints say unique positions)
    // Skipping as constraints say all positions are unique

    // Test 11: Minimum constraints
    testResults.push(runTest(
        'Test 11: minimum constraints',
        1,
        [0],
        [1],
        1,
        solution
    ));

    // Test 12: Cars already at destination (edge case - but constraints say position < target)
    // Skipping as constraints say position[i] < target

    // Test 13: Large target, cars far apart with same speed
    testResults.push(runTest(
        'Test 13: large target, cars far apart',
        100,
        [10, 20, 30, 40, 50],
        [2, 2, 2, 2, 2],
        5,
        solution
    ));

    // Test 14: Cars with varying speeds
    testResults.push(runTest(
        'Test 14: varying speeds',
        10,
        [0, 2, 4],
        [4, 2, 1],
        1,
        solution
    ));

    // Test 15: Cars that meet exactly at destination
    testResults.push(runTest(
        'Test 15: cars meet at destination',
        12,
        [10, 8, 0, 5, 3],
        [2, 4, 1, 1, 3],
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
        title: 'Running Car Fleet Tests',
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

