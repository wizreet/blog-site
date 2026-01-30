/**
 * Series Data
 *
 * @description Defines blog series for grouping related posts.
 * Each series has an id, title, description, and status.
 */

import type { Series } from '@/types/config';

/**
 * Available blog series
 */
export const seriesData: Series[] = [
  {
    id: 'getting-started',
    title: 'Getting Started with Web Development',
    description:
      'A comprehensive series for beginners learning web development from scratch. Covers HTML, CSS, JavaScript, and modern frameworks.',
    status: 'completed',
  },
  {
    id: 'astro-deep-dive',
    title: 'Astro Deep Dive',
    description:
      'An in-depth exploration of the Astro framework. From basic concepts to advanced patterns and performance optimization.',
    status: 'ongoing',
  },
  // Add more series as needed
  // {
  //   id: 'series-slug',
  //   title: 'Series Title',
  //   description: 'A description of what this series covers.',
  //   status: 'ongoing', // 'ongoing', 'completed', 'hiatus'
  // },
];

// Alias for backward compatibility
export const series = seriesData;

/**
 * Get a series by its ID
 */
export function getSeriesById(id: string): Series | undefined {
  for (const s of seriesData) {
    if (s.id === id) {
      return s;
    }
  }
  return undefined;
}

/**
 * Get all series sorted by status (ongoing first)
 */
export function getSortedSeries(): Series[] {
  const statusOrder: Record<string, number> = { ongoing: 0, hiatus: 1, paused: 1, completed: 2 };
  return [...seriesData].sort(
    (a, b) => (statusOrder[a.status] ?? 3) - (statusOrder[b.status] ?? 3)
  );
}

export default seriesData;
