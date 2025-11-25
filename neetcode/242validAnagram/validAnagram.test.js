// Import the solutions
const { SolutionFrequencyMap, SOLUTION_FREQUENCY_MAP_COMPLEXITY } = require('./validAnagram.template.js');

// Import shared Big O validation utilities
const { validateComplexity } = require('../../utils/bigOValidator.js');

// Correct Big O answers for validation
const CORRECT_COMPLEXITY = {
    frequencyMap: {
        time: 'O(n)',
        space: 'O(n)'
    }
};

// Test helper function
function runTest(testName, s, t, expected, solution) {
    const result = solution.isAnagram(s, t);

    const passed = result === expected;
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Input:    s = "${s}", t = "${t}"`);
        console.log(`  Expected: ${expected}`);
        console.log(`  Got:      ${result}`);
    }
    return passed;
}

// Run all tests
console.log('Running Valid Anagram Tests...\n');
console.log('Testing SolutionFrequencyMap (character frequency counting approach):\n');

const solutionFrequencyMap = new SolutionFrequencyMap();
let passed = 0;
let failed = 0;

// Test 1: Example 1 from problem description
if (runTest(
    'Test 1: example 1 - valid anagram',
    'racecar',
    'carrace',
    true,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 2: Example 2 from problem description
if (runTest(
    'Test 2: example 2 - not an anagram',
    'jar',
    'jam',
    false,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 3: Single character - same
if (runTest(
    'Test 3: single character - same',
    'a',
    'a',
    true,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 4: Single character - different
if (runTest(
    'Test 4: single character - different',
    'a',
    'b',
    false,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 5: Empty strings
if (runTest(
    'Test 5: empty strings',
    '',
    '',
    true,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 6: Different lengths
if (runTest(
    'Test 6: different lengths',
    'abc',
    'ab',
    false,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 7: Same characters, different order
if (runTest(
    'Test 7: same characters, different order',
    'listen',
    'silent',
    true,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 8: Not an anagram - extra character
if (runTest(
    'Test 8: not an anagram - extra character',
    'abc',
    'abcd',
    false,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 9: Not an anagram - missing character
if (runTest(
    'Test 9: not an anagram - missing character',
    'abc',
    'ab',
    false,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 10: Same string
if (runTest(
    'Test 10: same string',
    'anagram',
    'anagram',
    true,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 11: Anagram with repeated characters
if (runTest(
    'Test 11: anagram with repeated characters',
    'aabbcc',
    'ccbbaa',
    true,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 12: Not anagram - different character counts
if (runTest(
    'Test 12: not anagram - different character counts',
    'aab',
    'abb',
    false,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 13: Long strings - anagram
if (runTest(
    'Test 13: long strings - anagram',
    'anagram',
    'nagaram',
    true,
    solutionFrequencyMap
)) passed++; else failed++;

// Test 14: Long strings - not anagram
if (runTest(
    'Test 14: long strings - not anagram',
    'anagram',
    'anagramx',
    false,
    solutionFrequencyMap
)) passed++; else failed++;

const frequencyMapPassed = passed;
const frequencyMapFailed = failed;

// Summary for SolutionFrequencyMap
console.log(`\n${'='.repeat(50)}`);
console.log(`SolutionFrequencyMap Tests Passed: ${frequencyMapPassed}/${frequencyMapPassed + frequencyMapFailed}`);
console.log(`SolutionFrequencyMap Tests Failed: ${frequencyMapFailed}/${frequencyMapPassed + frequencyMapFailed}`);

// Overall Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Overall Tests Passed: ${frequencyMapPassed}/${frequencyMapPassed + frequencyMapFailed}`);
console.log(`Overall Tests Failed: ${frequencyMapFailed}/${frequencyMapPassed + frequencyMapFailed}`);

// Big O Complexity Validation
console.log(`\n${'='.repeat(50)}`);
console.log('Big O Complexity Validation:\n');

let complexityPassed = 0;
let complexityTotal = 0;

// Validate SolutionFrequencyMap complexity
complexityTotal += 2;
if (validateComplexity(
    'SolutionFrequencyMap',
    SOLUTION_FREQUENCY_MAP_COMPLEXITY.time,
    CORRECT_COMPLEXITY.frequencyMap.time,
    'Time'
)) complexityPassed++;

if (validateComplexity(
    'SolutionFrequencyMap',
    SOLUTION_FREQUENCY_MAP_COMPLEXITY.space,
    CORRECT_COMPLEXITY.frequencyMap.space,
    'Space'
)) complexityPassed++;

console.log(`\n${'─'.repeat(50)}`);
console.log(`Big O Complexity: ${complexityPassed}/${complexityTotal} correct`);

// Final Summary
console.log(`\n${'='.repeat(50)}`);
console.log('FINAL SUMMARY:');
console.log(`  Algorithm Tests: ${frequencyMapPassed}/${frequencyMapPassed + frequencyMapFailed} passed`);
console.log(`  Complexity Analysis: ${complexityPassed}/${complexityTotal} correct`);

const allTestsPassed = frequencyMapFailed === 0;
const allComplexityCorrect = complexityPassed === complexityTotal;

if (allTestsPassed && allComplexityCorrect) {
    console.log('\n✓ All tests and complexity analysis passed!');
    process.exit(0);
} else {
    if (!allTestsPassed) console.log('✗ Some algorithm tests failed');
    if (!allComplexityCorrect) console.log('✗ Some complexity answers are incorrect');
    process.exit(1);
}

