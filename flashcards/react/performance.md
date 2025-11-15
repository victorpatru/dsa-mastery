What are the most common causes of unnecessary re-renders in React? #react-performance
---
Common causes include changing props references unnecessarily, recreating functions on every render, overly broad context or Redux selectors, and not memoizing expensive computations.
===

What does React.memo do? #react-performance
---
`React.memo` memoizes a functional component, causing it to skip re-rendering when its props are shallowly equal to the previous render.
===

When is using React.memo actually beneficial? #react-performance
---
It helps when the component is relatively expensive to render or sits in a large list and its props typically don’t change often.
===

Why can overusing React.memo hurt performance? #react-performance
---
Memoization adds shallow comparison overhead; if components are cheap to render or props always change, the comparisons cost more than re-rendering.
===

How can useCallback and useMemo reduce re-renders in children? #react-performance
---
By preserving stable references for callbacks and computed values, they prevent memoized children from seeing “new” props every render.
===

Why can incorrect dependencies in useCallback/useMemo lead to bugs? #react-performance
---
Missing dependencies can capture stale values; extra dependencies cause more recomputations and re-renders than necessary.
===

How can you optimize large lists in React? #react-performance
---
Use list virtualization (e.g., react-window), key stability, memoized row components, and avoid heavy work per item.
===

What is list virtualization? #react-performance
---
List virtualization renders only visible items (plus a buffer) instead of the entire list, reducing DOM size and rendering cost.
===

How does React’s concurrent rendering (in modern versions) help performance? #react-performance
---
Concurrent rendering allows React to interrupt long renders, prioritize urgent updates, and keep the UI responsive under heavy workloads.
===

What is suspense in React? #react-performance
---
Suspense provides a declarative way to handle loading states by letting components “suspend” while fetching and showing fallback UI.
===

Why should expensive computations not run directly in render? #react-performance
---
Render should be pure and fast; expensive work in render slows updates and interaction responsiveness.
===

How can you avoid blocking the main thread with heavy computations in React apps? #react-performance
---
Offload heavy work to web workers, chunk work using `requestIdleCallback`/scheduling, or move the work to the backend.
===

What is code splitting in React? #react-performance
---
Code splitting breaks the bundle into smaller chunks loaded on demand, reducing initial load time and improving perceived performance.
===

How can you implement code splitting in React apps? #react-performance
---
Use dynamic `import()` with React.lazy/Suspense, and configure bundlers like Webpack to generate separate chunks.
===

What are some key browser performance metrics you should care about? #react-performance
---
Largest Contentful Paint (LCP), First Input Delay (FID/INP), Cumulative Layout Shift (CLS), and Time to First Byte (TTFB).
===

How does minimizing reflows and repaints improve performance? #react-performance
---
Reflows and repaints are expensive layout operations; minimizing DOM changes and batching updates reduces layout thrashing and improves smoothness.