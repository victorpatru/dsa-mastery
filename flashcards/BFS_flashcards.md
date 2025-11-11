What does "Breadth-First Search" (BFS) prioritize? #bfs-trees
---
Visiting all nodes on one level before moving to the next.
===
What is another name for BFS when referring to trees? #bfs-trees
---
Level-order traversal.
===
What data structure is typically used to implement BFS? #bfs-trees
---
A queue (specifically a deque for O(1) operations at both ends).
===
In BFS, from which end of the queue are elements removed? #bfs-trees
---
From the head (front) of the queue.
===
In BFS, to which end of the queue are new elements added? #bfs-trees
---
To the tail (back) of the queue.
===
What is the condition for the BFS main loop to continue running? #bfs-trees
---
While the queue is not empty.
===
What is the first step in BFS? #bfs-trees
---
Append the root node to the queue.
===
What happens in BFS when a node is removed from the queue? #bfs-trees
---
Its value is processed and its children are added to the queue.
===
In what order are a node’s children added to the queue in BFS? #bfs-trees
---
From left to right.
===
What does incrementing the "level" variable represent in BFS? #bfs-trees
---
Moving from one level of the tree to the next.
===
When does the BFS loop terminate? #bfs-trees
---
When the queue becomes empty (all nodes visited).
===
What is the time complexity of BFS? #bfs-trees
---
O(n), where n is the number of nodes.
===
Why is the time complexity of BFS O(n)? #bfs-trees
---
Because every node is visited exactly once.
===
What is the space complexity of BFS? #bfs-trees
---
O(n), where n is the number of nodes.
===
Why is the space complexity of BFS O(n)? #bfs-trees
---
Because the queue may hold all nodes of the largest level.
===
What is the main difference in traversal order between BFS and DFS? #bfs-trees
---
BFS visits nodes level by level, DFS visits nodes depth first.
===
Is BFS typically implemented recursively or iteratively? #bfs-trees
---
Iteratively, using a queue.
===
What kind of problems is BFS particularly useful for? #bfs-trees
---
Finding the shortest path in an unweighted graph or tree.
===
Why does BFS guarantee the shortest path in an unweighted graph? #bfs-trees
---
Because it explores all nodes at distance k before distance k+1.
===
In BFS traversal, what determines the order in which nodes are processed? #bfs-trees
---
Their distance from the starting node (in edges).
===
Why can’t BFS be implemented easily using recursion? #bfs-trees
---
Because recursion follows a stack (LIFO) pattern, while BFS requires a queue (FIFO).
===
What happens if you forget to check for null before adding child nodes to the BFS queue? #bfs-trees
---
The algorithm may throw an error or process invalid nodes.
===
Why might BFS have high space complexity even in a shallow tree? #bfs-trees
---
Because a wide level can contain many nodes in the queue at once.
===
In BFS, what does the queue contain at any given time? #bfs-trees
---
All discovered but unprocessed nodes, usually the next level of nodes.
===
What is printed first when performing BFS on a binary tree? #bfs-trees
---
The root node’s value.
