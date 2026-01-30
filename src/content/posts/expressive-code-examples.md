---
title: 'Expressive Code Examples'
description: 'Showcase of syntax highlighting and code formatting features.'
published: 2024-02-10
image: ../../assets/images/image.png
category: 'Development'
series:
  id: 'documentation'
  part: 2
tags:
  - 'code'
  - 'syntax-highlighting'
  - 'development'
---

# Expressive Code Examples

This post demonstrates the code formatting capabilities available in blog posts.

## Basic Syntax Highlighting

### JavaScript

```javascript
// Fetch data from an API
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
}

// Arrow function example
const greet = (name) => `Hello, ${name}!`;
console.log(greet('World'));
```

### TypeScript

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

async function getUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}
```

### Python

```python
def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence up to n terms."""
    sequence = []
    a, b = 0, 1
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence

# Generate first 10 Fibonacci numbers
print(fibonacci(10))
```

### CSS

```css
/* Modern card component */
.card {
  background: var(--card-bg);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <main>
      <h1>Welcome to my site!</h1>
      <p>This is a sample HTML document.</p>
    </main>
  </body>
</html>
```

### Astro Component

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<article class="card">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
  <slot />
</article>

<style>
  .card {
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--card-bg);
  }
</style>
```

### Shell Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### JSON Configuration

```json
{
  "name": "my-portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0"
  }
}
```

## Inline Code

Use inline code like `const x = 42` or `npm install` for short snippets.

## Code with Line Numbers

Code blocks automatically get proper formatting and syntax highlighting based on the language specified.

---

These are the code formatting features available for technical documentation and tutorials!
