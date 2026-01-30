---
title: 'Getting Started with Astro'
description: 'A comprehensive guide to getting started with Astro, the all-in-one web framework designed for speed.'
published: 2024-01-20
category: 'Web Development'
tags:
  - 'astro'
  - 'javascript'
  - 'tutorial'
  - 'web development'
series:
  id: 'astro-deep-dive'
  part: 1
---

# Getting Started with Astro

Astro is a modern web framework that allows you to build fast, content-focused websites. In this post, we'll explore the basics of Astro and why it's becoming a popular choice for developers.

## Why Astro?

Astro stands out from other frameworks for several reasons:

### 1. Zero JavaScript by Default

Astro ships zero JavaScript to the browser by default. This means your pages load incredibly fast because there's no JavaScript bundle to download and parse.

```javascript
// This runs only at build time, not in the browser!
const posts = await Astro.glob('./posts/*.md');
```

### 2. Island Architecture

Astro's "island architecture" allows you to use interactive components only where needed. The rest of your page remains static HTML.

```astro
---
import Counter from './Counter.jsx';
---

<h1>Welcome!</h1>
<p>This is static HTML</p>

<!-- Only this component loads JavaScript -->
<Counter client:load />
```

### 3. Framework Agnostic

You can use your favorite UI framework:

- React
- Vue
- Svelte
- Solid
- Or no framework at all!

## Installation

Getting started with Astro is straightforward:

```bash
# Create a new project
npm create astro@latest

# Or with pnpm
pnpm create astro@latest
```

## Project Structure

A typical Astro project looks like this:

```
my-project/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
└── package.json
```

## Creating Your First Page

Pages in Astro are just `.astro` files in the `src/pages/` directory:

```astro
---
// src/pages/index.astro
const greeting = "Hello, World!";
---

<html>
  <head>
    <title>My First Astro Page</title>
  </head>
  <body>
    <h1>{greeting}</h1>
  </body>
</html>
```

## What's Next?

In the next part of this series, we'll dive deeper into Astro's component model and explore how to build reusable UI components.

Stay tuned! 🚀
