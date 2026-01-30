# Styling Guide

How to style components and customize the theme.

## 🎨 Theme System

### CSS Variables

The site uses CSS custom properties for theming. All defined in global styles:

```css
/* Text colors */
--text-primary    /* Main text */
--text-secondary  /* Secondary text */
--text-tertiary   /* Muted text */

/* Background colors */
--page-bg         /* Page background */
--card-bg         /* Card backgrounds */

/* Interactive */
--border-color    /* Borders */
--primary         /* Primary accent (oklch) */
--btn-regular-bg  /* Button background */
--btn-hover-bg    /* Button hover */
```

### Theme Hue

The primary color is controlled by a single hue value (0-360):

```typescript
// src/config.ts
themeConfig: {
  hue: 250,  // Purple
}
```

| Hue | Color |
|-----|-------|
| 0 | Red |
| 30 | Orange |
| 60 | Yellow |
| 120 | Green |
| 180 | Cyan |
| 210 | Blue |
| 250 | Purple |
| 300 | Pink |

### Dark/Light Mode

Toggle via `data-theme` attribute:
```html
<html data-theme="dark">
<html data-theme="light">
```

## 🔧 Tailwind CSS

### Configuration

Located in `tailwind.config.cjs`:

```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Custom extensions
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

### Using Theme Variables

Reference CSS variables in Tailwind:

```html
<!-- Colors -->
<p class="text-[var(--text-primary)]">Primary text</p>
<p class="text-[var(--text-secondary)]">Secondary text</p>

<!-- Primary color with oklch -->
<div class="bg-[oklch(var(--primary))]">Primary bg</div>
<div class="text-[oklch(var(--primary))]">Primary text</div>
<div class="bg-[oklch(var(--primary)/0.1)]">10% opacity</div>
```

### Common Patterns

```html
<!-- Card -->
<div class="card-base p-4">Content</div>

<!-- Button -->
<button class="rounded-lg bg-[oklch(var(--primary))] px-4 py-2 text-white hover:bg-[oklch(var(--primary)/0.9)]">
  Click me
</button>

<!-- Input -->
<input class="rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-primary)] focus:border-[oklch(var(--primary))] focus:outline-none">
```

## 📦 Utility Classes

### Card Base

The `.card-base` class provides consistent card styling:

```css
.card-base {
  background: var(--card-bg);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
}
```

Usage:
```html
<div class="card-base overflow-hidden">
  <header class="p-4 border-b border-[var(--border-color)]">
    Header
  </header>
  <div class="p-4">
    Content
  </div>
</div>
```

### Container

```html
<div class="container-page">
  <!-- Max-width container with padding -->
</div>
```

## ✍️ Typography

### Prose Styling

For markdown content, use Tailwind Typography:

```html
<div class="prose prose-lg dark:prose-invert">
  <Content />
</div>
```

Modifiers:
- `prose-sm` / `prose` / `prose-lg` / `prose-xl` - Size
- `dark:prose-invert` - Dark mode colors
- `max-w-none` - Remove max-width

### Headings

```html
<h1 class="text-4xl font-bold text-[var(--text-primary)]">Heading 1</h1>
<h2 class="text-3xl font-bold text-[var(--text-primary)]">Heading 2</h2>
<h3 class="text-xl font-semibold text-[var(--text-primary)]">Heading 3</h3>
```

## 🖼️ Images

### Responsive Images

```html
<img 
  src="/images/photo.jpg" 
  alt="Description" 
  class="h-full w-full object-cover"
  loading="lazy"
/>
```

### Aspect Ratios

```html
<div class="aspect-video">
  <img class="h-full w-full object-cover" />
</div>

<div class="aspect-square">
  <img class="h-full w-full object-cover" />
</div>
```

## 🎯 Icons

Using Iconify icons:

```astro
---
import { Icon } from 'astro-icon/components'
---

<Icon name="material-symbols:home" class="h-5 w-5" />
<Icon name="fa6-brands:github" class="h-5 w-5" />
```

Browse icons: [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)

Common icon sets:
- `material-symbols:` - Material Design
- `fa6-brands:` - Font Awesome 6 Brands
- `fa6-solid:` - Font Awesome 6 Solid
- `mdi:` - Material Design Icons

## 🌓 Dark Mode Styling

### Conditional Classes

```html
<div class="bg-white dark:bg-gray-900">
  Changes background in dark mode
</div>
```

### Using CSS Variables

CSS variables automatically adjust for theme:
```html
<!-- Works in both modes -->
<div class="bg-[var(--card-bg)] text-[var(--text-primary)]">
```

## 📱 Responsive Design

### Breakpoints

| Prefix | Width |
|--------|-------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

### Examples

```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row">

<!-- Hidden on mobile -->
<div class="hidden md:block">

<!-- Different padding by screen size -->
<div class="p-4 md:p-6 lg:p-8">
```

## ⚡ Animation

### Transitions

```html
<button class="transition-colors duration-200 hover:bg-[oklch(var(--primary))]">
  Smooth color change
</button>

<div class="transition-transform hover:scale-105">
  Scale on hover
</div>
```

### Common Transitions

```html
transition-all       /* All properties */
transition-colors    /* Colors only */
transition-opacity   /* Opacity only */
transition-transform /* Transform only */

duration-150  /* 150ms */
duration-200  /* 200ms */
duration-300  /* 300ms */
```

## 🧩 Component Patterns

### Cards with Hover

```html
<article class="card-base group overflow-hidden transition-all hover:scale-[1.02]">
  <img class="transition-transform group-hover:scale-105" />
  <h3 class="group-hover:text-[oklch(var(--primary))]">Title</h3>
</article>
```

### Links

```html
<a class="text-[var(--text-secondary)] transition-colors hover:text-[oklch(var(--primary))]">
  Link text
</a>
```

### Buttons

```html
<!-- Primary button -->
<button class="rounded-lg bg-[oklch(var(--primary))] px-4 py-2 font-medium text-white transition-colors hover:bg-[oklch(var(--primary)/0.8)]">
  Primary
</button>

<!-- Secondary button -->
<button class="rounded-lg bg-[var(--btn-regular-bg)] px-4 py-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--btn-hover-bg)] hover:text-[oklch(var(--primary))]">
  Secondary
</button>
```

## 📝 Best Practices

1. **Use CSS variables** for theme-aware colors
2. **Use Tailwind utilities** for spacing and layout
3. **Group hover states** for coordinated interactions
4. **Mobile-first** responsive design
5. **Avoid inline styles** - use utility classes
6. **Keep classes readable** - break into multiple lines if needed

```html
<!-- Good: Readable multi-line -->
<button 
  class="
    rounded-lg bg-[oklch(var(--primary))] 
    px-4 py-2 font-medium text-white 
    transition-colors hover:bg-[oklch(var(--primary)/0.8)]
  "
>
  Button
</button>
```
