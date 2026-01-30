/**
 * Content Collections Configuration
 *
 * @description Defines schemas for all content collections using Astro Content Collections.
 * This ensures type safety and validation for all content files.
 *
 * Collections:
 * - posts: Blog posts with categories, tags, series support
 * - spec: Static pages like About
 *
 * @see https://docs.astro.build/en/guides/content-collections/
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================================
// Shared Schemas
// ============================================================================

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
  spec: specCollection,
};
