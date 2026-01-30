/**
 * Skills Data
 *
 * @description Array of skills to display on the About page.
 * Organized by category with proficiency levels.
 */

import type { Skill } from '@/types/config';

/**
 * Skills organized by category
 */
export const skills: Skill[] = [
  // Languages
  {
    name: 'TypeScript',
    category: 'languages',
    level: 'expert',
    icon: 'simple-icons:typescript',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    level: 'expert',
    icon: 'simple-icons:javascript',
  },
  {
    name: 'Python',
    category: 'languages',
    level: 'advanced',
    icon: 'simple-icons:python',
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    level: 'expert',
    icon: 'simple-icons:react',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    icon: 'simple-icons:nextdotjs',
  },
  {
    name: 'Astro',
    category: 'frontend',
    level: 'advanced',
    icon: 'simple-icons:astro',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'expert',
    icon: 'simple-icons:tailwindcss',
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    level: 'intermediate',
    icon: 'simple-icons:vuedotjs',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    icon: 'simple-icons:nodedotjs',
  },
  {
    name: 'Express',
    category: 'backend',
    level: 'advanced',
    icon: 'simple-icons:express',
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 'intermediate',
    icon: 'simple-icons:postgresql',
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    level: 'expert',
    icon: 'simple-icons:git',
  },
  {
    name: 'Docker',
    category: 'tools',
    level: 'intermediate',
    icon: 'simple-icons:docker',
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 'expert',
    icon: 'simple-icons:visualstudiocode',
  },

  // Add more skills as needed
];

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Get all unique skill categories
 */
export function getSkillCategories(): Skill['category'][] {
  const categories: Skill['category'][] = [];
  for (const skill of skills) {
    if (categories.indexOf(skill.category) === -1) {
      categories.push(skill.category);
    }
  }
  return categories;
}

export default skills;
