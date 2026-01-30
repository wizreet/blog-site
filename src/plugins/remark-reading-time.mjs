/**
 * @fileoverview Remark plugin for calculating reading time
 *
 * Adds a `readingTime` property to the frontmatter of markdown files
 * based on the word count of the content.
 */

import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

/**
 * Remark plugin that calculates reading time for markdown content
 * and adds it to the frontmatter data.
 *
 * @returns {function} Transformer function
 */
export function remarkReadingTime() {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    // Add reading time to frontmatter data
    file.data.astro = file.data.astro || {};
    file.data.astro.frontmatter = file.data.astro.frontmatter || {};
    file.data.astro.frontmatter.readingTime = readingTime.text;
    file.data.astro.frontmatter.words = readingTime.words;
  };
}

export default remarkReadingTime;
