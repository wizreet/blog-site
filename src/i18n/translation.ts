/**
 * Translation System
 *
 * @description Translation utility for internationalization.
 * Supports English (en) and Nepali (ne).
 *
 * @module i18n/translation
 */

import { siteConfig } from '@/config';
import type I18nKey from './i18nKey';
import { en } from './languages/en';
import { ne } from './languages/ne';

/**
 * Translation type - maps i18n keys to translated strings
 */
export type Translation = {
  [K in I18nKey]: string;
};

/**
 * Language to translation map
 */
const translationMap: Record<string, Translation> = {
  en,
  en_us: en,
  en_gb: en,
  ne,
  ne_np: ne,
};

/**
 * Get translation for a key
 *
 * @param key - Translation key from I18nKey enum
 * @returns Translated string
 *
 * @example
 * import I18nKey from '@/i18n/i18nKey';
 * const homeText = i18n(I18nKey.home); // 'Home' or 'गृहपृष्ठ'
 */
export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en';
  const normalizedLang = lang.toLowerCase().replace('-', '_');

  // Get translation for current language, fallback to English
  const translation = translationMap[normalizedLang] ?? translationMap.en ?? en;
  return translation[key] ?? en[key] ?? key;
}

/**
 * Get translation with variable substitution
 *
 * @param key - Translation key
 * @param vars - Variables to substitute (e.g., { name: 'John', year: 2025 })
 * @returns Translated string with variables replaced
 *
 * @example
 * i18nWithVars(I18nKey.copyright, { year: 2025, name: 'Your Name' })
 * // '© 2025 Your Name. All rights reserved.'
 */
export function i18nWithVars(key: I18nKey, vars: Record<string, string | number>): string {
  let text = i18n(key);

  Object.entries(vars).forEach(([varName, value]) => {
    text = text.replace(new RegExp(`\\{${varName}\\}`, 'g'), String(value));
  });

  return text;
}

/**
 * Get all available languages
 */
export function getAvailableLanguages(): Array<{ code: string; name: string }> {
  return [
    { code: 'en', name: 'English' },
    { code: 'ne', name: 'नेपाली' },
  ];
}

/**
 * Check if a language is supported
 */
export function isLanguageSupported(lang: string): boolean {
  const normalizedLang = lang.toLowerCase().replace('-', '_');
  return normalizedLang in translationMap;
}
