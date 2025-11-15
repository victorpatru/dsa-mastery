What is local UI state in React? #react-state
---
Local UI state is state owned by a single component that only that component cares about, such as input values, open/closed flags, or visibility.
===

When should you lift state up to a parent? #react-state
---
Lift state up when multiple children need to read or modify the same data or when coordination between components is required.
===

What is global state in a React app? #react-state
---
Global state is shared state that many parts of the app need access to, such as the current user, theme, or feature flags.
===

What are common tools for global state management in React? #react-state
---
Common tools include React context, Redux, Zustand, MobX, Recoil, and query libraries like React Query for server state.
===

What is the difference between server state and client state? #react-state
---
Server state is data fetched from a backend that has a single source of truth on the server; client state is purely local UI state managed in the browser.
===

Why is managing server state often harder than client state? #react-state
---
Server state needs caching, refetching, synchronization, deduplication, pagination, and handling stale data and background updates.
===

What problem does React Context solve? #react-state
---
Context allows passing values deeply without prop drilling through every intermediate component.
===

What are downsides of using context for large global state? #react-state
---
Context value changes can trigger re-renders for all consumers, making performance and fine-grained updates harder to control.
===

What is Redux in the context of React? #react-state
---
Redux is a predictable state container using a single store, immutable updates, and pure reducers with unidirectional data flow.
===

What is the core idea behind Redux’s unidirectional data flow? #react-state
---
State flows from the store to the UI, user interactions dispatch actions, reducers compute new state, and the cycle repeats.
===

What is an action in Redux? #react-state
---
An action is a plain object describing an event or intent, typically with a `type` and optional payload.
===

What is a reducer in Redux? #react-state
---
A reducer is a pure function that takes the current state and an action and returns the next state without mutating the original.
===

Why is immutability important in state management? #react-state
---
Immutability enables cheap change detection via reference equality, supports time-travel debugging, and avoids unintentional side effects.
===

What are common pitfalls when using Redux in React? #react-state
---
Over-centralizing all state, bloated reducers, unnecessary re-renders, and complex boilerplate without real need.
===

What is React Query (TanStack Query) used for? #react-state
---
React Query is used for managing server state: fetching, caching, deduping, refetching, synchronization, and managing loading/error states.
===

How does React Query differ from Redux? #react-state
---
React Query focuses on asynchronous server state and caching, while Redux is a general client-state management library.
===

When is it appropriate to use a state library instead of just useState and context? #react-state
---
Use a state library when state-sharing, updates, or server data become complex enough that local state plus context leads to tangled, hard-to-maintain code.
===

What is optimistic UI updating? #react-state
---
Optimistic updates apply a predicted state change immediately before the server confirms, then roll back or reconcile based on the response.
===
