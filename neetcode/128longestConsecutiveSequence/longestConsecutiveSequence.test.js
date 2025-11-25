// Import the solution
const { Solution, SOLUTION_COMPLEXITY } = require('./longestConsecutiveSequence.template.js');

// Import shared Big O validation utilities
const { validateComplexity } = require('../../utils/bigOValidator.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(n)',
        space: 'O(n)'
    }
};

// Test helper function
function runTest(testName, nums, expected, solution) {
    const result = solution.longestConsecutive(nums);

    const passed = result === expected;
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Input:    nums = ${JSON.stringify(nums)}`);
        console.log(`  Expected: ${expected}`);
        console.log(`  Got:      ${result}`);
    }
    return passed;
}

// Run all tests
console.log('Running Longest Consecutive Sequence Tests...\n');

const solution = new Solution();
let passed = 0;
let failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1 - sequence [2,3,4,5]',
    [2, 20, 4, 10, 3, 4, 5],
    4,
    solution
)) passed++; else failed++;

// Test 2: Example 2 from problem description
if (runTest(
    'Test 2: example 2 - sequence [0,1,2,3,4,5,6]',
    [0, 3, 2, 5, 4, 6, 1, 1],
    7,
    solution
)) passed++; else failed++;

// Test 3: Empty array
if (runTest(
    'Test 3: empty array',
    [],
    0,
    solution
)) passed++; else failed++;

// Test 4: Single element
if (runTest(
    'Test 4: single element',
    [1],
    1,
    solution
)) passed++; else failed++;

// Test 5: No consecutive sequence (all unique, no consecutive)
if (runTest(
    'Test 5: no consecutive sequence',
    [1, 3, 5, 7, 9],
    1,
    solution
)) passed++; else failed++;

// Test 6: All duplicates
if (runTest(
    'Test 6: all duplicates',
    [5, 5, 5, 5],
    1,
    solution
)) passed++; else failed++;

// Test 7: Negative numbers
if (runTest(
    'Test 7: negative numbers',
    [-2, -1, 0, 1, 2],
    5,
    solution
)) passed++; else failed++;

// Test 8: Mixed positive and negative
if (runTest(
    'Test 8: mixed positive and negative',
    [-1, 0, 1, 2, -2],
    5,
    solution
)) passed++; else failed++;

// Test 9: Sequence starting from negative
if (runTest(
    'Test 9: sequence starting from negative',
    [-5, -4, -3, 10, 11],
    3,
    solution
)) passed++; else failed++;

// Test 10: Multiple sequences, longest at end
if (runTest(
    'Test 10: multiple sequences, longest at end',
    [1, 2, 100, 101, 102, 103],
    4,
    solution
)) passed++; else failed++;

// Test 11: Multiple sequences, longest in middle
if (runTest(
    'Test 11: multiple sequences, longest in middle',
    [1, 2, 10, 11, 12, 13, 14, 20, 21],
    5,
    solution
)) passed++; else failed++;

// Test 12: Large gap between sequences
if (runTest(
    'Test 12: large gap between sequences',
    [1, 2, 3, 1000, 1001],
    3,
    solution
)) passed++; else failed++;

// Test 13: Sequence with duplicates
if (runTest(
    'Test 13: sequence with duplicates',
    [1, 2, 2, 3, 3, 4, 5],
    5,
    solution
)) passed++; else failed++;

// Test 14: Single long sequence
if (runTest(
    'Test 14: single long sequence',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    10,
    solution
)) passed++; else failed++;

// Test 15: Zero included
if (runTest(
    'Test 15: zero included',
    [-1, 0, 1],
    3,
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

