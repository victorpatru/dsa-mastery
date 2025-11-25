// Import the solution
const { SolutionHashMap, SOLUTION_HASH_MAP_COMPLEXITY } = require('./twoSum.template.js');

// Import shared Big O validation utilities
const { validateComplexity } = require('../../utils/bigOValidator.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    hashMap: {
        time: 'O(n)',
        space: 'O(n)'
    }
};

// Test helper function
function runTest(testName, nums, target, expected, solution) {
    const result = solution.twoSum(nums, target);

    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Input:    nums = ${JSON.stringify(nums)}, target = ${target}`);
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got:      ${JSON.stringify(result)}`);
    }
    return passed;
}

// Run all tests
console.log('Running Two Sum Tests...\n');

const solutionHashMap = new SolutionHashMap();
let passed = 0;
let failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1 - basic case',
    [3, 4, 5, 6],
    7,
    [0, 1],
    solutionHashMap
)) passed++; else failed++;

// Test 2: Example 2 from problem description
if (runTest(
    'Test 2: example 2 - indices not adjacent',
    [4, 5, 6],
    10,
    [0, 2],
    solutionHashMap
)) passed++; else failed++;

// Test 3: Example 3 from problem description
if (runTest(
    'Test 3: example 3 - same numbers',
    [5, 5],
    10,
    [0, 1],
    solutionHashMap
)) passed++; else failed++;

// Test 4: Small array
if (runTest(
    'Test 4: small array',
    [2, 7],
    9,
    [0, 1],
    solutionHashMap
)) passed++; else failed++;

// Test 5: Negative numbers
if (runTest(
    'Test 5: negative numbers',
    [-1, -2, -3, -4, -5],
    -8,
    [2, 4],
    solutionHashMap
)) passed++; else failed++;

// Test 6: Mixed positive and negative
if (runTest(
    'Test 6: mixed positive and negative',
    [-1, 2, 3, 4, 5],
    1,
    [0, 1],
    solutionHashMap
)) passed++; else failed++;

// Test 7: Zero in array
if (runTest(
    'Test 7: zero in array',
    [0, 4, 3, 0],
    0,
    [0, 3],
    solutionHashMap
)) passed++; else failed++;

// Test 8: Target is zero
if (runTest(
    'Test 8: target is zero',
    [-3, 4, 3, 90],
    0,
    [0, 2],
    solutionHashMap
)) passed++; else failed++;

// Test 9: Large numbers
if (runTest(
    'Test 9: large numbers',
    [1000000, 2000000, 3000000],
    5000000,
    [1, 2],
    solutionHashMap
)) passed++; else failed++;

// Test 10: Solution at end of array
if (runTest(
    'Test 10: solution at end of array',
    [1, 2, 3, 4, 5],
    9,
    [3, 4],
    solutionHashMap
)) passed++; else failed++;

// Test 11: Solution at beginning of array
if (runTest(
    'Test 11: solution at beginning of array',
    [1, 2, 3, 4, 5],
    3,
    [0, 1],
    solutionHashMap
)) passed++; else failed++;

// Test 12: Multiple pairs exist (hash map returns first found pair)
if (runTest(
    'Test 12: multiple pairs exist',
    [1, 2, 3, 4, 5],
    6,
    [1, 3],
    solutionHashMap
)) passed++; else failed++;

// Test 13: Duplicate values (different indices)
if (runTest(
    'Test 13: duplicate values',
    [3, 3, 3],
    6,
    [0, 1],
    solutionHashMap
)) passed++; else failed++;

// Test 14: Larger array
if (runTest(
    'Test 14: larger array',
    [2, 7, 11, 15, 3, 6, 8, 9],
    9,
    [0, 1],
    solutionHashMap
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

// Validate SolutionHashMap complexity
complexityTotal += 2;
if (validateComplexity(
    'SolutionHashMap',
    SOLUTION_HASH_MAP_COMPLEXITY.time,
    CORRECT_COMPLEXITY.hashMap.time,
    'Time'
)) complexityPassed++;

if (validateComplexity(
    'SolutionHashMap',
    SOLUTION_HASH_MAP_COMPLEXITY.space,
    CORRECT_COMPLEXITY.hashMap.space,
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

