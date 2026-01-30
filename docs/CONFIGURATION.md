# Configuration Guide

Complete guide to configuring your portfolio site.

## 📁 Main Configuration File

All primary settings are in `src/config.ts`.

## 🌐 Site Settings

```typescript
export const siteConfig: SiteConfig = {
  title: 'Reetwiz Amatya',      // Site title
  subtitle: 'Portfolio',         // Subtitle
  lang: 'en',                    // Language code
  themeColor: {
    hue: 250,                    // Theme color hue (0-360)
    fixed: false,                // Lock theme color
  },
  banner: {
    enable: true,
    src: '/images/banner.png',   // Banner image
    position: 'center',          // Image position
    credit: {
      enable: false,
      text: '',
      url: '',
    },
  },
}
```

### Theme Color Reference

| Hue | Color |
|-----|-------|
| 0 | Red |
| 30 | Orange |
| 60 | Yellow |
| 120 | Green |
| 180 | Cyan |
| 210 | Blue |
| 250 | Purple |
| 270 | Violet |
| 300 | Magenta |
| 330 | Pink |

## 👤 Profile Configuration

```typescript
export const profileConfig: ProfileConfig = {
  avatar: '/images/avatar.png',  // Avatar image
  name: 'Reetwiz Amatya',        // Display name
  bio: 'Your bio here...',       // Short biography
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/wizreet',
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://linkedin.com/in/reetwiz',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:x-twitter',
      url: 'https://twitter.com/reetwiz',
    },
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',
      url: 'mailto:reetwiz@gmail.com',
    },
  ],
}
```

### Available Icons

Icons use Iconify format: `icon-set:icon-name`

**Popular icon sets:**
- `fa6-brands:` - Font Awesome 6 Brands (github, twitter, linkedin)
- `fa6-solid:` - Font Awesome 6 Solid (envelope, link)
- `material-symbols:` - Material Symbols
- `mdi:` - Material Design Icons

Browse icons: [https://icon-sets.iconify.design/](https://icon-sets.iconify.design/)

## 🧭 Navigation Configuration

```typescript
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Posts,   // /posts
    LinkPreset.Series,  // /series
    LinkPreset.About,   // /about
  ],
}
```

### Link Presets

| Preset | URL | Icon |
|--------|-----|------|
| `LinkPreset.Home` | `/` | Home |
| `LinkPreset.Posts` | `/posts` | Posts |
| `LinkPreset.Series` | `/series` | Series |
| `LinkPreset.About` | `/about` | About |
| `LinkPreset.Archive` | `/archive` | Archive |

### Custom Links

```typescript
import { LinkPreset, type NavBarLink } from './types/config'

const customLink: NavBarLink = {
  name: 'Custom',
  url: '/custom',
  external: false,  // true for external links
}

navBarConfig: {
  links: [
    LinkPreset.Posts,
    customLink,
    LinkPreset.About,
  ],
}
```

## 🎨 Theme Configuration

```typescript
export const themeConfig: ThemeConfig = {
  hue: 250,            // Base color hue
  isDark: false,       // Default to dark mode
}
```

## 🔒 License Configuration

```typescript
export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
```

## 📝 Content Configuration

Located in `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    draft: z.boolean().optional(),
    encrypted: z.boolean().optional(),
    password: z.string().optional(),
  }),
})

export const collections = { posts }
```

## ⚙️ Astro Configuration

Located in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://wizreet.github.io',
  base: '/blog-site',
  integrations: [
    react(),
    tailwind(),
    svelte(),
    // ... other integrations
  ],
})
```

### Important Settings

| Setting | Description |
|---------|-------------|
| `site` | Your domain (for SEO and sitemap) |
| `base` | Base path (for GitHub Pages subdirectory) |
| `output` | `static` for static sites |

## 🌍 Internationalization

### Adding Translation Keys

1. **Add key to `src/i18n/i18nKey.ts`:**
```typescript
export enum Key {
  // ... existing keys
  myNewKey = 'myNewKey',
}
```

2. **Add translation to `src/i18n/languages/en.ts`:**
```typescript
export const en: Translation = {
  // ... existing translations
  [Key.myNewKey]: 'My translated text',
}
```

### Using Translations

```typescript
import { i18n } from '../i18n/translation'
import Key from '../i18n/i18nKey'

// In component
const text = i18n(Key.myNewKey)
```

```astro
---
import { i18n } from '../i18n/translation'
import Key from '../i18n/i18nKey'
---

<p>{i18n(Key.myNewKey)}</p>
```

## 📊 Environment Variables

Create `.env` file (not committed):

```env
# Optional: Analytics
PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Comments
PUBLIC_GISCUS_REPO=username/repo
PUBLIC_GISCUS_REPO_ID=xxx
```

## 🔧 Tailwind Configuration

Located in `tailwind.config.cjs`:

```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## ✅ Configuration Checklist

- [ ] Update `siteConfig.title` with your name
- [ ] Update `profileConfig` with your info
- [ ] Add your `avatar.png` to `public/images/`
- [ ] Configure `navBarConfig.links`
- [ ] Set `themeConfig.hue` to preferred color
- [ ] Update social links
- [ ] Configure `astro.config.mjs` site/base URLs
- [ ] Add translations for any new features
