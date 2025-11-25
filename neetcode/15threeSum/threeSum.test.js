// Import the solution
const { Solution, SOLUTION_COMPLEXITY } = require('./threeSum.template.js');

// Import shared Big O validation utilities
const { validateComplexity } = require('../../utils/bigOValidator.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n^2)',
        space: 'O(1)' // O(1) extra space (excluding output)
    }
};

// Helper function to compare arrays of arrays (order-independent)
function arraysEqual(arr1, arr2) {
    if (!arr1 || !arr2) return arr1 === arr2;
    if (arr1.length !== arr2.length) return false;

    // Sort both arrays by their elements for comparison
    const sorted1 = arr1.map(triplet => [...triplet].sort((a, b) => a - b)).sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });

    const sorted2 = arr2.map(triplet => [...triplet].sort((a, b) => a - b)).sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i].length !== sorted2[i].length) return false;
        for (let j = 0; j < sorted1[i].length; j++) {
            if (sorted1[i][j] !== sorted2[i][j]) return false;
        }
    }

    return true;
}

// Test helper function
function runTest(testName, nums, expected, solution) {
    const result = solution.threeSum(nums);

    const passed = arraysEqual(result, expected);
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Input:    nums = ${JSON.stringify(nums)}`);
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got:      ${JSON.stringify(result)}`);
    }
    return passed;
}

// Run all tests
console.log('Running 3Sum Tests...\n');

const solution = new Solution();
let passed = 0;
let failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1 - [-1,0,1,2,-1,-4]',
    [-1, 0, 1, 2, -1, -4],
    [[-1, -1, 2], [-1, 0, 1]],
    solution
)) passed++; else failed++;

// Test 2: Example 2 from problem description
if (runTest(
    'Test 2: example 2 - [0,1,1]',
    [0, 1, 1],
    [],
    solution
)) passed++; else failed++;

// Test 3: Example 3 from problem description
if (runTest(
    'Test 3: example 3 - [0,0,0]',
    [0, 0, 0],
    [[0, 0, 0]],
    solution
)) passed++; else failed++;

// Test 4: All positive numbers
if (runTest(
    'Test 4: all positive numbers',
    [1, 2, 3, 4, 5],
    [],
    solution
)) passed++; else failed++;

// Test 5: All negative numbers
if (runTest(
    'Test 5: all negative numbers',
    [-1, -2, -3, -4, -5],
    [],
    solution
)) passed++; else failed++;

// Test 6: Mixed with one solution
if (runTest(
    'Test 6: mixed with one solution',
    [-1, 0, 1],
    [[-1, 0, 1]],
    solution
)) passed++; else failed++;

// Test 7: Multiple duplicates
if (runTest(
    'Test 7: multiple duplicates',
    [-1, -1, -1, 0, 1, 1, 1],
    [[-1, 0, 1]],
    solution
)) passed++; else failed++;

// Test 8: No solution
if (runTest(
    'Test 8: no solution',
    [1, 2, 3],
    [],
    solution
)) passed++; else failed++;

// Test 9: Large array with multiple solutions
if (runTest(
    'Test 9: large array with multiple solutions',
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
    [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]],
    solution
)) passed++; else failed++;

// Test 10: Three zeros
if (runTest(
    'Test 10: three zeros',
    [0, 0, 0],
    [[0, 0, 0]],
    solution
)) passed++; else failed++;

// Test 11: Two zeros and one number
if (runTest(
    'Test 11: two zeros and one number',
    [0, 0, 1],
    [],
    solution
)) passed++; else failed++;

// Test 12: Symmetric around zero
if (runTest(
    'Test 12: symmetric around zero',
    [-2, -1, 0, 1, 2],
    [[-2, 0, 2], [-1, 0, 1]],
    solution
)) passed++; else failed++;

// Test 13: All same number (non-zero)
if (runTest(
    'Test 13: all same number (non-zero)',
    [1, 1, 1],
    [],
    solution
)) passed++; else failed++;

// Test 14: Small array
if (runTest(
    'Test 14: small array',
    [-1, 0, 1],
    [[-1, 0, 1]],
    solution
)) passed++; else failed++;

// Test 15: Complex case with many duplicates
if (runTest(
    'Test 15: complex case with many duplicates',
    [-2, 0, 1, 1, 2],
    [[-2, 0, 2], [-2, 1, 1]],
    solution
)) passed++; else failed++;

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Tests Passed: ${passed}/${passed + failed}`);
console.log(`Tests Failed: ${failed}/${passed + failed}`);

// Big O Complexity Validation
console.log(`\n${'='.repeat(50)}`);
console.log('Big O Complexity Validation:\n');

let complexityPassed = 0;
let complexityTotal = 0;

// Validate Solution complexity
complexityTotal += 2;
if (validateComplexity(
    'Solution',
    SOLUTION_COMPLEXITY.time,
    CORRECT_COMPLEXITY.solution.time,
    'Time'
)) complexityPassed++;

if (validateComplexity(
    'Solution',
    SOLUTION_COMPLEXITY.space,
    CORRECT_COMPLEXITY.solution.space,
    'Space'
)) complexityPassed++;

console.log(`\n${'─'.repeat(50)}`);
console.log(`Big O Complexity: ${complexityPassed}/${complexityTotal} correct`);

// Final Summary
console.log(`\n${'='.repeat(50)}`);
console.log('FINAL SUMMARY:');
console.log(`  Algorithm Tests: ${passed}/${passed + failed} passed`);
console.log(`  Complexity Analysis: ${complexityPassed}/${complexityTotal} correct`);

const allTestsPassed = failed === 0;
const allComplexityCorrect = complexityPassed === complexityTotal;

if (allTestsPassed && allComplexityCorrect) {
    console.log('\n✓ All tests and complexity analysis passed!');
    process.exit(0);
} else {
    if (!allTestsPassed) console.log('✗ Some algorithm tests failed');
    if (!allComplexityCorrect) console.log('✗ Some complexity answers are incorrect');
    process.exit(1);
}

