# Architecture Overview

Understanding the portfolio site's structure and design decisions.

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Astro Framework                        │
├─────────────────────────────────────────────────────────────┤
│  Pages                │  Components          │  Content     │
│  (src/pages/)         │  (src/components/)   │  Collections │
│  - index.astro        │  - Navbar.astro      │  - posts/    │
│  - about.astro        │  - Footer.astro      │  - tabs/     │
│  - posts/[slug].astro │  - Search.tsx        │  - music/    │
│  - series/            │  - card/             │              │
│  - music/             │  - widget/           │              │
│  - tabs/              │  - misc/             │              │
├─────────────────────────────────────────────────────────────┤
│  Styling              │  Data                │  Utils       │
│  (Tailwind CSS)       │  (src/data/)         │  (src/utils/)│
│  - global.css         │  - series.ts         │  - url-utils │
│  - card.css           │                      │  - date-utils│
│  - theme variables    │                      │  - content-  │
│                       │                      │    utils     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Build Output (dist/)                     │
│  Static HTML + CSS + JS  →  GitHub Pages                    │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Directory Structure Explained

### `/src/pages/`
Astro file-based routing. Each `.astro` file becomes a route:
- `index.astro` → `/`
- `about.astro` → `/about`
- `posts/[slug].astro` → `/posts/my-post`
- `posts/index.astro` → `/posts`

### `/src/components/`
Reusable UI components organized by type:

| Folder | Purpose |
|--------|---------|
| `card/` | Post cards, series cards |
| `widget/` | Sidebar widgets (TOC, Profile) |
| `misc/` | Meta info, series nav, license |
| Root | Core components (Navbar, Footer, Search) |

### `/src/content/`
Content Collections with type-safe schemas:
- `posts/` - Blog posts (Markdown)
- `tabs/` - Guitar tabs (Markdown)
- `music/` - Music videos (Markdown)
- `spec/` - Specification content

### `/src/i18n/`
Internationalization system:
- `i18nKey.ts` - Enum of all translation keys
- `translation.ts` - i18n helper functions
- `languages/en.ts` - English translations

### `/src/layouts/`
Page layouts:
- `Layout.astro` - Base HTML layout
- `MainGridLayout.astro` - Main content + sidebar grid

### `/src/data/`
Static data files:
- `series.ts` - Series definitions

### `/src/utils/`
Utility functions:
- `url-utils.ts` - URL generation helpers
- `date-utils.ts` - Date formatting
- `content-utils.ts` - Content collection helpers

## 🎨 Styling Architecture

### Tailwind CSS
Primary styling via utility classes:
```html
<div class="card-base p-4 text-[var(--text-primary)]">
```

### CSS Variables
Theme colors via CSS custom properties:
```css
--text-primary
--text-secondary
--text-tertiary
--page-bg
--card-bg
--border-color
--primary (oklch color)
```

### Dark/Light Mode
Theme toggle via `data-theme` attribute on `<html>`:
```html
<html data-theme="dark">
```

## 🔀 Component Communication

### Props (Parent → Child)
```astro
<!-- Parent -->
<PostCard post={post} />

<!-- Child (PostCard.astro) -->
---
interface Props { post: CollectionEntry<'posts'> }
const { post } = Astro.props;
---
```

### Slots (Composition)
```astro
<!-- Parent -->
<Card>
  <p slot="header">Title</p>
  <p>Content</p>
</Card>

<!-- Child (Card.astro) -->
<div>
  <slot name="header" />
  <slot />
</div>
```

## 📝 Content Flow

```
Markdown Files (src/content/)
        │
        ▼
Content Collection Schema (content.config.ts)
        │
        ▼
Astro.getCollection('posts')
        │
        ▼
Page Components (src/pages/)
        │
        ▼
Rendered HTML (dist/)
```

## 🔒 Encryption System

For password-protected posts:

```
1. Markdown with encrypted: true, password: "xxx"
        │
        ▼
2. Encryptor.astro renders content to HTML
        │
        ▼
3. AES encryption with crypto-js
        │
        ▼
4. PasswordProtection.astro stores encrypted blob
        │
        ▼
5. Client-side JavaScript decrypts on correct password
```

## 🔍 Search Architecture

Using Pagefind for static search:

```
Build Time:
  HTML Pages → Pagefind Index → pagefind/ folder

Runtime:
  Search Query → Pagefind WASM → Results
```

## 🌐 Routing

### Static Routes
```
/                  → index.astro
/about             → about.astro
/posts             → posts/index.astro
/music             → music/index.astro (hidden)
/tabs              → tabs/index.astro (hidden)
```

### Dynamic Routes
```
/posts/[slug]      → posts/[slug].astro
/series/[id]       → series/[id].astro
/tabs/[slug]       → tabs/[slug].astro
```

## ⚡ Performance

### Island Architecture
Only interactive components ship JavaScript:
- Search.tsx - React component (client:load)
- ThemeSwitch.tsx - React component (client:load)

Static components (Navbar, Footer, Cards) = zero JS.

### Build-Time Optimization
- Image optimization (astro:assets)
- CSS purging (Tailwind)
- HTML minification
- Static generation

## 🔧 Configuration Layers

1. **Astro Config** (`astro.config.mjs`)
   - Site URL, base path
   - Integrations (React, Tailwind, etc.)
   
2. **Site Config** (`src/config.ts`)
   - Profile info
   - Navigation
   - Theme settings
   
3. **Content Config** (`src/content.config.ts`)
   - Collection schemas
   - Frontmatter validation

4. **Build Config** (`tailwind.config.cjs`, `tsconfig.json`)
   - Styling configuration
   - TypeScript paths
