/**
 * i18n Module Index
 *
 * @description Re-exports i18n utilities for convenient importing.
 */

export { default as I18nKey } from './i18nKey';
export {
  i18n,
  i18nWithVars,
  getAvailableLanguages,
  isLanguageSupported,
  type Translation,
} from './translation';
