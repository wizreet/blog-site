# Portfolio Site Documentation

This documentation helps you understand and maintain the portfolio site codebase.

## 📚 Table of Contents

- [Architecture Overview](./ARCHITECTURE.md)
- [Writing Posts](./WRITING_POSTS.md)
- [Configuration Guide](./CONFIGURATION.md)
- [Deployment](./DEPLOYMENT.md)
- [Styling Guide](./STYLING.md)

## 🏗️ Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/) - Static Site Generator
- **UI**: [React](https://react.dev/) + [Svelte](https://svelte.dev/) Components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Search**: [Pagefind](https://pagefind.app/) - Static search
- **Icons**: [Iconify](https://iconify.design/) via `@iconify/react`
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Site images (avatar.png, image.png)
│   └── favicon/           # Favicon files
├── src/
│   ├── components/        # Reusable components
│   │   ├── PostCard.astro    # Blog post card
│   │   ├── PostPage.astro    # Full post page
│   │   ├── Navbar.astro      # Navigation bar
│   │   ├── Footer.astro      # Site footer
│   │   ├── Search.svelte     # Search component
│   │   ├── Encryptor.astro   # Content encryption
│   │   └── PasswordProtection.astro  # Password UI
│   ├── config.ts          # Main site configuration
│   ├── content/
│   │   ├── config.ts      # Content collections schema
│   │   └── posts/         # Blog posts (Markdown/MDX)
│   ├── i18n/              # Internationalization
│   │   ├── i18nKey.ts     # Translation keys
│   │   ├── translation.ts # i18n utility functions
│   │   └── languages/     # Language files (en.ts, etc.)
│   ├── layouts/           # Page layouts
│   │   ├── Layout.astro       # Base layout
│   │   └── MainGridLayout.astro  # Main grid layout
│   ├── pages/             # Route pages
│   │   ├── about.astro    # About page
│   │   ├── posts/         # Post-related pages
│   │   └── series/        # Series pages
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── docs/                  # This documentation folder
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind configuration
└── package.json           # Dependencies
```

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🔧 Key Files

| File                       | Purpose                                     |
| -------------------------- | ------------------------------------------- |
| `src/config.ts`            | Site title, profile, navbar, theme settings |
| `src/content/config.ts`    | Blog post schema (frontmatter fields)       |
| `src/i18n/languages/en.ts` | English translations                        |
| `astro.config.mjs`         | Astro settings, base URL, integrations      |

## 🎨 Customization

### Change Site Info

Edit `src/config.ts`:

- `title` - Site title
- `profileConfig.name` - Your name
- `profileConfig.bio` - Short bio
- `profileConfig.links` - Social links

### Add Navigation Links

Edit `navBarConfig.links` in `src/config.ts`:

```typescript
navBarConfig: {
  links: [
    LinkPreset.Posts,
    LinkPreset.Series,
    LinkPreset.About,
  ],
}
```

### Change Theme Colors

Edit `themeConfig` in `src/config.ts`:

```typescript
themeConfig: {
  hue: 250,      // Color hue (0-360)
  isDark: false, // Default theme
}
```

## 📝 Content Management

### Creating Posts

Create `.md` or `.mdx` files in `src/content/posts/`:

```markdown
---
title: 'My Post Title'
published: 2024-01-15
description: 'A brief description'
tags: ['tag1', 'tag2']
category: 'Category'
image: '/images/image.png'
---

Post content here...
```

### Encrypted Posts

Add `encrypted: true` and `password: "your-password"` to frontmatter.

## 🌐 Internationalization

Add new translation keys:

1. Add key to `src/i18n/i18nKey.ts`
2. Add translation to `src/i18n/languages/en.ts`

Use in components:

```typescript
import { i18n } from '../i18n/translation';
import Key from '../i18n/i18nKey';

const text = i18n(Key.yourKey);
```

## 📖 Further Reading

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Pagefind Documentation](https://pagefind.app/)
