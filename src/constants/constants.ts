/**
 * Site Constants
 *
 * @description Global constants used throughout the site.
 *
 * @module constants/constants
 */

// ============================================================================
// Pagination
// ============================================================================

/** Number of posts per page */
export const PAGE_SIZE = 10;

/** Number of posts to show on homepage */
export const HOME_PAGE_SIZE = 5;

// ============================================================================
// Layout
// ============================================================================

/** Maximum page width in rem */
export const PAGE_WIDTH = '75rem';

/** Content width (main area without sidebar) */
export const CONTENT_WIDTH = '52rem';

/** Sidebar width */
export const SIDEBAR_WIDTH = '20rem';

/** Navbar height */
export const NAVBAR_HEIGHT = '4rem';

// ============================================================================
// Design
// ============================================================================

/** Border radius sizes */
export const RADIUS = {
  small: '0.5rem',
  medium: '0.75rem',
  large: '1rem',
} as const;

/** Default transition duration */
export const TRANSITION_DURATION = '200ms';

// ============================================================================
// Content
// ============================================================================

/** Minimum headings required to show TOC */
export const MIN_TOC_HEADINGS = 3;

/** Maximum tags to show on post cards */
export const MAX_CARD_TAGS = 3;

/** Excerpt length in characters */
export const EXCERPT_LENGTH = 150;

// ============================================================================
// Difficulty Colors (for Guitar Tabs)
// ============================================================================

export const DIFFICULTY_COLORS = {
  beginner: {
    bg: 'bg-green-500',
    text: 'text-green-500',
    border: 'border-green-500',
  },
  intermediate: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-500',
    border: 'border-yellow-500',
  },
  advanced: {
    bg: 'bg-orange-500',
    text: 'text-orange-500',
    border: 'border-orange-500',
  },
  expert: {
    bg: 'bg-red-500',
    text: 'text-red-500',
    border: 'border-red-500',
  },
} as const;

// ============================================================================
// Series Status Colors
// ============================================================================

export const SERIES_STATUS_COLORS = {
  ongoing: {
    bg: 'bg-green-500',
    text: 'text-green-500',
  },
  completed: {
    bg: 'bg-blue-500',
    text: 'text-blue-500',
  },
  paused: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-500',
  },
} as const;

// ============================================================================
// Project Status Colors
// ============================================================================

export const PROJECT_STATUS_COLORS = {
  completed: {
    bg: 'bg-green-500',
    text: 'text-green-500',
  },
  'in-progress': {
    bg: 'bg-blue-500',
    text: 'text-blue-500',
  },
  planned: {
    bg: 'bg-gray-500',
    text: 'text-gray-500',
  },
  archived: {
    bg: 'bg-red-500',
    text: 'text-red-500',
  },
} as const;

// ============================================================================
// Skill Level Colors
// ============================================================================

export const SKILL_LEVEL_COLORS = {
  beginner: 'text-green-500',
  intermediate: 'text-yellow-500',
  advanced: 'text-orange-500',
  expert: 'text-red-500',
} as const;

// ============================================================================
// Month Names
// ============================================================================

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const MONTH_NAMES_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;
