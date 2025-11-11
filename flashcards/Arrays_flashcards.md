What makes an array “static” in languages like C/C++/Java? #arrays-dsa
---
Its size (and element type) is fixed at initialization; size cannot change.
===
Do Python/JavaScript have static arrays by default? #arrays-dsa
---
No—only dynamic arrays (lists / JS arrays).
===
How do you read a single array element by index (time complexity)? #arrays-dsa
---
O(1).
===
Does O(1) always mean “fast”? #arrays-dsa
---
No—O(1) means constant with input size; constants can still be large.
===
Where is the last valid index in an array of size n? #arrays-dsa
---
n - 1.
===
What is the time complexity of traversing an array of size n once? #arrays-dsa
---
O(n).
===
Deleting the last element in a static array: complexity and idea? #arrays-dsa
---
O(1); overwrite last slot (soft delete) and decrement length.
===
Why is deleting at index i in a static array O(n)? #arrays-dsa
---
Because elements after i must be shifted left to keep contiguity.
===
Inserting at the end of a static array when capacity remains: complexity? #arrays-dsa
---
O(1).
===
Why is inserting at index i in a static array O(n)? #arrays-dsa
---
Elements from i..end must be shifted right to open space.
===
In arrays, what’s the difference between length and capacity? #arrays-dsa
---
Length = number of valid elements; capacity = allocated slots.
===
Dynamic arrays: do you specify size at initialization? #arrays-dsa
---
No; they grow automatically as needed.
===
What happens when a dynamic array runs out of capacity on push? #arrays-dsa
---
It resizes (allocates larger array and copies elements).
===
What is the typical resize strategy for dynamic arrays? #arrays-dsa
---
Double the capacity.
===
Why doubling? (high-level intuition) #arrays-dsa
---
The last copy cost dominates; average per push stays O(1) amortized.
===
Time complexity of a single resize operation (copy step)? #arrays-dsa
---
O(n) for n elements copied.
===
Amortized time to append (push) into a dynamic array over many pushes? #arrays-dsa
---
O(1) amortized.
===
Formal reason O(1) amortized holds when doubling capacity? #arrays-dsa
---
Geometric series: total copies up to size n is < 2n ⇒ O(n) total, O(1) per push.
===
If you increased capacity by +1 each time, amortized push would be? #arrays-dsa
---
O(n) (too many resizes).
===
Are middle insertions/removals in dynamic arrays O(1)? #arrays-dsa
---
No—O(n) due to shifting.
===
Reading any index in a dynamic array: complexity? #arrays-dsa
---
O(1).
===
When analyzing time complexity, why do we drop constants (e.g., 2n vs n)? #arrays-dsa
---
Asymptotic growth is linear in both; constants don’t change the class.
===
What’s the high-level rule for array operations that require shifting? #arrays-dsa
---
Any operation that changes interior positions costs O(n).
===
Best use case for arrays vs linked lists (in one line)? #arrays-dsa
---
Arrays: fast random access; Linked lists: frequent inserts/removes at known nodes.
===
Stack access pattern in one phrase? #arrays-dsa
---
LIFO (Last In, First Out).
===
Core stack operations (names only)? #arrays-dsa
---
push, pop, peek.
===
push/pop/peek time complexity on a stack backed by a dynamic array? #arrays-dsa
---
O(1) average.
===
Practical trick: how to implement a stack without a special data type? #arrays-dsa
---
Use a dynamic array (push/pop at the end).
===
Classic stack use case related to order/strings? #arrays-dsa
---
Reversing a sequence (e.g., reversing a string).
===
Key mental model: why middle deletes/inserts are expensive for arrays? #arrays-dsa
---
Because arrays must stay contiguous in memory (requires shifting).
===
If an interviewer asks “delete from end vs delete at i” complexity? #arrays-dsa
---
End: O(1); at i: O(n).
===
Most important numbers to memorize for arrays (80/20)? #arrays-dsa
---
Access O(1), Traverse O(n), Insert/Delete end O(1)*, Insert/Delete middle O(n); dynamic push amortized O(1).
