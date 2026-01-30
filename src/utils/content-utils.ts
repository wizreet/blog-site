/**
 * Content Utilities
 *
 * @description Utility functions for working with content collections.
 * Provides helpers for fetching, sorting, and filtering posts.
 *
 * @module utils/content-utils
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import { seriesData, getSeriesById } from '@/data/series';
import type { Series, CategoryWithCount, TagWithCount } from '@/types/config';

// ============================================================================
// Type Definitions
// ============================================================================

export type PostEntry = CollectionEntry<'posts'>;
export type TabEntry = CollectionEntry<'tabs'>;
export type MusicEntry = CollectionEntry<'music'>;

export interface SeriesWithCount extends Series {
  postCount: number;
}

export interface SeriesNavigation {
  prev: PostEntry | null;
  next: PostEntry | null;
  total: number;
  current: number;
}

// ============================================================================
// Post Utilities
// ============================================================================

/**
 * Get all posts sorted by date (newest first)
 * Filters out drafts in production
 */
async function getRawSortedPosts(): Promise<PostEntry[]> {
  const allPosts = await getCollection('posts', ({ data }) => {
    // In production, exclude drafts
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  // Sort by published date (newest first), then by pinned status
  return allPosts.sort((a, b) => {
    // Pinned posts always come first
    if (a.data.pinned && !b.data.pinned) return -1;
    if (!a.data.pinned && b.data.pinned) return 1;

    // Then sort by date
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get sorted posts with prev/next links populated
 */
export async function getSortedPosts(): Promise<PostEntry[]> {
  const sorted = await getRawSortedPosts();

  // Set prev/next links for navigation
  for (let i = 1; i < sorted.length; i++) {
    const currentPost = sorted[i];
    const prevPost = sorted[i - 1];
    if (currentPost && prevPost) {
      currentPost.data.nextSlug = prevPost.id;
      currentPost.data.nextTitle = prevPost.data.title;
    }
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    const currentPost = sorted[i];
    const nextPost = sorted[i + 1];
    if (currentPost && nextPost) {
      currentPost.data.prevSlug = nextPost.id;
      currentPost.data.prevTitle = nextPost.data.title;
    }
  }

  return sorted;
}

/**
 * Get posts for a specific page (pagination)
 */
export async function getPostsForPage(
  page: number,
  pageSize: number
): Promise<{
  posts: PostEntry[];
  totalPages: number;
  totalPosts: number;
}> {
  const allPosts = await getSortedPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    posts: allPosts.slice(start, end),
    totalPages,
    totalPosts,
  };
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<PostEntry | undefined> {
  const posts = await getCollection('posts');
  return posts.find((post) => post.id === slug);
}

// ============================================================================
// Category Utilities
// ============================================================================

/**
 * Get all categories with post counts
 */
export async function getCategoryList(): Promise<CategoryWithCount[]> {
  const posts = await getRawSortedPosts();
  const countMap = new Map<string, number>();

  posts.forEach((post) => {
    const category = post.data.category?.trim() || 'Uncategorized';
    countMap.set(category, (countMap.get(category) || 0) + 1);
  });

  return Array.from(countMap.entries())
    .map(([name, count]) => ({
      name,
      count,
      url: `/categories/${encodeURIComponent(name.toLowerCase())}/`,
    }))
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<PostEntry[]> {
  const posts = await getSortedPosts();
  return posts.filter((post) => post.data.category?.toLowerCase() === category.toLowerCase());
}

// ============================================================================
// Tag Utilities
// ============================================================================

/**
 * Get all tags with post counts
 */
export async function getTagList(): Promise<TagWithCount[]> {
  const posts = await getRawSortedPosts();
  const countMap = new Map<string, number>();

  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      countMap.set(tag, (countMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(countMap.entries())
    .map(([name, count]) => ({
      name,
      count,
      url: `/tags/${encodeURIComponent(name.toLowerCase())}/`,
    }))
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<PostEntry[]> {
  const posts = await getSortedPosts();
  return posts.filter((post) => post.data.tags?.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

// ============================================================================
// Series Utilities
// ============================================================================

/**
 * Get posts belonging to a specific series
 */
export async function getPostsBySeries(seriesId: string): Promise<PostEntry[]> {
  const posts = await getRawSortedPosts();

  return posts
    .filter((post) => post.data.series?.id === seriesId)
    .sort((a, b) => {
      const partA = a.data.series?.part || 999;
      const partB = b.data.series?.part || 999;
      return partA - partB;
    });
}

/**
 * Get all series with post counts
 */
export async function getSeriesList(): Promise<SeriesWithCount[]> {
  const posts = await getRawSortedPosts();
  const countMap = new Map<string, number>();

  posts.forEach((post) => {
    if (post.data.series?.id) {
      countMap.set(post.data.series.id, (countMap.get(post.data.series.id) || 0) + 1);
    }
  });

  return seriesData.map((series) => ({
    ...series,
    postCount: countMap.get(series.id) || 0,
  }));
}

/**
 * Get series navigation (prev/next) for a post
 */
export async function getSeriesNavigation(post: PostEntry): Promise<SeriesNavigation | null> {
  if (!post.data.series) return null;

  const seriesPosts = await getPostsBySeries(post.data.series.id);
  const currentIndex = seriesPosts.findIndex((p) => p.id === post.id);

  if (currentIndex === -1) return null;

  return {
    prev: currentIndex > 0 ? (seriesPosts[currentIndex - 1] ?? null) : null,
    next: currentIndex < seriesPosts.length - 1 ? (seriesPosts[currentIndex + 1] ?? null) : null,
    total: seriesPosts.length,
    current: currentIndex + 1,
  };
}

/**
 * Get featured series
 */
export async function getFeaturedSeries(): Promise<SeriesWithCount[]> {
  const allSeries = await getSeriesList();
  // Filter to series with posts (featured logic can be added to series data)
  return allSeries.filter((s) => s.postCount > 0).slice(0, 3);
}

// ============================================================================
// Tabs Utilities
// ============================================================================

/**
 * Get all guitar tabs sorted by date
 */
export async function getSortedTabs(): Promise<TabEntry[]> {
  const tabs = await getCollection('tabs');

  return tabs.sort((a, b) => {
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get tabs grouped by artist
 */
export async function getTabsByArtist(): Promise<Map<string, TabEntry[]>> {
  const tabs = await getSortedTabs();
  const grouped = new Map<string, TabEntry[]>();

  tabs.forEach((tab) => {
    const artist = tab.data.artist;
    if (!grouped.has(artist)) {
      grouped.set(artist, []);
    }
    grouped.get(artist)!.push(tab);
  });

  return grouped;
}

// ============================================================================
// Music Utilities (Hidden)
// ============================================================================

/**
 * Get all music videos sorted by date
 */
export async function getSortedMusic(): Promise<MusicEntry[]> {
  const music = await getCollection('music');

  return music.sort((a, b) => {
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get music grouped by type
 */
export async function getMusicByType(): Promise<{
  covers: MusicEntry[];
  originals: MusicEntry[];
  jams: MusicEntry[];
  lessons: MusicEntry[];
}> {
  const music = await getSortedMusic();

  return {
    covers: music.filter((m) => m.data.type === 'cover'),
    originals: music.filter((m) => m.data.type === 'original'),
    jams: music.filter((m) => m.data.type === 'jam'),
    lessons: music.filter((m) => m.data.type === 'lesson'),
  };
}

// ============================================================================
// Archive Utilities
// ============================================================================

/**
 * Get posts grouped by year and month for archive view
 */
export async function getPostsGroupedByDate(): Promise<Map<number, Map<number, PostEntry[]>>> {
  const posts = await getSortedPosts();
  const grouped = new Map<number, Map<number, PostEntry[]>>();

  posts.forEach((post) => {
    const date = new Date(post.data.published);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!grouped.has(year)) {
      grouped.set(year, new Map());
    }

    const yearMap = grouped.get(year)!;
    if (!yearMap.has(month)) {
      yearMap.set(month, []);
    }

    yearMap.get(month)!.push(post);
  });

  return grouped;
}

// ============================================================================
// Statistics
// ============================================================================

/**
 * Get site statistics
 */
export async function getSiteStats(): Promise<{
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  totalWords: number;
}> {
  const [posts, categories, tags] = await Promise.all([
    getRawSortedPosts(),
    getCategoryList(),
    getTagList(),
  ]);

  // Note: totalWords requires reading time calculation during build
  return {
    totalPosts: posts.length,
    totalCategories: categories.length,
    totalTags: tags.length,
    totalWords: 0, // Calculated separately
  };
}

// ============================================================================
// Aliases for backward compatibility
// ============================================================================

/**
 * Alias for getCategoryList()
 */
export const getCategories = getCategoryList;

/**
 * Alias for getTagList()
 */
export const getTags = getTagList;
