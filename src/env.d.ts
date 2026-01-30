/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * Environment variable type declarations
 */
interface ImportMetaEnv {
  readonly SITE: string;
  readonly BASE_URL: string;
  readonly MODE: 'development' | 'production';
  readonly DEV: boolean;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * Extend Window interface for custom globals
 */
declare global {
  interface Window {
    /** Theme initialization flag */
    __THEME_INITIALIZED__?: boolean;
    /** Current theme mode */
    __THEME_MODE__?: 'light' | 'dark' | 'auto';
    /** Pagefind search instance */
    pagefind?: {
      search: (query: string) => Promise<{
        results: Array<{
          id: string;
          data: () => Promise<{
            url: string;
            meta: { title: string };
            excerpt: string;
            content: string;
          }>;
        }>;
      }>;
      init: () => Promise<void>;
    };
  }
}

export {};
