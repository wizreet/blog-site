/**
 * Friends Data
 *
 * @description Array of friends/blogroll links for the About page.
 * Links to fellow developers, bloggers, and communities.
 */

import type { Friend } from '@/types/config';

/**
 * Friends and blogroll links
 */
export const friends: Friend[] = [
  // Add your friends/blogroll here
  // {
  //   name: 'Friend Name',
  //   url: 'https://friend-blog.com',
  //   avatar: '/images/friends/friend-avatar.png',
  //   description: 'A fellow developer and friend',
  // },
];

/**
 * Get friends sorted alphabetically by name
 */
export function getSortedFriends(): Friend[] {
  return [...friends].sort((a, b) => a.name.localeCompare(b.name));
}

export default friends;
