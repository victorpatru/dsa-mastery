What is React? #react-basics
---
React is a JavaScript library for building user interfaces using a declarative, component-based model, where UI is derived from state.
===

What is a React component? #react-basics
---
A React component is a reusable piece of UI defined as a function or class that accepts props and returns React elements describing what should be rendered.
===

What are props in React? #react-basics
---
Props are read-only inputs passed from a parent component to a child component to configure or customize its behavior and rendering.
===

Are props mutable or immutable from the child’s perspective? #react-basics
---
Props are immutable from the child’s perspective; a component must never modify its own props and should use state or callbacks instead.
===

What is state in React? #react-basics
---
State is mutable data managed inside a component that can change over time and causes the component to re-render when updated.
===

What is the difference between props and state? #react-basics
---
Props are external, read-only inputs provided by parents; state is internal, mutable data owned by the component. Props are controlled by parents, state by the component itself.
===

What does “declarative UI” mean in React? #react-basics
---
Declarative UI means you describe what the UI should look like for a given state, and React handles updating the DOM when that state changes, instead of manually manipulating DOM operations.
===

What is a React element? #react-basics
---
A React element is a lightweight plain object describing what to render (type, props, children); it is not the actual DOM node.
===

What is JSX? #react-basics
---
JSX is a syntax extension that lets you write XML-like tags in JavaScript, which get compiled to `React.createElement` calls producing React elements.
===

Can React be used without JSX? #react-basics
---
Yes. You can use `React.createElement` directly, but JSX is more ergonomic and commonly used.
===

What is the virtual DOM? #react-basics
---
The virtual DOM is an in-memory tree of React elements representing the UI; React diffs this tree between renders and applies minimal updates to the real DOM.
===

What is reconciliation in React? #react-basics
---
Reconciliation is the process where React compares the previous and next virtual DOM trees and determines which DOM operations are needed to update the UI.
===

What is the key prop used for? #react-basics
---
The `key` prop uniquely identifies items in lists so React can track, reuse, and reorder components efficiently during reconciliation.
===

What can go wrong if keys are not stable or unique? #react-basics
---
React may reuse the wrong component instances, causing state to “move” between items, incorrect UI updates, or subtle bugs.
===

Why should you avoid using the array index as a key? #react-basics
---
Using the index as a key breaks when items are inserted, removed, or reordered, causing incorrect state association and rendering glitches.
===

What is the difference between a controlled and uncontrolled component in forms? #react-basics
---
Controlled components store form values in React state and update via `onChange`; uncontrolled components let the DOM manage state, accessed via refs.
===

When would you prefer uncontrolled components? #react-basics
---
Use uncontrolled components for simple forms where you only need values on submit and don’t need validation or live React-driven feedback.
===

What is lifting state up in React? #react-basics
---
Lifting state up means moving state to the closest common ancestor of components that need to share or coordinate that state.
===

What is prop drilling? #react-basics
---
Prop drilling is passing props through multiple intermediate components that don’t directly need them, just to reach a deeper child.
===

How can you avoid prop drilling? #react-basics
---
You can avoid prop drilling using context, custom hooks, state management libraries, or better component boundaries and composition.
===
