/**
 * Utilities Index
 *
 * @description Re-exports all utility functions for convenient importing.
 *
 * @example
 * import { cn, formatDate, url, getSortedPosts } from '@/utils';
 */

// Class name utilities
export { cn, conditionalClass } from './cn';

// Date utilities
export {
  formatDate,
  formatDateTime,
  formatDateISO,
  formatDateRSS,
  getRelativeTime,
  getSmartDate,
  isToday,
  isPast,
  isFuture,
  isWithinDays,
  getYear,
  getMonth,
  getMonthName,
  getDay,
  formatDateRange,
  calculateDuration,
  getCurrentYear,
  getCurrentDate,
} from './date-utils';

// URL utilities
export {
  url,
  absoluteUrl,
  getPostUrl,
  getCategoryUrl,
  getTagUrl,
  getSeriesUrl,
  getTabUrl,
  getMusicUrl,
  getPaginationUrl,
  pathsEqual,
  pathMatches,
  getDir,
  getFilename,
  isExternalUrl,
  getExternalLinkAttrs,
  getYouTubeThumbnail,
  getYouTubeEmbedUrl,
  getYouTubeWatchUrl,
  getUrl,
} from './url-utils';

// Content utilities
export {
  getSortedPosts,
  getPostsForPage,
  getPostBySlug,
  getCategoryList,
  getCategories,
  getPostsByCategory,
  getTagList,
  getTags,
  getPostsByTag,
  getPostsBySeries,
  getSeriesList,
  getSeriesNavigation,
  getFeaturedSeries,
  getSortedTabs,
  getTabsByArtist,
  getSortedMusic,
  getMusicByType,
  getPostsGroupedByDate,
  getSiteStats,
  type PostEntry,
  type TabEntry,
  type MusicEntry,
  type SeriesWithCount,
  type SeriesNavigation,
} from './content-utils';
