/**
 * Projects Data
 *
 * @description Array of projects to display on the About page.
 * Each project has title, description, tech stack, and links.
 */

import type { Project } from '@/types/config';

/**
 * Featured and notable projects
 */
export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio and blog built with Astro, React, and Tailwind CSS. Features text-first design, blog with series, guitar tabs section, and hidden music page.',
    tech: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Pagefind'],
    links: {
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourdomain.com',
    },
    featured: true,
  },
  // Add more projects here
  // {
  //   title: 'Project Name',
  //   description: 'A brief description of what this project does and why it matters.',
  //   tech: ['Technology1', 'Technology2', 'Technology3'],
  //   links: {
  //     github: 'https://github.com/...',
  //     demo: 'https://...',
  //     docs: 'https://...',
  //   },
  //   image: '/images/projects/project-name.png',
  //   featured: false,
  // },
];

export default projects;
