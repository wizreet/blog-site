#!/usr/bin/env node

/**
 * @fileoverview CLI script to create a new guitar tab
 *
 * Usage:
 *   node scripts/new-tab.js "Song Title" "Artist Name"
 *   pnpm new-tab "Song Title" "Artist Name"
 *
 * This script:
 * - Creates a new markdown file for a guitar tab
 * - Generates a URL-friendly slug from the title
 * - Sets up proper frontmatter with common fields
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get directory name for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Converts a title to a URL-friendly slug
 * @param {string} title - The song title
 * @returns {string} URL-friendly slug
 */
function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
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
 * Generates the frontmatter for a new tab
 * @param {string} title - The song title
 * @param {string} [artist] - The artist name
 * @returns {string} YAML frontmatter
 */
function generateFrontmatter(title, artist) {
  const today = formatDate(new Date());
  const artistLine = artist ? `artist: "${artist}"` : `# artist: ""`;

  return `---
title: "${title}"
${artistLine}
difficulty: "intermediate"
tuning: "Standard"
published: ${today}
# youtubeId: ""
# pdfUrl: ""
# gpUrl: ""
---

# ${title}${artist ? ` - ${artist}` : ''}

## Overview

Brief description of the song and arrangement.

## Chords/Tuning

List the chords or special tuning used.

## Tab

\`\`\`
e|----------------------------------------------------
B|----------------------------------------------------
G|----------------------------------------------------
D|----------------------------------------------------
A|----------------------------------------------------
E|----------------------------------------------------
\`\`\`

## Tips

- Practice tips and notes
`;
}

/**
 * Creates a new tab file
 * @param {string} title - The song title
 * @param {string} [artist] - The artist name
 * @returns {string} Path to the created file
 */
function createTab(title, artist) {
  const slug = slugify(title);
  const content = generateFrontmatter(title, artist);

  // Define the tabs directory
  const tabsDir = path.join(__dirname, '..', 'src', 'content', 'tabs');

  // Ensure the tabs directory exists
  if (!fs.existsSync(tabsDir)) {
    fs.mkdirSync(tabsDir, { recursive: true });
  }

  // Create the file path
  const filePath = path.join(tabsDir, `${slug}.md`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`\n❌ Error: A tab with the slug "${slug}" already exists.`);
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
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
🎸 New Tab Generator

Usage:
  node scripts/new-tab.js "Song Title" ["Artist Name"]
  pnpm new-tab "Song Title" ["Artist Name"]

Examples:
  pnpm new-tab "Wonderwall" "Oasis"
  pnpm new-tab "My Original Song"
`);
    process.exit(1);
  }

  const title = args[0];
  const artist = args[1];

  console.log(`\n🎸 Creating new tab: "${title}"${artist ? ` by ${artist}` : ''}`);

  const filePath = createTab(title, artist);

  console.log(`\n✅ Tab created successfully!`);
  console.log(`   File: ${filePath}`);
  console.log(`\n   Next steps:`);
  console.log(`   1. Add the tab content`);
  console.log(`   2. Set the difficulty level`);
  console.log(`   3. Add YouTube video ID if available`);
  console.log(`\n`);
}

// Run the script
main();
