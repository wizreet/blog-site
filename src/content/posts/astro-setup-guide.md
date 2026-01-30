---
title: 'Complete Astro Setup Guide'
description: 'A step-by-step guide to setting up your first Astro project from scratch.'
published: 2024-02-25
image: ../../assets/images/image.png
category: 'Development'
series:
  id: 'astro-tutorials'
  part: 1
tags:
  - 'astro'
  - 'guide'
  - 'tutorial'
  - 'setup'
---

# Complete Astro Setup Guide

![Guide Cover](/blog-site/images/image.png)

This comprehensive guide will walk you through setting up a new Astro project from start to finish.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** version 18.14.1 or higher
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

> 💡 **Tip**: Use `node -v` to check your Node.js version.

## Step 1: Create a New Project

Open your terminal and run:

```bash
# Using npm
npm create astro@latest

# Using pnpm
pnpm create astro@latest

# Using yarn
yarn create astro
```

You'll be prompted to:

1. Choose a project name
2. Select a template (blog, portfolio, minimal, etc.)
3. Install dependencies
4. Initialize a git repository
5. Choose TypeScript settings

## Step 2: Project Structure

After creation, your project will look like this:

```
my-project/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `public/` | Static assets (images, fonts, etc.) |
| `src/components/` | Reusable UI components |
| `src/layouts/` | Page layouts |
| `src/pages/` | Route pages (file-based routing) |

## Step 3: Development Server

Start the development server:

```bash
npm run dev
```

Your site will be available at `http://localhost:4321`.

> ✅ **Success**: You should see the default Astro welcome page!

## Step 4: Create Your First Page

Create a new page at `src/pages/about.astro`:

```astro
---
// Frontmatter - runs at build time
const pageTitle = "About Me";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{pageTitle}</title>
  </head>
  <body>
    <h1>{pageTitle}</h1>
    <p>Welcome to my about page!</p>
  </body>
</html>
```

Visit `http://localhost:4321/about` to see your new page.

## Step 5: Create a Layout

Layouts help avoid repetition. Create `src/layouts/BaseLayout.astro`:

```astro
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
    <main>
      <slot />
    </main>
  </body>
</html>
```

Now update your pages to use the layout:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Home">
  <h1>Welcome!</h1>
  <p>This is the home page.</p>
</BaseLayout>
```

## Step 6: Add Styling

### Global Styles

Create `src/styles/global.css`:

```css
:root {
  --primary: #4f46e5;
  --text: #1f2937;
  --bg: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
  color: var(--text);
  background: var(--bg);
}
```

Import it in your layout:

```astro
---
import '../styles/global.css';
---
```

### Scoped Styles

Add component-specific styles:

```astro
<style>
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
  }
</style>
```

## Step 7: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with your static site.

Preview the build locally:

```bash
npm run preview
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro add` | Add integrations |

## Next Steps

<details>
<summary>Explore more features</summary>

- Add integrations (React, Tailwind, etc.)
- Set up content collections for blogs
- Configure deployment to Vercel/Netlify
- Add page transitions
- Implement RSS feed

</details>

## Troubleshooting

> ⚠️ **Common Issue**: Port 4321 already in use
> 
> Solution: Kill the process or use `--port 3000` flag

> ⚠️ **Common Issue**: Styles not updating
> 
> Solution: Clear browser cache or restart dev server

---

Congratulations! 🎉 You've set up your first Astro project. Happy coding!
