/**
 * RSS Feed Generator
 *
 * @description Generates the RSS 2.0 feed for blog posts.
 * Excludes hidden pages (music).
 *
 * @route /rss.xml
 */

import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config';
import { getPostUrl } from '@utils/url-utils';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('posts');

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => b.data.published.getTime() - a.data.published.getTime());

  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle,
    site: site?.toString() || 'https://example.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.description || '',
      link: getPostUrl(post.slug),
      categories: [...(post.data.category ? [post.data.category] : []), ...(post.data.tags || [])],
    })),
    customData: `<language>${siteConfig.lang}</language>`,
    stylesheet: '/rss/styles.xsl',
  });
};
