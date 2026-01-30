#!/usr/bin/env node

/**
 * @fileoverview CLI script to create a new blog post
 *
 * Usage:
 *   node scripts/new-post.js "Post Title"
 *   pnpm new-post "Post Title"
 *
 * This script:
 * - Creates a new markdown file with proper frontmatter
 * - Generates a URL-friendly slug from the title
 * - Sets the current date as the published date
 * - Opens the file in the default editor (optional)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get directory name for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Converts a title to a URL-friendly slug
 * @param {string} title - The post title
 * @returns {string} URL-friendly slug
 */
function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Formats a date as YYYY-MM-DD
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Generates the frontmatter for a new post
 * @param {string} title - The post title
 * @returns {string} YAML frontmatter
 */
function generateFrontmatter(title) {
  const today = formatDate(new Date());

  return `---
title: "${title}"
description: ""
published: ${today}
category: "General"
tags: []
# Uncomment and configure if part of a series:
# series:
#   id: "series-slug"
#   part: 1
---

# ${title}

Write your content here...
`;
}

/**
 * Creates a new blog post file
 * @param {string} title - The post title
 * @returns {string} Path to the created file
 */
function createPost(title) {
  const slug = slugify(title);
  const content = generateFrontmatter(title);

  // Define the posts directory
  const postsDir = path.join(__dirname, '..', 'src', 'content', 'posts');

  // Ensure the posts directory exists
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }

  // Create the file path
  const filePath = path.join(postsDir, `${slug}.md`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`\n❌ Error: A post with the slug "${slug}" already exists.`);
    console.error(`   File: ${filePath}`);
    process.exit(1);
  }

  // Write the file
  fs.writeFileSync(filePath, content, 'utf-8');

  return filePath;
}

/**
 * Main function
 */
function main() {
  // Get the title from command line arguments
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
📝 New Post Generator

Usage:
  node scripts/new-post.js "Your Post Title"
  pnpm new-post "Your Post Title"

Example:
  pnpm new-post "Getting Started with TypeScript"
`);
    process.exit(1);
  }

  const title = args.join(' ');

  console.log(`\n📝 Creating new post: "${title}"`);

  const filePath = createPost(title);

  console.log(`\n✅ Post created successfully!`);
  console.log(`   File: ${filePath}`);
  console.log(`\n   Next steps:`);
  console.log(`   1. Open the file and add your content`);
  console.log(`   2. Update the description in frontmatter`);
  console.log(`   3. Add relevant tags and category`);
  console.log(`\n`);
}

// Run the script
main();
