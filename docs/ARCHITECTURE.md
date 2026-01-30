# Portfolio Architecture

> A blog-focused portfolio site built with Astro, featuring a three-column dashboard layout.

## 🏗️ Layout Architecture

### Three-Column Dashboard Layout

The site uses a responsive three-column layout optimized for blog reading and navigation:

```
┌─────────────┬─────────────────────────────────┬─────────────┐
│   Left      │        Main Content             │   Right     │
│  Sidebar    │                                 │  Sidebar    │
│   260px     │        flex-1                   │   280px     │
│             │                                 │             │
│  - Series   │  - Blog posts                   │  - Profile  │
│  - Cats     │  - Article content              │  - TOC      │
│             │                                 │             │
└─────────────┴─────────────────────────────────┴─────────────┘
```

### Responsive Breakpoints

| Screen Size | Layout |
|-------------|--------|
| Desktop (lg+) | Three columns |
| Tablet (md) | Two columns (main + right) |
| Mobile | Single column with collapsible nav |

## 📁 Directory Structure

```
src/
├── components/
│   ├── card/
│   │   └── PostCard.astro      # Blog post preview cards
│   ├── dashboard/
│   │   ├── LeftSidebar.astro   # Navigation: categories, series
│   │   └── RightSidebar.astro  # Profile card, TOC
│   ├── misc/
│   │   ├── PostMeta.astro      # Date, reading time, tags
│   │   ├── SeriesNav.astro     # Series navigation
│   │   └── License.astro       # Post license info
│   └── widget/
│       ├── Profile.astro       # Author profile card
│       └── TOC.astro           # Table of contents
├── content/
│   ├── posts/                  # Blog posts (markdown)
│   └── spec/                   # Static pages (about)
├── data/
│   ├── series.ts               # Series definitions
│   ├── projects.ts             # Projects data
│   ├── skills.ts               # Skills data
│   └── timeline.ts             # Timeline data
├── i18n/
│   ├── i18nKey.ts              # Translation keys enum
│   ├── translation.ts          # i18n utility functions
│   └── languages/
│       ├── en.ts               # English translations
│       └── ne.ts               # Nepali translations
├── layouts/
│   ├── Layout.astro            # Base HTML layout
│   ├── DashboardLayout.astro   # Three-column blog layout
│   └── MainGridLayout.astro    # Legacy layout (deprecated)
├── pages/
│   ├── index.astro             # Home page
│   ├── about.astro             # About page
│   ├── series.astro            # Series index
│   ├── posts/
│   │   ├── index.astro         # All posts
│   │   ├── [slug].astro        # Single post
│   │   └── category/
│   │       └── [category].astro # Category filter
│   └── series/
│       └── [id].astro          # Series detail
└── utils/
    ├── content-utils.ts        # Content collection helpers
    ├── date-utils.ts           # Date formatting
    └── url-utils.ts            # URL generation
```

## 🎨 Component Guide

### DashboardLayout

The main layout component for all pages.

```astro
<DashboardLayout 
  title="Page Title"
  description="Page description"
  headings={headings}          // Optional: for TOC
  activeCategory="category"     // Optional: highlight in sidebar
  activeSeries="series-id"      // Optional: highlight in sidebar
>
  <!-- Main content -->
</DashboardLayout>
```

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Page title for SEO |
| `description` | `string` | Page description for SEO |
| `headings` | `MarkdownHeading[]` | Article headings for TOC |
| `hideLeftSidebar` | `boolean` | Hide left navigation |
| `hideRightSidebar` | `boolean` | Hide right sidebar |
| `activeCategory` | `string` | Highlight category in sidebar |
| `activeSeries` | `string` | Highlight series in sidebar |

### LeftSidebar

Navigation dashboard with categories and series.

**Features:**
- Hierarchical category list with post counts
- Series list with status badges (ongoing/completed/paused)
- Active state highlighting
- Collapsible on mobile

### RightSidebar

Profile and Table of Contents.

**Features:**
- Author profile with avatar and social links
- Dynamic TOC generated from headings
- Scroll-tracking for active heading
- Sticky positioning on desktop

### PostCard

Blog post preview card with proper styling.

**Features:**
- Featured image support
- Category badge
- Reading time and date
- Tag pills
- Hover animations
- Proper padding and spacing

## 🌐 i18n (Internationalization)

The site supports multiple languages with Nepali (ne) and English (en).

### Adding Translations

1. Add key to `src/i18n/i18nKey.ts`:
```typescript
enum I18nKey {
  myNewKey = 'myNewKey',
}
```

2. Add translations to each language file:
```typescript
// src/i18n/languages/en.ts
[I18nKey.myNewKey]: 'My new text',

// src/i18n/languages/ne.ts
[I18nKey.myNewKey]: 'मेरो नयाँ पाठ',
```

3. Use in components:
```astro
---
import { i18n, I18nKey } from '@i18n/index';
---
<p>{i18n(I18nKey.myNewKey)}</p>
```

## 📝 Content Collections

### Posts Collection

Location: `src/content/posts/*.md`

```yaml
---
title: "Post Title"
published: 2025-01-01
description: "Post description"
category: "Web Development"
tags: ["astro", "typescript"]
series:
  id: "getting-started"
  part: 1
encrypted: false       # Optional: password protection
password: ""          # Required if encrypted
---
```

### Series Definition

Location: `src/data/series.ts`

```typescript
export const series: Series[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Learn the basics',
    icon: 'material-symbols:play-circle',
    status: 'ongoing',
  },
];
```

## 🎯 Best Practices

### CSS Guidelines

1. **Use CSS custom properties** for colors:
   ```css
   color: var(--text-primary);
   background: oklch(var(--primary) / 0.1);
   ```

2. **Use proper spacing**:
   - Card padding: `1.25rem` (p-5)
   - Section gaps: `1.5rem` (gap-6)
   - Content max-width: `max-w-3xl`

3. **Use scoped styles** over utility classes for complex components

### Component Guidelines

1. **Document props** with JSDoc comments
2. **Use TypeScript interfaces** for type safety
3. **Follow single responsibility principle**
4. **Use i18n for all user-facing text**

### File Organization

1. **Group by feature**, not by type
2. **Keep components small** and focused
3. **Use barrel exports** for related modules
4. **Document complex logic** with comments

## 🚀 Deployment

The site is deployed to GitHub Pages via GitHub Actions.

1. Push to `main` branch
2. GitHub Actions runs `pnpm build`
3. Deploys `dist/` to GitHub Pages

**URL:** `https://wizreet.github.io/blog-site/`

## 📊 Page Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Recent posts, welcome message |
| `/posts/` | Posts Index | All posts grouped by year |
| `/posts/[slug]/` | Post Detail | Single blog post with TOC |
| `/posts/category/[category]/` | Category | Posts filtered by category |
| `/series/` | Series Index | All series with status |
| `/series/[id]/` | Series Detail | Posts in a series |
| `/about/` | About | Profile, skills, timeline |
