/**
 * Nepali Translations
 *
 * @description Nepali (ne) language translations for the site.
 * नेपाली भाषामा अनुवाद
 *
 * @module i18n/languages/ne
 */

import type { Translation } from '../translation';
import I18nKey from '../i18nKey';

export const ne: Translation = {
  // Navigation
  [I18nKey.home]: 'गृहपृष्ठ',
  [I18nKey.about]: 'बारेमा',
  [I18nKey.archive]: 'अभिलेख',
  [I18nKey.tags]: 'ट्यागहरू',
  [I18nKey.categories]: 'वर्गहरू',
  [I18nKey.series]: 'श्रृंखला',
  [I18nKey.tabs]: 'गिटार ट्याबहरू',
  [I18nKey.projects]: 'परियोजनाहरू',
  [I18nKey.skills]: 'सीपहरू',
  [I18nKey.timeline]: 'समयरेखा',
  [I18nKey.friends]: 'साथीहरू',
  [I18nKey.music]: 'संगीत',

  // Post/Content
  [I18nKey.recentPosts]: 'हालका पोस्टहरू',
  [I18nKey.allPosts]: 'सबै पोस्टहरू',
  [I18nKey.readMore]: 'थप पढ्नुहोस्',
  [I18nKey.publishedOn]: 'प्रकाशित',
  [I18nKey.updatedOn]: 'अपडेट',
  [I18nKey.wordCount]: 'शब्द',
  [I18nKey.wordsCount]: 'शब्दहरू',
  [I18nKey.minuteCount]: 'मिनेट',
  [I18nKey.minutesCount]: 'मिनेटहरू',
  [I18nKey.postCount]: 'पोस्ट',
  [I18nKey.postsCount]: 'पोस्टहरू',
  [I18nKey.prevPost]: 'अघिल्लो',
  [I18nKey.nextPost]: 'अर्को',

  // Series
  [I18nKey.seriesProgress]: 'भाग {current} को {total}',
  [I18nKey.partOf]: 'को भाग',
  [I18nKey.ongoing]: 'जारी',
  [I18nKey.completed]: 'सम्पन्न',
  [I18nKey.paused]: 'रोकिएको',

  // Tags/Categories
  [I18nKey.noTags]: 'कुनै ट्याग छैन',
  [I18nKey.noCategories]: 'कुनै वर्ग छैन',
  [I18nKey.allTags]: 'सबै ट्यागहरू',
  [I18nKey.allCategories]: 'सबै वर्गहरू',

  // Search
  [I18nKey.search]: 'खोज्नुहोस्',
  [I18nKey.searchPlaceholder]: 'पोस्टहरू खोज्नुहोस्...',
  [I18nKey.searchNoResults]: 'कुनै परिणाम फेला परेन',
  [I18nKey.searchResultsFor]: 'को परिणामहरू',

  // Theme
  [I18nKey.lightMode]: 'उज्यालो',
  [I18nKey.darkMode]: 'अँध्यारो',
  [I18nKey.autoMode]: 'स्वचालित',

  // Archive
  [I18nKey.archiveTitle]: 'अभिलेख',
  [I18nKey.archiveEmpty]: 'अहिलेसम्म कुनै पोस्ट छैन',

  // Footer
  [I18nKey.poweredBy]: 'द्वारा संचालित',
  [I18nKey.copyright]: '© {year} {name}। सर्वाधिकार सुरक्षित।',

  // 404
  [I18nKey.notFound]: 'पृष्ठ फेला परेन',
  [I18nKey.notFoundMessage]: 'तपाईंले खोज्नुभएको पृष्ठ अवस्थित छैन।',
  [I18nKey.backHome]: 'गृहपृष्ठमा फर्कनुहोस्',

  // Guitar Tabs
  [I18nKey.tabDifficulty]: 'कठिनाई',
  [I18nKey.tabTuning]: 'ट्युनिङ',
  [I18nKey.tabCapo]: 'क्यापो',
  [I18nKey.tabDownloadPdf]: 'PDF डाउनलोड',
  [I18nKey.tabDownloadGp]: 'Guitar Pro डाउनलोड',
  [I18nKey.tabVideoTutorial]: 'भिडियो ट्युटोरियल',

  // Music
  [I18nKey.musicCovers]: 'कभरहरू',
  [I18nKey.musicOriginals]: 'मौलिक',
  [I18nKey.musicJams]: 'ज्याम सेसनहरू',
  [I18nKey.musicGearUsed]: 'प्रयोग गरिएको उपकरण',

  // Misc
  [I18nKey.tableOfContents]: 'यस पृष्ठमा',
  [I18nKey.backToTop]: 'माथि फर्कनुहोस्',
  [I18nKey.viewAll]: 'सबै हेर्नुहोस्',
  [I18nKey.loading]: 'लोड हुँदैछ...',
  [I18nKey.error]: 'त्रुटि भयो',
};
