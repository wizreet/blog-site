/**
 * English Translations
 *
 * @description English (en) language translations for the site.
 *
 * @module i18n/languages/en
 */

import type { Translation } from '../translation';
import I18nKey from '../i18nKey';

export const en: Translation = {
  // Navigation
  [I18nKey.home]: 'Home',
  [I18nKey.about]: 'About',
  [I18nKey.archive]: 'Archive',
  [I18nKey.tags]: 'Tags',
  [I18nKey.categories]: 'Categories',
  [I18nKey.series]: 'Series',
  [I18nKey.tabs]: 'Guitar Tabs',
  [I18nKey.projects]: 'Projects',
  [I18nKey.skills]: 'Skills',
  [I18nKey.timeline]: 'Timeline',
  [I18nKey.friends]: 'Friends',
  [I18nKey.music]: 'Music',

  // Post/Content
  [I18nKey.recentPosts]: 'Recent Posts',
  [I18nKey.allPosts]: 'All Posts',
  [I18nKey.readMore]: 'Read More',
  [I18nKey.publishedOn]: 'Published',
  [I18nKey.updatedOn]: 'Updated',
  [I18nKey.wordCount]: 'word',
  [I18nKey.wordsCount]: 'words',
  [I18nKey.minuteCount]: 'min',
  [I18nKey.minutesCount]: 'min',
  [I18nKey.postCount]: 'post',
  [I18nKey.postsCount]: 'posts',
  [I18nKey.prevPost]: 'Previous',
  [I18nKey.nextPost]: 'Next',

  // Series
  [I18nKey.seriesProgress]: 'Part {current} of {total}',
  [I18nKey.partOf]: 'Part of',
  [I18nKey.ongoing]: 'Ongoing',
  [I18nKey.completed]: 'Completed',
  [I18nKey.paused]: 'Paused',

  // Tags/Categories
  [I18nKey.noTags]: 'No tags',
  [I18nKey.noCategories]: 'No categories',
  [I18nKey.allTags]: 'All Tags',
  [I18nKey.allCategories]: 'All Categories',

  // Search
  [I18nKey.search]: 'Search',
  [I18nKey.searchPlaceholder]: 'Search posts...',
  [I18nKey.searchNoResults]: 'No results found',
  [I18nKey.searchResultsFor]: 'Results for',

  // Theme
  [I18nKey.lightMode]: 'Light',
  [I18nKey.darkMode]: 'Dark',
  [I18nKey.autoMode]: 'Auto',

  // Archive
  [I18nKey.archiveTitle]: 'Archive',
  [I18nKey.archiveEmpty]: 'No posts yet',

  // Footer
  [I18nKey.poweredBy]: 'Powered by',
  [I18nKey.copyright]: '© {year} {name}. All rights reserved.',

  // 404
  [I18nKey.notFound]: 'Page Not Found',
  [I18nKey.notFoundMessage]: "The page you're looking for doesn't exist.",
  [I18nKey.backHome]: 'Back to Home',

  // Guitar Tabs
  [I18nKey.tabDifficulty]: 'Difficulty',
  [I18nKey.tabTuning]: 'Tuning',
  [I18nKey.tabCapo]: 'Capo',
  [I18nKey.tabDownloadPdf]: 'Download PDF',
  [I18nKey.tabDownloadGp]: 'Download Guitar Pro',
  [I18nKey.tabVideoTutorial]: 'Video Tutorial',

  // Music
  [I18nKey.musicCovers]: 'Covers',
  [I18nKey.musicOriginals]: 'Originals',
  [I18nKey.musicJams]: 'Jam Sessions',
  [I18nKey.musicGearUsed]: 'Gear Used',

  // Misc
  [I18nKey.tableOfContents]: 'On This Page',
  [I18nKey.backToTop]: 'Back to top',
  [I18nKey.viewAll]: 'View All',
  [I18nKey.loading]: 'Loading...',
  [I18nKey.error]: 'An error occurred',
};
