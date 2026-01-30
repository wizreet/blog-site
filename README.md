# Portfolio

A modern, fast portfolio and blog built with Astro, React, and Tailwind CSS.

## Features

- 📝 **Blog** with series support for multi-part articles
- 🎸 **Guitar Tabs** section for musicians
- 🔍 **Full-text search** powered by Pagefind
- 🌙 **Dark/Light/Auto theme** with smooth transitions
- 🌐 **i18n support** for English and Nepali
- 📱 **Fully responsive** design
- ♿ **Accessible** following WCAG guidelines
- ⚡ **Lightning fast** with zero JS by default
- 📊 **RSS feed** for subscribers

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [React](https://react.dev) - Interactive components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://typescriptlang.org) - Type safety
- [Pagefind](https://pagefind.app) - Search

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

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

### Creating Content

```bash
# Create a new blog post
pnpm new-post "My Post Title"

# Create a new guitar tab
pnpm new-tab "Song Title" "Artist Name"
```

## Project Structure

```
src/
├── components/     # UI components (Astro & React)
├── content/        # Content collections
│   ├── posts/      # Blog posts
│   ├── tabs/       # Guitar tabs
│   ├── music/      # Hidden music videos
│   └── spec/       # Static pages (about, etc.)
├── data/           # Static data files
├── i18n/           # Internationalization
├── layouts/        # Page layouts
├── pages/          # Routes
├── styles/         # CSS files
├── types/          # TypeScript types
└── utils/          # Utility functions
```

## Configuration

Edit `src/config.ts` to customize:

- Site title, description, author
- Navigation links
- Social media links
- Theme colors (hue-based customization)
- Posts per page

## Deployment

This site is configured for **GitHub Pages** deployment.

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy

Or deploy manually:

```bash
pnpm build
# Upload the dist/ folder to your host
```

## License

MIT License - feel free to use this as a template for your own portfolio!
