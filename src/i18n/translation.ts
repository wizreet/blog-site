/**
 * Translation System (Simplified)
 *
 * @description Simple translation utility - English only.
 * Kept for API compatibility but only uses English.
 *
 * @module i18n/translation
 */

import type I18nKey from './i18nKey';
import { en } from './languages/en';

/**
 * Translation type - maps i18n keys to translated strings
 */
export type Translation = {
  [K in I18nKey]: string;
};

/**
 * Get translation for a key (always returns English)
 *
 * @param key - Translation key from I18nKey enum
 * @returns Translated string in English
 *
 * @example
 * import I18nKey from '@/i18n/i18nKey';
 * const homeText = i18n(I18nKey.home); // 'Home'
 */
export function i18n(key: I18nKey): string {
  return en[key] ?? key;
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
  return [{ code: 'en', name: 'English' }];
}

/**
 * Check if a language is supported (always English)
 */
export function isLanguageSupported(lang: string): boolean {
  const normalizedLang = lang.toLowerCase().replace('-', '_');
  return normalizedLang.startsWith('en');
}
