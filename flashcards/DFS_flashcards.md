What does Depth-First Search (DFS) prioritize? #dfs-trees
---
Going as deep as possible down one branch before backtracking.
===
What is DFS commonly used for? #dfs-trees
---
Traversing trees and graphs.
===
When focusing on trees, what does DFS do? #dfs-trees
---
Visits every node in the tree by exploring as far down as possible before backtracking.
===
How does DFS differ conceptually from BFS? #dfs-trees
---
DFS prioritizes depth before breadth; BFS visits level by level.
===
What is the basic idea behind DFS traversal? #dfs-trees
---
Pick a direction (e.g., left) and keep following pointers until reaching null, then backtrack and go right.
===
What data structure is DFS typically implemented with? #dfs-trees
---
A recursive call stack (recursion) or explicitly with a stack.
===
Which implementation method is most common for DFS? #dfs-trees
---
Recursion.
===
What are the three types of DFS tree traversals? #dfs-trees
---
Inorder, Preorder, and Postorder.
===
In an inorder traversal, what is the visiting order of nodes? #dfs-trees
---
Left subtree → Parent node → Right subtree.
===
What is the base case in an inorder traversal? #dfs-trees
---
When the current node is null.
===
Consider the following binary search tree: #dfs-trees

```
        4
      /   \
     3     6
    /     / \
   2     5   7
```

What is the order of visited nodes for inorder traversal of this tree?
---
[2,3,4,5,6,7]
===
Why does an inorder traversal of a binary search tree produce sorted values? #dfs-trees
---
Because all values in the left subtree are smaller and are visited before the parent and right subtree.
===
What is the visiting order in preorder traversal? #dfs-trees
---
Parent node → Left subtree → Right subtree.
===
For the same tree: #dfs-trees

```
        4
      /   \
     3     6
    /     / \
   2     5   7
```

What is the output order for preorder traversal?
---
[4,3,2,6,5,7]
===
What is the visiting order in postorder traversal? #dfs-trees
---
Left subtree → Right subtree → Parent node.
===
For the same tree: #dfs-trees

```
        4
      /   \
     3     6
    /     / \
   2     5   7
```

What is the output order for postorder traversal?
---
[2,3,5,7,6,4]
===
What does "visit" mean in the context of tree traversal? #dfs-trees
---
Performing some operation on the node, such as printing its value.
===
What is the time complexity of DFS (for inorder, preorder, or postorder)? #dfs-trees
---
O(n), where n is the number of nodes.
===
Why is the time complexity of DFS O(n)? #dfs-trees
---
Because each node is visited exactly once.
===
What is the space complexity of DFS in terms of the tree height h? #dfs-trees
---
O(h), where h is the height of the tree.
===
What is the space complexity of DFS for a balanced binary tree? #dfs-trees
---
O(log n)
===
What is the space complexity of DFS for a skewed tree? #dfs-trees
---
O(n)
===
What can be built from an inorder traversal of a binary search tree? #dfs-trees
---
A sorted array of the tree's values.
===
When does DFS backtrack during traversal? #dfs-trees
---
After reaching a null node or a leaf node with no further children.
===
Which traversal method processes the parent before its children? #dfs-trees
---
Preorder traversal.
===
Which traversal method processes the parent after both subtrees? #dfs-trees
---
Postorder traversal.
===
Which traversal method visits the parent between its left and right children? #dfs-trees
---
Inorder traversal.
===
