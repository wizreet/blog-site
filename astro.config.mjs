import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import swup from '@swup/astro';
import icon from 'astro-icon';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

/**
 * Portfolio Site - Astro Configuration
 *
 * @description Main configuration for the portfolio site built with Astro + React.
 * Features text-first design, dark/light themes, and content collections.
 *
 * @see https://docs.astro.build/en/reference/configuration-reference/
 */
export default defineConfig({
  // Site URL for production - update with your actual domain
  // For GitHub Pages: https://username.github.io/portfolio
  // For custom domain: https://yourdomain.com
  site: 'https://wizreet.github.io',

  // Base path for GitHub Pages deployment (remove if using custom domain)
  // Example: '/portfolio' for username.github.io/portfolio
  base: '/blog-site',

  // Build output - static for GitHub Pages
  output: 'static',

  // Integrations
  integrations: [
    // React for interactive components
    react(),

    // Tailwind CSS with nesting support
    tailwind({
      nesting: true,
      applyBaseStyles: false, // We use our own base styles
    }),

    // Sitemap generation (excludes /music/ hidden routes)
    sitemap({
      filter: (page) => !page.includes('/music/'),
    }),

    // Page transitions with Swup (minimal, non-intrusive)
    swup({
      theme: false,
      containers: ['main', '#toc'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      progress: false, // No progress bar
      routes: false,
    }),

    // Expressive Code for syntax highlighting
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      themeCssSelector: (theme) => {
        return theme.name === 'github-light' ? ':root:not(.dark)' : '.dark';
      },
      styleOverrides: {
        borderRadius: '0.5rem',
        codeFontFamily: "'JetBrains Mono Variable', monospace",
        codeFontSize: '0.875rem',
      },
      plugins: [],
    }),

    // Icon support
    icon({
      include: {
        'material-symbols': ['*'],
        'fa6-brands': ['*'],
        'fa6-solid': ['*'],
        'fa6-regular': ['*'],
        'simple-icons': ['*'],
        'logos': ['*'],
      },
    }),
  ],

  // Markdown configuration
  markdown: {
    // Remark plugins (process markdown AST)
    remarkPlugins: [
      remarkMath, // LaTeX math support
      remarkDirective, // Directive syntax :::note
      remarkGithubAdmonitionsToDirectives, // GitHub-style admonitions
      remarkDirectiveRehype, // Convert directives to HTML
      remarkReadingTime, // Calculate reading time
    ],

    // Rehype plugins (process HTML AST)
    rehypePlugins: [
      rehypeSlug, // Add IDs to headings
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['heading-link'],
          },
        },
      ],
      rehypeKatex, // Render LaTeX math
    ],

    // Enable syntax highlighting through Expressive Code
    syntaxHighlight: false,
  },

  // Vite configuration
  vite: {
    // Build optimizations
    build: {
      rollupOptions: {
        // Mark pagefind as external - it's loaded at runtime after build
        external: ['/pagefind/pagefind.js'],
        output: {
          // Chunk splitting for better caching
          manualChunks: {
            react: ['react', 'react-dom'],
            icons: ['@iconify/react'],
          },
        },
      },
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', '@iconify/react', 'dayjs', 'clsx'],
      exclude: ['pagefind'],
    },

    // Resolve aliases
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@utils': '/src/utils',
        '@styles': '/src/styles',
        '@data': '/src/data',
        '@i18n': '/src/i18n',
        '@types': '/src/types',
        '@constants': '/src/constants',
      },
    },
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Development server
  server: {
    port: 4321,
    host: true,
  },

  // Prefetch configuration for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
