What is the key structural difference between an array and a linked list? #linkedlists-dsa
---
Arrays store elements contiguously in memory, while linked lists store nodes scattered in memory and connected via pointers (`next` references).
===
What two main attributes does a `ListNode` have? #linkedlists-dsa
---
`value` (data stored in the node) and `next` (reference to the next node).
===
How do linked list nodes connect in memory? #linkedlists-dsa
---
```
A(value) → B(value) → C(value) → null
```
Each node stores the address of the next node, not necessarily contiguous in memory.
===
Which node in a linked list has its `next` pointer set to `null`? #linkedlists-dsa
---
The last (tail) node.
===
What does the head pointer represent in a linked list? #linkedlists-dsa
---
The first node in the list.
===
What does the tail pointer represent in a linked list? #linkedlists-dsa
---
The last node in the list.
===
What is the time complexity of traversing a linked list of n nodes? #linkedlists-dsa
---
O(n).
===
What code pattern is used to traverse a linked list? #linkedlists-dsa
---
```js
let cur = head;
while (cur) {
  cur = cur.next;
}
```
===
How can a circular linked list form? #linkedlists-dsa
---
If the last node’s `next` pointer points back to a previous node instead of `null`.
Example:
```
A → B → C
      ↑   ↓
      └───┘
```
===
What happens if you traverse a circular linked list without checks? #linkedlists-dsa
---
You enter an infinite loop — the list never terminates at `null`.
===
If you append a node at the end of a singly linked list (with tail reference), what is the time complexity? #linkedlists-dsa
---
O(1).
===
How do you append a new node to the end of a linked list with a tail reference? #linkedlists-dsa
---
```js
tail.next = newNode;
tail = newNode;
```
===
Why can insertion be O(1) in a linked list while it’s O(n) in an array? #linkedlists-dsa
---
Linked lists don’t need to shift elements; they just rewire pointers.
===
When does linked list insertion become O(n)? #linkedlists-dsa
---
When you must traverse the list to find the insertion point.
===
How do you delete a node (say node2) from a singly linked list if you have access to its previous node (node1)? #linkedlists-dsa
---
By updating the `next` pointer:
```
node1.next = node1.next.next;
```
Result:
```
A → B → C → null
delete B → A → C → null
```
===
What is the time complexity of deletion in a linked list if the target node is already known? #linkedlists-dsa
---
O(1).
===
If you must search for the node to delete first, what is the total complexity? #linkedlists-dsa
---
O(n).
===
What happens to the deleted node’s memory in garbage-collected languages? #linkedlists-dsa
---
It’s automatically freed by the garbage collector.
===
What is a singly linked list’s main limitation compared to a doubly linked list? #linkedlists-dsa
---
You can only traverse forward (no previous pointer).
===
What extra pointer does a node in a doubly linked list have compared to a singly linked list? #linkedlists-dsa
---
A `prev` pointer that references the previous node.
===
Visualize a doubly linked list with 3 nodes (A, B, C). #linkedlists-dsa
---
```
null ← A ⇄ B ⇄ C → null
```
===
What is the time complexity to insert a node at the end of a doubly linked list if tail is known? #linkedlists-dsa
---
O(1).
===
What updates are required when inserting at the end of a doubly linked list? #linkedlists-dsa
---
```
tail.next = newNode;
newNode.prev = tail;
tail = newNode;
```
===
What is the time complexity of deleting the last node in a doubly linked list? #linkedlists-dsa
---
O(1).
===
What pointers must be updated when deleting the last node in a doubly linked list? #linkedlists-dsa
---
```
tail.prev.next = null;
tail = tail.prev;
```
===
Why can a doubly linked list traverse in both directions? #linkedlists-dsa
---
Each node has both `next` and `prev` pointers.
===
What is the time complexity for random access in a linked list? #linkedlists-dsa
---
O(n) — you must traverse from the head or tail.
===
What’s the difference in memory layout between arrays and linked lists? #linkedlists-dsa
---
Arrays: contiguous memory; Linked lists: scattered nodes linked by pointers.
===
What is the Big-O summary for singly or doubly linked list operations (access, search, insert, delete)? #linkedlists-dsa
---
Access O(n), Search O(n), Insert O(1)*, Delete O(1)*  
(*Assuming you already have a node reference.)
===
Why can linked lists implement stacks or queues efficiently? #linkedlists-dsa
---
They support O(1) insertions/deletions at one or both ends via pointer updates.
===
Visualize a queue implemented using a linked list. #linkedlists-dsa
---
```
front → A → B → C → null ← rear
```
Enqueue adds to `rear`; Dequeue removes from `front`.
===
If `tail.next` in a singly linked list points to `head`, what do you have? #linkedlists-dsa
---
A circular linked list.
===
What’s one downside of linked lists compared to arrays in modern systems? #linkedlists-dsa
---
Poor cache locality due to non-contiguous memory access.
