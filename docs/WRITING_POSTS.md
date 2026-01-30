# Writing Blog Posts

This guide explains how to create and format blog posts for the portfolio site.

## 📁 Location

All blog posts go in `src/content/posts/` as Markdown (`.md`) or MDX (`.mdx`) files.

## 📋 Basic Post Structure

```markdown
---
title: "Your Post Title"
published: 2024-01-15
description: "A brief description of your post"
tags: ["javascript", "tutorial"]
category: "Development"
---

Your content here...
```

## 📝 Frontmatter Fields

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Post title |
| `published` | date | Publication date (YYYY-MM-DD) |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | SEO description (max 160 chars) |
| `tags` | string[] | Post tags |
| `category` | string | Post category |
| `image` | string | Cover image path |
| `draft` | boolean | Hide from listings |
| `series` | string | Series name |
| `seriesOrder` | number | Order in series |
| `encrypted` | boolean | Enable encryption |
| `password` | string | Encryption password |

## 🔐 Encrypted Posts

To create a password-protected post:

```markdown
---
title: "Secret Post"
published: 2024-01-15
encrypted: true
password: "mysecretpassword"
---

This content will be encrypted and require a password to view.
```

**How it works:**
1. Content is encrypted with AES using `crypto-js`
2. Visitors see a password prompt
3. Correct password decrypts and reveals content
4. Incorrect password shows error message

## 📸 Images

### Default Image
Use `/images/image.png` as the default placeholder:
```markdown
image: "/images/image.png"
```

### Custom Images
Place images in `public/images/` and reference them:
```markdown
image: "/images/my-post-image.png"
```

### In-Post Images
```markdown
![Alt text](/images/screenshot.png)
```

## 📚 Series Posts

Group related posts into a series:

```markdown
---
title: "React Tutorial - Part 1"
series: "React Tutorial"
seriesOrder: 1
---

---
title: "React Tutorial - Part 2"
series: "React Tutorial"
seriesOrder: 2
---
```

## ✍️ Writing Tips

### Markdown Features

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
~~Strikethrough~~

- Bullet list
- Item 2

1. Numbered list
2. Item 2

> Blockquote

`inline code`

\`\`\`javascript
// Code block with syntax highlighting
const hello = "world";
\`\`\`

[Link text](https://example.com)

| Table | Header |
|-------|--------|
| Cell  | Cell   |
```

### MDX Features

MDX files allow importing components:

```mdx
---
title: "Interactive Post"
published: 2024-01-15
---

import MyComponent from '../../components/MyComponent.astro'

Regular markdown here...

<MyComponent prop="value" />

More markdown...
```

## 📂 File Naming

Use kebab-case for filenames:
- ✅ `my-first-post.md`
- ✅ `react-tutorial-part-1.mdx`
- ❌ `My First Post.md`
- ❌ `myFirstPost.md`

The filename becomes the URL slug:
- `my-first-post.md` → `/posts/my-first-post/`

## 🏷️ Tags and Categories

### Tags
Multiple tags for filtering and discovery:
```yaml
tags: ["javascript", "react", "tutorial", "beginner"]
```

### Categories
Single category for primary classification:
```yaml
category: "Development"
```

Common categories:
- Development
- Tutorial
- Thoughts
- Review
- Project

## 🔍 SEO Best Practices

1. **Title**: Keep under 60 characters
2. **Description**: 120-160 characters, include keywords
3. **Image**: Include a cover image for social sharing
4. **Tags**: Use relevant, searchable terms

## 📝 Example Posts

### Simple Post
```markdown
---
title: "Hello World"
published: 2024-01-15
description: "My first blog post"
tags: ["introduction"]
category: "Thoughts"
image: "/images/image.png"
---

Welcome to my blog! This is my first post.

## About Me

I'm a developer who loves to code and share knowledge.

## What to Expect

I'll be writing about:
- Web development
- Programming tutorials
- Tech thoughts

Stay tuned!
```

### Tutorial Post
```markdown
---
title: "Getting Started with Astro"
published: 2024-01-20
description: "Learn how to build fast websites with Astro"
tags: ["astro", "tutorial", "web-development"]
category: "Tutorial"
image: "/images/astro-tutorial.png"
---

# Getting Started with Astro

Astro is a modern static site generator...

## Installation

\`\`\`bash
npm create astro@latest
\`\`\`

## Creating Your First Page

...
```
