Why is testing important in React applications? #react-testing
---
Testing validates correctness, prevents regressions, documents behavior, and gives confidence to refactor and ship changes quickly.
===

What are the main types of tests for React apps? #react-testing
---
Unit tests, integration tests, and end-to-end (E2E) tests are the main types frequently used.
===

What should you prefer to test in React components: implementation details or behavior? #react-testing
---
Prefer testing behavior and observable output (rendered DOM, events) rather than implementation details like internal state or hook usage.
===

What is React Testing Library (RTL) focused on? #react-testing
---
RTL focuses on testing components from the user’s perspective using queries that mimic real interactions and DOM access.
===

Why is querying by text or role preferred over test IDs? #react-testing
---
Querying by text or role encourages accessible, user-centric markup and tests what the user actually sees and interacts with.
===

What is Jest commonly used for in React apps? #react-testing
---
Jest is a testing framework used for running tests, assertions, mocking modules, and providing watch mode and coverage reports.
===

How do you test user interactions like clicks or typing? #react-testing
---
Use utilities such as `userEvent` (or `fireEvent`) from RTL to simulate real user actions.
===

What is snapshot testing in React? #react-testing
---
Snapshot testing saves a serialized representation of the rendered output and compares new renders against it to detect changes.
===

What are downsides of heavy snapshot testing? #react-testing
---
Snapshots can become large, brittle, and noisy, making tests fail often and be updated without real review, reducing their value.
===

What is mocking in tests? #react-testing
---
Mocking replaces real implementations (modules, functions, network calls) with controlled fakes to isolate a unit under test.
===

How do you test components that fetch data from APIs? #react-testing
---
Mock the network layer or data-fetching hooks, assert loading and error states, and verify the final UI after simulated responses.
===

How can you test React hooks in isolation? #react-testing
---
Use libraries like React Testing Library’s hook utilities or wrap hooks in test components that expose their behavior for assertions.
===

What is an end-to-end (E2E) test in a React app? #react-testing
---
E2E tests run the full app in a real or headless browser and simulate user flows across multiple pages, often using tools like Cypress or Playwright.
===

Why should you not rely only on E2E tests? #react-testing
---
E2E tests are slow, more brittle, and harder to debug; they should complement, not replace, faster unit and integration tests.
===
