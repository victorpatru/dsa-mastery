What problem does Next.js solve for React apps? #react-nextjs
---
Next.js adds routing, server-side rendering, static generation, API routes, and performance optimizations on top of React for production-ready apps.
===

What is server-side rendering (SSR)? #react-nextjs
---
SSR renders pages on the server for each request, sending HTML to the client, which improves initial load and SEO, then hydrates into a React app.
===

What is static site generation (SSG)? #react-nextjs
---
SSG pre-renders pages at build time and serves static HTML, making them very fast and cheap to serve when content doesn’t change per request.
===

What is incremental static regeneration (ISR) in Next.js? #react-nextjs
---
ISR allows statically generated pages to be updated after deployment by revalidating them on a schedule or on demand, without rebuilding the whole site.
===

What is hydration in SSR React apps? #react-nextjs
---
Hydration is the process where React attaches event handlers and internal state to existing server-rendered HTML on the client.
===

What is the difference between SSR and CSR (client-side rendering)? #react-nextjs
---
CSR renders everything in the browser after downloading JS, while SSR sends ready HTML and uses JS for interactivity and updates.
===

What are some trade-offs of SSR compared to CSR? #react-nextjs
---
SSR can improve SEO and first paint but increases server load, latency per request, and complexity in data fetching and caching.
===

Why does SSR complicate access to browser-only APIs? #react-nextjs
---
Server rendering runs in a Node environment where `window`, `document`, and other browser APIs don’t exist, so code must be guarded or client-only.
===

What is a Next.js API route? #react-nextjs
---
An API route is a serverless-like function living inside a Next.js app that handles HTTP requests as a lightweight backend.
===

What are the main data fetching patterns in modern Next.js (App Router)? #react-nextjs
---
Patterns include server components fetching data directly, `fetch` in server components, route handlers, and caching via React/Next.js caches.
===

What is the advantage of React server components in frameworks like Next.js? #react-nextjs
---
Server components move heavy logic and data fetching to the server, reduce bundle size, and send serialized UI trees instead of full logic to the client.
===

How does routing work in Next.js? #react-nextjs
---
Routing is file-system based: each file in the `pages` or `app` directories becomes a route, with nested folders representing nested routes.