/**
 * Site Configuration
 *
 * @description Main configuration file for the portfolio site.
 * Customize this file to personalize your site.
 *
 * @module config
 */

import type {
  SiteConfig,
  NavBarConfig,
  ProfileConfig,
  LicenseConfig,
  NavLink,
} from '@/types/config';
import { LinkPreset } from '@/types/config';

// ============================================================================
// Site Configuration
// ============================================================================

/**
 * Main site settings
 */
export const siteConfig: SiteConfig = {
  // Site title - appears in navbar, browser tab, and SEO
  title: 'Reetwiz Amatya',

  // Subtitle/tagline - appears below title in profile
  subtitle: 'DevOps • Development • AI',

  // Default language ('en' for English, 'ne' for Nepali)
  lang: 'en',

  // Theme color settings
  themeColor: {
    // Base hue (0-360) - controls accent color
    // 250 = purple/violet, 220 = blue, 150 = green, 30 = orange
    hue: 250,
    // If true, visitors cannot customize the hue
    fixed: false,
  },

  // Banner configuration (DISABLED for text-first design)
  banner: {
    enable: false,
    src: '',
    position: 'center',
    credit: {
      enable: false,
      text: '',
      url: '',
    },
  },

  // Table of contents settings for blog posts
  toc: {
    enable: true,
    depth: 3, // Include h2, h3 headings
  },
};

// ============================================================================
// Navigation Configuration
// ============================================================================

/**
 * Navbar links configuration
 *
 * Supports:
 * - LinkPreset values (Home, Archive, About)
 * - Custom links with name, url, icon
 * - Dropdown menus with children array
 *
 * Icons use Iconify format: 'icon-set:icon-name'
 * Browse icons at: https://icon-sets.iconify.design/
 */
export const navBarConfig: NavBarConfig = {
  links: [
    // Home page
    LinkPreset.Home,

    // Posts page - all posts
    {
      name: 'Posts',
      url: '/posts/',
      icon: 'material-symbols:article',
    },

    // Series page - organized post collections
    {
      name: 'Series',
      url: '/series/',
      icon: 'material-symbols:folder',
    },

    // About page
    LinkPreset.About,

    // External links dropdown
    {
      name: 'Links',
      url: '#',
      icon: 'material-symbols:link',
      children: [
        {
          name: 'GitHub',
          url: 'https://github.com/yourusername',
          external: true,
          icon: 'fa6-brands:github',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/yourusername',
          external: true,
          icon: 'fa6-brands:linkedin',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/yourusername',
          external: true,
          icon: 'fa6-brands:x-twitter',
        },
      ],
    },
  ],
};

// ============================================================================
// Profile Configuration
// ============================================================================

/**
 * Profile widget settings (sidebar)
 */
export const profileConfig: ProfileConfig = {
  // Avatar image path (relative to src/assets/ or absolute URL)
  avatar: '/images/avatar.png',

  // Display name
  name: 'Reetwiz Amatya',

  // Short bio (1-2 sentences)
  bio: 'DevOps engineer & software developer. Passionate about cloud, containers, AI, and building things that matter.',

  // Social/contact links (shown as icons below bio)
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
      icon: 'material-symbols:mail-outline',
      url: 'mailto:reetwiz@gmail.com',
    },
  ],
};

// ============================================================================
// License Configuration
// ============================================================================

/**
 * Default license for blog posts
 */
export const licenseConfig: LicenseConfig = {
  // Enable license display on posts
  enable: true,

  // License name
  name: 'CC BY-NC-SA 4.0',

  // License URL
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
};

// ============================================================================
// Additional Settings
// ============================================================================

/**
 * Comments configuration (Twikoo)
 * Set to empty string to disable comments
 */
export const commentsConfig = {
  // Twikoo environment ID (from Vercel/Netlify deployment)
  envId: '',
};

/**
 * Footer configuration
 */
export const footerConfig = {
  // Copyright year range (auto-updates end year)
  startYear: 2024,

  // Links shown in footer
  links: [
    { name: 'RSS', url: '/rss.xml' },
    { name: 'Sitemap', url: '/sitemap-index.xml' },
  ],

  // Powered by text (set to false to hide)
  poweredBy: true,
};

/**
 * SEO defaults
 */
export const seoConfig = {
  // Default description for pages without one
  defaultDescription: 'Personal portfolio and blog about DevOps, development, and AI.',

  // Default OG image (relative to public/ or absolute URL)
  defaultOgImage: '/images/og-default.png',

  // Twitter handle (without @)
  twitterHandle: 'yourusername',
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Resolve link preset to actual link object
 */
export function resolveNavLink(link: NavLink | LinkPreset): NavLink {
  if (typeof link === 'string') {
    switch (link) {
      case LinkPreset.Home:
        return {
          name: 'Home',
          url: '/',
          icon: 'material-symbols:home-outline',
        };
      case LinkPreset.Archive:
        return {
          name: 'Archive',
          url: '/archive/',
          icon: 'material-symbols:archive-outline',
        };
      case LinkPreset.About:
        return {
          name: 'About',
          url: '/about/',
          icon: 'material-symbols:person-outline',
        };
      default:
        return {
          name: link,
          url: '/',
        };
    }
  }
  return link;
}

/**
 * Get all resolved navigation links
 */
export function getNavLinks(): NavLink[] {
  return navBarConfig.links.map(resolveNavLink);
}
