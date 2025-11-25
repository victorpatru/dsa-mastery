// Import the solutions
const { Solution, SOLUTION_COMPLEXITY } = require('./groupAnagrams.template.js');

// Import shared Big O validation utilities
const { validateComplexity } = require('../../utils/bigOValidator.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    solution: {
        time: 'O(m*n)', // m = number of strings, n = length of longest string
        space: 'O(m*n)'  // m = number of strings, n = length of longest string
    }
};

// Test helper function
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    // Sort each subarray and the main array for comparison
    const sorted1 = arr1.map(sub => [...sub].sort()).sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a.join('') < b.join('') ? -1 : 1;
    });
    const sorted2 = arr2.map(sub => [...sub].sort()).sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a.join('') < b.join('') ? -1 : 1;
    });

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i].length !== sorted2[i].length) return false;
        for (let j = 0; j < sorted1[i].length; j++) {
            if (sorted1[i][j] !== sorted2[i][j]) return false;
        }
    }
    return true;
}

function runTest(testName, strs, expected, solution) {
    const result = solution.groupAnagrams(strs);

    const passed = arraysEqual(result, expected);
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Input:    strs = ${JSON.stringify(strs)}`);
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got:      ${JSON.stringify(result)}`);
    }
    return passed;
}

// Run all tests
console.log('Running Group Anagrams Tests...\n');
console.log('Testing Solution (character frequency counting approach):\n');

const solution = new Solution();
let passed = 0;
let failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1',
    ["act", "pots", "tops", "cat", "stop", "hat"],
    [["hat"], ["act", "cat"], ["stop", "pots", "tops"]],
    solution
)) passed++; else failed++;

// Test 2: Example 2 from problem description
if (runTest(
    'Test 2: example 2 - single character',
    ["x"],
    [["x"]],
    solution
)) passed++; else failed++;

// Test 3: Example 3 from problem description
if (runTest(
    'Test 3: example 3 - empty string',
    [""],
    [[""]],
    solution
)) passed++; else failed++;

// Test 4: Multiple groups
if (runTest(
    'Test 4: multiple groups',
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    solution
)) passed++; else failed++;

// Test 5: All anagrams of each other
if (runTest(
    'Test 5: all anagrams of each other',
    ["abc", "bca", "cab"],
    [["abc", "bca", "cab"]],
    solution
)) passed++; else failed++;

// Test 6: No anagrams
if (runTest(
    'Test 6: no anagrams',
    ["abc", "def", "ghi"],
    [["abc"], ["def"], ["ghi"]],
    solution
)) passed++; else failed++;

// Test 7: Empty array
if (runTest(
    'Test 7: empty array',
    [],
    [],
    solution
)) passed++; else failed++;

// Test 8: Single character strings
if (runTest(
    'Test 8: single character strings',
    ["a", "b", "c"],
    [["a"], ["b"], ["c"]],
    solution
)) passed++; else failed++;

// Test 9: Repeated characters
if (runTest(
    'Test 9: repeated characters',
    ["aab", "aba", "baa", "abb"],
    [["abb"], ["aab", "aba", "baa"]],
    solution
)) passed++; else failed++;

// Test 10: Long strings
if (runTest(
    'Test 10: long strings',
    ["listen", "silent", "enlist"],
    [["listen", "silent", "enlist"]],
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

