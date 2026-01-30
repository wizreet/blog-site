/**
 * Content Collections Configuration
 *
 * @description Defines schemas for all content collections using Astro Content Collections.
 * This ensures type safety and validation for all content files.
 *
 * @see https://docs.astro.build/en/guides/content-collections/
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================================
// Shared Schemas
// ============================================================================

/**
 * YouTube video reference schema
 */
const youtubeVideoSchema = z.object({
  /** YouTube video ID */
  id: z.string(),
  /** Type of video content */
  type: z.enum(['lesson', 'cover', 'backing-track', 'original']),
  /** Optional title override */
  title: z.string().optional(),
});

/**
 * Series reference schema for posts
 */
const seriesRefSchema = z.object({
  /** Series ID (must match series.ts) */
  id: z.string(),
  /** Part number in series (1, 2, 3...) */
  part: z.number().positive(),
  /** Optional title override for series context */
  title: z.string().optional(),
});

// ============================================================================
// Posts Collection
// ============================================================================

/**
 * Blog posts collection
 *
 * Location: src/content/posts/**\/*.md
 * URL pattern: /posts/[...slug]/
 */
const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      // Required fields
      title: z.string().min(1, 'Title is required'),
      published: z.coerce.date(),

      // Optional fields with defaults
      updated: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      description: z.string().default(''),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
      category: z.string().nullable().default(null),
      lang: z.enum(['en', 'ne']).default('en'),

      // Series (optional - for multi-part content)
      series: seriesRefSchema.optional(),

      // Advanced features
      pinned: z.boolean().default(false),
      permalink: z.string().optional(),
      encrypted: z.boolean().default(false),
      password: z.string().default(''),

      // Auto-populated by content processing
      prevTitle: z.string().default(''),
      prevSlug: z.string().default(''),
      nextTitle: z.string().default(''),
      nextSlug: z.string().default(''),
    }),
});

// ============================================================================
// Tabs Collection (Guitar Tabs)
// ============================================================================

/**
 * Guitar tabs collection
 *
 * Location: src/content/tabs/**\/*.md
 * URL pattern: /tabs/[...slug]/
 */
const tabsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tabs' }),
  schema: ({ image }) =>
    z.object({
      // Required fields
      title: z.string().min(1, 'Song title is required'),
      artist: z.string().min(1, 'Artist is required'),
      published: z.coerce.date(),

      // Song metadata
      album: z.string().optional(),
      difficulty: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
      tuning: z.string().default('standard'),
      capo: z.number().min(0).max(12).default(0),
      key: z.string().optional(),
      tempo: z.number().positive().optional(),
      duration: z.string().optional(),

      // YouTube videos
      youtube: z.array(youtubeVideoSchema).default([]),

      // Downloadable files
      tabFile: z.string().optional(), // PDF path
      gpFile: z.string().optional(), // Guitar Pro file path

      // Metadata
      tags: z.array(z.string()).default([]),
      description: z.string().default(''),
      image: image().optional(),
    }),
});

// ============================================================================
// Music Collection (Hidden YouTube Videos)
// ============================================================================

/**
 * Music videos collection (hidden route)
 *
 * Location: src/content/music/**\/*.md
 * URL pattern: /music/[...slug]/ (not in sitemap/RSS)
 */
const musicCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: ({ image }) =>
    z.object({
      // Required fields
      title: z.string().min(1, 'Title is required'),
      published: z.coerce.date(),

      // Video metadata
      type: z.enum(['cover', 'original', 'jam', 'lesson']).default('cover'),
      youtube: z.object({
        id: z.string(),
        title: z.string().optional(),
      }),

      // Original song info (for covers)
      originalArtist: z.string().optional(),
      originalSong: z.string().optional(),
      album: z.string().optional(),

      // Gear used
      gear: z.array(z.string()).default([]),

      // Metadata
      tags: z.array(z.string()).default([]),
      description: z.string().default(''),
      image: image().optional(),
    }),
});

// ============================================================================
// Spec Collection (Static Pages)
// ============================================================================

/**
 * Spec/static pages collection (About, etc.)
 *
 * Location: src/content/spec/*.md
 */
const specCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/spec' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

// ============================================================================
// Export Collections
// ============================================================================

export const collections = {
  posts: postsCollection,
  tabs: tabsCollection,
  music: musicCollection,
  spec: specCollection,
};
