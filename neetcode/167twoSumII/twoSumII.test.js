// Import the solution
const { Solution } = require('./twoSumII.template.js');

// Test helper function
function runTest(testName, numbers, target, expected, solution) {
    const result = solution.twoSum(numbers, target);

    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Input:    numbers = ${JSON.stringify(numbers)}, target = ${target}`);
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got:      ${JSON.stringify(result)}`);
    }
    return passed;
}

// Run all tests
console.log('Running Two Sum II Tests...\n');

const solution = new Solution();
let passed = 0;
let failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1 - [1,2,3,4], target = 3',
    [1, 2, 3, 4],
    3,
    [1, 2],
    solution
)) passed++; else failed++;

// Test 2: Simple case - first two elements
if (runTest(
    'Test 2: first two elements',
    [2, 7, 11, 15],
    9,
    [1, 2],
    solution
)) passed++; else failed++;

// Test 3: Last two elements
if (runTest(
    'Test 3: last two elements',
    [2, 7, 11, 15],
    26,
    [3, 4],
    solution
)) passed++; else failed++;

// Test 4: Middle elements
if (runTest(
    'Test 4: middle elements',
    [2, 7, 11, 15],
    18,
    [2, 3],
    solution
)) passed++; else failed++;

// Test 5: Negative numbers
if (runTest(
    'Test 5: negative numbers',
    [-1, 0],
    -1,
    [1, 2],
    solution
)) passed++; else failed++;

// Test 6: Mixed positive and negative
if (runTest(
    'Test 6: mixed positive and negative',
    [-5, -3, -1, 0, 2, 4],
    -1,
    [1, 6],
    solution
)) passed++; else failed++;

// Test 7: Target is zero
if (runTest(
    'Test 7: target is zero',
    [-2, -1, 0, 1, 2],
    0,
    [1, 5],
    solution
)) passed++; else failed++;

// Test 8: Duplicate numbers
if (runTest(
    'Test 8: duplicate numbers',
    [1, 2, 2, 3],
    4,
    [1, 4],
    solution
)) passed++; else failed++;

// Test 9: Small array
if (runTest(
    'Test 9: small array',
    [1, 2],
    3,
    [1, 2],
    solution
)) passed++; else failed++;

// Test 10: Large numbers
if (runTest(
    'Test 10: large numbers',
    [100, 200, 300, 400],
    500,
    [1, 4],
    solution
)) passed++; else failed++;

// Test 11: All same numbers
if (runTest(
    'Test 11: all same numbers',
    [5, 5, 5, 5],
    10,
    [1, 4],
    solution
)) passed++; else failed++;

// Test 12: Sequential numbers
if (runTest(
    'Test 12: sequential numbers',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    17,
    [7, 10],
    solution
)) passed++; else failed++;

// Test 13: Solution at beginning
if (runTest(
    'Test 13: solution at beginning',
    [1, 2, 3, 4, 5],
    3,
    [1, 2],
    solution
)) passed++; else failed++;

// Test 14: Solution at end
if (runTest(
    'Test 14: solution at end',
    [1, 2, 3, 4, 5],
    9,
    [4, 5],
    solution
)) passed++; else failed++;

// Test 15: Large array
if (runTest(
    'Test 15: large array',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    29,
    [14, 15],
    solution
)) passed++; else failed++;

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Tests Passed: ${passed}/${passed + failed}`);
console.log(`Tests Failed: ${failed}/${passed + failed}`);
if (failed === 0) {
    console.log('✓ All tests passed!');
    process.exit(0);
} else {
    console.log('✗ Some tests failed');
    process.exit(1);
}

