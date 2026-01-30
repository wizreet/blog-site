/**
 * URL Utilities
 *
 * @description Utility functions for URL handling, path manipulation,
 * and link generation. Handles base path for GitHub Pages deployment.
 *
 * @module utils/url-utils
 */

// ============================================================================
// Base URL Handling
// ============================================================================

/**
 * Join URL with base path
 * Handles the base path configuration for GitHub Pages deployment
 *
 * @param path - Path to join with base
 * @returns Full URL with base path
 *
 * @example
 * // With base: '/portfolio'
 * url('/posts/my-post/') // '/portfolio/posts/my-post/'
 *
 * // With base: '/'
 * url('/posts/my-post/') // '/posts/my-post/'
 */
export function url(path: string): string {
  // Guard against undefined/null path
  if (!path) {
    return import.meta.env.BASE_URL || '/';
  }

  const base = import.meta.env.BASE_URL || '/';

  // Remove leading slash from path if base has trailing slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  // Handle empty path
  if (!cleanPath) {
    return cleanBase;
  }

  return `${cleanBase}${cleanPath}`;
}

/**
 * Alias for url() function - for backward compatibility
 * @param path - Path to join with base
 * @returns Full URL with base path
 */
export const getUrl = url;

/**
 * Get absolute URL (with site domain)
 *
 * @param path - Path to convert to absolute URL
 * @returns Absolute URL
 */
export function absoluteUrl(path: string): string {
  const site = import.meta.env.SITE || 'https://example.com';
  const relativePath = url(path);

  // Remove leading slash from relative path
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  const cleanSite = site.endsWith('/') ? site.slice(0, -1) : site;

  return `${cleanSite}/${cleanPath}`;
}

// ============================================================================
// Post URL Helpers
// ============================================================================

/**
 * Get URL for a post by slug
 *
 * @param slug - Post slug
 * @returns Post URL
 */
export function getPostUrl(slug: string): string {
  return url(`posts/${slug}/`);
}

/**
 * Get URL for a category
 *
 * @param category - Category name
 * @returns Category URL
 */
export function getCategoryUrl(category: string): string {
  return url(`categories/${encodeURIComponent(category.toLowerCase())}/`);
}

/**
 * Get URL for a tag
 *
 * @param tag - Tag name
 * @returns Tag URL
 */
export function getTagUrl(tag: string): string {
  return url(`tags/${encodeURIComponent(tag.toLowerCase())}/`);
}

/**
 * Get URL for a series
 *
 * @param seriesId - Series ID
 * @returns Series URL
 */
export function getSeriesUrl(seriesId: string): string {
  return url(`series/${seriesId}/`);
}

/**
 * Get URL for a guitar tab
 *
 * @param slug - Tab slug
 * @returns Tab URL
 */
export function getTabUrl(slug: string): string {
  return url(`tabs/${slug}/`);
}

/**
 * Get URL for a music video (hidden)
 *
 * @param slug - Music video slug
 * @returns Music video URL
 */
export function getMusicUrl(slug: string): string {
  return url(`music/${slug}/`);
}

// ============================================================================
// Pagination Helpers
// ============================================================================

/**
 * Get paginated URL
 *
 * @param basePath - Base path for pagination
 * @param page - Page number
 * @returns Paginated URL
 */
export function getPaginationUrl(basePath: string, page: number): string {
  if (page === 1) {
    return url(basePath);
  }
  return url(`${basePath}page/${page}/`);
}

// ============================================================================
// Path Utilities
// ============================================================================

/**
 * Check if two paths are equal (handles trailing slashes)
 *
 * @param pathA - First path
 * @param pathB - Second path
 * @returns True if paths are equal
 */
export function pathsEqual(pathA: string, pathB: string): boolean {
  const normalizeA = pathA.replace(/\/+$/, '').toLowerCase();
  const normalizeB = pathB.replace(/\/+$/, '').toLowerCase();
  return normalizeA === normalizeB;
}

/**
 * Check if current path matches a pattern
 *
 * @param currentPath - Current page path
 * @param pattern - Pattern to match (can include wildcards)
 * @returns True if path matches pattern
 */
export function pathMatches(currentPath: string, pattern: string): boolean {
  const normalized = currentPath.replace(/\/+$/, '').toLowerCase();
  const normalizedPattern = pattern.replace(/\/+$/, '').toLowerCase();

  // Exact match
  if (normalized === normalizedPattern) {
    return true;
  }

  // Wildcard match (pattern ends with /*)
  if (normalizedPattern.endsWith('/*')) {
    const prefix = normalizedPattern.slice(0, -2);
    return normalized.startsWith(prefix);
  }

  // Check if current path starts with pattern (for active state)
  return normalized.startsWith(normalizedPattern + '/');
}

/**
 * Get directory from entry ID (content collection)
 *
 * @param id - Entry ID (e.g., 'devops/docker/basics.md')
 * @returns Directory path (e.g., 'devops/docker')
 */
export function getDir(id: string): string {
  const parts = id.split('/');
  if (parts.length > 1) {
    return parts.slice(0, -1).join('/');
  }
  return '';
}

/**
 * Get filename from path without extension
 *
 * @param path - File path
 * @returns Filename without extension
 */
export function getFilename(path: string): string {
  const parts = path.split('/');
  const filename = parts[parts.length - 1] ?? '';
  return filename.replace(/\.[^.]+$/, '');
}

// ============================================================================
// External Link Helpers
// ============================================================================

/**
 * Check if URL is external
 *
 * @param url - URL to check
 * @returns True if URL is external
 */
export function isExternalUrl(href: string): boolean {
  return /^(https?:)?\/\//.test(href);
}

/**
 * Get attributes for external links
 *
 * @returns Object with rel and target attributes
 */
export function getExternalLinkAttrs(): {
  target: string;
  rel: string;
} {
  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
}

// ============================================================================
// YouTube Helpers
// ============================================================================

/**
 * Get YouTube thumbnail URL
 *
 * @param videoId - YouTube video ID
 * @param quality - Thumbnail quality
 * @returns Thumbnail URL
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault' = 'mqdefault'
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Get YouTube embed URL
 *
 * @param videoId - YouTube video ID
 * @returns Embed URL (privacy-enhanced)
 */
export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

/**
 * Get YouTube watch URL
 *
 * @param videoId - YouTube video ID
 * @returns Watch URL
 */
export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
