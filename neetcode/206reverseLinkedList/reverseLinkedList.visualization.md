Assume the list is:

```
1 → 2 → 3 → null
```

---

## Initial state

```js
reversed = null
remaining = 1
```

```
reversed:   null

remaining:  1 → 2 → 3 → null
             ↑
```

Nothing is reversed yet.

---

## 🔁 While loop walkthrough

---

### **Iteration 1**

```js
const nextRemaining = remaining.next   // 2
remaining.next = reversed              // 1.next = null
reversed = remaining                   // reversed = 1
remaining = nextRemaining              // remaining = 2
```

**State now:**

```
reversed:   1 → null
             ↑

remaining:  2 → 3 → null
             ↑
```

You **moved node `1`** from `remaining` into `reversed`.

---

### **Iteration 2**

```js
const nextRemaining = remaining.next   // 3
remaining.next = reversed              // 2.next = 1
reversed = remaining                   // reversed = 2
remaining = nextRemaining              // remaining = 3
```

**State now:**

```
reversed:   2 → 1 → null
             ↑

remaining:  3 → null
             ↑
```

Now nodes `2 → 1` are reversed.

---

### **Iteration 3**

```js
const nextRemaining = remaining.next   // null
remaining.next = reversed              // 3.next = 2
reversed = remaining                   // reversed = 3
remaining = nextRemaining              // remaining = null
```

**State now:**

```
reversed:   3 → 2 → 1 → null
             ↑

remaining:  null
```

Loop stops (`remaining === null`).

---

## ✅ Final return

```js
return reversed
```

```
3 → 2 → 1 → null
```

---