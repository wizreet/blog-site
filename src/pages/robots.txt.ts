/**
 * Robots.txt Generator
 *
 * @description Generates the robots.txt file for search engine crawlers.
 * Excludes the hidden /music/ page from indexing.
 *
 * @route /robots.txt
 */

import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString() || 'https://example.com';

  const robotsTxt = `# Robots.txt for ${siteConfig.title}
# https://www.robotstxt.org/

User-agent: *
Allow: /

# Disallow hidden pages
Disallow: /music/

# Sitemap
Sitemap: ${siteUrl}sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
