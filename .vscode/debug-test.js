#!/usr/bin/env node

/**
 * Launcher script to find and run the test file for a given template file
 * Usage: node debug-test.js <template-file-path>
 * 
 * This script converts a template file path to its corresponding test file
 * and executes it, allowing VS Code debugger to attach properly.
 */

const path = require('path');
const fs = require('fs');

const templateFile = process.argv[2];

if (!templateFile) {
    console.error('Error: No template file provided');
    process.exit(1);
}

// Convert template file path to test file path
// e.g., ./neetcode/347topKFrequent/topKFrequent.template.js
//   -> ./neetcode/347topKFrequent/topKFrequent.test.js
const testFile = templateFile.replace('.template.js', '.test.js');
const resolvedTestFile = path.resolve(testFile);

if (!fs.existsSync(resolvedTestFile)) {
    console.error(`Error: Test file not found: ${resolvedTestFile}`);
    console.error(`  Looking for: ${testFile}`);
    process.exit(1);
}

// Use eval to ensure VS Code can set breakpoints in the test file
// This allows the debugger to properly map the file
delete require.cache[resolvedTestFile];
require(resolvedTestFile);

