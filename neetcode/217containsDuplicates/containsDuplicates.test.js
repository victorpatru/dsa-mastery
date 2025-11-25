// Import the solutions
const { 
    SolutionHashSet, 
    SolutionHashSetLength,
    SOLUTION_HASH_SET_COMPLEXITY,
    SOLUTION_HASH_SET_LENGTH_COMPLEXITY
} = require('./containsDuplicates.template.js');

// Import shared Big O validation utilities
const { validateComplexity } = require('../../utils/bigOValidator.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    hashSet: {
        time: 'O(n)',
        space: 'O(n)'
    },
    hashSetLength: {
        time: 'O(n)',
        space: 'O(n)'
    }
};

// Test helper function
function runTest(testName, input, expected, solution) {
    const result = solution.hasDuplicate(input);

    const passed = result === expected;
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Input:    ${JSON.stringify(input)}`);
        console.log(`  Expected: ${expected}`);
        console.log(`  Got:      ${result}`);
    }
    return passed;
}

// Run all tests
console.log('Running Contains Duplicate Tests...\n');
console.log('Testing SolutionHashSet (iterative hash set approach):\n');

const solutionHashSet = new SolutionHashSet();
let passed = 0;
let failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1 - array with duplicate',
    [1, 2, 3, 3],
    true,
    solutionHashSet
)) passed++; else failed++;

// Test 2: Example 2 from problem description
if (runTest(
    'Test 2: example 2 - array without duplicate',
    [1, 2, 3, 4],
    false,
    solutionHashSet
)) passed++; else failed++;

// Test 3: Single element array
if (runTest(
    'Test 3: single element array',
    [1],
    false,
    solutionHashSet
)) passed++; else failed++;

// Test 4: Empty array
if (runTest(
    'Test 4: empty array',
    [],
    false,
    solutionHashSet
)) passed++; else failed++;

// Test 5: All elements are duplicates
if (runTest(
    'Test 5: all elements are duplicates',
    [1, 1, 1, 1],
    true,
    solutionHashSet
)) passed++; else failed++;

// Test 6: Duplicate at the beginning
if (runTest(
    'Test 6: duplicate at the beginning',
    [1, 1, 2, 3],
    true,
    solutionHashSet
)) passed++; else failed++;

// Test 7: Duplicate at the end
if (runTest(
    'Test 7: duplicate at the end',
    [1, 2, 3, 3],
    true,
    solutionHashSet
)) passed++; else failed++;

// Test 8: Multiple duplicates
if (runTest(
    'Test 8: multiple duplicates',
    [1, 1, 2, 2, 3],
    true,
    solutionHashSet
)) passed++; else failed++;

// Test 9: Large array without duplicates
if (runTest(
    'Test 9: large array without duplicates',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    false,
    solutionHashSet
)) passed++; else failed++;

// Test 10: Large array with duplicates
if (runTest(
    'Test 10: large array with duplicates',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    true,
    solutionHashSet
)) passed++; else failed++;

// Test 11: Negative numbers
if (runTest(
    'Test 11: array with negative numbers',
    [-1, 2, -1, 4],
    true,
    solutionHashSet
)) passed++; else failed++;

// Test 12: Negative numbers without duplicates
if (runTest(
    'Test 12: negative numbers without duplicates',
    [-1, -2, -3, -4],
    false,
    solutionHashSet
)) passed++; else failed++;

// Test 13: Mixed positive and negative
if (runTest(
    'Test 13: mixed positive and negative numbers',
    [1, -1, 2, -2, 3],
    false,
    solutionHashSet
)) passed++; else failed++;

// Test 14: Duplicate zero
if (runTest(
    'Test 14: duplicate zero',
    [0, 1, 2, 0],
    true,
    solutionHashSet
)) passed++; else failed++;

const hashSetPassed = passed;
const hashSetFailed = failed;

// Summary for SolutionHashSet
console.log(`\n${'='.repeat(50)}`);
console.log(`SolutionHashSet Tests Passed: ${hashSetPassed}/${hashSetPassed + hashSetFailed}`);
console.log(`SolutionHashSet Tests Failed: ${hashSetFailed}/${hashSetPassed + hashSetFailed}`);

// Test SolutionHashSetLength
console.log('\nTesting SolutionHashSetLength (hash set size comparison approach):\n');
const solutionHashSetLength = new SolutionHashSetLength();
passed = 0;
failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1 - array with duplicate',
    [1, 2, 3, 3],
    true,
    solutionHashSetLength
)) passed++; else failed++;

// Test 2: Example 2 from problem description
if (runTest(
    'Test 2: example 2 - array without duplicate',
    [1, 2, 3, 4],
    false,
    solutionHashSetLength
)) passed++; else failed++;

// Test 3: Single element array
if (runTest(
    'Test 3: single element array',
    [1],
    false,
    solutionHashSetLength
)) passed++; else failed++;

// Test 4: Empty array
if (runTest(
    'Test 4: empty array',
    [],
    false,
    solutionHashSetLength
)) passed++; else failed++;

// Test 5: All elements are duplicates
if (runTest(
    'Test 5: all elements are duplicates',
    [1, 1, 1, 1],
    true,
    solutionHashSetLength
)) passed++; else failed++;

// Test 6: Duplicate at the beginning
if (runTest(
    'Test 6: duplicate at the beginning',
    [1, 1, 2, 3],
    true,
    solutionHashSetLength
)) passed++; else failed++;

// Test 7: Duplicate at the end
if (runTest(
    'Test 7: duplicate at the end',
    [1, 2, 3, 3],
    true,
    solutionHashSetLength
)) passed++; else failed++;

// Test 8: Multiple duplicates
if (runTest(
    'Test 8: multiple duplicates',
    [1, 1, 2, 2, 3],
    true,
    solutionHashSetLength
)) passed++; else failed++;

// Test 9: Large array without duplicates
if (runTest(
    'Test 9: large array without duplicates',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    false,
    solutionHashSetLength
)) passed++; else failed++;

// Test 10: Large array with duplicates
if (runTest(
    'Test 10: large array with duplicates',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    true,
    solutionHashSetLength
)) passed++; else failed++;

// Test 11: Negative numbers
if (runTest(
    'Test 11: array with negative numbers',
    [-1, 2, -1, 4],
    true,
    solutionHashSetLength
)) passed++; else failed++;

// Test 12: Negative numbers without duplicates
if (runTest(
    'Test 12: negative numbers without duplicates',
    [-1, -2, -3, -4],
    false,
    solutionHashSetLength
)) passed++; else failed++;

// Test 13: Mixed positive and negative
if (runTest(
    'Test 13: mixed positive and negative numbers',
    [1, -1, 2, -2, 3],
    false,
    solutionHashSetLength
)) passed++; else failed++;

// Test 14: Duplicate zero
if (runTest(
    'Test 14: duplicate zero',
    [0, 1, 2, 0],
    true,
    solutionHashSetLength
)) passed++; else failed++;

const hashSetLengthPassed = passed;
const hashSetLengthFailed = failed;

// Summary for SolutionHashSetLength
console.log(`\n${'='.repeat(50)}`);
console.log(`SolutionHashSetLength Tests Passed: ${hashSetLengthPassed}/${hashSetLengthPassed + hashSetLengthFailed}`);
console.log(`SolutionHashSetLength Tests Failed: ${hashSetLengthFailed}/${hashSetLengthPassed + hashSetLengthFailed}`);

// Overall Summary
const totalPassed = hashSetPassed + hashSetLengthPassed;
const totalFailed = hashSetFailed + hashSetLengthFailed;
console.log(`\n${'='.repeat(50)}`);
console.log(`Overall Tests Passed: ${totalPassed}/${totalPassed + totalFailed}`);
console.log(`Overall Tests Failed: ${totalFailed}/${totalPassed + totalFailed}`);

// Big O Complexity Validation
console.log(`\n${'='.repeat(50)}`);
console.log('Big O Complexity Validation:\n');

let complexityPassed = 0;
let complexityTotal = 0;

// Validate SolutionHashSet complexity
complexityTotal += 2;
if (validateComplexity(
    'SolutionHashSet',
    SOLUTION_HASH_SET_COMPLEXITY.time,
    CORRECT_COMPLEXITY.hashSet.time,
    'Time'
)) complexityPassed++;

if (validateComplexity(
    'SolutionHashSet',
    SOLUTION_HASH_SET_COMPLEXITY.space,
    CORRECT_COMPLEXITY.hashSet.space,
    'Space'
)) complexityPassed++;

// Validate SolutionHashSetLength complexity
complexityTotal += 2;
if (validateComplexity(
    'SolutionHashSetLength',
    SOLUTION_HASH_SET_LENGTH_COMPLEXITY.time,
    CORRECT_COMPLEXITY.hashSetLength.time,
    'Time'
)) complexityPassed++;

if (validateComplexity(
    'SolutionHashSetLength',
    SOLUTION_HASH_SET_LENGTH_COMPLEXITY.space,
    CORRECT_COMPLEXITY.hashSetLength.space,
    'Space'
)) complexityPassed++;

console.log(`\n${'─'.repeat(50)}`);
console.log(`Big O Complexity: ${complexityPassed}/${complexityTotal} correct`);

// Final Summary
console.log(`\n${'='.repeat(50)}`);
console.log('FINAL SUMMARY:');
console.log(`  Algorithm Tests: ${totalPassed}/${totalPassed + totalFailed} passed`);
console.log(`  Complexity Analysis: ${complexityPassed}/${complexityTotal} correct`);

const allTestsPassed = totalFailed === 0;
const allComplexityCorrect = complexityPassed === complexityTotal;

if (allTestsPassed && allComplexityCorrect) {
    console.log('\n✓ All tests and complexity analysis passed!');
    process.exit(0);
} else {
    if (!allTestsPassed) console.log('✗ Some algorithm tests failed');
    if (!allComplexityCorrect) console.log('✗ Some complexity answers are incorrect');
    process.exit(1);
}

