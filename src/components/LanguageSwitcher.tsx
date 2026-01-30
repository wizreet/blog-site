/**
 * Language Switcher Component
 *
 * @description Toggle between available languages (English/Nepali).
 * Persists language preference to localStorage.
 */

import { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'EN' },
  { code: 'ne', name: 'Nepali', nativeName: 'ने' },
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    setCurrentLang(savedLang);
    document.documentElement.lang = savedLang;
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem('preferred-language', langCode);
    document.documentElement.lang = langCode;
    setIsOpen(false);
    
    // Dispatch custom event for components that need to react to language changes
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: langCode } }));
    
    // Reload to apply translations (in a real app, you'd use context/state management)
    // For now, we'll just update the HTML lang attribute
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-plain flex items-center justify-center gap-1.5 h-10 px-2 rounded-lg text-sm font-medium"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-1 z-50 min-w-[120px] rounded-lg bg-[var(--card-bg)] p-1 shadow-lg border border-[var(--border-color)]"
            role="listbox"
            aria-label="Select language"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                  lang.code === currentLang
                    ? 'bg-[var(--btn-hover-bg)] text-[oklch(var(--primary))]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--text-primary)]'
                }`}
                role="option"
                aria-selected={lang.code === currentLang}
              >
                <span className="font-medium">{lang.nativeName}</span>
                <span className="text-xs opacity-60">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
