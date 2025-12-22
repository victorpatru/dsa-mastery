# How to solve Leetcode problems in a way that sticks

This repository follows a structured workflow for learning and practicing algorithms:

## Process Overview

1. **Flashcards Input**: Flashcards come from Anki cards for that day (these may be stored in the `flashcards/` directory for reference, e.g., `Arrays_flashcards.md`, `BFS_flashcards.md`, etc.)

2. **Problem Solving**: For each problem, you'll work with a `.template.js` file (e.g., `encodeDecodeStrings.template.js`):
   - Implement your solution in the `Solution` class
   - Fill in the `SOLUTION_COMPLEXITY` object with your Big O analysis:
     ```javascript
     const SOLUTION_COMPLEXITY = {
         time: 'O(n)',    // Your time complexity answer
         space: 'O(n+m)'  // Your space complexity answer
     };
     ```

3. **Validation**: Run the corresponding `.test.js` file to validate both:
   - **Algorithm correctness**: Tests verify your implementation works correctly
   - **Big O complexity**: The test file uses `utils/bigOValidator.js` to validate your complexity analysis

## Example Workflow

```bash
# 1. Open the template file
# neetcode/encodeDecodeStrings/encodeDecodeStrings.template.js

# 2. Implement your solution and fill in Big O analysis
# - Complete the Solution class methods
# - Fill in SOLUTION_COMPLEXITY object

# 3. Run the test file to validate everything
node neetcode/encodeDecodeStrings/encodeDecodeStrings.test.js
```

The test file will output:
- ✓/✗ for each algorithm test case
- ✓/✗ for time and space complexity validation
- Final summary showing if both implementation and complexity analysis are correct

## File Structure

Each problem follows this structure:
- `*.template.js` - Your workspace to implement the solution and Big O analysis
- `*.solution.js` - Reference solution (optional, for comparison)
- `*.test.js` - Test runner that validates both implementation and complexity

This workflow ensures you master both the algorithmic implementation and the theoretical complexity analysis.

# Leetcode Resources
- [Leetcode DSA Course](https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/)
- [Neetcode DSA for Begineers](https://neetcode.io/courses/dsa-for-beginners/0)
- [Neetcode Core Algorithm Implementation](https://neetcode.io/practice?subpage=practice)
- [Neetcode Roadmap](https://neetcode.io/roadmap)


# Method for structuring your DSA answers
When talking through a whiteboard problem or a coding challenge with an interviewer you should use the PREP method. Going through this will help you engage with the interviewer (and possibly burn up some time 😉)

- **Parameters**
    - Inputs
    - Ask questions
        - Will it always be a number?
        - Will it ever be negative?
        - Any gotchas?
- **Returns**
    - Ask questions
        - Do you want it returned or is a console.log better?
        - Should I pass a whole array of solutions back or just a single solution?
- **Examples**
    - Show a couple black box examples, aka test cases
        - I pass in these arguments and get these results, is that correct?
    - Examples are a good idea because "you have the receipts" if the interviewer decides to change things.
- **Pseudocode**
    - Write pseudocode of each of the steps