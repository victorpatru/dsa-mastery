What does a queue represent conceptually? #queues-dsa
---
A First-In-First-Out (FIFO) data structure — elements are processed in the order they arrive.
===
How is a queue different from a stack? #queues-dsa
---
Queue → FIFO (First In, First Out)  
Stack → LIFO (Last In, First Out)
===
What are the two main operations of a queue? #queues-dsa
---
`enqueue` (add to rear) and `dequeue` (remove from front).
===
What is the easiest way to implement a queue? #queues-dsa
---
Using a linked list with `left` (front) and `right` (rear) pointers.
===
Visualize a queue in ASCII form. #queues-dsa
---
```
front → 1 → 2 → 3 → null ← rear
```
===
What is the time complexity of enqueue (insert at end) in a linked-list queue? #queues-dsa
---
O(1).
===
What is the time complexity of dequeue (remove from front) in a linked-list queue? #queues-dsa
---
O(1).
===
Why does a linked-list queue achieve O(1) enqueue and dequeue? #queues-dsa
---
Because we maintain pointers to both `front` and `rear`.
===
What check should always precede a dequeue operation? #queues-dsa
---
Check if the queue is empty.
===
What does a circular queue or deque allow that a standard queue does not? #queues-dsa
---
Insertion and deletion from both ends in O(1) time.
===
Common real-world analogy for a queue? #queues-dsa
---
A line of people waiting — first person in line is served first.
===
Primary use case for queues in algorithms? #queues-dsa
---
Breadth-First Search (BFS) for trees and graphs.
===
What is the Big-O summary for queue operations? #queues-dsa
---
Enqueue O(1), Dequeue O(1).
