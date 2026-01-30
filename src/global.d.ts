/**
 * Global type declarations for custom modules
 */

// Remark plugin frontmatter extension
declare module 'astro:content' {
  interface AstroComponentFactory {
    (): Promise<{ Content: AstroComponent }>;
  }
}

// Reading time data added by remark plugin
interface RemarkPluginFrontmatter {
  /** Reading time text (e.g., "5 min read") */
  readingTime: string;
  /** Reading time in minutes */
  minutes: number;
  /** Estimated reading time in milliseconds */
  time: number;
  /** Word count */
  words: number;
  /** Auto-generated excerpt */
  excerpt: string;
}

// Extend MarkdownInstance
declare module '*.md' {
  export const frontmatter: Record<string, unknown>;
  export const Content: import('astro').MarkdownContent['Content'];
  export const remarkPluginFrontmatter: RemarkPluginFrontmatter;
}

declare module '*.mdx' {
  export const frontmatter: Record<string, unknown>;
  export const Content: import('astro').MarkdownContent['Content'];
  export const remarkPluginFrontmatter: RemarkPluginFrontmatter;
}
