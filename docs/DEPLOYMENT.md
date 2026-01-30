# Deployment Guide

How to deploy your portfolio site to GitHub Pages and other platforms.

## 🚀 GitHub Pages Deployment

### Prerequisites

1. GitHub repository created
2. Repository settings allow GitHub Pages
3. `astro.config.mjs` configured correctly

### Configuration

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME', // e.g., '/blog-site'
  output: 'static',
});
```

**Current Configuration:**

- Site: `https://wizreet.github.io`
- Base: `/blog-site`

### GitHub Actions Workflow

The site uses GitHub Actions for automatic deployment. The workflow file is at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Manual Deployment

```bash
# Build the site
pnpm build

# The output is in ./dist folder
# Upload this to GitHub Pages or any static host
```

### Repository Settings

1. Go to Repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` branch to trigger deployment

## 🔄 Deployment Process

1. **Push to main** → Triggers GitHub Action
2. **Install dependencies** → `pnpm install`
3. **Build site** → `pnpm build`
4. **Deploy** → Upload `dist/` to GitHub Pages

## 🌐 Custom Domain

### Setup

1. Add `CNAME` file to `public/` folder:

```
yourdomain.com
```

2. Configure DNS:
   - A Record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME: `YOUR_USERNAME.github.io`

3. Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/', // Remove base for custom domain
});
```

## 🛠️ Troubleshooting

### Build Failures

**Check Node version:**

```bash
node --version  # Should be 18+
```

**Clear cache and reinstall:**

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### 404 Errors

1. Check `base` in `astro.config.mjs` matches repo name
2. Ensure all links use `getUrl()` helper for proper base path handling
3. Verify GitHub Pages source is set to GitHub Actions

### Assets Not Loading

1. Check image paths start with `/` (relative to base)
2. Ensure assets are in `public/` folder
3. Verify base URL is correct

### Styling Issues

1. Run production build locally: `pnpm preview`
2. Check for Tailwind purging issues
3. Ensure all component files are in `content` array of `tailwind.config.cjs`

## 📦 Alternative Platforms

### Vercel

1. Connect GitHub repository to Vercel
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-project.vercel.app',
  base: '/',
});
```

### Netlify

1. Connect GitHub repository to Netlify
2. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`

### Cloudflare Pages

1. Connect GitHub repository
2. Build settings:
   - Framework preset: Astro
   - Build command: `pnpm build`
   - Build output directory: `dist`

## 🔍 Monitoring

### Check Deployment Status

1. Go to repository **Actions** tab
2. Check latest workflow run
3. View logs for any errors

### Verify Live Site

After deployment:

1. Visit your site URL
2. Check console for errors (F12)
3. Test all navigation links
4. Verify images load correctly
5. Test search functionality

## 📝 Deployment Checklist

Before deploying:

- [ ] Test locally with `pnpm build && pnpm preview`
- [ ] Check for TypeScript errors: `pnpm check`
- [ ] Verify all images exist in `public/`
- [ ] Update `astro.config.mjs` with correct URLs
- [ ] Test on different devices/browsers
- [ ] Check search functionality works

After deploying:

- [ ] Visit live site
- [ ] Test all pages
- [ ] Check mobile responsiveness
- [ ] Verify search works
- [ ] Test dark/light mode toggle
