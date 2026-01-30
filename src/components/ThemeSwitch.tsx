/**
 * Theme Switch Component
 *
 * @description A toggle button for switching between light, dark, and auto themes.
 * Uses localStorage to persist user preference.
 *
 * @example
 * ```tsx
 * <ThemeSwitch client:load />
 * ```
 */

import { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';

type Theme = 'light' | 'dark' | 'auto';

/**
 * Get the effective theme based on stored preference and system settings
 */
function getEffectiveTheme(stored: Theme | null): 'light' | 'dark' {
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  // Auto mode: check system preference
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'light';
}

/**
 * Apply theme to document
 */
function applyTheme(theme: 'light' | 'dark') {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}

export default function ThemeSwitch() {
  const [storedTheme, setStoredTheme] = useState<Theme>('auto');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const theme = stored || 'auto';
    setStoredTheme(theme);
    setEffectiveTheme(getEffectiveTheme(theme));
    setMounted(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (storedTheme !== 'auto') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setEffectiveTheme(newTheme);
      applyTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [storedTheme]);

  /**
   * Cycle through themes: auto -> light -> dark -> auto
   */
  const cycleTheme = useCallback(() => {
    let newTheme: Theme;

    switch (storedTheme) {
      case 'auto':
        newTheme = 'light';
        break;
      case 'light':
        newTheme = 'dark';
        break;
      case 'dark':
        newTheme = 'auto';
        break;
      default:
        newTheme = 'auto';
    }

    setStoredTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    const effective = getEffectiveTheme(newTheme);
    setEffectiveTheme(effective);
    applyTheme(effective);
  }, [storedTheme]);

  // Determine which icon to show
  const getIcon = () => {
    if (storedTheme === 'auto') {
      return 'material-symbols:brightness-auto-outline';
    }
    return effectiveTheme === 'dark'
      ? 'material-symbols:dark-mode-outline'
      : 'material-symbols:light-mode-outline';
  };

  // Determine tooltip text
  const getTooltip = () => {
    switch (storedTheme) {
      case 'auto':
        return 'Theme: Auto (click to switch to light)';
      case 'light':
        return 'Theme: Light (click to switch to dark)';
      case 'dark':
        return 'Theme: Dark (click to switch to auto)';
      default:
        return 'Toggle theme';
    }
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[var(--btn-hover-bg)]"
        aria-label="Toggle theme"
        disabled
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={cycleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[var(--btn-hover-bg)]"
      aria-label={getTooltip()}
      title={getTooltip()}
    >
      <Icon
        icon={getIcon()}
        className="h-5 w-5 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
      />
    </button>
  );
}
