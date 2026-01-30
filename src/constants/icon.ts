/**
 * Icon Constants
 *
 * @description Iconify icon name constants for consistent icon usage.
 * All icons use the Iconify format: 'set:icon-name'
 *
 * @see https://icon-sets.iconify.design/
 *
 * @module constants/icon
 */

// ============================================================================
// Navigation Icons
// ============================================================================

export const NAV_ICONS = {
  home: 'material-symbols:home-outline',
  about: 'material-symbols:person-outline',
  archive: 'material-symbols:archive-outline',
  tags: 'material-symbols:tag-outline',
  categories: 'material-symbols:folder-outline',
  series: 'material-symbols:library-books-outline',
  projects: 'material-symbols:work-outline',
  skills: 'material-symbols:emoji-objects-outline',
  timeline: 'material-symbols:timeline-outline',
  friends: 'material-symbols:group-outline',
  tabs: 'material-symbols:music-note',
  music: 'material-symbols:music-video',
  settings: 'material-symbols:settings-outline',
  menu: 'material-symbols:menu',
  close: 'material-symbols:close',
} as const;

// ============================================================================
// Social Icons
// ============================================================================

export const SOCIAL_ICONS = {
  github: 'fa6-brands:github',
  linkedin: 'fa6-brands:linkedin',
  twitter: 'fa6-brands:x-twitter',
  mastodon: 'fa6-brands:mastodon',
  discord: 'fa6-brands:discord',
  youtube: 'fa6-brands:youtube',
  instagram: 'fa6-brands:instagram',
  facebook: 'fa6-brands:facebook',
  reddit: 'fa6-brands:reddit',
  stackoverflow: 'fa6-brands:stack-overflow',
  email: 'material-symbols:mail-outline',
  rss: 'material-symbols:rss-feed',
  website: 'material-symbols:globe',
} as const;

// ============================================================================
// UI Icons
// ============================================================================

export const UI_ICONS = {
  search: 'material-symbols:search',
  lightMode: 'material-symbols:light-mode-outline',
  darkMode: 'material-symbols:dark-mode-outline',
  autoMode: 'material-symbols:brightness-auto-outline',
  chevronRight: 'material-symbols:chevron-right-rounded',
  chevronLeft: 'material-symbols:chevron-left-rounded',
  chevronUp: 'material-symbols:keyboard-arrow-up-rounded',
  chevronDown: 'material-symbols:keyboard-arrow-down-rounded',
  externalLink: 'material-symbols:open-in-new',
  copy: 'material-symbols:content-copy-outline',
  check: 'material-symbols:check',
  share: 'material-symbols:share-outline',
  calendar: 'material-symbols:calendar-today-outline',
  clock: 'material-symbols:schedule-outline',
  edit: 'material-symbols:edit-outline',
  pin: 'material-symbols:push-pin-outline',
  toc: 'material-symbols:list',
  expand: 'material-symbols:expand-more',
  collapse: 'material-symbols:expand-less',
} as const;

// ============================================================================
// Content Icons
// ============================================================================

export const CONTENT_ICONS = {
  post: 'material-symbols:article-outline',
  draft: 'material-symbols:edit-document-outline',
  category: 'material-symbols:folder-outline',
  tag: 'material-symbols:sell-outline',
  series: 'material-symbols:library-books-outline',
  project: 'material-symbols:work-outline',
  skill: 'material-symbols:emoji-objects-outline',
  education: 'material-symbols:school-outline',
  work: 'material-symbols:business-center-outline',
  achievement: 'material-symbols:trophy-outline',
  certification: 'material-symbols:verified-outline',
} as const;

// ============================================================================
// Guitar/Music Icons
// ============================================================================

export const MUSIC_ICONS = {
  guitar: 'mdi:guitar-acoustic',
  music: 'material-symbols:music-note',
  video: 'material-symbols:play-circle-outline',
  youtube: 'fa6-brands:youtube',
  download: 'material-symbols:download',
  tuning: 'material-symbols:tune',
  capo: 'mdi:guitar-pick',
  play: 'material-symbols:play-arrow-rounded',
  pause: 'material-symbols:pause-rounded',
} as const;

// ============================================================================
// Status Icons
// ============================================================================

export const STATUS_ICONS = {
  ongoing: 'material-symbols:pending-outline',
  completed: 'material-symbols:check-circle-outline',
  paused: 'material-symbols:pause-circle-outline',
  planned: 'material-symbols:schedule-outline',
  archived: 'material-symbols:archive-outline',
} as const;

// ============================================================================
// Technology Icons (for skills/projects)
// ============================================================================

export const TECH_ICONS = {
  // Frontend
  react: 'logos:react',
  vue: 'logos:vue',
  svelte: 'logos:svelte-icon',
  angular: 'logos:angular-icon',
  astro: 'logos:astro-icon',
  nextjs: 'logos:nextjs-icon',

  // Backend
  nodejs: 'logos:nodejs-icon',
  python: 'logos:python',
  go: 'logos:go',
  rust: 'logos:rust',
  java: 'logos:java',
  csharp: 'logos:c-sharp',

  // Database
  postgresql: 'logos:postgresql',
  mysql: 'logos:mysql',
  mongodb: 'logos:mongodb-icon',
  redis: 'logos:redis',

  // DevOps
  docker: 'logos:docker-icon',
  kubernetes: 'logos:kubernetes',
  terraform: 'logos:terraform-icon',
  aws: 'logos:aws',
  azure: 'logos:microsoft-azure',
  gcp: 'logos:google-cloud',

  // Tools
  git: 'logos:git-icon',
  github: 'logos:github-icon',
  vscode: 'logos:visual-studio-code',
  linux: 'logos:linux-tux',

  // Languages
  typescript: 'logos:typescript-icon',
  javascript: 'logos:javascript',
  html: 'logos:html-5',
  css: 'logos:css-3',
  tailwind: 'logos:tailwindcss-icon',
} as const;

// ============================================================================
// All Icons Export
// ============================================================================

export const ICONS = {
  nav: NAV_ICONS,
  social: SOCIAL_ICONS,
  ui: UI_ICONS,
  content: CONTENT_ICONS,
  music: MUSIC_ICONS,
  status: STATUS_ICONS,
  tech: TECH_ICONS,
} as const;
