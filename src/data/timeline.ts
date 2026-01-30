/**
 * Timeline Data
 *
 * @description Array of timeline events for the About page.
 * Shows career history, education, and other milestones.
 */

import type { TimelineItem } from '@/types/config';

/**
 * Career and education timeline
 */
export const timeline: TimelineItem[] = [
  {
    title: 'Software Developer',
    organization: 'Your Company',
    startDate: new Date('2022-01-01'),
    // endDate: undefined, // Current position
    description:
      'Working on full-stack web applications using React, Node.js, and TypeScript. Leading frontend architecture decisions and mentoring junior developers.',
    type: 'work',
    url: 'https://company.com',
  },
  {
    title: 'Junior Developer',
    organization: 'Previous Company',
    startDate: new Date('2020-06-01'),
    endDate: new Date('2021-12-31'),
    description:
      'Developed and maintained web applications. Learned best practices in software development and collaborated with cross-functional teams.',
    type: 'work',
  },
  {
    title: 'Bachelor of Computer Science',
    organization: 'University Name',
    startDate: new Date('2016-09-01'),
    endDate: new Date('2020-05-31'),
    description: 'Studied computer science fundamentals, algorithms, and software engineering.',
    type: 'education',
  },
  // Add more timeline items as needed
];

/**
 * Get timeline items sorted by date (most recent first)
 */
export function getSortedTimeline(): TimelineItem[] {
  return [...timeline].sort((a, b) => {
    const dateA = a.endDate || new Date();
    const dateB = b.endDate || new Date();
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get timeline items by type
 */
export function getTimelineByType(type: TimelineItem['type']): TimelineItem[] {
  return timeline.filter((item) => item.type === type);
}

export default timeline;
