/**
 * Search Component
 *
 * @description A search modal powered by Pagefind.
 * Opens with Ctrl/Cmd + K or by clicking the search button.
 *
 * @example
 * ```tsx
 * <Search client:load />
 * ```
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { Icon } from '@iconify/react';

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagefind, setPagefind] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Load Pagefind on first open
  const loadPagefind = useCallback(async () => {
    if (pagefind) return pagefind;

    // In development mode, Pagefind is not available
    if (import.meta.env.DEV) {
      console.warn('Search is only available in production. Run `pnpm build` first.');
      return null;
    }

    try {
      // @ts-ignore - Pagefind is loaded from the built output
      const pf = await import(/* @vite-ignore */ '/pagefind/pagefind.js');
      await pf.init();
      setPagefind(pf);
      return pf;
    } catch (error) {
      console.warn('Pagefind not available. Run build first to enable search.');
      return null;
    }
  }, [pagefind]);

  // Perform search
  const performSearch = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);

      try {
        const pf = await loadPagefind();
        if (!pf) {
          setIsLoading(false);
          return;
        }

        const search = await pf.search(searchQuery);
        const resultData = await Promise.all(
          search.results.slice(0, 10).map(async (result: any) => {
            const data = await result.data();
            return {
              url: data.url,
              title: data.meta?.title || data.url,
              excerpt: data.excerpt || '',
            };
          })
        );

        setResults(resultData);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [loadPagefind]
  );

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  // Open modal
  const openModal = useCallback(async () => {
    setIsOpen(true);
    // Preload Pagefind
    await loadPagefind();
    // Focus input after animation
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [loadPagefind]);

  // Close modal
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          closeModal();
        } else {
          openModal();
        }
      }

      // Close with Escape
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openModal, closeModal]);

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Search Button */}
      <button
        onClick={openModal}
        className="flex h-10 items-center gap-2 rounded-lg px-3 transition-colors hover:bg-[var(--btn-hover-bg)]"
        aria-label="Search (Ctrl+K)"
        title="Search (Ctrl+K)"
      >
        <Icon icon="material-symbols:search" className="h-5 w-5 text-[var(--text-secondary)]" />
        <span className="hidden text-sm text-[var(--text-tertiary)] sm:inline">Search...</span>
        <kbd className="hidden rounded bg-[var(--btn-regular-bg)] px-1.5 py-0.5 text-xs text-[var(--text-tertiary)] sm:inline">
          ⌘K
        </kbd>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-[10vh]">
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="w-full max-w-xl animate-slide-up rounded-xl bg-[var(--card-bg)] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 border-b border-[var(--border-color)] p-4">
              <Icon
                icon="material-symbols:search"
                className="h-5 w-5 shrink-0 text-[var(--text-tertiary)]"
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, tabs, and more..."
                className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="shrink-0 rounded p-1 hover:bg-[var(--btn-hover-bg)]"
                  aria-label="Clear search"
                >
                  <Icon icon="material-symbols:close" className="h-4 w-4" />
                </button>
              )}
              <kbd className="shrink-0 rounded bg-[var(--btn-regular-bg)] px-1.5 py-0.5 text-xs text-[var(--text-tertiary)]">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Icon
                    icon="material-symbols:progress-activity"
                    className="h-6 w-6 animate-spin text-[var(--text-tertiary)]"
                  />
                </div>
              ) : results.length > 0 ? (
                <ul className="space-y-1">
                  {results.map((result, index) => (
                    <li key={result.url}>
                      <a
                        href={result.url}
                        onClick={closeModal}
                        className="block rounded-lg p-3 transition-colors hover:bg-[var(--btn-hover-bg)]"
                      >
                        <h3 className="font-medium text-[var(--text-primary)]">{result.title}</h3>
                        {result.excerpt && (
                          <p
                            className="mt-1 line-clamp-2 text-sm text-[var(--text-secondary)]"
                            dangerouslySetInnerHTML={{ __html: result.excerpt }}
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : query ? (
                <div className="py-8 text-center text-[var(--text-tertiary)]">
                  <Icon icon="material-symbols:search-off" className="mx-auto mb-2 h-8 w-8" />
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                <div className="py-8 text-center text-[var(--text-tertiary)]">
                  <p>Start typing to search...</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[var(--border-color)] px-4 py-2 text-xs text-[var(--text-tertiary)]">
              <span>Powered by Pagefind</span>
              <div className="flex items-center gap-2">
                <kbd className="rounded bg-[var(--btn-regular-bg)] px-1.5 py-0.5">↑↓</kbd>
                <span>Navigate</span>
                <kbd className="rounded bg-[var(--btn-regular-bg)] px-1.5 py-0.5">↵</kbd>
                <span>Select</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
