What are React hooks? #react-hooks
---
Hooks are functions that let functional components use React features like state, lifecycle, and context without writing class components.
===

What is the rules of hooks? #react-hooks
---
Hooks must be called at the top level of React function components or custom hooks, never inside loops, conditions, or nested functions.
===

Why must hooks be called in the same order on every render? #react-hooks
---
React relies on the call order to associate hook calls with internal state slots; changing the order would corrupt hook state mapping.
===

What does useState do? #react-hooks
---
`useState` adds local state to a function component, returning a state value and a setter function that triggers re-renders when called.
===

Why is state updates with useState asynchronous from the component’s point of view? #react-hooks
---
State updates are batched and applied during React’s render cycle, so reading state immediately after calling the setter returns the old value.
===

How do you update state based on the previous value safely? #react-hooks
---
Use the functional form: `setState(prev => computeNext(prev))` to ensure you always compute from the latest state.
===

What does useEffect do? #react-hooks
---
`useEffect` runs side effects after render, such as data fetching, subscriptions, or DOM interactions, and can optionally clean up before re-running or unmounting.
===

How does the dependency array of useEffect work? #react-hooks
---
The dependency array lists values the effect depends on; the effect re-runs when any listed dependency changes by reference or value.
===

What happens if you omit the dependency array in useEffect? #react-hooks
---
The effect runs after every render, which can easily cause performance issues or infinite loops if the effect updates state.
===

What happens if you pass an empty dependency array to useEffect? #react-hooks
---
The effect runs only once after the initial mount and its cleanup runs on unmount.
===

Why can forgetting dependencies in useEffect cause bugs? #react-hooks
---
Effects may read stale values, not react to changes, or exhibit inconsistent behavior, especially with closures over outdated state or props.
===

What is useLayoutEffect and how does it differ from useEffect? #react-hooks
---
`useLayoutEffect` runs synchronously after DOM mutations but before paint, blocking painting; `useEffect` runs asynchronously after paint.
===

When should you use useLayoutEffect? #react-hooks
---
Use `useLayoutEffect` only when you must measure layout or synchronize DOM reads/writes before the browser paints, and it cannot be done later.
===

What is useRef used for? #react-hooks
---
`useRef` stores a mutable value that persists across renders without triggering re-renders when changed, often used for DOM nodes or instance-like variables.
===

How is useRef different from state? #react-hooks
---
Updating a ref does not cause a re-render, while updating state does.
===

What does useMemo do? #react-hooks
---
`useMemo` memoizes the result of a computation and recomputes it only when its dependencies change, helping avoid expensive recalculations.
===

What does useCallback do? #react-hooks
---
`useCallback` memoizes a function definition and returns the same function reference as long as its dependencies don’t change.
===

When does useCallback actually help performance? #react-hooks
---
It helps when passing callbacks to memoized children (`React.memo`) or deeply nested components that rely on referential equality to avoid re-renders.
===

What is useContext used for? #react-hooks
---
`useContext` lets components subscribe to a React context value without manually passing props through intermediate components.
===

What is a custom hook? #react-hooks
---
A custom hook is a function starting with `use` that composes built-in hooks to encapsulate reusable stateful logic across components.
===

Why do custom hooks improve code reuse? #react-hooks
---
They encapsulate logic, not UI, allowing multiple components to share behavior without duplicating state management or effects.
===

Can you conditionally call a custom hook? #react-hooks
---
No. Custom hooks follow the same rules as built-in hooks and must be called unconditionally at the top level of the component.
===
