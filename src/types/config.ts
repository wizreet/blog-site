/**
 * Type Definitions for Site Configuration
 *
 * @description TypeScript interfaces and types for the portfolio site configuration.
 * These types ensure type safety across all configuration files.
 *
 * @module types/config
 */

// ============================================================================
// Site Configuration Types
// ============================================================================

/**
 * Supported languages for the site
 */
export type SupportedLanguage = 'en' | 'ne';

/**
 * Theme color configuration
 */
export interface ThemeColor {
  /** Base hue value (0-360) for the primary color */
  hue: number;
  /** If true, users cannot change the hue */
  fixed: boolean;
}

/**
 * Banner configuration (disabled by default for text-first design)
 */
export interface BannerConfig {
  /** Enable/disable the banner */
  enable: boolean;
  /** Banner image source path */
  src: string;
  /** Image position (CSS background-position) */
  position: 'top' | 'center' | 'bottom';
  /** Credit information for the banner image */
  credit: {
    enable: boolean;
    text: string;
    url: string;
  };
}

/**
 * Table of contents configuration
 */
export interface TOCConfig {
  /** Enable/disable TOC on posts */
  enable: boolean;
  /** Maximum heading depth to include (1-4) */
  depth: 1 | 2 | 3 | 4;
}

/**
 * Main site configuration
 */
export interface SiteConfig {
  /** Site title displayed in navbar and SEO */
  title: string;
  /** Site subtitle/tagline */
  subtitle: string;
  /** Default language for the site */
  lang: SupportedLanguage;
  /** Theme color settings */
  themeColor: ThemeColor;
  /** Banner configuration */
  banner: BannerConfig;
  /** Table of contents settings */
  toc: TOCConfig;
}

// ============================================================================
// Navigation Types
// ============================================================================

/**
 * External link indicator
 */
export interface ExternalLink {
  /** Display name */
  name: string;
  /** URL (external) */
  url: string;
  /** Mark as external link */
  external: true;
  /** Iconify icon name */
  icon?: string;
}

/**
 * Internal link
 */
export interface InternalLink {
  /** Display name */
  name: string;
  /** URL path (internal) */
  url: string;
  /** Iconify icon name */
  icon?: string;
  /** External flag (false or omitted for internal) */
  external?: false;
}

/**
 * Navigation link with optional children (dropdown)
 */
export interface NavLink {
  /** Display name */
  name: string;
  /** URL path or '#' for dropdown parent */
  url: string;
  /** Iconify icon name */
  icon?: string;
  /** Mark as external link */
  external?: boolean;
  /** Child links for dropdown menu */
  children?: (InternalLink | ExternalLink)[];
}

/**
 * Preset navigation links
 */
export enum LinkPreset {
  Home = 'Home',
  Archive = 'Archive',
  About = 'About',
}

/**
 * Navigation bar configuration
 */
export interface NavBarConfig {
  /** Navigation links */
  links: (NavLink | LinkPreset)[];
}

// ============================================================================
// Profile Types
// ============================================================================

/**
 * Social/external link for profile
 */
export interface ProfileLink {
  /** Platform name */
  name: string;
  /** Iconify icon name */
  icon: string;
  /** URL to the profile */
  url: string;
}

/**
 * Profile widget configuration
 */
export interface ProfileConfig {
  /** Avatar image path (relative to src/assets or absolute) */
  avatar: string;
  /** Display name */
  name: string;
  /** Short bio/description */
  bio: string;
  /** Social/contact links */
  links: ProfileLink[];
}

// ============================================================================
// License Types
// ============================================================================

/**
 * License configuration for posts
 */
export interface LicenseConfig {
  /** Enable/disable license display */
  enable: boolean;
  /** License name (e.g., 'CC BY-NC-SA 4.0') */
  name: string;
  /** URL to license details */
  url: string;
}

// ============================================================================
// Content Types
// ============================================================================

/**
 * Series status
 */
export type SeriesStatus = 'ongoing' | 'completed' | 'paused';

/**
 * Post difficulty level (for tabs)
 */
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

/**
 * YouTube video type
 */
export type YouTubeVideoType = 'lesson' | 'cover' | 'backing-track' | 'original';

/**
 * Music video type
 */
export type MusicVideoType = 'cover' | 'original' | 'jam' | 'lesson';

/**
 * YouTube video reference
 */
export interface YouTubeVideo {
  /** YouTube video ID */
  id: string;
  /** Type of video content */
  type: YouTubeVideoType;
  /** Optional title override */
  title?: string;
}

/**
 * Series reference in post frontmatter
 */
export interface PostSeries {
  /** Series ID (must match series.ts) */
  id: string;
  /** Part number in series */
  part: number;
  /** Optional title override for series context */
  title?: string;
}

// ============================================================================
// Project Types
// ============================================================================

/**
 * Project data structure
 */
export interface Project {
  /** Project title */
  title: string;
  /** Short description */
  description?: string;
  /** Cover image path */
  image?: string;
  /** Technologies used */
  tech?: string[];
  /** Project links */
  links?: {
    demo?: string;
    github?: string;
    docs?: string;
  };
  /** Featured on homepage */
  featured?: boolean;
}

// ============================================================================
// Skill Types
// ============================================================================

/**
 * Skill category
 */
export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'tools'
  | 'languages'
  | 'other';

/**
 * Skill proficiency level
 */
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

/**
 * Skill data structure (simplified)
 */
export interface Skill {
  /** Skill name */
  name: string;
  /** Iconify icon name */
  icon?: string;
  /** Skill category */
  category: SkillCategory;
  /** Proficiency level */
  level?: SkillLevel;
}

// ============================================================================
// Timeline Types
// ============================================================================

/**
 * Timeline item type
 */
export type TimelineType = 'education' | 'work' | 'project' | 'achievement' | 'certification';

/**
 * Timeline item data structure (simplified)
 */
export interface TimelineItem {
  /** Item title */
  title: string;
  /** Description */
  description?: string;
  /** Item type */
  type: TimelineType;
  /** Organization/company name */
  organization?: string;
  /** Start date */
  startDate: Date;
  /** End date (optional, omit for current) */
  endDate?: Date;
  /** URL link */
  url?: string;
}

// ============================================================================
// Friends/Links Types
// ============================================================================

/**
 * Friend/link data structure
 */
export interface Friend {
  /** Display name */
  name: string;
  /** Short description/tagline */
  description: string;
  /** Website URL */
  url: string;
  /** Avatar image URL */
  avatar?: string;
  /** RSS feed URL (for aggregation) */
  rss?: string;
}

// ============================================================================
// Series Types
// ============================================================================

/**
 * Series data structure (simplified)
 */
export interface Series {
  /** Unique identifier (URL slug) */
  id: string;
  /** Series title */
  title: string;
  /** Series description */
  description?: string;
  /** Cover image path */
  image?: string;
  /** Series status */
  status: SeriesStatus;
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Pagination info
 */
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

/**
 * Category with count
 */
export interface CategoryWithCount {
  name: string;
  count: number;
  url: string;
}

/**
 * Tag with count
 */
export interface TagWithCount {
  name: string;
  count: number;
  url: string;
}

/**
 * Reading time info
 */
export interface ReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Common card props
 */
export interface CardProps {
  class?: string;
  style?: string;
}

/**
 * Post card props
 */
export interface PostCardProps extends CardProps {
  title: string;
  url: string;
  published: Date;
  updated?: Date;
  tags: string[];
  category: string | null;
  image?: string;
  description?: string;
  readingTime?: ReadingTime;
}

/**
 * Heading for TOC
 */
export interface TOCHeading {
  depth: number;
  slug: string;
  text: string;
}

/**
 * TOC tree item
 */
export interface TOCTreeItem extends TOCHeading {
  children: TOCTreeItem[];
}
