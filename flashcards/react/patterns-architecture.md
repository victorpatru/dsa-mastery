What is component composition in React? #react-patterns
---
Component composition is building complex UIs by combining simple components together instead of relying on inheritance or huge monolithic components.
===

Why does React prefer composition over inheritance? #react-patterns
---
Composition is more flexible, easier to reason about, and allows reusing behavior and UI in a controlled, explicit way.
===

What is a presentational component? #react-patterns
---
A presentational component focuses on how things look (markup and styles) and receives data and callbacks via props without owning complex logic.
===

What is a container (smart) component? #react-patterns
---
A container component manages data fetching, state, and business logic and passes processed data to presentational components.
===

What is the render props pattern? #react-patterns
---
Render props is a pattern where a component takes a function as a prop and calls it to render UI, allowing sharing logic while letting consumers control the UI.
===

What is the higher-order component (HOC) pattern? #react-patterns
---
A HOC is a function that takes a component and returns a new component that wraps the original and enhances it with additional behavior or props.
===

Why have hooks largely replaced many HOC and render-props use cases? #react-patterns
---
Hooks allow sharing logic directly in functions without extra components or deeply nested trees, resulting in clearer, flatter structures.
===

What is a controlled component pattern in forms? #react-patterns
---
In the controlled pattern, form inputs derive their values from React state, and every change flows through event handlers updating that state.
===

What is a compound component pattern? #react-patterns
---
Compound components are a group of components that work together, where a parent exposes subcomponents and shares implicit state via context or props.
===

What is the provider pattern in React? #react-patterns
---
The provider pattern uses React context providers at the top of subtrees to supply shared data and behavior to nested components.
===

What is the “hooks + context” pattern for global state? #react-patterns
---
You create a context for a value, then wrap it with custom hooks that consume the context, encapsulating access and update logic in a clean API.
===

What is the container–presentational split good for? #react-patterns
---
It enforces separation of concerns, improves testability, encourages reuse, and keeps UI components simple and focused.
===

What is a layout component? #react-patterns
---
A layout component concerns itself with structure and positioning (grid, columns, sections) rather than business logic or data.
===

What is the “page → layout → feature → shared” layering approach? #react-patterns
---
It organizes the app into pages, reusable layout shells, feature modules, and shared primitives to keep concerns separated and code scalable.
===

What is a good way to organize files in a medium-to-large React app? #react-patterns
---
Prefer feature-based or domain-based folders (e.g., `features/todos`) with colocated components, hooks, tests, and styles over large global type-based folders.
===

Why is colocating logic and components beneficial? #react-patterns
---
Colocation reduces mental overhead, makes refactoring easier, encapsulates features, and avoids sprawling cross-module dependencies.
===
